const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { addReview, getReviews } = require('../controllers/reviewController');

router.post('/', verifyToken, addReview);
router.get('/', getReviews);

module.exports = router;
