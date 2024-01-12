const mongoose = require('mongoose');

const collaborativeProjectSchematics = new mongoose.Schema({
  title: String,
  description: String,
  imgUrl: String,
  video: String,
  imagesShowcase: [String],
  collaboratorsGHURL: [String],
});

module.exports = mongoose.model(
  'collaborativeProjects',
  collaborativeProjectSchematics
);
