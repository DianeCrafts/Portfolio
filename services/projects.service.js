const jsonRepository = require('../repositories/json.repository');
const { getLanguage } = require('../utils/locale.util');
const { translateObject } = require('../utils/translate.util');

function getAllProjects(langParam) {
  const lang = getLanguage(langParam);

  const projects = jsonRepository.readJsonFile('projects.json');

  return translateObject(projects, lang);
}

function getProjectById(id, langParam) {
  const lang = getLanguage(langParam);

  const projects = jsonRepository.readJsonFile('projects.json');

  const project = projects.find(p => p.id === id);

  if (!project) return null;

  return translateObject(project, lang);
}

module.exports = {
  getAllProjects,
  getProjectById
};