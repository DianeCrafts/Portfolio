const projectsService = require('../services/projects.service');

function getAllProjects(req, res, next) {
  try {
    const projects = projectsService.getAllProjects();
    res.json(projects);
  } catch (error) {
    next(error);
  }
}

function getProjectById(req, res, next) {
  try {
    const { id } = req.params;

    const project = projectsService.getProjectById(id);

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