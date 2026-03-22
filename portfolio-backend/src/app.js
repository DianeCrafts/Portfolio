const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const indexRoutes = require('./routes/index.routes');
const notFoundMiddleware = require('./middlewares/notFound.middleware');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// API routes
app.use('/api', indexRoutes);

// 404 middleware
app.use(notFoundMiddleware);

// Error middleware
app.use(errorMiddleware);

module.exports = app;