const InterviewExperience = require('../models/InterviewExperience');

exports.getAllExperiences = async (req, res) => {
  try {
    const exps = await InterviewExperience.find().sort({ createdAt: -1 });
    res.json(exps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createExperience = async (req, res) => {
  try {
    const exp = new InterviewExperience(req.body);
    await exp.save();
    res.status(201).json(exp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getExperienceById = async (req, res) => {
  try {
    const exp = await InterviewExperience.findById(req.params.id);
    if (!exp) return res.status(404).json({ error: 'Not found' });
    res.json(exp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const exp = await InterviewExperience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!exp) return res.status(404).json({ error: 'Not found' });
    res.json(exp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const exp = await InterviewExperience.findByIdAndDelete(req.params.id);
    if (!exp) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
