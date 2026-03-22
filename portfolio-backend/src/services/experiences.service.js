const jsonRepository = require('../repositories/json.repository');
const { getLanguage } = require('../utils/locale.util');
const { translateObject } = require('../utils/translate.util');
const { sortByStartDateDesc } = require('../utils/sort.util');

async function getAllExperiences(langParam) {
  const lang = getLanguage(langParam);
  const experiences = await jsonRepository.readJsonFile('experiences.json');
  const sortedExperiences = sortByStartDateDesc(experiences);

  return translateObject(sortedExperiences, lang);
}

async function getExperienceById(id, langParam) {
  const lang = getLanguage(langParam);
  const experiences = await jsonRepository.readJsonFile('experiences.json');

  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    return null;
  }

  return translateObject(experience, lang);
}

module.exports = {
  getAllExperiences,
  getExperienceById
};