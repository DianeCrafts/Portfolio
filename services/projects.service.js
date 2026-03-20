const jsonRepository = require('../repositories/json.repository');

function getAllProjects() {
  return jsonRepository.readJsonFile('projects.json');
}

function getProjectById(id) {
  const projects = jsonRepository.readJsonFile('projects.json');

  return projects.find(project => project.id === id);
}

module.exports = {
  getAllProjects,
  getProjectById
};