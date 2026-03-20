const express = require('express');
const experiencesController = require('../controllers/experiences.controller');

const router = express.Router();

router.get('/', experiencesController.getAllExperiences);
router.get('/:id', experiencesController.getExperienceById);

module.exports = router;