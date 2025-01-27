const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.render('pages/Home'); // Render the Home.ejs view
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

module.exports = router;
