const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

module.exports = app;