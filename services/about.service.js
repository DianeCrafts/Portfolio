const jsonRepository = require('../repositories/json.repository');

function getAbout() {
  return jsonRepository.readJsonFile('about.json');
}

module.exports = {
  getAbout
};