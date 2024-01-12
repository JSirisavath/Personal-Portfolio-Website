// Main server file
const express = require('express');
const router = express.Router();
const cors = require('cors');
const port = process.env.PORT || 3001;
const contactRoutes = require('./routes/contact'); // Email route
const projectRoutes = require('./routes/projects'); // Project route
const db = require('./db/mongoDBConnection'); // Mongo db connection

const app = express();
app.use(cors());
app.use(express.json());
// Home page
app.use('/', router);

// Contact route
// All contact routes will be prefixed with /api. So any request to my server that starts with '/api', the request will be directed to contact routes router for handling, which is for email sending
app.use('/api', contactRoutes);

// Project route
app.use('/api/projects', projectRoutes);

app.listen(port, () => console.log('Server Running'));
