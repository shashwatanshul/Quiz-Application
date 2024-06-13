const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require },
    mobile: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    isAdmin: { type: Boolean, require, default: false },
    school: { type: String, require },
    schoolcode: { type: String },
    classs: { type: String, require },
    city: { type: String, require },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
