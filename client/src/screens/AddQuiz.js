// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addQuiz } from "../actions/quizActions";

// const AddQuiz = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [classs, setClasss] = useState("");
//   const [subject, setSubject] = useState("");
//   const [questions, setQuestions] = useState([]);

//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       { id: questions.length + 1, options: ["", "", "", ""] },
//     ]);
//   };

//   const handleQuestionChange = (index, field, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index][field] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleOptionChange = (questionIndex, optionIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].options[optionIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const quizData = {
//       name,
//       difficulty,
//       classs,
//       subject,
//       questions,
//     };
//     dispatch(addQuiz(quizData));
//     // Reset fields after submission if needed
//     setName("");
//     setDifficulty("");
//     setClasss("");
//     setSubject("");
//     setQuestions([]);
//   };

//   return (
//     <div className="container">
//       <h2>Add New Quiz</h2>
//       <form onSubmit={submitHandler}>
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Category</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz category"
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Class</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter class"
//             value={classs}
//             onChange={(e) => setClasss(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Subject</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           />
//         </div>
//         <button
//           type="button"
//           className="btn btn-primary mb-3"
//           onClick={addQuestion}
//         >
//           Add Question
//         </button>
//         {questions.map((question, index) => (
//           <div key={index} className="mb-3">
//             <label>Question {index + 1}</label>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter question ${index + 1}`}
//               value={question.question || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "question", e.target.value)
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter question ${index + 1} in Hindi`}
//               value={question.question_in_hindi || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "question_in_hindi", e.target.value)
//               }
//             />
//             <label>Options</label>
//             {question.options.map((option, optionIndex) => (
//               <input
//                 key={optionIndex}
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder={`Enter option ${optionIndex + 1}`}
//                 value={option || ""}
//                 onChange={(e) =>
//                   handleOptionChange(index, optionIndex, e.target.value)
//                 }
//               />
//             ))}
//             <div className="form-group">
//               <label>Correct Answer</label>
//               <select
//                 className="form-control"
//                 value={question.correct_answer || ""}
//                 onChange={(e) =>
//                   handleQuestionChange(index, "correct_answer", e.target.value)
//                 }
//               >
//                 {question.options.map((option, optionIndex) => (
//                   <option key={optionIndex} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer explanation in English`}
//               value={question.answer_explaination_in_english || ""}
//               onChange={(e) =>
//                 handleQuestionChange(
//                   index,
//                   "answer_explaination_in_english",
//                   e.target.value
//                 )
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer explanation in Hindi`}
//               value={question.answer_explaination_in_hindi || ""}
//               onChange={(e) =>
//                 handleQuestionChange(
//                   index,
//                   "answer_explaination_in_hindi",
//                   e.target.value
//                 )
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer image URL`}
//               value={question.answer_image || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "answer_image", e.target.value)
//               }
//             />
//           </div>
//         ))}
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddQuiz;
//---------------------------------------------------------------------------------------------
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addQuiz } from "../actions/quizActions";

// const AddQuiz = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [classs, setClasss] = useState("");
//   const [subject, setSubject] = useState("");
//   const [quizImage, setQuizImage] = useState(null);
//   const [questionImage, setQuestionImage] = useState(null);
//   const [questions, setQuestions] = useState([]);

//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       {
//         id: questions.length + 1,
//         question: "",
//         question_in_hindi: "",
//         question_image: null,
//         options: ["", "", "", ""],
//         correct_answer: "",
//         answer_explaination_in_english: "",
//         answer_explaination_in_hindi: "",
//         answer_image: null,
//       },
//     ]);
//   };

//   const handleQuestionChange = (index, field, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index][field] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleOptionChange = (questionIndex, optionIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].options[optionIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("difficulty", difficulty);
//     formData.append("classs", classs);
//     formData.append("subject", subject);
//     formData.append("quizImage", quizImage);
//     questions.forEach((question, index) => {
//       formData.append(`questions[${index}]`, JSON.stringify(question));
//     });

//     dispatch(addQuiz(formData));

//     // Reset fields after submission if needed
//     setName("");
//     setDifficulty("");
//     setClasss("");
//     setSubject("");
//     setQuestions([]);
//   };

