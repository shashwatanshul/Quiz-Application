const mongoose = require("mongoose");

const classsSchema = mongoose.Schema(
  {
    cls: { type: String, require },
  },
  { timestamps: true }
);

module.exports = mongoose.model("classss", classsSchema);
