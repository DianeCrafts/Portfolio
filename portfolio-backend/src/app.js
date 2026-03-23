const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const indexRoutes = require('./routes/index.routes');
const notFoundMiddleware = require('./middlewares/notFound.middleware');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:4200';
const NODE_ENV = process.env.NODE_ENV || 'development';

// Global middlewares
app.use(cors({
  origin: CORS_ORIGIN
}));
app.use(express.json());
app.use(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'));

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