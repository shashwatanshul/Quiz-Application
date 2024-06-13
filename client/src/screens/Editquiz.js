// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getQuizById, editQuiz } from "../actions/quizActions";

// const Editquiz = () => {
//   const { quizid } = useParams();
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [dificulty, setDificulty] = useState("");
//   const [classs, setClasss] = useState("");
//   const [subject, setSubject] = useState("");
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState({
//     id: "",
//     question: "",
//     question_in_hindi: "",
//     options: [],
//     correct_answer: "",
//     answer_explaination_in_english: "",
//     answer_explaination_in_hindi: "",
//     answer_image: "",
//   });

//   const { quiz } = useSelector((state) => state.getQuizByIdReducer);

//   useEffect(() => {
//     if (quizid && (!quiz || !quiz.name || quiz._id !== quizid)) {
//       dispatch(getQuizById(quizid));
//     } else if (quiz) {
//       setName(quiz.name);
//       setDificulty(quiz.dificulty);
//       setClasss(quiz.classs);
//       setSubject(quiz.subject);
//       setIsAdmin(quiz.isAdmin);
//       setQuestions(quiz.questions);
//     }
//   }, [dispatch, quiz, quizid]);

//   useEffect(() => {
//     if (questions.length > 0) {
//       setCurrentQuestion(questions[0]); // Set current question to the first question
//     }
//   }, [questions]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const editedQuiz = {
//       _id: quizid,
//       name,
//       dificulty,
//       classs,
//       subject,
//       isAdmin,
//       questions,
//     };
//     dispatch(editQuiz(editedQuiz));
//   };

//   const questionChangeHandler = (e, index) => {
//     const { name, value } = e.target;
//     const updatedQuestions = [...questions];
//     updatedQuestions[index][name] = value;
//     setQuestions(updatedQuestions);
//   };

//   const optionChangeHandler = (e, index, optionIndex) => {
//     const { value } = e.target;
//     const updatedQuestions = [...questions];
//     updatedQuestions[index].options[optionIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   const addQuestionHandler = () => {
//     setQuestions([...questions, { ...currentQuestion }]);
//   };

//   const removeQuestionHandler = (index) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions.splice(index, 1);
//     setQuestions(updatedQuestions);
//   };

//   const addOptionHandler = (index) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index].options.push("");
//     setQuestions(updatedQuestions);
//   };

//   const removeOptionHandler = (index, optionIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index].options.splice(optionIndex, 1);
//     setQuestions(updatedQuestions);
//   };

//   return (
//     <div className="row justify-content-center mt-5">
//       <div className="col-md-6">
//         <h2>Edit Quiz</h2>
//         <form onSubmit={submitHandler}>
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Dificulty</label>
//             <input
//               type="text"
//               className="form-control"
//               value={dificulty}
//               onChange={(e) => setDificulty(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Class</label>
//             <input
//               type="text"
//               className="form-control"
//               value={classs}
//               onChange={(e) => setClasss(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Subject</label>
//             <input
//               type="text"
//               className="form-control"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//             />
//           </div>
//           <div className="form-group form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               checked={isAdmin}
//               onChange={(e) => setIsAdmin(e.target.checked)}
//             />
//             <label className="form-check-label">Is Admin</label>
//           </div>
//           {questions.map((question, index) => (
//             <div key={index} className="mb-4">
//               <label>Question {index + 1}</label>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 name="question"
//                 value={question.question}
//                 onChange={(e) => questionChangeHandler(e, index)}
//               />
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 name="question_in_hindi"
//                 value={question.question_in_hindi}
//                 onChange={(e) => questionChangeHandler(e, index)}
//               />
//               {question.options.map((option, optionIndex) => (
//                 <div key={optionIndex} className="d-flex mb-2">
//                   <input
//                     type="text"
//                     className="form-control mr-2"
//                     value={option}
//                     onChange={(e) => optionChangeHandler(e, index, optionIndex)}
//                   />
//                   <button
//                     type="button"
//                     className="btn btn-danger btn-sm"
//                     onClick={() => removeOptionHandler(index, optionIndex)}
//                   >
//                     Remove Option
//                   </button>
//                 </div>
//               ))}
//               <label>Answer Explanation (English)</label>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 name="answer_explaination_in_english"
//                 value={question.answer_explaination_in_english} // Set value to current explanation
//                 onChange={(e) => questionChangeHandler(e, index)}
//               />
//               <label>Answer Explanation (Hindi)</label>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 name="answer_explaination_in_hindi"
//                 value={question.answer_explaination_in_hindi} // Set value to current explanation
//                 onChange={(e) => questionChangeHandler(e, index)}
//               />
//               <label>Answer Image URL</label>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 name="answer_image"
//                 value={question.answer_image} // Set value to current image URL
//                 onChange={(e) => questionChangeHandler(e, index)}
//               />
//               <button
//                 type="button"
//                 className="btn btn-success btn-sm mb-2"
//                 onClick={() => addOptionHandler(index)}
//               >
//                 Add Option
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-danger btn-sm"
//                 onClick={() => removeQuestionHandler(index)}
//               >
//                 Remove Question
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             className="btn btn-primary mb-2"
//             onClick={addQuestionHandler}
//           >
//             Add Question
//           </button>
//           <button type="submit" className="btn btn-primary">
//             Update Quiz
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Editquiz;
//--------------------------------------------------------------------------------
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getQuizById } from "../actions/quizActions";
import { useParams } from "react-router-dom";
import { getAllSubjects } from "../actions/subjectActions";
import { getAllDifficultys } from "../actions/difficultyActions";
import { getAllClassss } from "../actions/classsActions";

const Editquiz = () => {
  const { quizid } = useParams();
  const dispatch = useDispatch();

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [editedQuiz, setEditedQuiz] = useState({
    name: "",
    difficulty: "",
    classs: "",
    subject: "",
    quiz_image: null,
    questions: [],
  });
  const [file, setFile] = useState(null);
  const [questionFile, setQuestionFile] = useState(null);
  const [answerFile, setAnswerFile] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const quizDetails = useSelector((state) => state.getQuizByIdReducer);
  const { quiz } = quizDetails;

  const subjectsState = useSelector((state) => state.getAllSubjectsReducer);
  const { subjects } = subjectsState;

  const difficultysState = useSelector(
    (state) => state.getAllDifficultysReducer
  );
  const { difficultys } = difficultysState;

  const classssState = useSelector((state) => state.getAllClassssReducer);
  const { classss } = classssState;

  useEffect(() => {
    dispatch(getQuizById(quizid));
    dispatch(getAllSubjects());
    dispatch(getAllDifficultys());
    dispatch(getAllClassss());
  }, [dispatch, quizid]);

  useEffect(() => {
    if (quiz) {
      setEditedQuiz({
        name: quiz.name,
        difficulty: quiz.difficulty,
        classs: quiz.classs,
        subject: quiz.subject,
        quiz_image: quiz.quiz_image,
        questions: quiz.questions,
      });
    }
  }, [quiz]);

  const handleQuizChange = (field, value) => {
    setEditedQuiz((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...editedQuiz.questions];
    updatedQuestions[index][field] = value;
    setEditedQuiz((prevState) => ({
      ...prevState,
      questions: updatedQuestions,
    }));
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...editedQuiz.questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setEditedQuiz((prevState) => ({
      ...prevState,
      questions: updatedQuestions,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleQuestionFileChange = (e, field) => {
    if (field === "question_image") {
      setQuestionFile(e.target.files[0]);
    } else if (field === "answer_image") {
      setAnswerFile(e.target.files[0]);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_id", quizid);
    formData.append("name", editedQuiz.name);
    formData.append("difficulty", editedQuiz.difficulty);
    formData.append("classs", editedQuiz.classs);
    formData.append("subject", editedQuiz.subject);
    if (file) {
      formData.append("quiz_image", file);
    }

    formData.append("selectedQuestionIndex", selectedQuestionIndex);
    formData.append(
      "questions",
      JSON.stringify(
        editedQuiz.questions.map((q, index) => {
          if (index === selectedQuestionIndex) {
            const question_image = q.question_image
              ? `${q.id}_question_image`
              : null;
            const answer_image = q.answer_image ? `${q.id}_answer_image` : null;
            return { ...q, question_image, answer_image };
          }
          return q;
        })
      )
    );

    if (questionFile) {
      formData.append(
        "questions_images",
        questionFile,
        `${selectedQuestionIndex + 1}_question_image`
      );
    }

    if (answerFile) {
      formData.append(
        "questions_images",
        answerFile,
        `${selectedQuestionIndex + 1}_answer_image`
      );
    }

    try {
      await axios.post("/api/quizs/editquiz", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSubmitSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <hr />
      <h1>Edit Quiz</h1>
      <hr />
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter quiz name"
            value={editedQuiz.name}
            onChange={(e) => handleQuizChange("name", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            value={editedQuiz.difficulty}
            onChange={(e) => handleQuizChange("difficulty", e.target.value)}
          >
            <option value="">Select Category</option>
            {difficultys &&
              difficultys.map((diff) => (
                <option key={diff._id} value={diff.diff}>
                  {diff.diff}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label>Class</label>
          <select
            className="form-control"
            value={editedQuiz.classs}
            onChange={(e) => handleQuizChange("classs", e.target.value)}
          >
            <option value="">Select Class</option>
            {classss &&
              classss.map((cls) => (
                <option key={cls._id} value={cls.cls}>
                  {cls.cls}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label>Subject</label>
          <select
            className="form-control"
            value={editedQuiz.subject}
            onChange={(e) => handleQuizChange("subject", e.target.value)}
          >
            <option value="">Select Subject</option>
            {subjects &&
              subjects.map((sub) => (
                <option key={sub._id} value={sub.sub}>
                  {sub.sub}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label>Upload Quiz Image</label>
          <input
            type="file"
            className="form-control-file"
            name="quiz_image"
            onChange={handleFileChange}
          />
        </div>

        <div className="form-group">
          <label>Select Question to Edit</label>
          <select
            className="form-control"
            value={selectedQuestionIndex}
            onChange={(e) => setSelectedQuestionIndex(Number(e.target.value))}
          >
            {editedQuiz.questions.map((question, index) => (
              <option key={index} value={index}>
                Question {index + 1}
              </option>
            ))}
          </select>
        </div>

        {editedQuiz.questions[selectedQuestionIndex] && (
          <div className="mb-3">
            <label>Question {selectedQuestionIndex + 1}</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder={`Enter question ${selectedQuestionIndex + 1}`}
              value={editedQuiz.questions[selectedQuestionIndex].question || ""}
              onChange={(e) =>
                handleQuestionChange(
                  selectedQuestionIndex,
                  "question",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder={`Enter question ${
                selectedQuestionIndex + 1
              } in Hindi`}
              value={
                editedQuiz.questions[selectedQuestionIndex].question_in_hindi ||
                ""
              }
              onChange={(e) =>
                handleQuestionChange(
                  selectedQuestionIndex,
                  "question_in_hindi",
                  e.target.value
                )
              }
            />
            <label>Options</label>
            {editedQuiz.questions[selectedQuestionIndex].options.map(
              (option, optionIndex) => (
                <input
                  key={optionIndex}
                  type="text"
                  className="form-control mb-2"
                  placeholder={`Enter option ${optionIndex + 1}`}
                  value={option || ""}
                  onChange={(e) =>
                    handleOptionChange(
                      selectedQuestionIndex,
                      optionIndex,
                      e.target.value
                    )
                  }
                />
              )
            )}
            <div className="form-group">
              <label>Correct Answer</label>
              <select
                className="form-control"
                value={
                  editedQuiz.questions[selectedQuestionIndex].correct_answer ||
                  ""
                }
                onChange={(e) =>
                  handleQuestionChange(
                    selectedQuestionIndex,
                    "correct_answer",
                    e.target.value
                  )
                }
              >
                {editedQuiz.questions[selectedQuestionIndex].options.map(
                  (option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="form-group">
              <label>Upload Question Image</label>
              <input
                type="file"
                className="form-control-file"
                name="question_image"
                onChange={(e) => handleQuestionFileChange(e, "question_image")}
              />
            </div>
            <input
              type="text"
              className="form-control mb-2"
              placeholder={`Enter answer explanation in English`}
              value={
                editedQuiz.questions[selectedQuestionIndex]
                  .answer_explanation_in_english || ""
              }
              onChange={(e) =>
                handleQuestionChange(
                  selectedQuestionIndex,
                  "answer_explanation_in_english",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder={`Enter answer explanation in Hindi`}
              value={
                editedQuiz.questions[selectedQuestionIndex]
                  .answer_explanation_in_hindi || ""
              }
              onChange={(e) =>
                handleQuestionChange(
                  selectedQuestionIndex,
                  "answer_explanation_in_hindi",
                  e.target.value
                )
              }
            />
            <div className="form-group">
              <label>Upload Answer Image</label>
              <input
                type="file"
                className="form-control-file"
                name="answer_image"
                onChange={(e) => handleQuestionFileChange(e, "answer_image")}
              />
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {submitSuccess && (
        <div className="alert alert-success" role="alert">
          Quiz edited successfully!
        </div>
      )}
    </div>
  );
};

export default Editquiz;
