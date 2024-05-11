const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    university: {
      type: String,
      require: true,
    },
    course: {
      type: String,
      require: true,
    },
    specification: {
      type: String,
      require: true,
    },
    startingDate: {
      type: Date,
      require: true,
    },
    leavingDate: {
      type: Date,
      require: true,
    },
    courseType: {
      type: String,
      require: true,
    },
    grade: {
      type: Number,
      require: true,
    },
  },

  { timestamps: true }
);

const educationSchemaData = mongoose.model(
  "educationSchemaData",
  educationSchema
);

module.exports = educationSchemaData;
