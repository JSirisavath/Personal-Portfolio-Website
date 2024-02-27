require('dotenv').config();
const mongoose = require('mongoose');

// Db connection string based on production or development environment:
// Set connection string and database name based on env
const isProductionEnv = process.env.NODE_ENV === 'production';

// If in production, use mongo db atlas connection string else use local mongo db compass string
const connectionString = isProductionEnv
  ? process.env.MONGO_DB_ATLAS_CONNECTION_URI
  : process.env.MONGO_DB_LOCAL_URI;

// Mongo db name based on if production env
const mongoDBName = process.env.MONGO_DB_ATLAS_NAME;

async function connectDB() {
  try {
    const options = {
      serverSelectionTimeoutMS: 5000, // Timeout after 5000ms instead of the default 30000ms
      socketTimeoutMS: 45000, // Increase socket timeout
      connectTimeoutMS: 20000, // Increase connection timeout
    };

    // If the environment is an production, then add the Atlas MongoDB name part of  options
    if (isProductionEnv) {
      options.dbName = mongoDBName;
    }

    await mongoose.connect(connectionString, options);
    console.log(
      `Connected Successfully to MongoDB ${
        isProductionEnv ? 'Atlas' : 'Local'
      }!`
    );
  } catch (error) {
    console.error('Mongo DB Connection Error: ', error);
    process.exit(1); // Exit process if cannot connect to DB
  }
}

module.exports = connectDB;
