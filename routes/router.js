const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.render('pages/Home'); // Render the Home.ejs view
});

router.get('/About', (req, res) => {
  res.render('pages/About'); // Render the About.ejs view
});

router.get('/Contact', (req, res) => {
  res.render('pages/Contact'); // Render the Contact.ejs view
});

router.get('/Typography', (req, res) => {
  res.render('pages/Typography'); // Render the Typography.ejs view
});

module.exports = router;
