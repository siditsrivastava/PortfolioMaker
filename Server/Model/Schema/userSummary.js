const mongoose = require("mongoose");

const summaryData = new mongoose.Schema(
  {
    summary: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const userSummaryData = mongoose.model("userSummaryData", summaryData);

module.exports = userSummaryData;
