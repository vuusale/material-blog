const asyncHandler = require('./asyncHandler');
const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');

module.exports = protect = permissions => {
    return asyncHandler(async (req, res, next) => {
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            return next(new ErrorResponse('Not authorized for this route!', 401));
        }

        try {
            const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
            
            if (!permissions.find(element => element == decoded.role)) {
                return next(new ErrorResponse('Not authorized for this route!', 401));
            }

            req.user = decoded;
        } catch (error) {
            return next(new ErrorResponse('Not authorized for this route!', 401));
        }
        return next();
    });
};
