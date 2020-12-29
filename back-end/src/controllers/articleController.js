const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const asyncPoolQuery = require('../config/dbConfig');

const writerQueries = require('../sqlQueries/writerQueries');
const publicQueries = require('../sqlQueries/publicQueries');

//@desc   Get an article
//@route  GET /article/:article_id
//@access PUBLIC
exports.getArticle = asyncHandler(async (req, res, next) => {
    const { article_id } = req.params;

    const sql = publicQueries.getArticle;

    const result = await asyncPoolQuery(sql, [article_id]);
    if (result.length === 0) return next(new ErrorResponse('Article could not be retrieved!', 404));
    res.status(200).json({ success: true, article: result[0] });
});

//@desc   Create article
//@route  POST /article/create
//@access ONLY WRITERS AND ADMIN
exports.postArticle = asyncHandler(async (req, res, next) => {
    const { section, subsection, title, content } = req.body;
    
    const sql = writerQueries.postArticle;

    const result = await asyncPoolQuery(sql, [req.user.username, section, subsection, title, content]);
    if (!result.affectedRows) return next(new ErrorResponse('Article could not be created!', 400));

    res.status(201).json({ success: true, message: 'Article created successfully!' });
});

//@desc   Create article
//@route  DELETE /article/:article_id
//@access ONLY WRITERS AND ADMIN
exports.deleteArticle = asyncHandler(async (req, res, next) => {
    const { article_id } = req.params;

    const sql = writerQueries.deleteArticle;
    const result = await asyncPoolQuery(sql, [article_id, req.user.username]);
    if (!result.affectedRows) return next(new ErrorResponse('Article could not be deleted!', 400));

    res.status(201).json({ success: true, message: 'Article deleted successfully!' });
});

//@desc   Modify article
//@route  PUT /article/:article_id
//@access ONLY WRITERS AND ADMIN
exports.updateArticle = asyncHandler(async (req, res, next) => {
    const { article_id } = req.params;

    let { newTitle, newContent } = req.body;
    newTitle = (newTitle) ? newTitle : null;
    newContent = (newContent) ? newContent : null;

    const sql = writerQueries.updateArticle;
    const result = await asyncPoolQuery(sql, [newTitle, newTitle, newContent, newContent, article_id, req.user.username])
    if (!result.affectedRows) return next(new ErrorResponse('Something went wrong', 400));

    res.status(201).json({ success: true, message: 'Article modified successfully!' });
});