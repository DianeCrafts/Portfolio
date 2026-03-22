const interestsService = require('../services/interests.service');

async function getAllInterests(req, res, next) {
  try {
    const interests = await interestsService.getAllInterests(req.query.lang);
    res.json(interests);
  } catch (error) {
    next(error);
  }
}

async function getInterestById(req, res, next) {
  try {
    const { id } = req.params;

    const interest = await interestsService.getInterestById(id, req.query.lang);

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