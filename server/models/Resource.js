// const mongoose = require('mongoose');

// const ResourceSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   provider: String,
//   type: { type: String, enum: ['Course', 'Project', 'Certification'] },
//   domain: String, // 'Healthcare', 'Urban', 'Agriculture'
//   difficulty: String,
//   duration: String,
//   impact: String, // Display text like "+15 IoT"
//   matchScore: Number, // Base score, calculated dynamically usually but stored for seed
  
//   // The crucial part for your recommendation engine
//   skillsTargeted: [String], // ["Python", "IoT Systems"]
//   minSkillLevel: { type: Number, default: 0 }
// });

// module.exports = mongoose.model('Resource', ResourceSchema);


const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  provider: String,
  type: { type: String, enum: ['Course', 'Project', 'Certification', 'Lab'] }, // Added 'Lab'
  domain: String, 
  difficulty: String,
  duration: String,
  impact: String, 
  skillsTargeted: [String],
  minSkillLevel: { type: Number, default: 0 },
  
  // 👇 THIS WAS MISSING! ADD IT NOW:
  isDefault: { type: Boolean, default: false } 
});

module.exports = mongoose.model('Resource', ResourceSchema);