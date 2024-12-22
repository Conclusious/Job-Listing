const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

module.exports = router;
