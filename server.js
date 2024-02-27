require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const path = require('path');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const connectDB = require('./db/mongoDBConnection');
const contactRoutes = require('./routes/contact');
const projectRoutes = require('./routes/projects');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.set('trust proxy', true);

// Create a Secret Manager client
const client = new SecretManagerServiceClient();

// Function to access secrets from Secret Manager
async function accessSecret(secretName) {
  const [version] = await client.accessSecretVersion({ name: secretName });
  const payload = version.payload.data.toString('utf8');
  return payload;
}

// Connect to MongoDB
(async () => {
  // Setup routes
  app.use('/api', contactRoutes); // Contact routes
  app.use('/api/projects', projectRoutes); // Project routes

  // Serve static files from the build folder
  app.use(express.static(path.join(__dirname, 'build')));

  // Catch all other requests and serve the React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  // Start the server
  app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    // Access secrets from Secret Manager
    //versions/latest
    try {
      const mongoURIConnectionString = await accessSecret(
        'projects/138835334361/secrets/MONGO_DB_ATLAS_CONNECTION_URI/versions/latest'
      );
      const mongoDBAtlasName = await accessSecret(
        'projects/138835334361/secrets/MONGO_DB_ATLAS_NAME/versions/latest'
      );

      const mongoDBLocalURI = await accessSecret(
        'projects/138835334361/secrets/MONGO_DB_LOCAL_URI/versions/latest'
      );

      const appPass = await accessSecret(
        'projects/138835334361/secrets/APP_PASS/versions/latest'
      );
      const emailUser = await accessSecret(
        'projects/138835334361/secrets/EMAIL_USER/versions/latest'
      );

      const reactAppMailchimpID = await accessSecret(
        'projects/138835334361/secrets/REACT_APP_MAILCHIMP_ID/versions/latest'
      );

      const reactMailchimpU = await accessSecret(
        'projects/138835334361/secrets/REACT_APP_MAILCHIMP_U/versions/latest'
      );

      const reactMailchimpURL = await accessSecret(
        'projects/138835334361/secrets/REACT_APP_MAILCHIMP_URL/versions/latest'
      );

      // Use retrieved Google's secrets manager with env variables
      process.env.REACT_APP_MAILCHIMP_URL = reactMailchimpURL;

      process.env.REACT_APP_MAILCHIMP_U = reactMailchimpU;

      process.env.REACT_APP_MAILCHIMP_ID = reactAppMailchimpID;

      process.env.EMAIL_USER = emailUser;

      process.env.APP_PASS = appPass;

      process.env.MONGO_DB_LOCAL_URI = mongoDBLocalURI;

      process.env.MONGO_DB_ATLAS_NAME = mongoDBAtlasName;

      process.env.MONGO_DB_ATLAS_CONNECTION_URI = mongoURIConnectionString;

      // Connect to db after the secrets has been fetched from google cloud
      await connectDB();
    } catch (error) {
      console.error('Error accessing MongoDB URI from Secret Manager:', error);
    }
  });
})();
