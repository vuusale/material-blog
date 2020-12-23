const express = require('express');
const router = express.Router();

const protect = require('../middleware/protect');
const PERMISSIONS = require('../constants/permissions');

const { 
    deleteComment, 
    postComment,
    getCommentsOfArticle 
} = require('../controllers/commentController');

router.get('/:article_id', getCommentsOfArticle);
router.post('/:article_id', protect(PERMISSIONS.ONLY_AUTHENTICATED), postComment);

router.delete('/:comment_id', protect(PERMISSIONS.ONLY_AUTHENTICATED), deleteComment);

module.exports = router;