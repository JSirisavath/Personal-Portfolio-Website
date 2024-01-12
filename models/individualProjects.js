const mongoose = require('mongoose');

const individualProjectSchematics = new mongoose.Schema({
  title: String,
  description: String,
  imgUrl: String,
  video: String,
  imagesShowcase: [String],
});

module.exports = mongoose.model(
  'individualProjects',
  individualProjectSchematics
);
