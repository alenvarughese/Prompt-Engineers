const mongoose = require('mongoose');

const LearningPathSchema = new mongoose.Schema({
  domainKey: { type: String, unique: true }, // 'health', 'agri', 'urban'
  title: String,
  icon: String,
  color: String,
  description: String,
  progress: Number,
  modules: [{
    title: String,
    status: { type: String, enum: ['locked', 'in-progress', 'completed'] },
    type: String
  }]
});

module.exports = mongoose.model('LearningPath', LearningPathSchema);