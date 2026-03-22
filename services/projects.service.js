const jsonRepository = require('../repositories/json.repository');
const { getLanguage } = require('../utils/locale.util');
const { translateObject } = require('../utils/translate.util');

async function getAllProjects(langParam) {
  const lang = getLanguage(langParam);
  const projects = await jsonRepository.readJsonFile('projects.json');

  return translateObject(projects, lang);
}

async function getProjectById(id, langParam) {
  const lang = getLanguage(langParam);
  const projects = await jsonRepository.readJsonFile('projects.json');

  const project = projects.find(project => project.id === id);

  if (!project) {
    return null;
  }

  return translateObject(project, lang);
}

module.exports = {
  getAllProjects,
  getProjectById
};