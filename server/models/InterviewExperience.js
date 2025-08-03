const mongoose = require('mongoose');

const RoundSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const InterviewExperienceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, enum: ['student', 'instructor'], required: true },
  company: { type: String, required: true },
  ctc: { type: String, required: true },
  year: { type: Number, required: true },
  mode: { type: String, enum: ['on-campus', 'off-campus'], required: true },
  rounds: [RoundSchema],
  verdict: { type: String, enum: ['selected', 'not selected'], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('InterviewExperience', InterviewExperienceSchema);
