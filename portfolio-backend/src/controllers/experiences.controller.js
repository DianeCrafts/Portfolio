const experiencesService = require('../services/experiences.service');

async function getAllExperiences(req, res, next) {
  try {
    const experiences = await experiencesService.getAllExperiences(req.query.lang);
    res.json(experiences);
  } catch (error) {
    next(error);
  }
}

async function getExperienceById(req, res, next) {
  try {
    const { id } = req.params;

    const experience = await experiencesService.getExperienceById(id, req.query.lang);

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