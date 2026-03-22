const express = require('express');
const projectsRoutes = require('./projects.routes');
const experiencesRoutes = require('./experiences.routes');
const aboutRoutes = require('./about.routes');
const interestsRoutes = require('./interests.routes');
const educationRoutes = require('./education.routes');

const router = express.Router();

router.use('/projects', projectsRoutes);
router.use('/experiences', experiencesRoutes);
router.use('/about', aboutRoutes);
router.use('/interests', interestsRoutes);
router.use('/education', educationRoutes);

module.exports = router;