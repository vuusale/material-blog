const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const asyncPoolQuery = require('../config/dbConfig');

const publicQueries = require('../sqlQueries/publicQueries');

//@desc   Get all sections
//@route  GET /sections
//@access PUBLIC
exports.getSections = asyncHandler(async (req, res, next) => {
    const sql = publicQueries.getSections;
    
    const result = await asyncPoolQuery(sql);
    if (!result.length) return next(new ErrorResponse('Subsections could not be retrieved!', 400));

    res.status(200).json({ success: true, sections: result[0] });
});

//@desc   Get all articles from sections
//@route  GET /sections/:section_id
//@access PUBLIC
exports.getArticlesOfSection = asyncHandler(async (req, res, next) => {
    const { section_id } = req.params;
    
    const sql = publicQueries.getArticlesOfSection;
    
    const result = await asyncPoolQuery(sql, [section_id]);
    res.status(200).json({ success: true, articles: result[0] });
});