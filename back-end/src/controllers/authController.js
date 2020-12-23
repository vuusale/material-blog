const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const asyncPoolQuery = require('../config/dbConfig');

const { hashPassword, isMatch } = require('../utils/passwordUtils');
const { getSignedJWT } = require('../utils/tokenUtils');

const publicQueries = require('../sqlQueries/publicQueries');

//@desc   Registration
//@route  POST /auth/register
//@access PUBLIC
exports.register = asyncHandler(async (req, res, next) => {
    const { username, password, passwordConfirmation, email, role } = req.body;

    if (!username || !password || !passwordConfirmation || !email || !role) return next(new ErrorResponse('Please fill all fields', 400));

    if (password !== passwordConfirmation) {
        return next(new ErrorResponse('Passwords do not match', 400));
    }
    
    const sql = publicQueries.register;
    
    const result = await asyncPoolQuery(sql, [username, hashPassword(password), email, role]);
    if (!result) return next(new ErrorResponse('Account could not be created', 400));
    
    res.status(201).json({ success: true, message: 'You successfully registered a user!' });
})

//@desc   login
//@route  POST /auth/login
//@access PUBLIC
exports.login = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return next(new ErrorResponse('Provide username and password', 400));
    }
    const sqlUser = publicQueries.login;
    const resultUser = await asyncPoolQuery(sqlUser, [username]);
    if (!resultUser.length || !isMatch(resultUser[0].password, password)) {
        return next(new ErrorResponse('Password is incorrect!', 403));
    }

    const accessToken = getSignedJWT(resultUser[0].user_id, resultUser[0].role);
    sendTokenInCookie(accessToken, 200, res)
});

const sendTokenInCookie = (accessToken, statusCode, res, optional) => {
    const options = {
        httpOnly: true
    };
    const response = {
        success: true,
        message: 'Logged in!',
        optional,
    };
  
    return res
        .status(statusCode)
        .cookie('accessToken', accessToken, {...options, path: '/', expires: new Date(Date.now() + 3600000)})
        .json(response);
  };