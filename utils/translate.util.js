function isLocalizedObject(value) {
  return (
    value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    ('en' in value || 'fr' in value)
  );
}

function translateObject(value, lang) {
  if (Array.isArray(value)) {
    return value.map(item => translateObject(item, lang));
  }

  if (isLocalizedObject(value)) {
    return value[lang] || value.en || value.fr;
  }

  if (value && typeof value === 'object') {
    const translated = {};

    for (const key in value) {
      translated[key] = translateObject(value[key], lang);
    }

    return translated;
  }

  return value;
}

module.exports = {
  translateObject
};