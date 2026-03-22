const express = require('express');
const jsonRepository = require('../repositories/json.repository');

const router = express.Router();

router.get('/cache', (req, res) => {
  res.json(jsonRepository.getCacheStats());
});

router.post('/cache/clear', (req, res) => {
  jsonRepository.clearCache();
  res.json({ message: 'Cache cleared' });
});

module.exports = router;