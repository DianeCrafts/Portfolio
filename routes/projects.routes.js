const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'List of projects'
  });
});

module.exports = router;