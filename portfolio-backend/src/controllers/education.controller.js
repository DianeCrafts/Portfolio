const educationService = require('../services/education.service');

async function getAllEducation(req, res, next) {
  try {
    const education = await educationService.getAllEducation(req.query.lang);
    res.json(education);
  } catch (error) {
    next(error);
  }
}

async function getEducationById(req, res, next) {
  try {
    const { id } = req.params;

    const education = await educationService.getEducationById(id, req.query.lang);

    if (!education) {
      return res.status(404).json({
        message: 'Education item not found'
      });
    }

    res.json(education);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllEducation,
  getEducationById
};