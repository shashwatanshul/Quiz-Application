// const express = require("express");
// const router = express.Router();
// const Quiz = require("../models/quizModel");

// router.get("/getallquizs", async (req, res) => {
//   try {
//     const quizs = await Quiz.find({});
//     res.send(quizs);
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/addquiz", async (req, res) => {
//   const quiz = req.body.quiz;
//   try {
//     const newquiz = new Quiz({
//       name: quiz.name,
//       difficulty: quiz.difficulty,
//       subject: quiz.subject,
//       classs: quiz.classs,
//       quiz_image: quiz.quiz_image,
//       questions: quiz.questions,
//     });
//     await newquiz.save();
//     res.send("New Quiz Added Successfully");
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/getquizbyid", async (req, res) => {
//   const quizid = req.body.quizid;

//   try {
//     const quiz = await Quiz.findOne({ _id: quizid });
//     res.send(quiz);
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/editquiz", async (req, res) => {
//   const editedquiz = req.body.editedquiz;

//   try {
//     const quiz = await Quiz.findOne({ _id: editedquiz._id });
//     quiz.name = editedquiz.name;
//     quiz.subject = editedquiz.subject;
//     quiz.classs = editedquiz.classs;
//     quiz.difficulty = editedquiz.difficulty;
//     quiz.quiz_image = editedquiz.quiz_image; // Include quiz_image
//     quiz.questions = editedquiz.questions;
//     await quiz.save();
//     res.send("Quiz Details Edited Successfully");
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/deletequiz", async (req, res) => {
//   const quizid = req.body.quizid;
//   try {
//     await Quiz.findOneAndDelete({ _id: quizid });
//     res.send("Quiz Deleted Successfully");
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// module.exports = router;
//---------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////
// const express = require("express");
// const router = express.Router();
// const Quiz = require("../models/quizModel");
// const fs = require("fs");

// router.get("/getallquizs", async (req, res) => {
//   try {
//     const quizs = await Quiz.find({});
//     res.send(quizs);
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/addquiz", async (req, res) => {
//   const { name, difficulty, classs, subject, file, quiz_image, questions } =
//     req.body;

//   try {
//     // Convert base64 images to buffer and save to uploads folder
//     const base64ToBuffer = (base64String) =>
//       Buffer.from(base64String, "base64");

//     const saveImage = (imageData, fileName) => {
//       fs.writeFileSync(`client/public/${fileName}`, imageData, "base64");
//     };

//     const saveImages = () => {
//       if (quiz_image) {
//         saveImage(base64ToBuffer(quiz_image), `${Date.now()}_quiz_image.png`);
//       }
//     };

//     // Save quiz image first
//     saveImages();
//     let newquestion_image, newanswer_image;
//     const newQuestions = questions.map((question) => {
//       if (question.question_image) {
//         newquestion_image = `${Date.now()}_question_image.png`;
//         saveImage(base64ToBuffer(question.question_image), newquestion_image);
//       }
//       if (question.answer_image) {
//         newanswer_image = `${Date.now()}_answer_image.png`;
//         saveImage(base64ToBuffer(question.answer_image), newanswer_image);
//       }
//       return {
//         ...question,
//         question_image: question.question_image ? newquestion_image : null,
//         answer_image: question.answer_image ? newanswer_image : null,
//       };
//     });

//     // Save quiz to database
//     const newQuiz = new Quiz({
//       name,
//       difficulty,
//       classs,
//       subject,
//       quiz_image: quiz_image ? `${Date.now()}_quiz_image.png` : null,
//       questions: newQuestions,
//     });

//     await newQuiz.save();
//     res.send("New Quiz Added Successfully");
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/getquizbyid", async (req, res) => {
//   const quizid = req.body.quizid;

//   try {
//     const quiz = await Quiz.findOne({ _id: quizid });
//     res.send(quiz);
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/editquiz", async (req, res) => {
//   const editedquiz = req.body.editedquiz;

//   try {
//     const quiz = await Quiz.findOne({ _id: editedquiz._id });
//     quiz.name = editedquiz.name;
//     quiz.subject = editedquiz.subject;
//     quiz.classs = editedquiz.classs;
//     quiz.difficulty = editedquiz.difficulty;
//     quiz.questions = [editedquiz.questions];
//     quiz.answers = [editedquiz.answers];
//     await quiz.save();
//     res.send("Quiz Details Edited Successfully");
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// router.post("/deletequiz", async (req, res) => {
//   const quizid = req.body.quizid;
//   try {
//     await Quiz.findOneAndDelete({ _id: quizid });
//     res.send("Quiz Deleted Successfully");
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

