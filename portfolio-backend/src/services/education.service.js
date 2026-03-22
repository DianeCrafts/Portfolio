const jsonRepository = require('../repositories/json.repository');
const { getLanguage } = require('../utils/locale.util');
const { translateObject } = require('../utils/translate.util');

async function getAllEducation(langParam) {
  const lang = getLanguage(langParam);
  const education = await jsonRepository.readJsonFile('education.json');

  return translateObject(education, lang);
}

async function getEducationById(id, langParam) {
  const lang = getLanguage(langParam);
  const education = await jsonRepository.readJsonFile('education.json');

  const item = education.find(entry => entry.id === id);

  if (!item) {
    return null;
  }

  return translateObject(item, lang);
}

module.exports = {
  getAllEducation,
  getEducationById
};