const Problem = require('../models/Problem');

exports.getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.find({}, 'title difficulty');
    res.json(problems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProblem = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }
    res.json(problem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

