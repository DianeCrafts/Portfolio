const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const indexRoutes = require('./routes/index.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// API routes
app.use('/api', indexRoutes);

module.exports = app;