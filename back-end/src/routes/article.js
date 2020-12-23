const express = require('express');
const router = express.Router();

const protect = require('../middleware/protect');
const PERMISSIONS = require('../constants/permissions');

const {
    getArticle,
    postArticle, 
    deleteArticle,
    updateArticle 
} = require('../controllers/articleController');

router.post('/create', protect(PERMISSIONS.ONLY_WRITERS_ADMIN), postArticle);

router.get('/:article_id', getArticle);
router.delete('/:article_id', protect(PERMISSIONS.ONLY_WRITERS_ADMIN), deleteArticle);
router.put('/:article_id', protect(PERMISSIONS.ONLY_WRITERS_ADMIN), updateArticle);

module.exports = router;