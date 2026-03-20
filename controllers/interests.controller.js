const interestsService = require('../services/interests.service');

function getAllInterests(req, res, next) {
  try {
    const interests = interestsService.getAllInterests();
    res.json(interests);
  } catch (error) {
    next(error);
  }
}

function getInterestById(req, res, next) {
  try {
    const { id } = req.params;

    const interest = interestsService.getInterestById(id);

    if (!interest) {
      return res.status(404).json({
        message: 'Interest not found'
      });
    }

    res.json(interest);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllInterests,
  getInterestById
};