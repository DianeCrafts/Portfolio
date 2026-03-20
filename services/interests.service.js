const jsonRepository = require('../repositories/json.repository');

function getAllInterests() {
  return jsonRepository.readJsonFile('interests.json');
}

function getInterestById(id) {
  const interests = jsonRepository.readJsonFile('interests.json');

  return interests.find(interest => interest.id === id);
}

module.exports = {
  getAllInterests,
  getInterestById
};