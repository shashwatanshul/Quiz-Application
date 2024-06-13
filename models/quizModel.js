const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    difficulty: { type: String, required: true },
    classs: { type: String, required: true },
    subject: { type: String, required: true },
    quiz_image: { type: String }, // Updated field name
    enabled: { type: Boolean, default: false },
    questions: [],
    //   {
    //     id: { type: Number, required: true },
    //     question: { type: String, required: true },
    //     question_in_hindi: { type: String, required: true },
    //     question_image: { type: String, required: true },
    //     options: [{ type: String, required: true }],
    //     correct_answer: { type: String, required: true },
    //     answer_explaination_in_english: { type: String, required: true },
    //     answer_explaination_in_hindi: { type: String, required: true },
    //     answer_image: { type: String, required: true },
    //   },
    // ],
  },
  { timestamps: true }
);

const quizModel = mongoose.model("quizs", quizSchema);

module.exports = quizModel;
