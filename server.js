// Main server file
const express = require('express');
const router = express.Router();
const cors = require('cors');
const port = process.env.PORT || 3001;
const contactRoutes = require('./routes/contact'); // Email route
const db = require('./db/mongoDBConnection'); // Mongo db connection

// Import db Models (Different projects categories)
const IndividualProjects = require('./models/individualProjects');
const CollaborativeProjects = require('./models/collaborativeProjects');
const ClassroomProjects = require('./models/classroomProjects');

const app = express();
app.use(cors());
app.use(express.json());
// Home page
app.use('/', router);

// contact route
// All contact routes will be prefixed with /api. So any request to my server that starts with '/api', the request will be directed to contact routes router for handling, which is for email sending
app.use('/api', contactRoutes);

app.listen(port, () => console.log('Server Running'));
