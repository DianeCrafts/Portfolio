const jsonRepository = require('../repositories/json.repository');
const { getLanguage } = require('../utils/locale.util');
const { translateObject } = require('../utils/translate.util');

async function getAllInterests(langParam) {
  const lang = getLanguage(langParam);
  const interests = await jsonRepository.readJsonFile('interests.json');

  return translateObject(interests, lang);
}

async function getInterestById(id, langParam) {
  const lang = getLanguage(langParam);
  const interests = await jsonRepository.readJsonFile('interests.json');

  const interest = interests.find(item => item.id === id);

  if (!interest) {
    return null;
  }

  return translateObject(interest, lang);
}

module.exports = {
  getAllInterests,
  getInterestById
};