const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    isAdmin: { type: Boolean, require, default: false },
    school: { type: String, require },
    class: { type: String, require },
  },
  { timestamps: true }
);

module.exports = mongoose.model("students", studentSchema);
