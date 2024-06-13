const express = require("express");
const router = express.Router();
const Schoolcode = require("../models/schoolcodeModel");

router.get("/getallschoolcodes", async (req, res) => {
  try {
    const schoolcodes = await Schoolcode.find({});
    res.send(schoolcodes);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/addschoolcode", async (req, res) => {
  const schoolcode = req.body.schoolcode;
  try {
    const newschoolcode = new Schoolcode({
      code: schoolcode.code,
      school: schoolcode.school,
      city: schoolcode.city,
    });
    await newschoolcode.save();
    res.send("New Schoolcode Added Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getschoolcodebyid", async (req, res) => {
  const schoolcodeid = req.body.schoolcodeid;

  try {
    const schoolcode = await schoolcode.findOne({ _id: schoolcodeid });
    res.send(schoolcode);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deleteschoolcode", async (req, res) => {
  const schoolcodeid = req.body.schoolcodeid;
  try {
    await Schoolcode.findOneAndDelete({ _id: schoolcodeid });
    res.send("School Code Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
