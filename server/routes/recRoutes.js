// const express = require('express');
// const router = express.Router();
// const { getRecommendations } = require('../controllers/recController');

// router.get('/:userId', getRecommendations);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../controllers/recController');
const { protect } = require('../middleware/authMiddleware'); // Import middleware

// Protect the recommendations endpoint
router.get('/:userId', protect, getRecommendations);

module.exports = router;