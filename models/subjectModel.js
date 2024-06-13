const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema(
  {
    sub: { type: String, require },
  },
  { timestamps: true }
);

module.exports = mongoose.model("subjects", subjectSchema);
