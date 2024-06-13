const mongoose = require("mongoose");

const schoolcodeSchema = mongoose.Schema(
  {
    code: { type: String, require },
    school: { type: String, require },
    city: { type: String, require },
  },
  { timestamps: true }
);

module.exports = mongoose.model("schoolcodes", schoolcodeSchema);
