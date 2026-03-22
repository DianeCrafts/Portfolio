const projectsService = require('../services/projects.service');

async function getAllProjects(req, res, next) {
  try {
    const projects = await projectsService.getAllProjects(req.query.lang);
    res.json(projects);
  } catch (error) {
    next(error);
  }
}

async function getProjectById(req, res, next) {
  try {
    const { id } = req.params;

    const project = await projectsService.getProjectById(id, req.query.lang);

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