const mongoose = require("mongoose");

const projectData = new mongoose.Schema(
  {
    projectName: {
      type: String,
      require: true,
    },
    client: {
      type: String,
      require: true,
    },
    projectStarting: {
      type: Date,
      require: true,
    },
    projectComplete: {
      type: Date,
      require: true,
    },
    projectLocation: {
      type: String,
      require: true,
    },
    projectSite: {
      type: String,
    },
    projectTeamSize: {
      type: Number,
    },
    projectRole: {
      type: String,
    },
  },
  { timestamps: true }
);

const userProjectData = mongoose.model("userProjectData", projectData);

module.exports = userProjectData;
