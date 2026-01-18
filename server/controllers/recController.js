

// const User = require('../models/User');
// const Resource = require('../models/Resource');

// exports.getRecommendations = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     const targetSkills = user.skills.target || new Map();
//     const currentSkills = user.skills.current || new Map();

//     // 1. FIND SKILL GAPS
//     let activeGaps = [];
//     for (let [skill, targetLevel] of targetSkills) {
//       const currentLevel = currentSkills.get(skill) || 0;
//       if (currentLevel < targetLevel) {
//         // Normalize to lowercase for better matching later
//         activeGaps.push(new RegExp(skill, 'i')); 
//       }
//     }

//     // 2. FIND RESOURCES MATCHING GAPS (Specific)
//     let specificRecs = [];
//     if (activeGaps.length > 0) {
//       specificRecs = await Resource.find({
//         skillsTargeted: { $in: activeGaps }
//       });
//     }

//     // 3. FETCH DEFAULTS (The 5 dummy cards)
//     const specificIds = specificRecs.map(r => r._id);
//     const defaultRecs = await Resource.find({
//       isDefault: true,
//       _id: { $nin: specificIds } // Avoid duplicates
//     });

//     // 4. COMBINE & SEND
//     const finalRecs = [...specificRecs, ...defaultRecs].slice(0, 6);
    
//     // Debugging: Print to backend console to verify it works
//     console.log(`User: ${user.name}`);
//     console.log(`Gaps Found: ${activeGaps}`);
//     console.log(`Recommendations Returned: ${finalRecs.length}`);

//     res.json(finalRecs);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// };


const User = require('../models/User');
const Resource = require('../models/Resource');

exports.getRecommendations = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const targetSkills = user.skills.target || new Map();
    const currentSkills = user.skills.current || new Map();

    // 1. IDENTIFY SKILL GAPS
    let activeGaps = [];
    for (let [skill, targetLevel] of targetSkills) {
      const currentLevel = currentSkills.get(skill) || 0;
      if (currentLevel < targetLevel) {
        // Create case-insensitive regex for matching
        activeGaps.push(new RegExp(skill, 'i')); 
      }
    }

    // 2. CHECK FOR SPECIFIC MATCHES
    let specificRecs = [];
    if (activeGaps.length > 0) {
      specificRecs = await Resource.find({
        skillsTargeted: { $in: activeGaps }
      });
    }

    // 3. EXCLUSIVE LOGIC (The Change You Requested)
    if (specificRecs.length > 0) {
      // CASE A: We found specific matches -> Show ONLY these
      return res.json(specificRecs);
    } else {
      // CASE B: No specific matches (or no gaps) -> Show RANDOM defaults
      // We use MongoDB aggregation to pick 5 random cards marked as default
      const randomDefaults = await Resource.aggregate([
        { $match: { isDefault: true } },
        { $sample: { size: 5 } } // Pick 5 random ones
      ]);
      return res.json(randomDefaults);
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};