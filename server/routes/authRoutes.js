// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   // In production, use bcrypt.compare(password, user.password)
//   const user = await User.findOne({ email });
//   if (user && user.password === password) {
//     res.json(user);
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', authUser);

module.exports = router;