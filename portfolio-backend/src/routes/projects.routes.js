const express = require('express');
const projectsController = require('../controllers/projects.controller');

const router = express.Router();

router.get('/', projectsController.getAllProjects);
router.get('/:id', projectsController.getProjectById);

module.exports = router;