const SUPPORTED_LANGUAGES = ['en', 'fr'];
const DEFAULT_LANGUAGE = 'en';

function getLanguage(lang) {
  if (!lang) return DEFAULT_LANGUAGE;

  if (SUPPORTED_LANGUAGES.includes(lang)) {
    return lang;
  }

  return DEFAULT_LANGUAGE;
}

module.exports = {
  getLanguage,
  DEFAULT_LANGUAGE
};