const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'Student' },
  university: String,
  semester: String,
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  domains: [String],
  avatar: String,

  // Flexible Map for Skills (e.g., "Python": 50)
  skills: {
    current: { type: Map, of: Number, default: {} },
    target: { type: Map, of: Number, default: {} }
  },

  // Roadmap Tracking
  careerRoadmap: [{
    stepId: Number, // Links to hardcoded roadmap ID or DB ID
    title: String,
    stage: String,
    status: { type: String, enum: ['locked', 'current', 'completed'], default: 'locked' },
    skills: [String],
    description: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);