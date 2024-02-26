const mongoose = require('mongoose');

const collaborativeProjectSchematics = new mongoose.Schema({
  title: String,
  description: String,
  techStackTitle: String,
  GHSourceCode: String,
  liveLink: String,
  imgUrl: String,
  video: String,
  imagesShowcase: [String],
  collaboratorsGHURL: [String],
});

module.exports = mongoose.model(
  'collaborated_projects',
  collaborativeProjectSchematics
);
