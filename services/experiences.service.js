const jsonRepository = require('../repositories/json.repository');

function getAllExperiences() {
  return jsonRepository.readJsonFile('experiences.json');
}

function getExperienceById(id) {
  const experiences = jsonRepository.readJsonFile('experiences.json');

  return experiences.find(exp => exp.id === id);
}

module.exports = {
  getAllExperiences,
  getExperienceById
};