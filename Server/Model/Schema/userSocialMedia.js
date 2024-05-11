const mongoose = require("mongoose");

const socialMediaData = new mongoose.Schema(
  {
    likedin: {
      type: String,
      require: true,
    },
    github: {
      type: String,
      require: true,
    },
    x: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const userSocialMediaDataData = mongoose.model(
  "userSocialMediaDataData",
  socialMediaData
);

module.exports = userSocialMediaDataData;
