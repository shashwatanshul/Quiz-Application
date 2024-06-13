const mongoose = require("mongoose");

const difficultySchema = mongoose.Schema(
  {
    diff: { type: String, require },
  },
  { timestamps: true }
);

module.exports = mongoose.model("difficultys", difficultySchema);
