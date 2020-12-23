const express = require('express');
const router = express.Router();

const { 
    getSections, 
    getArticlesOfSection, 
} = require('../controllers/mainController');

router.get('/sections', getSections);
router.get('/sections/:section_id', getArticlesOfSection);

module.exports = router;