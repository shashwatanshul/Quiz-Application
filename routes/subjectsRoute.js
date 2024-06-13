const express = require("express");
const router = express.Router();
const Subject = require("../models/subjectModel");

router.get("/getallsubjects", async (req, res) => {
  try {
    const subjects = await Subject.find({});
    res.send(subjects);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/addsubject", async (req, res) => {
  const subject = req.body.subject;
  try {
    const newsubject = new Subject({
      sub: subject.sub,
      //   school: schoolcode.school,
      //   city: schoolcode.city,
    });
    await newsubject.save();
    res.send("New Subject Added Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getsubjectbyid", async (req, res) => {
  const subjectid = req.body.subjectid;

  try {
    const subject = await Subject.findOne({ _id: subjectid });
    res.send(subject);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deletesubject", async (req, res) => {
  const subjectid = req.body.subjectid;
  try {
    await Subject.findOneAndDelete({ _id: subjectid });
    res.send("Subject Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
