// MongoDB connection via mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/personalProjectDataBase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mongoose db connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error: '));

db.once('open', function () {
  console.log('Connected Successfully to MongoDB');
});

// NOTE: Images will be stored in google cloud storage and then retrieved by project ID. When images are retrieved, they are image strings

module.exports = db;
