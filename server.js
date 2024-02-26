// Main server file
require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors');
const port = process.env.PORT || 8080;
const contactRoutes = require('./routes/contact'); // Email route
const projectRoutes = require('./routes/projects'); // Project route
const connectDB = require('./db/mongoDBConnection'); // Mongo db connection required for server to connect to mongo db
const app = express();
const path = require('path');
app.use(cors());
app.use(express.json());

// setup routes

(async () => {
  await connectDB(); // Make sure DB connection is connected successfully before backend server starts

  // Home page
  app.use('/', router);

  // Contact route
  // All contact routes will be prefixed with /api. So any request to my server that starts with '/api', the request will be directed to contact routes router for handling, which is for email sending
  app.use('/api', contactRoutes);

  // Project route
  app.use('/api/projects', projectRoutes);

  // Serve static files from the build folder. For deploying app and want express to serve the production build of the React app.
  app.use(express.static(path.join(__dirname, 'build')));

  // Catch any requests that doesn't match any url patterns
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  // Backend server listening to specific port (8080)
  app.listen(port, () => console.log(`Server Running on ${port}`));
})();
