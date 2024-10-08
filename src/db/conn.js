require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

// Suppress the Mongoose deprecation warning
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err.message));

module.exports = mongoose.connection;