const express = require('express');
const { verifyTime } = require('./Middleware/date');
const app = express();
const PORT = 3000;


//  creating Routes
app.get('/', verifyTime, (req, res) => {
  res.send('<h1>Home Page</h1><a href="/services">Our Services</a><a href="/contact">Contact Us</a>');
});

app.get('/services', verifyTime, (req, res) => {
  res.send('<h1>Our Services</h1><a href="/">Home</a><a href="/contact">Contact Us</a>');
});

app.get('/contact', verifyTime, (req, res) => {
  res.send('<h1>Contact Us</h1><a href="/">Home</a><a href="/services">Our Services</a>');
});

// Starting server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});