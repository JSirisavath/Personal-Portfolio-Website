const mongoose = require('mongoose');

const classroomProjectSchematics = new mongoose.Schema({
  title: String,
  description: String,
  techStackTitle: String,
  GHSourceCode: String,
  liveLink: String,
  imgUrl: String,
  video: String,
  imagesShowcase: [String],
});

module.exports = mongoose.model(
  'classroom_projects',
  classroomProjectSchematics
);
