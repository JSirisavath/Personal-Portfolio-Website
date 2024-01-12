const mongoose = require('mongoose');

const classroomProjectSchematics = new mongoose.Schema({
  title: String,
  description: String,
  imgUrl: String,
  video: String,
  imagesShowcase: [String],
});

module.exports = mongoose.model(
  'classroomProjects',
  classroomProjectSchematics
);
