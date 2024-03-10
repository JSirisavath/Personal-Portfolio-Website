require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.MONGO_DB_ATLAS_CONNECTION_URI;

// Mongo db name based on if production env
const mongoDBName = process.env.MONGO_DB_ATLAS_NAME;

async function connectDB() {
  try {
    const options = {
      serverSelectionTimeoutMS: 5000, // Timeout after 5000ms instead of the default 30000ms
      socketTimeoutMS: 45000, // Increase socket timeout
      connectTimeoutMS: 20000, // Increase connection timeout

      dbName: mongoDBName,
    };

    await mongoose.connect(connectionString, options);

    console.log(`Connected Successfully to MongoDB`);
  } catch (error) {
    console.error('Mongo DB Connection Error: ', error);
    process.exit(1); // Exit process if cannot connect to DB
  }
}

module.exports = connectDB;
