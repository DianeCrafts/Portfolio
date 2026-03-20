const express = require('express');
const interestsController = require('../controllers/interests.controller');

const router = express.Router();

router.get('/', interestsController.getAllInterests);
router.get('/:id', interestsController.getInterestById);

module.exports = router;