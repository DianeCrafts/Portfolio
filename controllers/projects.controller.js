const projectsService = require('../services/projects.service');

function getAllProjects(req, res, next) {
  try {
    const { lang } = req.query;
    const projects = projectsService.getAllProjects(lang);
    res.json(projects);
  } catch (error) {
    next(error);
  }
}

function getProjectById(req, res, next) {
  try {
    const { id } = req.params;
    const { lang } = req.query;
    const project = projectsService.getProjectById(id, lang);

    if (!project) {
      return res.status(404).json({
        message: 'Project not found'
      });
    }

    res.json(project);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProjects,
  getProjectById
};