//   return (
//     <div className="container">
//       <h2>Add New Quiz</h2>
//       <form onSubmit={submitHandler} encType="multipart/form-data">
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Category</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz category"
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Class</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter class"
//             value={classs}
//             onChange={(e) => setClasss(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Subject</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Quiz Image</label>
//           <input
//             type="file"
//             className="form-control-file"
//             onChange={(e) => setQuizImage(e.target.files[0])}
//           />
//         </div>
//         <div className="form-group">
//           <label>Questions</label>
//           <button
//             type="button"
//             className="btn btn-primary mb-3"
//             onClick={addQuestion}
//           >
//             Add Question
//           </button>
//           {questions.map((question, index) => (
//             <div key={index} className="mb-3">
//               <label>Question {index + 1}</label>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder={`Enter question ${index + 1}`}
//                 value={question.question || ""}
//                 onChange={(e) =>
//                   handleQuestionChange(index, "question", e.target.value)
//                 }
//               />
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder={`Enter question ${index + 1} in Hindi`}
//                 value={question.question_in_hindi || ""}
//                 onChange={(e) =>
//                   handleQuestionChange(
//                     index,
//                     "question_in_hindi",
//                     e.target.value
//                   )
//                 }
//               />
//               <label>Question Image</label>
//               <input
//                 type="file"
//                 className="form-control-file mb-2"
//                 onChange={(e) => {
//                   const file = e.target.files[0];
//                   handleQuestionChange(index, "question_image", file);
//                 }}
//               />
//               <label>Options</label>
//               {question.options.map((option, optionIndex) => (
//                 <input
//                   key={optionIndex}
//                   type="text"
//                   className="form-control mb-2"
//                   placeholder={`Enter option ${optionIndex + 1}`}
//                   value={option || ""}
//                   onChange={(e) =>
//                     handleOptionChange(index, optionIndex, e.target.value)
//                   }
//                 />
//               ))}
//               <div className="form-group">
//                 <label>Correct Answer</label>
//                 <select
//                   className="form-control"
//                   value={question.correct_answer || ""}
//                   onChange={(e) =>
//                     handleQuestionChange(
//                       index,
//                       "correct_answer",
//                       e.target.value
//                     )
//                   }
//                   onBlur={(e) =>
//                    handleQuestionChange(index, "correct_answer", e.target.value)
//                    }
//                 >
//                   {question.options.map((option, optionIndex) => (
//                     <option key={optionIndex} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder={`Enter answer explanation in English`}
//                 value={question.answer_explaination_in_english || ""}
//                 onChange={(e) =>
//                   handleQuestionChange(
//                     index,
//                     "answer_explaination_in_english",
//                     e.target.value
//                   )
//                 }
//               />
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder={`Enter answer explanation in Hindi`}
//                 value={question.answer_explaination_in_hindi || ""}
//                 onChange={(e) =>
//                   handleQuestionChange(
//                     index,
//                     "answer_explaination_in_hindi",
//                     e.target.value
//                   )
//                 }
//               />
//               <label>Answer Image</label>
//               <input
//                 type="file"
//                 className="form-control-file mb-2"
//                 onChange={(e) => {
//                   const file = e.target.files[0];
//                   handleQuestionChange(index, "answer_image", file);
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddQuiz;
//--------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import axios from "axios";

// const AddQuiz = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [classs, setClasss] = useState("");
//   const [subject, setSubject] = useState("");
//   const [file, setFile] = useState(null);
//   const [quizImageBase64, setQuizImageBase64] = useState("");
//   const [questions, setQuestions] = useState([]);

//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       {
//         id: questions.length + 1,
//         question: "",
//         question_in_hindi: "",
//         question_image: null,
//         options: ["", "", "", ""],
//         correct_answer: "",
//         answer_explanation_in_english: "",
//         answer_explanation_in_hindi: "",
//         answer_image: null,
//       },
//     ]);
//   };

//   const handleQuestionChange = (index, field, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index][field] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleOptionChange = (questionIndex, optionIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].options[optionIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleQuestionImageChange = (questionIndex, file) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].question_image = file;
//     setQuestions(updatedQuestions);
//   };

//   const handleAnswerImageChange = (questionIndex, file) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].answer_image = file;
//     setQuestions(updatedQuestions);
//   };

