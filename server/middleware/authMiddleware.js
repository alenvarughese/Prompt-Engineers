const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  // 1. Check if the "Authorization" header exists and starts with "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // 2. Extract the token from the header ("Bearer <token>")
      token = req.headers.authorization.split(' ')[1];

      // 3. Verify the token using your secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 4. Find the user associated with the token (exclude password)
      req.user = await User.findById(decoded.id).select('-password');

      // 5. Allow the request to proceed
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };