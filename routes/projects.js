// Routing for projects and any reqs for projects, these will grab those projects and return them

const express = require('express');
const router = express.Router();

// Import db Models (Different projects categories)
const IndividualProjects = require('../models/individualProjects');
const CollaborativeProjects = require('../models/collaborativeProjects');
const ClassroomProjects = require('../models/classroomProjects');
const { default: mongoose } = require('mongoose');

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

    // Combining all projects into a single object with respective keys
    const allProjects = {
      individualProjects: allIndividualProjects,
      collaborativeProjects: allCollaborativeProjects,
      classroomProjects: allClassroomProjects,
    };

    res.json(allProjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all individual projects
router.get('/individual', async (req, res) => {
  try {
    const projects = await IndividualProjects.find({});
    if (projects.length === 0) {
      console.log('No Documents in individual projects');
      // Return a 200 with an empty array if no documents are found
      return res.status(200).json([]);
    }
    // console.log('Documents found!');
    res.json(projects); // Send the found projects as JSON
  } catch (err) {
    console.error('Error fetching individual projects: ', err);
    res
      .status(500)
      .json({ message: 'Error querying individualProjects', error: err });
  }
});

// // Get all collaborative projects
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

// // Get all classroom projects
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

// // Specific project
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid project ID!' });
  }
  try {
    // Check individual projects first
    let project = await IndividualProjects.findById(req.params.id);

    // If not individual projects, then find collaborative
    if (!project) {
      project = await CollaborativeProjects.findById(req.params.id);
    }

    // If not collaborative, then classroom
    if (!project) {
      project = await ClassroomProjects.findById(req.params.id);
    }

    // If not any, then return a response of no project found
    if (!project) {
      return res
        .status(404)
        .json({ message: 'Unfortunately, project not found.' });
    }
    // Return the found project
    res.json(project);
  } catch (err) {
    console.error('Error fetching individual projects: ', err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
