// const User = require('../models/User');

// // Get User Dashboard Data
// exports.getUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Add a Skill to "Target" or "Current"
// exports.addSkill = async (req, res) => {
//   const { userId } = req.params;
//   const { skillName, level, type } = req.body; // type = 'current' or 'target'

//   try {
//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     // Update the specific map
//     if (type === 'target') {
//       user.skills.target.set(skillName, Number(level));
//     } else {
//       user.skills.current.set(skillName, Number(level));
//     }

//     await user.save();
//     res.json({ message: `Skill ${skillName} added to ${type}`, skills: user.skills });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addSkill = async (req, res) => {
  const { userId } = req.params;
  const { skillName, level, type } = req.body; 

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (type === 'target') {
      user.skills.target.set(skillName, Number(level));
    } else {
      user.skills.current.set(skillName, Number(level));
    }

    await user.save();
    res.json({ message: `Skill ${skillName} added`, skills: user.skills });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// NEW: Save Exam Result
exports.submitExam = async (req, res) => {
  const { userId } = req.params;
  const { resourceId, title, score } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check if course already completed, if so, update score
    const existingIndex = user.completedCourses.findIndex(c => c.resourceId.toString() === resourceId);
    
    if (existingIndex > -1) {
      user.completedCourses[existingIndex].score = score;
      user.completedCourses[existingIndex].dateCompleted = Date.now();
    } else {
      user.completedCourses.push({ resourceId, title, score });
    }

    // BONUS: Also update XP
    user.xp += 100;

    await user.save();
    res.json({ message: "Exam submitted successfully", completedCourses: user.completedCourses });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};