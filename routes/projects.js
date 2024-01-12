// Routing for projects

const express = require('express');
const router = express.Router();

// Import db Models (Different projects categories)
const IndividualProjects = require('../models/individualProjects');
const CollaborativeProjects = require('../models/collaborativeProjects');
const ClassroomProjects = require('../models/classroomProjects');
const collaborativeProjects = require('../models/collaborativeProjects');
const classroomProjects = require('../models/classroomProjects');

// Route to add a new individual project
router.post('/addIndividualProject', (req, res) => {
  const newIndividualProject = new IndividualProjects(req.body);

  newIndividualProject
    .save()
    .then((project) => res.status(201).json(project))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Route to add a new collaborative project
router.post('/addCollaborativeProject', (req, res) => {
  const newCollaborativeProject = new CollaborativeProjects(req.body);

  newCollaborativeProject
    .save()
    .then((project) => res.status(201).json(project))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Route to add a new classroom project
router.post('/addClassroomProject', (req, res) => {
  const newClassroomProject = new ClassroomProjects(req.body);

  newClassroomProject
    .save()
    .then((project) => res.status(201).json(project))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Get all projects data
router.get('/projects', async (req, res) => {
  try {
    // All individual projects
    const allIndividualProjects = await IndividualProjects.find();

    // All collaborative projects
    const allCollaborativeProjects = await CollaborativeProjects.find();

    // All classroom projects
    const allClassroomProjects = await ClassroomProjects.find();

    // Response from all projects data
    res.json(
      allIndividualProjects,
      allCollaborativeProjects,
      allClassroomProjects
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all individual projects
router.get('/individual', async (req, res) => {
  try {
    // All individual projects
    const allIndividualProjects = await IndividualProjects.find();

    // Response from all individual projects data
    res.json(allIndividualProjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all individual projects
router.get('/collaborative', async (req, res) => {
  try {
    // All collaborative projects
    const allCollaborativeProjects = await CollaborativeProjects.find();

    // Response from all collaborative projects data
    res.json(allCollaborativeProjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all classroom projects
router.get('/classroom', async (req, res) => {
  try {
    // All classroom projects
    const allClassroomProjects = await ClassroomProjects.find();

    // Response from all classroom projects
    res.json(allClassroomProjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific project data by id

// Get a specific individual project
router.get('/individual/:id', async (req, res) => {
  try {
    // find that specific requested project by te id
    const requestedIndividualProject = await IndividualProjects.findById(
      req.params.id
    );

    // TODO: Need to implement a redirect if project is not found
    if (!requestedIndividualProject)
      return res.status(404).json({ message: 'Project not found' });
    //  Json res
    res.json(requestedIndividualProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get specific collaborative project
router.get(async (req, res) => {
  try {
    const requestedCollaborativeProject = await collaborativeProjects.findById(
      req.params.id
    );

    // TODO: Need to implement a redirect if project is not found
    if (!requestedCollaborativeProject)
      return res.status(404).json({ message: 'Project not found' });

    // JSON response for requestedCollaborativeProject
    res.json(requestedCollaborativeProject);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// Get specific classroom project
router.get(async (req, res) => {
  try {
    const requestedClassroomProject = classroomProjects.findById(req.params.id);

    if (!requestedClassroomProject)
      return res.status(404).json('Project not found');
    res.json(requestedClassroomProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
