const express = require("express");
const router = express.Router();
const Classs = require("../models/classsModel");

router.get("/getallclassss", async (req, res) => {
  try {
    const classss = await Classs.find({});
    res.send(classss);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/addclasss", async (req, res) => {
  const classs = req.body.classs;
  try {
    const newclasss = new Classs({
      cls: classs.cls,
    });
    await newclasss.save();
    res.send("New Classs Added Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getclasssbyid", async (req, res) => {
  const classsid = req.body.classsid;

  try {
    const classs = await Classs.findOne({ _id: classsid });
    res.send(classs);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deleteclasss", async (req, res) => {
  const classsid = req.body.classsid;
  try {
    await Classs.findOneAndDelete({ _id: classsid });
    res.send("Classs Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
