const express = require('express');
const hostels = require('../data/hostels');
const router = express.Router();

router.get('/hostels', (req, res) => {
  try {
    const maxDistance = parseFloat(req.query.distance) || 3.0;
    const maxPrice = parseInt(req.query.price) || 160000;

    const filtered = hostels.filter(h =>
      h.distance <= maxDistance && h.price <= maxPrice
    );

    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
