const jsonRepository = require('../repositories/json.repository');
const { getLanguage } = require('../utils/locale.util');
const { translateObject } = require('../utils/translate.util');

function getAllInterests(langParam) {
  const lang = getLanguage(langParam);

  const interests = jsonRepository.readJsonFile('interests.json');

  return translateObject(interests, lang);
}

function getInterestById(id, langParam) {
  const lang = getLanguage(langParam);

  const interests = jsonRepository.readJsonFile('interests.json');

  const interest = interests.find(i => i.id === id);

  if (!interest) return null;

  return translateObject(interest, lang);
}

module.exports = {
  getAllInterests,
  getInterestById
};