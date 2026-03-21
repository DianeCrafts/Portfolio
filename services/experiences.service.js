const jsonRepository = require('../repositories/json.repository');
const { getLanguage } = require('../utils/locale.util');
const { translateObject } = require('../utils/translate.util');

function getAllExperiences(langParam) {
  const lang = getLanguage(langParam);

  const experiences = jsonRepository.readJsonFile('experiences.json');

  return translateObject(experiences, lang);
}

function getExperienceById(id, langParam) {
  const lang = getLanguage(langParam);

  const experiences = jsonRepository.readJsonFile('experiences.json');

  const exp = experiences.find(e => e.id === id);

  if (!exp) return null;

  return translateObject(exp, lang);
}

module.exports = {
  getAllExperiences,
  getExperienceById
};