//   const toBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         resolve(reader.result.split(",")[1]);
//       };
//       reader.onerror = (error) => {
//         reject(error);
//       };
//     });

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (file) {
//       const quizImageBase64 = await toBase64(file);
//       setQuizImageBase64(quizImageBase64);
//     }

//     const base64Images = await Promise.all(
//       questions.map(async (question) => {
//         if (question.question_image) {
//           const questionImageBase64 = await toBase64(question.question_image);
//           question.question_image = questionImageBase64;
//         }
//         if (question.answer_image) {
//           const answerImageBase64 = await toBase64(question.answer_image);
//           question.answer_image = answerImageBase64;
//         }
//         return question;
//       })
//     );

//     try {
//       console.log("quiz_image : ", quizImageBase64);
//       console.log("questions : ", base64Images);
//       const response = await axios.post(
//         "http://localhost:5000/api/quizs/addquiz",
//         {
//           name,
//           difficulty,
//           classs,
//           subject,
//           quiz_image: quizImageBase64,
//           questions: base64Images,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Add New Quiz</h2>
//       <form onSubmit={submitHandler} encType="multipart/form-data">
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Difficulty</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz difficulty"
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Class</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter class"
//             value={classs}
//             onChange={(e) => setClasss(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Subject</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Upload Quiz Image</label>
//           <input
//             type="file"
//             className="form-control-file"
//             name="quiz_image"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>
//         <button
//           type="button"
//           className="btn btn-primary mb-3"
//           onClick={addQuestion}
//         >
//           Add Question
//         </button>
//         {questions.map((question, index) => (
//           <div key={index} className="mb-3">
//             <label>Question {index + 1}</label>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter question ${index + 1}`}
//               value={question.question || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "question", e.target.value)
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter question ${index + 1} in Hindi`}
//               value={question.question_in_hindi || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "question_in_hindi", e.target.value)
//               }
//             />
//             <label>Options</label>
//             {question.options.map((option, optionIndex) => (
//               <input
//                 key={optionIndex}
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder={`Enter option ${optionIndex + 1}`}
//                 value={option || ""}
//                 onChange={(e) =>
//                   handleOptionChange(index, optionIndex, e.target.value)
//                 }
//               />
//             ))}
//             <div className="form-group">
//               <label>Correct Answer</label>
//               <select
//                 className="form-control"
//                 value={question.correct_answer || ""}
//                 onChange={(e) =>
//                   handleQuestionChange(index, "correct_answer", e.target.value)
//                 }
//                 onBlur={(e) =>
//                   handleQuestionChange(index, "correct_answer", e.target.value)
//                 }
//               >
//                 {question.options.map((option, optionIndex) => (
//                   <option key={optionIndex} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Upload Question Image</label>
//               <input
//                 type="file"
//                 className="form-control-file"
//                 name="question_image"
//                 onChange={(e) =>
//                   handleQuestionImageChange(index, e.target.files[0])
//                 }
//               />
//             </div>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer explanation in English`}
//               value={question.answer_explanation_in_english || ""}
//               onChange={(e) =>
//                 handleQuestionChange(
//                   index,
//                   "answer_explanation_in_english",
//                   e.target.value
//                 )
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer explanation in Hindi`}
//               value={question.answer_explanation_in_hindi || ""}
//               onChange={(e) =>
//                 handleQuestionChange(
//                   index,
//                   "answer_explanation_in_hindi",
//                   e.target.value
//                 )
//               }
//             />
//             <div className="form-group">
//               <label>Upload Answer Image</label>
//               <input
//                 type="file"
//                 className="form-control-file"
//                 name="answer_image"
//                 onChange={(e) =>
//                   handleAnswerImageChange(index, e.target.files[0])
//                 }
//               />
//             </div>
//           </div>
//         ))}
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddQuiz;
///////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import axios from "axios";

// const AddQuiz = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [classs, setClasss] = useState("");
//   const [subject, setSubject] = useState("");
//   const [file, setFile] = useState(null);
//   const [quizImageBase64, setQuizImageBase64] = useState("");
//   const [questions, setQuestions] = useState([]);
//   const [submitSuccess, setSubmitSuccess] = useState(false); // State for submit success

//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       {
//         id: questions.length + 1,
//         question: "",
//         question_in_hindi: "",
//         question_image: null,
//         options: ["", "", "", ""],
//         correct_answer: "",
//         answer_explanation_in_english: "",
//         answer_explanation_in_hindi: "",
//         answer_image: null,
//       },
//     ]);
//   };

//   const handleQuestionChange = (index, field, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index][field] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleOptionChange = (questionIndex, optionIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].options[optionIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleQuestionImageChange = (questionIndex, file) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].question_image = file;
//     setQuestions(updatedQuestions);
//   };

//   const handleAnswerImageChange = (questionIndex, file) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].answer_image = file;
//     setQuestions(updatedQuestions);
//   };

//   const toBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         resolve(reader.result.split(",")[1]);
//       };
//       reader.onerror = (error) => {
//         reject(error);
//       };
//     });

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (file) {
//       const quizImageBase64 = await toBase64(file);
//       setQuizImageBase64(quizImageBase64);
//     }

//     const base64Images = await Promise.all(
//       questions.map(async (question) => {
//         if (question.question_image) {
//           const questionImageBase64 = await toBase64(question.question_image);
//           question.question_image = questionImageBase64;
//         }
//         if (question.answer_image) {
//           const answerImageBase64 = await toBase64(question.answer_image);
//           question.answer_image = answerImageBase64;
//         }
//         return question;
//       })
//     );

//     try {
//       const response = await axios.post(
//         `/api/quizs/addquiz`,
//         {
//           name,
//           difficulty,
//           classs,
//           subject,
//           quiz_image: quizImageBase64,
//           questions: base64Images,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response);
//       setSubmitSuccess(true); // Set submit success state to true
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Add New Quiz</h2>
//       <form onSubmit={submitHandler} encType="multipart/form-data">
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Category</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz category"
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Class</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter class"
//             value={classs}
//             onChange={(e) => setClasss(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Subject</label>
//           <input
//             type="text"
//             className="form-control mb-5"
//             placeholder="Enter subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           />
//         </div>
//         {/* <div className="form-group pd-5">
//           <label>
//             Upload Quiz Image<br></br>widthxheight:450x300
//           </label>
//           <input
//             type="file"
//             className="form-control-file"
//             name="quiz_image"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div> */}
//         <button
//           type="button"
//           className="btn btn-primary mb-3 mx-5"
//           onClick={addQuestion}
//         >
//           Add Question
//         </button>
//         {questions.map((question, index) => (
//           <div key={index} className="mb-3">
//             <label>Question {index + 1}</label>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter question ${index + 1}`}
//               value={question.question || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "question", e.target.value)
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter question ${index + 1} in Hindi`}
//               value={question.question_in_hindi || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "question_in_hindi", e.target.value)
//               }
//             />
//             <label>Options</label>
//             {question.options.map((option, optionIndex) => (
//               <input
//                 key={optionIndex}
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder={`Enter option ${optionIndex + 1}`}
//                 value={option || ""}
//                 onChange={(e) =>
//                   handleOptionChange(index, optionIndex, e.target.value)
//                 }
//               />
//             ))}
//             <div className="form-group">
//               <label>Correct Answer</label>
//               <select
//                 className="form-control"
//                 value={question.correct_answer || ""}
//                 onChange={(e) =>
//                   handleQuestionChange(index, "correct_answer", e.target.value)
//                 }
//                 onBlur={(e) =>
//                   handleQuestionChange(index, "correct_answer", e.target.value)
//                 }
//               >
//                 {question.options.map((option, optionIndex) => (
//                   <option key={optionIndex} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Upload Question Image</label>
//               <input
//                 type="file"
//                 className="form-control-file"
//                 name="question_image"
//                 onChange={(e) =>
//                   handleQuestionImageChange(index, e.target.files[0])
//                 }
//               />
//             </div>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer explanation in English`}
//               value={question.answer_explanation_in_english || ""}
//               onChange={(e) =>
//                 handleQuestionChange(
//                   index,
//                   "answer_explanation_in_english",
//                   e.target.value
//                 )
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer explanation in Hindi`}
//               value={question.answer_explanation_in_hindi || ""}
//               onChange={(e) =>
//                 handleQuestionChange(
//                   index,
//                   "answer_explanation_in_hindi",
//                   e.target.value
//                 )
//               }
//             />
//             <div className="form-group">
//               <label>Upload Answer Image</label>
//               <input
//                 type="file"
//                 className="form-control-file"
//                 name="answer_image"
//                 onChange={(e) =>
//                   handleAnswerImageChange(index, e.target.files[0])
//                 }
//               />
//             </div>
//           </div>
//         ))}
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//       {submitSuccess && (
//         <div className="alert alert-success" role="alert">
//           Quiz submitted successfully!
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddQuiz;
/////////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import axios from "axios";

// const AddQuiz = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [classs, setClasss] = useState("");
//   const [subject, setSubject] = useState("");
//   const [file, setFile] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       {
//         id: questions.length + 1,
//         question: "",
//         question_in_hindi: "",
//         question_image: null,
//         options: ["", "", "", ""],
//         correct_answer: "",
//         answer_explanation_in_english: "",
//         answer_explanation_in_hindi: "",
//         answer_image: null,
//       },
//     ]);
//   };

//   const handleQuestionChange = (index, field, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index][field] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleOptionChange = (questionIndex, optionIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].options[optionIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleFileChange = (index, field, file) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index][field] = file;
//     setQuestions(updatedQuestions);
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("difficulty", difficulty);
//     formData.append("classs", classs);
//     formData.append("subject", subject);
//     if (file) {
//       formData.append("quiz_image", file);
//     }
//     formData.append(
//       "questions",
//       JSON.stringify(
//         questions.map((q) => {
//           const question_image = q.question_image
//             ? `${q.id}_question_image`
//             : null;
//           const answer_image = q.answer_image ? `${q.id}_answer_image` : null;
//           return { ...q, question_image, answer_image };
//         })
//       )
//     );
//     questions.forEach((q, index) => {
//       if (q.question_image) {
//         formData.append(
//           "questions_images",
//           q.question_image,
//           `${q.id}_question_image`
//         );
//       }
//       if (q.answer_image) {
//         formData.append(
//           "questions_images",
//           q.answer_image,
//           `${q.id}_answer_image`
//         );
//       }
//     });

//     try {
//       const response = await axios.post("/api/quizs/addquiz", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log(response);
//       setSubmitSuccess(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <hr></hr>
//       <h1>Add New Quiz</h1>
//       <hr></hr>
//       <form onSubmit={submitHandler} encType="multipart/form-data">
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Category</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz category"
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Class</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter class"
//             value={classs}
//             onChange={(e) => setClasss(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Subject</label>
//           <input
//             type="text"
//             className="form-control mb-5"
//             placeholder="Enter subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           />
//         </div>
//         <div className="form-group pd-5">
//           <label>Upload Quiz Image</label>
//           <input
//             type="file"
//             className="form-control-file"
//             name="quiz_image"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>
//         {/* <button
//           type="button"
//           className="btn btn-primary mb-3 mx-5"
//           onClick={addQuestion}
//         >
//           Add Question
//         </button> */}
//         {questions.map((question, index) => (
//           <div key={index} className="mb-3">
//             <label>Question {index + 1}</label>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter question ${index + 1}`}
//               value={question.question || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "question", e.target.value)
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter question ${index + 1} in Hindi`}
//               value={question.question_in_hindi || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "question_in_hindi", e.target.value)
//               }
//             />
//             <label>Options</label>
//             {question.options.map((option, optionIndex) => (
//               <input
//                 key={optionIndex}
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder={`Enter option ${optionIndex + 1}`}
//                 value={option || ""}
//                 onChange={(e) =>
//                   handleOptionChange(index, optionIndex, e.target.value)
//                 }
//               />
//             ))}
//             <div className="form-group">
//               <label>Correct Answer</label>
//               <select
//                 className="form-control"
//                 value={question.correct_answer || ""}
//                 onChange={(e) =>
//                   handleQuestionChange(index, "correct_answer", e.target.value)
//                 }
//                 onBlur={(e) =>
//                   handleQuestionChange(index, "correct_answer", e.target.value)
//                 }
//               >
//                 {question.options.map((option, optionIndex) => (
//                   <option key={optionIndex} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Upload Question Image</label>
//               <input
//                 type="file"
//                 className="form-control-file"
//                 name="question_image"
//                 onChange={(e) =>
//                   handleFileChange(index, "question_image", e.target.files[0])
//                 }
//               />
//             </div>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer explanation in English`}
//               value={question.answer_explanation_in_english || ""}
//               onChange={(e) =>
//                 handleQuestionChange(
//                   index,
//                   "answer_explanation_in_english",
//                   e.target.value
//                 )
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer explanation in Hindi`}
//               value={question.answer_explanation_in_hindi || ""}
//               onChange={(e) =>
//                 handleQuestionChange(
//                   index,
//                   "answer_explanation_in_hindi",
//                   e.target.value
//                 )
//               }
//             />
//             <div className="form-group">
//               <label>Upload Answer Image</label>
//               <input
//                 type="file"
//                 className="form-control-file"
//                 name="answer_image"
//                 onChange={(e) =>
//                   handleFileChange(index, "answer_image", e.target.files[0])
//                 }
//               />
//             </div>
//           </div>
//         ))}
//         <button
//           type="button"
//           className="btn btn-primary mb-3 mx-5"
//           onClick={addQuestion}
//         >
//           Add Question
//         </button>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//       {submitSuccess && (
//         <div className="alert alert-success" role="alert">
//           Quiz submitted successfully!
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddQuiz;
/////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { getAllSubjects } from "../actions/subjectActions";

// const AddQuiz = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [classs, setClasss] = useState("");
//   const [subject, setSubject] = useState("");
//   const [file, setFile] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const subjectsState = useSelector((state) => state.getAllSubjectsReducer);
//   const { subjects, loading, error } = subjectsState;

//   useEffect(() => {
//     dispatch(getAllSubjects());
//   }, [dispatch]);

//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       {
//         id: questions.length + 1,
//         question: "",
//         question_in_hindi: "",
//         question_image: null,
//         options: ["", "", "", ""],
//         correct_answer: "",
//         answer_explanation_in_english: "",
//         answer_explanation_in_hindi: "",
//         answer_image: null,
//       },
//     ]);
//   };

//   const handleQuestionChange = (index, field, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index][field] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleOptionChange = (questionIndex, optionIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].options[optionIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleFileChange = (index, field, file) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index][field] = file;
//     setQuestions(updatedQuestions);
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("difficulty", difficulty);
//     formData.append("classs", classs);
//     formData.append("subject", subject);
//     if (file) {
//       formData.append("quiz_image", file);
//     }
//     formData.append(
//       "questions",
//       JSON.stringify(
//         questions.map((q) => {
//           const question_image = q.question_image
//             ? `${q.id}_question_image`
//             : null;
//           const answer_image = q.answer_image ? `${q.id}_answer_image` : null;
//           return { ...q, question_image, answer_image };
//         })
//       )
//     );
//     questions.forEach((q, index) => {
//       if (q.question_image) {
//         formData.append(
//           "questions_images",
//           q.question_image,
//           `${q.id}_question_image`
//         );
//       }
//       if (q.answer_image) {
//         formData.append(
//           "questions_images",
//           q.answer_image,
//           `${q.id}_answer_image`
//         );
//       }
//     });

//     try {
//       const response = await axios.post("/api/quizs/addquiz", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log(response);
//       setSubmitSuccess(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <hr></hr>
//       <h1>Add New Quiz</h1>
//       <hr></hr>
//       <form onSubmit={submitHandler} encType="multipart/form-data">
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Difficulty</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz difficulty"
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Class</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter class"
//             value={classs}
//             onChange={(e) => setClasss(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Subject</label>
//           <select
//             className="form-control"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           >
//             <option value="">Select Subject</option>
//             {subjects &&
//               subjects.map((sub) => (
//                 <option key={sub._id} value={sub.sub}>
//                   {sub.sub}
//                 </option>
//               ))}
//           </select>
//         </div>
//         <div className="form-group pd-5">
//           <label>Upload Quiz Image</label>
//           <input
//             type="file"
//             className="form-control-file"
//             name="quiz_image"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>
//         {questions.map((question, index) => (
//           <div key={index} className="mb-3">
//             <label>Question {index + 1}</label>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter question ${index + 1}`}
//               value={question.question || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "question", e.target.value)
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter question ${index + 1} in Hindi`}
//               value={question.question_in_hindi || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "question_in_hindi", e.target.value)
//               }
//             />
//             <label>Options</label>
//             {question.options.map((option, optionIndex) => (
//               <input
//                 key={optionIndex}
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder={`Enter option ${optionIndex + 1}`}
//                 value={option || ""}
//                 onChange={(e) =>
//                   handleOptionChange(index, optionIndex, e.target.value)
//                 }
//               />
//             ))}
//             <div className="form-group">
//               <label>Correct Answer</label>
//               <select
//                 className="form-control"
//                 value={question.correct_answer || ""}
//                 onChange={(e) =>
//                   handleQuestionChange(index, "correct_answer", e.target.value)
//                 }
//                 onBlur={(e) =>
//                   handleQuestionChange(index, "correct_answer", e.target.value)
//                 }
//               >
//                 {question.options.map((option, optionIndex) => (
//                   <option key={optionIndex} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Upload Question Image</label>
//               <input
//                 type="file"
//                 className="form-control-file"
//                 name="question_image"
//                 onChange={(e) =>
//                   handleFileChange(index, "question_image", e.target.files[0])
//                 }
//               />
//             </div>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer explanation in English`}
//               value={question.answer_explanation_in_english || ""}
//               onChange={(e) =>
//                 handleQuestionChange(
//                   index,
//                   "answer_explanation_in_english",
//                   e.target.value
//                 )
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer explanation in Hindi`}
//               value={question.answer_explanation_in_hindi || ""}
//               onChange={(e) =>
//                 handleQuestionChange(
//                   index,
//                   "answer_explanation_in_hindi",
//                   e.target.value
//                 )
//               }
//             />
//             <div className="form-group">
//               <label>Upload Answer Image</label>
//               <input
//                 type="file"
//                 className="form-control-file"
//                 name="answer_image"
//                 onChange={(e) =>
//                   handleFileChange(index, "answer_image", e.target.files[0])
//                 }
//               />
//             </div>
//           </div>
//         ))}
//         <button
//           type="button"
//           className="btn btn-primary mb-3 mx-5"
//           onClick={addQuestion}
//         >
//           Add Question
//         </button>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//       {submitSuccess && (
//         <div className="alert alert-success" role="alert">
//           Quiz submitted successfully!
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddQuiz;
/////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { getAllSubjects } from "../actions/subjectActions";
// import { getAllDifficultys } from "../actions/difficultyActions";

// const AddQuiz = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [classs, setClasss] = useState("");
//   const [subject, setSubject] = useState("");
//   const [file, setFile] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const subjectsState = useSelector((state) => state.getAllSubjectsReducer);
//   const {
//     subjects,
//     loading: subjectsLoading,
//     error: subjectsError,
//   } = subjectsState;

//   const difficultysState = useSelector(
//     (state) => state.getAllDifficultysReducer
//   );
//   const {
//     difficultys,
//     loading: difficultysLoading,
//     error: difficultysError,
//   } = difficultysState;

//   useEffect(() => {
//     dispatch(getAllSubjects());
//     dispatch(getAllDifficultys());
//   }, [dispatch]);

//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       {
//         id: questions.length + 1,
//         question: "",
//         question_in_hindi: "",
//         question_image: null,
//         options: ["", "", "", ""],
//         correct_answer: "",
//         answer_explanation_in_english: "",
//         answer_explanation_in_hindi: "",
//         answer_image: null,
//       },
//     ]);
//   };

//   const handleQuestionChange = (index, field, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index][field] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleOptionChange = (questionIndex, optionIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].options[optionIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleFileChange = (index, field, file) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index][field] = file;
//     setQuestions(updatedQuestions);
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("difficulty", difficulty);
//     formData.append("classs", classs);
//     formData.append("subject", subject);
//     if (file) {
//       formData.append("quiz_image", file);
//     }
//     formData.append(
//       "questions",
//       JSON.stringify(
//         questions.map((q) => {
//           const question_image = q.question_image
//             ? `${q.id}_question_image`
//             : null;
//           const answer_image = q.answer_image ? `${q.id}_answer_image` : null;
//           return { ...q, question_image, answer_image };
//         })
//       )
//     );
//     questions.forEach((q, index) => {
//       if (q.question_image) {
//         formData.append(
//           "questions_images",
//           q.question_image,
//           `${q.id}_question_image`
//         );
//       }
//       if (q.answer_image) {
//         formData.append(
//           "questions_images",
//           q.answer_image,
//           `${q.id}_answer_image`
//         );
//       }
//     });

//     try {
//       const response = await axios.post("/api/quizs/addquiz", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log(response);
//       setSubmitSuccess(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <hr></hr>
//       <h1>Add New Quiz</h1>
//       <hr></hr>
//       <form onSubmit={submitHandler} encType="multipart/form-data">
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter quiz name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Difficulty</label>
//           <select
//             className="form-control"
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//           >
//             <option value="">Select Difficulty</option>
//             {difficultys &&
//               difficultys.map((diff) => (
//                 <option key={diff._id} value={diff.diff}>
//                   {diff.diff}
//                 </option>
//               ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Classs</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter classs"
//             value={classs}
//             onChange={(e) => setClasss(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Subject</label>
//           <select
//             className="form-control"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           >
//             <option value="">Select Subject</option>
//             {subjects &&
//               subjects.map((sub) => (
//                 <option key={sub._id} value={sub.sub}>
//                   {sub.sub}
//                 </option>
//               ))}
//           </select>
//         </div>
//         <div className="form-group pd-5">
//           <label>Upload Quiz Image</label>
//           <input
//             type="file"
//             className="form-control-file"
//             name="quiz_image"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>
//         {questions.map((question, index) => (
//           <div key={index} className="mb-3">
//             <label>Question {index + 1}</label>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter question ${index + 1}`}
//               value={question.question || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "question", e.target.value)
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter question ${index + 1} in Hindi`}
//               value={question.question_in_hindi || ""}
//               onChange={(e) =>
//                 handleQuestionChange(index, "question_in_hindi", e.target.value)
//               }
//             />
//             <label>Options</label>
//             {question.options.map((option, optionIndex) => (
//               <input
//                 key={optionIndex}
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder={`Enter option ${optionIndex + 1}`}
//                 value={option || ""}
//                 onChange={(e) =>
//                   handleOptionChange(index, optionIndex, e.target.value)
//                 }
//               />
//             ))}
//             <div className="form-group">
//               <label>Correct Answer</label>
//               <select
//                 className="form-control"
//                 value={question.correct_answer || ""}
//                 onChange={(e) =>
//                   handleQuestionChange(index, "correct_answer", e.target.value)
//                 }
//                 onBlur={(e) =>
//                   handleQuestionChange(index, "correct_answer", e.target.value)
//                 }
//               >
//                 {question.options.map((option, optionIndex) => (
//                   <option key={optionIndex} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Upload Question Image</label>
//               <input
//                 type="file"
//                 className="form-control-file"
//                 name="question_image"
//                 onChange={(e) =>
//                   handleFileChange(index, "question_image", e.target.files[0])
//                 }
//               />
//             </div>
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer explanation in English`}
//               value={question.answer_explanation_in_english || ""}
//               onChange={(e) =>
//                 handleQuestionChange(
//                   index,
//                   "answer_explanation_in_english",
//                   e.target.value
//                 )
//               }
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder={`Enter answer explanation in Hindi`}
//               value={question.answer_explanation_in_hindi || ""}
//               onChange={(e) =>
//                 handleQuestionChange(
//                   index,
//                   "answer_explanation_in_hindi",
//                   e.target.value
//                 )
//               }
//             />
//             <div className="form-group">
//               <label>Upload Answer Image</label>
//               <input
//                 type="file"
//                 className="form-control-file"
//                 name="answer_image"
//                 onChange={(e) =>
//                   handleFileChange(index, "answer_image", e.target.files[0])
//                 }
//               />
//             </div>
//           </div>
//         ))}
//         <button
//           type="button"
//           className="btn btn-primary mb-3 mx-5"
//           onClick={addQuestion}
//         >
//           Add Question
//         </button>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//       {submitSuccess && (
//         <div className="alert alert-success" role="alert">
//           Quiz submitted successfully!
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddQuiz;
/////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAllSubjects } from "../actions/subjectActions";
import { getAllDifficultys } from "../actions/difficultyActions";
import { getAllClassss } from "../actions/classsActions";

