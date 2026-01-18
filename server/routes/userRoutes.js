// const express = require('express');
// const router = express.Router();
// const { getUserProfile, addSkill } = require('../controllers/userController');

// router.get('/:id', getUserProfile);
// router.post('/:userId/skills', addSkill); // Endpoint to add skill

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { getUserProfile, addSkill } = require('../controllers/userController');
// const { protect } = require('../middleware/authMiddleware'); // Import middleware

// // Apply 'protect' to these routes
// router.get('/:id', protect, getUserProfile);
// router.post('/:userId/skills', protect, addSkill);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { getUserProfile, addSkill, submitExam } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.get('/:id', protect, getUserProfile);
router.post('/:userId/skills', protect, addSkill);
router.post('/:userId/exam-submit', protect, submitExam); // NEW ROUTE

module.exports = router;