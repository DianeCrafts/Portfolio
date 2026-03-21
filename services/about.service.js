const jsonRepository = require('../repositories/json.repository');
const { getLanguage } = require('../utils/locale.util');
const { translateObject } = require('../utils/translate.util');

function getAbout(langParam) {
  const lang = getLanguage(langParam);

  const about = jsonRepository.readJsonFile('about.json');

  return translateObject(about, lang);
}

module.exports = {
  getAbout
};