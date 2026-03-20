const experiencesService = require('../services/experiences.service');

function getAllExperiences(req, res, next) {
  try {
    const experiences = experiencesService.getAllExperiences();
    res.json(experiences);
  } catch (error) {
    next(error);
  }
}

function getExperienceById(req, res, next) {
  try {
    const { id } = req.params;

    const experience = experiencesService.getExperienceById(id);

    if (!experience) {
      return res.status(404).json({
        message: 'Experience not found'
      });
    }

    res.json(experience);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllExperiences,
  getExperienceById
};