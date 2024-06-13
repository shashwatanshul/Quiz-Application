const express = require("express");
const router = express.Router();
const Difficulty = require("../models/difficultyModel");

router.get("/getalldifficultys", async (req, res) => {
  try {
    const difficultys = await Difficulty.find({});
    res.send(difficultys);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/adddifficulty", async (req, res) => {
  const difficulty = req.body.difficulty;
  try {
    const newdifficulty = new Difficulty({
      diff: difficulty.diff,
    });
    await newdifficulty.save();
    res.send("New Difficulty Added Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getdifficultybyid", async (req, res) => {
  const difficultyid = req.body.difficultyid;

  try {
    const difficulty = await Difficulty.findOne({ _id: difficultyid });
    res.send(difficulty);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deletedifficulty", async (req, res) => {
  const difficultyid = req.body.difficultyid;
  try {
    await Difficulty.findOneAndDelete({ _id: difficultyid });
    res.send("Difficulty Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