const AddQuiz = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [classs, setClasss] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const subjectsState = useSelector((state) => state.getAllSubjectsReducer);
  const {
    subjects,
    loading: subjectsLoading,
    error: subjectsError,
  } = subjectsState;

  const difficultysState = useSelector(
    (state) => state.getAllDifficultysReducer
  );
  const {
    difficultys,
    loading: difficultysLoading,
    error: difficultysError,
  } = difficultysState;

  const classssState = useSelector((state) => state.getAllClassssReducer);
  const {
    classss,
    loading: classssLoading,
    error: classssError,
  } = classssState;

  useEffect(() => {
    dispatch(getAllSubjects());
    dispatch(getAllDifficultys());
    dispatch(getAllClassss());
  }, [dispatch]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
        question: "",
        question_in_hindi: "",
        question_image: null,
        options: ["", "", "", ""],
        correct_answer: "",
        answer_explanation_in_english: "",
        answer_explanation_in_hindi: "",
        answer_image: null,
      },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleFileChange = (index, field, file) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = file;
    setQuestions(updatedQuestions);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("difficulty", difficulty);
    formData.append("classs", classs);
    formData.append("subject", subject);
    if (file) {
      formData.append("quiz_image", file);
    }
    formData.append(
      "questions",
      JSON.stringify(
        questions.map((q) => {
          const question_image = q.question_image
            ? `${q.id}_question_image`
            : null;
          const answer_image = q.answer_image ? `${q.id}_answer_image` : null;
          return { ...q, question_image, answer_image };
        })
      )
    );
    questions.forEach((q, index) => {
      if (q.question_image) {
        formData.append(
          "questions_images",
          q.question_image,
          `${q.id}_question_image`
        );
      }
      if (q.answer_image) {
        formData.append(
          "questions_images",
          q.answer_image,
          `${q.id}_answer_image`
        );
      }
    });

    try {
      const response = await axios.post("/api/quizs/addquiz", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      setSubmitSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <hr></hr>
      <h1>Add New Quiz</h1>
      <hr></hr>
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter quiz name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ border: "1px solid black", marginBottom: "10px" }}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{ marginBottom: "10px" }}
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
            value={classs}
            onChange={(e) => setClasss(e.target.value)}
            style={{ marginBottom: "10px" }}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ marginBottom: "10px" }}
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
        <div className="form-group pd-5">
          <label>Upload Quiz Image</label>
          <input
            type="file"
            className="form-control-file"
            name="quiz_image"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginBottom: "30px" }}
          />
        </div>
        {questions.map((question, index) => (
          <div key={index} className="mb-3">
            <label>Question {index + 1}</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder={`Enter question ${index + 1}`}
              value={question.question || ""}
              onChange={(e) =>
                handleQuestionChange(index, "question", e.target.value)
              }
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder={`Enter question ${index + 1} in Hindi`}
              value={question.question_in_hindi || ""}
              onChange={(e) =>
                handleQuestionChange(index, "question_in_hindi", e.target.value)
              }
            />
            <label>Options</label>
            {question.options.map((option, optionIndex) => (
              <input
                key={optionIndex}
                type="text"
                className="form-control mb-2"
                placeholder={`Enter option ${optionIndex + 1}`}
                value={option || ""}
                onChange={(e) =>
                  handleOptionChange(index, optionIndex, e.target.value)
                }
              />
            ))}
            <div className="form-group">
              <label>Correct Answer</label>
              <select
                className="form-control"
                value={question.correct_answer || ""}
                onChange={(e) =>
                  handleQuestionChange(index, "correct_answer", e.target.value)
                }
                onBlur={(e) =>
                  handleQuestionChange(index, "correct_answer", e.target.value)
                }
              >
                {question.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Upload Question Image</label>
              <input
                type="file"
                className="form-control-file"
                name="question_image"
                onChange={(e) =>
                  handleFileChange(index, "question_image", e.target.files[0])
                }
              />
            </div>
            <input
              type="text"
              className="form-control mb-2"
              placeholder={`Enter answer explanation in English`}
              value={question.answer_explanation_in_english || ""}
              onChange={(e) =>
                handleQuestionChange(
                  index,
                  "answer_explanation_in_english",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder={`Enter answer explanation in Hindi`}
              value={question.answer_explanation_in_hindi || ""}
              onChange={(e) =>
                handleQuestionChange(
                  index,
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
                onChange={(e) =>
                  handleFileChange(index, "answer_image", e.target.files[0])
                }
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary mb-3 mx-5"
          onClick={addQuestion}
        >
          Add Question
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginBottom: "20px" }}
        >
          Submit
        </button>
      </form>
      {submitSuccess && (
        <div className="alert alert-success" role="alert">
          Quiz submitted successfully!
        </div>
      )}
    </div>
  );
};

export default AddQuiz;
