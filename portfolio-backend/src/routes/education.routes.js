const express = require('express');
const educationController = require('../controllers/education.controller');

const router = express.Router();

router.get('/', educationController.getAllEducation);
router.get('/:id', educationController.getEducationById);

module.exports = router;