// module.exports = router;
////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const router = express.Router();
const Quiz = require("../models/quizModel");
const multer = require("multer");
const stream = require("stream");
const { google } = require("googleapis");
const path = require("path");

const upload = multer({ storage: multer.memoryStorage() });

const KEYFILEPATH = path.join(__dirname, "../cred.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const uploadFileToDrive = async (fileObject) => {
  const bufferStream = new stream.PassThrough();
  bufferStream.end(fileObject.buffer);
  const { data } = await google.drive({ version: "v3", auth }).files.create({
    media: {
      mimeType: fileObject.mimetype,
      body: bufferStream,
    },
    requestBody: {
      name: fileObject.originalname,
      parents: ["1ba8wGNiyH1x7yLrgIOzspavZd9Emwjyj"],
    },
    fields: "id,name,webViewLink",
  });
  return data.webViewLink;
};

router.post(
  "/addquiz",
  upload.fields([{ name: "quiz_image" }, { name: "questions_images" }]),
  async (req, res) => {
    const { name, difficulty, classs, subject, questions } = req.body;
    const quizImage = req.files["quiz_image"]
      ? req.files["quiz_image"][0]
      : null;
    const questionImages = req.files["questions_images"] || [];

    try {
      let quizImageUrl = null;
      if (quizImage) {
        quizImageUrl = await uploadFileToDrive(quizImage);
      }

      const questionImagesUrls = {};
      for (const file of questionImages) {
        const url = await uploadFileToDrive(file);
        questionImagesUrls[file.originalname] = url;
      }

      const newQuestions = JSON.parse(questions).map((question) => ({
        ...question,
        question_image: questionImagesUrls[question.question_image] || null,
        answer_image: questionImagesUrls[question.answer_image] || null,
      }));

      const newQuiz = new Quiz({
        name,
        difficulty,
        classs,
        subject,
        quiz_image: quizImageUrl,
        questions: newQuestions,
      });

      await newQuiz.save();
      res.send("New Quiz Added Successfully");
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
);

router.post(
  "/editquiz",
  upload.fields([{ name: "quiz_image" }, { name: "questions_images" }]),
  async (req, res) => {
    const {
      _id,
      name,
      difficulty,
      classs,
      subject,
      questions,
      selectedQuestionIndex,
    } = req.body;
    const quizImage = req.files["quiz_image"]
      ? req.files["quiz_image"][0]
      : null;
    const questionImages = req.files["questions_images"] || [];

    try {
      let quizImageUrl = null;
      if (quizImage) {
        quizImageUrl = await uploadFileToDrive(quizImage);
      }

      const questionImagesUrls = {};
      for (const file of questionImages) {
        const url = await uploadFileToDrive(file);
        questionImagesUrls[file.originalname] = url;
      }

      const updatedQuestions = JSON.parse(questions).map((question, index) => {
        if (index === Number(selectedQuestionIndex)) {
          return {
            ...question,
            question_image:
              questionImagesUrls[question.question_image] ||
              question.question_image,
            answer_image:
              questionImagesUrls[question.answer_image] ||
              question.answer_image,
          };
        }
        return question;
      });

      const editedQuiz = await Quiz.findById(_id);
      editedQuiz.name = name;
      editedQuiz.difficulty = difficulty;
      editedQuiz.classs = classs;
      editedQuiz.subject = subject;
      editedQuiz.quiz_image = quizImageUrl || editedQuiz.quiz_image;
      editedQuiz.questions = updatedQuestions;

      await editedQuiz.save();
      res.send("Quiz Details Edited Successfully");
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
);

router.post("/getquizbyid", async (req, res) => {
  const quizid = req.body.quizid;

  try {
    const quiz = await Quiz.findOne({ _id: quizid });
    res.send(quiz);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deletequiz", async (req, res) => {
  const quizid = req.body.quizid;
  try {
    await Quiz.findOneAndDelete({ _id: quizid });
    res.send("Quiz Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.get("/getallquizs", async (req, res) => {
  try {
    const quizs = await Quiz.find({});
    res.send(quizs);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/updateenabledstatus", async (req, res) => {
  const { quizId, enabled } = req.body;
  try {
    const quiz = await Quiz.findById(quizId);
    quiz.enabled = enabled;
    await quiz.save();
    res.send("Quiz enabled status updated successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
