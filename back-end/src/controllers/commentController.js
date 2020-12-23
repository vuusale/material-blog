const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const asyncPoolQuery = require('../config/dbConfig');

const userQueries = require('../sqlQueries/userQueries');
const publicQueries = require('../sqlQueries/publicQueries');

//@desc   Add comment to an article
//@route  POST /comment/:article_id
//@access ONLY AUTHENTICATED
exports.postComment = asyncHandler(async (req, res, next) => {
    const { article_id } = req.params;
    const { title, content } = req.body;
    const { user_id } = req.user;

    if (!title || !content) return next(new ErrorResponse('Please fill all fields', 400));

    const sql = userQueries.postComment;

    const result = await asyncPoolQuery(sql, [title, content, +article_id, user_id]);
    if (!result.affectedRows) return next(new ErrorResponse('Comment could not be added!', 400));

    res.status(201).json({ success: true, message: 'Comment added successfully!' });
});

//@desc   Delete comment
//@route  DELETE /comment/:comment_id
//@access ONLY AUTHENTICATED
exports.deleteComment = asyncHandler(async (req, res, next) => {
    const { comment_id } = req.params;

    const sql = userQueries.deleteComment;

    const result = await asyncPoolQuery(sql, [comment_id, req.user.user_id]);
    if (!result.affectedRows) return next(new ErrorResponse('Comment could not be deleted!', 400));

    res.status(201).json({ success: true, message: 'Comment deleted successfully!' });
});

//@desc   Get all comments of an article
//@route  Get /comment/:article_id
//@access PUBLIC
exports.getCommentsOfArticle = asyncHandler(async (req, res, next) => {
    const { article_id } = req.params;

    const sql = publicQueries.getCommentsOfArticle;

    const result = await asyncPoolQuery(sql, [article_id]);
    res.status(201).json({ success: true, comments: result });
});
