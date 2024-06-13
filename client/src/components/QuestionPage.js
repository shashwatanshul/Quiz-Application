// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IoVolumeHighOutline } from "react-icons/io5";

// function QuestionPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const questions = location.state ? location.state.questions : null;
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [feedbackMessage, setFeedbackMessage] = useState("");
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [showQuestionImage, setShowQuestionImage] = useState(true);
//   const [showAnswerImage, setShowAnswerImage] = useState(false);
//   const [shouldReadExplanation, setShouldReadExplanation] = useState(false);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//     const currentQuestion = questions[currentQuestionIndex];
//     if (event.target.value === currentQuestion.correct_answer) {
//       setFeedbackMessage("Correct Option Chosen");
//       setIsCorrect(true);
//       setShowAnswerImage(true);
//       setShouldReadExplanation(true);
//     } else {
//       setFeedbackMessage("Wrong Answer Chosen");
//       setIsCorrect(false);
//       setShowAnswerImage(false);
//       setShouldReadExplanation(false);
//     }
//   };

//   const clearOptions = () => {
//     setSelectedOption(null);
//     setFeedbackMessage("");
//     setShowAnswerImage(false);
//     setShouldReadExplanation(false);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       clearOptions();
//       setShowQuestionImage(true);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       clearOptions();
//       setShowQuestionImage(true);
//     }
//   };

//   const handleQuestionChange = (index) => {
//     setCurrentQuestionIndex(index);
//     clearOptions();
//     setShowQuestionImage(true);
//   };

//   const handleVoiceReading = () => {
//     const speech = new SpeechSynthesisUtterance();
//     const currentQuestion = questions[currentQuestionIndex];
//     let fullText = `Question ${currentQuestionIndex + 1}. ${
//       currentQuestion.question
//     }. ${currentQuestion.question_in_hindi}. Options are: `;
//     currentQuestion.options.forEach(
//       (option, index) => (fullText += `${option}. `)
//     );
//     if (shouldReadExplanation) {
//       fullText += `Explanation in English: ${currentQuestion.answer_explanation_in_english}. Explanation in Hindi: ${currentQuestion.answer_explanation_in_hindi}.`;
//     }
//     speech.text = fullText;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
//     speech.lang = "hi-IN"; // Set language to Hindi
//     window.speechSynthesis.speak(speech);
//   };

//   if (!questions) {
//     return <div className="container mt-3">Loading...</div>;
//   }

//   const handleReturnToQuizList = () => {
//     navigate("/bauddhadakshata");
//   };

//   return (
//     <div
//       className="container-fluid"
//       style={{ display: "flex", paddingTop: "70px" }}
//     >
//       <div
//         className="question-content"
//         style={{ flexGrow: 1, marginRight: "20px" }}
//       >
//         <div>
//           <button className="btn btn-primary" onClick={handleReturnToQuizList}>
//             Return to Quiz List
//           </button>
//         </div>
//         <h1 style={{ textAlign: "left" }}>
//           Question {currentQuestionIndex + 1}
//           <button
//             className=""
//             onClick={handleVoiceReading}
//             style={{ fontSize: "14px", marginLeft: "10px" }}
//           >
//             <IoVolumeHighOutline style={{ color: "black" }} />
//           </button>
//         </h1>
//         <p style={{ textAlign: "left" }}>
//           {questions[currentQuestionIndex].question}
//         </p>
//         <p style={{ textAlign: "left", fontWeight: "bold" }}>
//           {questions[currentQuestionIndex].question_in_hindi}
//         </p>
//         {showQuestionImage && (
//           <div>
//             <img
//               src={`${questions[currentQuestionIndex].question_image}`}
//               alt="Question Image"
//               width="450"
//               height="300"
//               style={{ marginTop: "10px" }}
//             />
//           </div>
//         )}
//         <form style={{ textAlign: "left" }}>
//           {questions[currentQuestionIndex].options.map((option, index) => (
//             <div
//               className="form-check"
//               key={index}
//               style={{ marginBottom: "10px", display: "flex" }}
//             >
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id={`option${index}`}
//                 name="option"
//                 value={option}
//                 checked={option === selectedOption}
//                 onChange={handleOptionChange}
//                 style={{
//                   verticalAlign: "middle",
//                   marginRight: "5px",
//                   border: "1px solid black",
//                   boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
//                   borderRadius: "50%",
//                   padding: "2px",
//                 }}
//               />
//               <label className="form-check-label" htmlFor={`option${index}`}>
//                 {option}
//               </label>
//             </div>
//           ))}
//         </form>
//         <div>
//           {currentQuestionIndex > 0 && (
//             <button
//               className="btn btn-secondary"
//               style={{ marginRight: "10px" }}
//               onClick={handlePreviousQuestion}
//             >
//               Previous
//             </button>
//           )}
//           {currentQuestionIndex < questions.length - 1 && (
//             <button
//               className="btn btn-primary"
//               style={{ marginRight: "10px" }}
//               onClick={handleNextQuestion}
//             >
//               Next
//             </button>
//           )}
//           <button className="btn btn-warning" onClick={clearOptions}>
//             Clear Options
//           </button>
//           <div
//             style={{
//               marginTop: "10px",
//               fontWeight: "bold",
//               color: isCorrect ? "green" : "red",
//             }}
//           >
//             {feedbackMessage}
//           </div>
//           {showAnswerImage && isCorrect && (
//             <div style={{ display: "flex", marginTop: "10px" }}>
//               <div style={{ flexGrow: 1 }}>
//                 <p>
//                   {
//                     questions[currentQuestionIndex]
//                       .answer_explanation_in_english
//                   }
//                 </p>
//               </div>

//               <div>
//                 <img
//                   src={`${questions[currentQuestionIndex].answer_image}`}
//                   alt="Answer Image"
//                   style={{ width: "100%", marginTop: "10px" }}
//                 />
//               </div>
//               <div style={{ flexGrow: 1 }}>
//                 <p>
//                   {questions[currentQuestionIndex].answer_explanation_in_hindi}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <div
//         className="navigation-box"
//         style={{
//           width: "150px",
//           overflowY: "auto",
//           maxHeight: "200px",
//           padding: "5px",
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "5px",
//         }}
//       >
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             className="btn btn-link"
//             style={{
//               width: "30px",
//               height: "30px",
//               padding: "0",
//               margin: "1px",
//               borderRadius: "50%",
//               textAlign: "center",
//               lineHeight: "30px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "12px",
//               color: "black",
//               backgroundColor:
//                 currentQuestionIndex === index ? "green" : "white",
//             }}
//             onClick={() => handleQuestionChange(index)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default QuestionPage;
///////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IoVolumeHighOutline } from "react-icons/io5";

// function QuestionPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const questions = location.state ? location.state.questions : null;
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [feedbackMessage, setFeedbackMessage] = useState("");
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [showQuestionImage, setShowQuestionImage] = useState(true);
//   const [showAnswerImage, setShowAnswerImage] = useState(false);
//   const [shouldReadExplanation, setShouldReadExplanation] = useState(false);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//     const currentQuestion = questions[currentQuestionIndex];
//     if (event.target.value === currentQuestion.correct_answer) {
//       setFeedbackMessage("Correct Option Chosen");
//       setIsCorrect(true);
//       setShowAnswerImage(true);
//       setShouldReadExplanation(true);
//     } else {
//       setFeedbackMessage("Wrong Answer Chosen");
//       setIsCorrect(false);
//       setShowAnswerImage(false);
//       setShouldReadExplanation(false);
//     }
//   };

//   const clearOptions = () => {
//     setSelectedOption(null);
//     setFeedbackMessage("");
//     setShowAnswerImage(false);
//     setShouldReadExplanation(false);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       clearOptions();
//       setShowQuestionImage(true);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       clearOptions();
//       setShowQuestionImage(true);
//     }
//   };

//   const handleQuestionChange = (index) => {
//     setCurrentQuestionIndex(index);
//     clearOptions();
//     setShowQuestionImage(true);
//   };

//   const handleVoiceReading = () => {
//     const speech = new SpeechSynthesisUtterance();
//     const currentQuestion = questions[currentQuestionIndex];
//     let fullText = `Question ${currentQuestionIndex + 1}. ${
//       currentQuestion.question
//     }. ${currentQuestion.question_in_hindi}. Options are: `;
//     currentQuestion.options.forEach(
//       (option, index) => (fullText += `${option}. `)
//     );
//     if (shouldReadExplanation) {
//       fullText += `Explanation in English: ${currentQuestion.answer_explanation_in_english}. Explanation in Hindi: ${currentQuestion.answer_explanation_in_hindi}.`;
//     }
//     speech.text = fullText;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
//     speech.lang = "hi-IN"; // Set language to Hindi
//     window.speechSynthesis.speak(speech);
//   };

//   if (!questions) {
//     return <div className="container mt-3">Loading...</div>;
//   }

//   const handleReturnToQuizList = () => {
//     navigate("/bauddhadakshata");
//   };

//   return (
//     <div
//       className="container-fluid"
//       style={{ display: "flex", paddingTop: "70px" }}
//     >
//       <div
//         className="question-content"
//         style={{ flexGrow: 1, marginRight: "20px" }}
//       >
//         <div>
//           <button className="btn btn-primary" onClick={handleReturnToQuizList}>
//             Return to Quiz List
//           </button>
//         </div>
//         <h1 style={{ textAlign: "left" }}>
//           Question {currentQuestionIndex + 1}
//           <button
//             className=""
//             onClick={handleVoiceReading}
//             style={{ fontSize: "14px", marginLeft: "10px" }}
//           >
//             <IoVolumeHighOutline style={{ color: "black" }} />
//           </button>
//         </h1>
//         <p style={{ textAlign: "left" }}>
//           {questions[currentQuestionIndex].question}
//         </p>
//         <p style={{ textAlign: "left", fontWeight: "bold" }}>
//           {questions[currentQuestionIndex].question_in_hindi}
//         </p>
//         {questions[currentQuestionIndex].question_image && (
//           <div>
//             <img
//               src={`${questions[currentQuestionIndex].question_image}`}
//               alt="Question Image"
//               width="450"
//               height="300"
//               style={{ marginTop: "10px" }}
//             />
//           </div>
//         )}
//         <form style={{ textAlign: "left" }}>
//           {questions[currentQuestionIndex].options.map((option, index) => (
//             <div
//               className="form-check"
//               key={index}
//               style={{ marginBottom: "10px", display: "flex" }}
//             >
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id={`option${index}`}
//                 name="option"
//                 value={option}
//                 checked={option === selectedOption}
//                 onChange={handleOptionChange}
//                 style={{
//                   verticalAlign: "middle",
//                   marginRight: "5px",
//                   border: "1px solid black",
//                   boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
//                   borderRadius: "50%",
//                   padding: "2px",
//                 }}
//               />
//               <label className="form-check-label" htmlFor={`option${index}`}>
//                 {option}
//               </label>
//             </div>
//           ))}
//         </form>
//         <div>
//           {currentQuestionIndex > 0 && (
//             <button
//               className="btn btn-secondary"
//               style={{ marginRight: "10px" }}
//               onClick={handlePreviousQuestion}
//             >
//               Previous
//             </button>
//           )}
//           {currentQuestionIndex < questions.length - 1 && (
//             <button
//               className="btn btn-primary"
//               style={{ marginRight: "10px" }}
//               onClick={handleNextQuestion}
//             >
//               Next
//             </button>
//           )}
//           <button className="btn btn-warning" onClick={clearOptions}>
//             Clear Options
//           </button>
//           <div
//             style={{
//               marginTop: "10px",
//               fontWeight: "bold",
//               color: isCorrect ? "green" : "red",
//             }}
//           >
//             {feedbackMessage}
//           </div>
//           {showAnswerImage && isCorrect && (
//             <div style={{ display: "flex", marginTop: "10px" }}>
//               <div style={{ flexGrow: 1 }}>
//                 <p>
//                   {
//                     questions[currentQuestionIndex]
//                       .answer_explanation_in_english
//                   }
//                 </p>
//               </div>

//               <div>
//                 <img
//                   src={`${questions[currentQuestionIndex].answer_image}`}
//                   alt="Answer Image"
//                   style={{ width: "100%", marginTop: "10px" }}
//                 />
//               </div>
//               <div style={{ flexGrow: 1 }}>
//                 <p>
//                   {questions[currentQuestionIndex].answer_explanation_in_hindi}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <div
//         className="navigation-box"
//         style={{
//           width: "150px",
//           overflowY: "auto",
//           maxHeight: "200px",
//           padding: "5px",
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "5px",
//         }}
//       >
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             className="btn btn-link"
//             style={{
//               width: "30px",
//               height: "30px",
//               padding: "0",
//               margin: "1px",
//               borderRadius: "50%",
//               textAlign: "center",
//               lineHeight: "30px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "12px",
//               color: "black",
//               backgroundColor:
//                 currentQuestionIndex === index ? "green" : "white",
//             }}
//             onClick={() => handleQuestionChange(index)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default QuestionPage;
// //////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IoVolumeHighOutline } from "react-icons/io5";

// function QuestionPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const questions = location.state ? location.state.questions : null;
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [feedbackMessage, setFeedbackMessage] = useState("");
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [showQuestionImage, setShowQuestionImage] = useState(true);
//   const [showAnswerImage, setShowAnswerImage] = useState(false);
//   const [shouldReadExplanation, setShouldReadExplanation] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//     const currentQuestion = questions[currentQuestionIndex];
//     if (event.target.value === currentQuestion.correct_answer) {
//       setFeedbackMessage("Correct Option Chosen");
//       setIsCorrect(true);
//       setShowAnswerImage(true);
//       setShouldReadExplanation(true);
//     } else {
//       setFeedbackMessage("Wrong Answer Chosen");
//       setIsCorrect(false);
//       setShowAnswerImage(false);
//       setShouldReadExplanation(false);
//     }
//   };

//   const clearOptions = () => {
//     setSelectedOption(null);
//     setFeedbackMessage("");
//     setShowAnswerImage(false);
//     setShouldReadExplanation(false);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       clearOptions();
//       setShowQuestionImage(true);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       clearOptions();
//       setShowQuestionImage(true);
//     }
//   };

//   const handleQuestionChange = (index) => {
//     setCurrentQuestionIndex(index);
//     clearOptions();
//     setShowQuestionImage(true);
//   };

//   const handleVoiceReading = () => {
//     const speech = new SpeechSynthesisUtterance();
//     const currentQuestion = questions[currentQuestionIndex];
//     let fullText = `Question ${currentQuestionIndex + 1}. ${
//       currentQuestion.question
//     }. ${currentQuestion.question_in_hindi}. Options are: `;
//     currentQuestion.options.forEach(
//       (option, index) => (fullText += `${option}. `)
//     );
//     if (shouldReadExplanation) {
//       fullText += `Explanation in English: ${currentQuestion.answer_explanation_in_english}. Explanation in Hindi: ${currentQuestion.answer_explanation_in_hindi}.`;
//     }
//     speech.text = fullText;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
//     speech.lang = "hi-IN"; // Set language to Hindi
//     window.speechSynthesis.speak(speech);
//   };

//   if (!questions) {
//     return <div className="container mt-3">Loading...</div>;
//   }

//   const handleReturnToQuizList = () => {
//     navigate("/bauddhadakshata");
//   };

//   return (
//     <div
//       className="container-fluid"
//       style={{ display: "flex", paddingTop: "70px" }}
//     >
//       <div
//         className="question-content"
//         style={{ flexGrow: 1, marginRight: "20px" }}
//       >
//         <div>
//           <button className="btn btn-primary" onClick={handleReturnToQuizList}>
//             Return to Quiz List
//           </button>
//         </div>
//         <br></br>
//         <div>
//           <div
//             className="navigation-bar"
//             style={{
//               width: isMobile ? "300px" : "400px",

//               overflowY: "auto",
//               maxHeight: "200px",
//               padding: "5px",
//               display: "flex",
//               //gridTemplateColumns: "repeat(3, 1fr)",
//               gap: "5px",
//             }}
//           >
//             {questions.map((_, index) => (
//               <button
//                 key={index}
//                 className="btn btn-link"
//                 style={{
//                   width: "30px",
//                   height: "30px",
//                   padding: "10px",
//                   margin: "1px",
//                   borderRadius: "50%",
//                   textAlign: "center",
//                   lineHeight: "30px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "12px",
//                   color: "black",
//                   backgroundColor:
//                     currentQuestionIndex === index ? "green" : "white",
//                 }}
//                 onClick={() => handleQuestionChange(index)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//         <br></br>
//         <h1 style={{ textAlign: "left" }}>
//           Question {currentQuestionIndex + 1}
//           <button
//             className=""
//             onClick={handleVoiceReading}
//             style={{ fontSize: "14px", marginLeft: "10px" }}
//           >
//             <IoVolumeHighOutline style={{ color: "black" }} />
//           </button>
//         </h1>
//         <p style={{ textAlign: "left" }}>
//           {questions[currentQuestionIndex].question}
//         </p>
//         <p style={{ textAlign: "left", fontWeight: "bold" }}>
//           {questions[currentQuestionIndex].question_in_hindi}
//         </p>
//         {questions[currentQuestionIndex].question_image && (
//           <div>
//             <img
//               src={`${questions[currentQuestionIndex].question_image}`}
//               alt="Question Image"
//               width="450"
//               height="300"
//               style={{
//                 maxWidth: isMobile ? "90%" : "100%",
//                 height: "auto",
//                 marginTop: "10px",
//               }}
//             />
//           </div>
//         )}
//         <form style={{ textAlign: "left" }}>
//           {questions[currentQuestionIndex].options.map((option, index) => (
//             <div
//               className="form-check"
//               key={index}
//               style={{ marginBottom: "10px", display: "flex" }}
//             >
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id={`option${index}`}
//                 name="option"
//                 value={option}
//                 checked={option === selectedOption}
//                 onChange={handleOptionChange}
//                 style={{
//                   verticalAlign: "middle",
//                   marginRight: "5px",
//                   border: "1px solid black",
//                   boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
//                   borderRadius: "50%",
//                   padding: "2px",
//                 }}
//               />
//               <label className="form-check-label" htmlFor={`option${index}`}>
//                 {option}
//               </label>
//             </div>
//           ))}
//         </form>
//         <div>
//           {currentQuestionIndex > 0 && (
//             <button
//               className="btn btn-secondary"
//               style={{ marginRight: "10px" }}
//               onClick={handlePreviousQuestion}
//             >
//               Previous
//             </button>
//           )}
//           {currentQuestionIndex < questions.length - 1 && (
//             <button
//               className="btn btn-primary"
//               style={{ marginRight: "10px" }}
//               onClick={handleNextQuestion}
//             >
//               Next
//             </button>
//           )}
//           <button className="btn btn-warning" onClick={clearOptions}>
//             Clear Options
//           </button>
//           <div
//             style={{
//               marginTop: "10px",
//               fontWeight: "bold",
//               color: isCorrect ? "green" : "red",
//             }}
//           >
//             {feedbackMessage}
//           </div>
//           {showAnswerImage && isCorrect && (
//             <div
//               style={{
//                 display: isMobile ? "inline" : "flex",
//                 marginTop: "10px",
//               }}
//             >
//               <div style={{ flexGrow: 1 }}>
//                 <p>
//                   {
//                     questions[currentQuestionIndex]
//                       .answer_explanation_in_english
//                   }
//                 </p>
//               </div>

//               <div>
//                 <img
//                   src={`${questions[currentQuestionIndex].answer_image}`}
//                   alt="Answer Image"
//                   style={{
//                     width: isMobile ? "90%" : "100%",
//                     marginTop: "10px",
//                   }}
//                 />
//               </div>
//               <div style={{ flexGrow: 1 }}>
//                 <p>
//                   {questions[currentQuestionIndex].answer_explanation_in_hindi}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuestionPage;
///////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IoVolumeHighOutline } from "react-icons/io5";

// function QuestionPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const questions = location.state ? location.state.questions : null;
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [feedbackMessage, setFeedbackMessage] = useState("");
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [showQuestionImage, setShowQuestionImage] = useState(true);
//   const [showAnswerImage, setShowAnswerImage] = useState(false);
//   const [shouldReadExplanation, setShouldReadExplanation] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//     const currentQuestion = questions[currentQuestionIndex];
//     if (event.target.value === currentQuestion.correct_answer) {
//       setFeedbackMessage("Correct Option Chosen");
//       setIsCorrect(true);
//       setShowAnswerImage(true);
//       setShouldReadExplanation(true);
//     } else {
//       setFeedbackMessage("Wrong Answer Chosen");
//       setIsCorrect(false);
//       setShowAnswerImage(false);
//       setShouldReadExplanation(false);
//     }
//   };

//   const clearOptions = () => {
//     setSelectedOption(null);
//     setFeedbackMessage("");
//     setShowAnswerImage(false);
//     setShouldReadExplanation(false);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       clearOptions();
//       setShowQuestionImage(true);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       clearOptions();
//       setShowQuestionImage(true);
//     }
//   };

//   const handleQuestionChange = (index) => {
//     setCurrentQuestionIndex(index);
//     clearOptions();
//     setShowQuestionImage(true);
//   };

//   const handleVoiceReading = () => {
//     const speech = new SpeechSynthesisUtterance();
//     const currentQuestion = questions[currentQuestionIndex];
//     let fullText = `Question ${currentQuestionIndex + 1}. ${
//       currentQuestion.question
//     }. ${currentQuestion.question_in_hindi}. Options are: `;
//     currentQuestion.options.forEach(
//       (option, index) => (fullText += `${option}. `)
//     );
//     if (shouldReadExplanation) {
//       fullText += `Explanation in English: ${currentQuestion.answer_explanation_in_english}. Explanation in Hindi: ${currentQuestion.answer_explanation_in_hindi}.`;
//     }
//     speech.text = fullText;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
//     speech.lang = "hi-IN"; // Set language to Hindi
//     window.speechSynthesis.speak(speech);
//   };

//   if (!questions) {
//     return <div className="container mt-3">Loading...</div>;
//   }

//   const handleReturnToQuizList = () => {
//     navigate("/bauddhadakshata");
//   };

//   const modifyImageUrl = (imageUrl) => {
//     const fileId = imageUrl.match(/\/d\/(.+?)\//)[1]; // Extract file ID from URL
//     return `https://lh3.googleusercontent.com/d/${fileId}=s1900?authuser=0`; // Construct thumbnail URL
//   };

//   return (
//     <div
//       className="container-fluid"
//       style={{ display: "flex", paddingTop: "70px" }}
//     >
//       <div
//         className="question-content"
//         style={{ flexGrow: 1, marginRight: "20px" }}
//       >
//         <div>
//           <button className="btn btn-primary" onClick={handleReturnToQuizList}>
//             Return to Quiz List
//           </button>
//         </div>
//         <br></br>
//         <div>
//           <div
//             className="navigation-bar"
//             style={{
//               width: isMobile ? "300px" : "400px",

//               overflowY: "auto",
//               maxHeight: "200px",
//               padding: "5px",
//               display: "flex",
//               //gridTemplateColumns: "repeat(3, 1fr)",
//               gap: "5px",
//             }}
//           >
//             {questions.map((_, index) => (
//               <button
//                 key={index}
//                 className="btn btn-link"
//                 style={{
//                   width: "30px",
//                   height: "30px",
//                   padding: "10px",
//                   margin: "1px",
//                   borderRadius: "50%",
//                   textAlign: "center",
//                   lineHeight: "30px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "12px",
//                   color: "black",
//                   backgroundColor:
//                     currentQuestionIndex === index ? "green" : "white",
//                 }}
//                 onClick={() => handleQuestionChange(index)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//         <br></br>
//         <h1 style={{ textAlign: "left" }}>
//           Question {currentQuestionIndex + 1}
//           <button
//             className=""
//             onClick={handleVoiceReading}
//             style={{ fontSize: "14px", marginLeft: "10px" }}
//           >
//             <IoVolumeHighOutline style={{ color: "black" }} />
//           </button>
//         </h1>
//         <p style={{ textAlign: "left" }}>
//           {questions[currentQuestionIndex].question}
//         </p>
//         <p style={{ textAlign: "left", fontWeight: "bold" }}>
//           {questions[currentQuestionIndex].question_in_hindi}
//         </p>
//         {questions[currentQuestionIndex].question_image && (
//           <div>
//             <img
//               src={modifyImageUrl(
//                 questions[currentQuestionIndex].question_image
//               )}
//               alt="Question Image"
//               width="450"
//               height="300"
//               style={{
//                 maxWidth: isMobile ? "90%" : "100%",
//                 height: "auto",
//                 marginTop: "10px",
//               }}
//             />
//           </div>
//         )}
//         <form style={{ textAlign: "left" }}>
//           {questions[currentQuestionIndex].options.map((option, index) => (
//             <div
//               className="form-check"
//               key={index}
//               style={{ marginBottom: "10px", display: "flex" }}
//             >
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id={`option${index}`}
//                 name="option"
//                 value={option}
//                 checked={option === selectedOption}
//                 onChange={handleOptionChange}
//                 style={{
//                   verticalAlign: "middle",
//                   marginRight: "5px",
//                   border: "1px solid black",
//                   boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
//                   borderRadius: "50%",
//                   padding: "2px",
//                 }}
//               />
//               <label className="form-check-label" htmlFor={`option${index}`}>
//                 {option}
//               </label>
//             </div>
//           ))}
//         </form>
//         <div>
//           {currentQuestionIndex > 0 && (
//             <button
//               className="btn btn-secondary"
//               style={{ marginRight: "10px" }}
//               onClick={handlePreviousQuestion}
//             >
//               Previous
//             </button>
//           )}
//           {currentQuestionIndex < questions.length - 1 && (
//             <button
//               className="btn btn-primary"
//               style={{ marginRight: "10px" }}
//               onClick={handleNextQuestion}
//             >
//               Next
//             </button>
//           )}
//           <button className="btn btn-warning" onClick={clearOptions}>
//             Clear Options
//           </button>
//           <div
//             style={{
//               marginTop: "10px",
//               fontWeight: "bold",
//               color: isCorrect ? "green" : "red",
//             }}
//           >
//             {feedbackMessage}
//           </div>
//           {showAnswerImage && isCorrect && (
//             <div
//               style={{
//                 display: isMobile ? "inline" : "flex",
//                 marginTop: "10px",
//               }}
//             >
//               <div style={{ flexGrow: 1 }}>
//                 <p>
//                   {
//                     questions[currentQuestionIndex]
//                       .answer_explanation_in_english
//                   }
//                 </p>
//               </div>

//               <div style={{ flexGrow: 1 }}>
//                 <img
//                   src={modifyImageUrl(
//                     questions[currentQuestionIndex].answer_image
//                   )}
//                   alt="Answer Image"
//                   style={{
//                     width: isMobile ? "90%" : "50%",
//                     marginTop: "10px",
//                     margiBottom: "10px",
//                   }}
//                 />
//               </div>
//               <div style={{ flexGrow: 1 }}>
//                 <p>
//                   {questions[currentQuestionIndex].answer_explanation_in_hindi}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuestionPage;
// ////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IoVolumeHighOutline } from "react-icons/io5";
// import "./qp.css"; // Import the CSS file

// function QuestionPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const questions = location.state ? location.state.questions : null;
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [feedbackMessage, setFeedbackMessage] = useState("");
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [showQuestionImage, setShowQuestionImage] = useState(true);
//   const [showAnswerImage, setShowAnswerImage] = useState(false);
//   const [shouldReadExplanation, setShouldReadExplanation] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//     const currentQuestion = questions[currentQuestionIndex];
//     if (event.target.value === currentQuestion.correct_answer) {
//       setFeedbackMessage("Correct Option Chosen");
//       setIsCorrect(true);
//       setShowAnswerImage(true);
//       setShouldReadExplanation(true);
//     } else {
//       setFeedbackMessage("Wrong Answer Chosen");
//       setIsCorrect(false);
//       setShowAnswerImage(false);
//       setShouldReadExplanation(false);
//     }
//   };

//   const clearOptions = () => {
//     setSelectedOption(null);
//     setFeedbackMessage("");
//     setShowAnswerImage(false);
//     setShouldReadExplanation(false);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       clearOptions();
//       setShowQuestionImage(true);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       clearOptions();
//       setShowQuestionImage(true);
//     }
//   };

//   const handleQuestionChange = (index) => {
//     setCurrentQuestionIndex(index);
//     clearOptions();
//     setShowQuestionImage(true);
//   };

//   const handleVoiceReading = () => {
//     const speech = new SpeechSynthesisUtterance();
//     const currentQuestion = questions[currentQuestionIndex];
//     let fullText = `Question ${currentQuestionIndex + 1}. ${
//       currentQuestion.question
//     }. ${currentQuestion.question_in_hindi}. Options are: `;
//     currentQuestion.options.forEach(
//       (option, index) => (fullText += `${option}. `)
//     );
//     if (shouldReadExplanation) {
//       fullText += `Explanation in English: ${currentQuestion.answer_explanation_in_english}. Explanation in Hindi: ${currentQuestion.answer_explanation_in_hindi}.`;
//     }
//     speech.text = fullText;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
//     speech.lang = "hi-IN"; // Set language to Hindi
//     window.speechSynthesis.speak(speech);
//   };

//   const modifyImageUrl = (imageUrl) => {
//     const fileId = imageUrl.match(/\/d\/(.+?)\//)[1]; // Extract file ID from URL
//     return `https://lh3.googleusercontent.com/d/${fileId}=s1900?authuser=0`; // Construct thumbnail URL
//   };

//   if (!questions) {
//     return <div className="container mt-3">Loading...</div>;
//   }

//   const handleReturnToQuizList = () => {
//     navigate("/bauddhadakshata");
//   };

//   return (
//     <div className="container-fluid question-page-container">
//       <div className="question-content">
//         <div>
//           <button
//             className="btn btn-primary mt-5"
//             onClick={handleReturnToQuizList}
//           >
//             Return to Quiz List
//           </button>
//         </div>
//         <br></br>
//         <div>
//           <div className="navigation-bar">
//             {questions.map((_, index) => (
//               <button
//                 key={index}
//                 className={`btn btn-link navigation-button ${
//                   currentQuestionIndex === index ? "active" : ""
//                 }`}
//                 onClick={() => handleQuestionChange(index)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//         <br></br>
//         <h1 className="question-header">
//           Question {currentQuestionIndex + 1}
//           <button
//             className="voice-button"
//             onClick={handleVoiceReading}
//             style={{ fontSize: "14px", marginLeft: "10px" }}
//           >
//             <IoVolumeHighOutline style={{ color: "black" }} />
//           </button>
//         </h1>
//         <p className="question-text">
//           {questions[currentQuestionIndex].question}
//         </p>
//         <p className="question-text-bold">
//           {questions[currentQuestionIndex].question_in_hindi}
//         </p>
//         {questions[currentQuestionIndex].question_image && (
//           <div>
//             <img
//               src={modifyImageUrl(
//                 questions[currentQuestionIndex].question_image
//               )}
//               alt="Question Image"
//               className="question-image"
//             />
//           </div>
//         )}
//         <form className="options-form">
//           {questions[currentQuestionIndex].options.map((option, index) => (
//             <div className="form-check option-item" key={index}>
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id={`option${index}`}
//                 name="option"
//                 value={option}
//                 checked={option === selectedOption}
//                 onChange={handleOptionChange}
//               />
//               <label className="form-check-label" htmlFor={`option${index}`}>
//                 {option}
//               </label>
//             </div>
//           ))}
//         </form>
//         <div>
//           {currentQuestionIndex > 0 && (
//             <button
//               className="btn btn-secondary"
//               style={{ marginRight: "10px" }}
//               onClick={handlePreviousQuestion}
//             >
//               Previous
//             </button>
//           )}
//           {currentQuestionIndex < questions.length - 1 && (
//             <button
//               className="btn btn-primary"
//               style={{ marginRight: "10px" }}
//               onClick={handleNextQuestion}
//             >
//               Next
//             </button>
//           )}
//           <button className="btn btn-warning" onClick={clearOptions}>
//             Clear Options
//           </button>
//           <div
//             style={{
//               marginTop: "10px",
//               fontWeight: "bold",
//               color: isCorrect ? "green" : "red",
//             }}
//           >
//             {feedbackMessage}
//           </div>
//           {showAnswerImage && isCorrect && (
//             <div className="answer-explanation-container">
//               <div className="explanation-text-container">
//                 <p className="explanation-text">
//                   {
//                     questions[currentQuestionIndex]
//                       .answer_explanation_in_english
//                   }
//                 </p>
//               </div>
//               <div className="answer-image-container">
//                 <img
//                   src={modifyImageUrl(
//                     questions[currentQuestionIndex].answer_image
//                   )}
//                   alt="Answer Image"
//                   className="answer-image"
//                 />
//               </div>
//               <div className="explanation-text-container">
//                 <p className="explanation-text">
//                   {questions[currentQuestionIndex].answer_explanation_in_hindi}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuestionPage;
///////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IoVolumeHighOutline } from "react-icons/io5";
// import "./qp.css"; // Import the CSS file

// function QuestionPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const questions = location.state ? location.state.questions : null;
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [feedbackMessage, setFeedbackMessage] = useState("");
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [showQuestionImage, setShowQuestionImage] = useState(true);
//   const [showAnswerImage, setShowAnswerImage] = useState(false);
//   const [shouldReadExplanation, setShouldReadExplanation] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to top when the component mounts
//   }, []);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//     const currentQuestion = questions[currentQuestionIndex];
//     if (event.target.value === currentQuestion.correct_answer) {
//       setFeedbackMessage("Correct Option Chosen");
//       setIsCorrect(true);
//       setShowAnswerImage(true);
//       setShouldReadExplanation(true);
//     } else {
//       setFeedbackMessage("Wrong Answer Chosen");
//       setIsCorrect(false);
//       setShowAnswerImage(false);
//       setShouldReadExplanation(false);
//     }
//   };

//   const clearOptions = () => {
//     setSelectedOption(null);
//     setFeedbackMessage("");
//     setShowAnswerImage(false);
//     setShouldReadExplanation(false);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       clearOptions();
//       setShowQuestionImage(true);
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       clearOptions();
//       setShowQuestionImage(true);
//     }
//   };

//   const handleQuestionChange = (index) => {
//     setCurrentQuestionIndex(index);
//     clearOptions();
//     setShowQuestionImage(true);
//   };

//   const handleVoiceReading = () => {
//     const speech = new SpeechSynthesisUtterance();
//     const currentQuestion = questions[currentQuestionIndex];
//     let fullText = `Question ${currentQuestionIndex + 1}. ${
//       currentQuestion.question
//     }. ${currentQuestion.question_in_hindi}. Options are: `;
//     currentQuestion.options.forEach(
//       (option, index) => (fullText += `${option}. `)
//     );
//     if (shouldReadExplanation) {
//       fullText += `Explanation in English: ${currentQuestion.answer_explanation_in_english}. Explanation in Hindi: ${currentQuestion.answer_explanation_in_hindi}.`;
//     }
//     speech.text = fullText;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;
//     speech.lang = "hi-IN"; // Set language to Hindi
//     window.speechSynthesis.speak(speech);
//   };

//   const modifyImageUrl = (imageUrl) => {
//     const fileId = imageUrl.match(/\/d\/(.+?)\//)[1]; // Extract file ID from URL
//     return `https://lh3.googleusercontent.com/d/${fileId}=s1900?authuser=0`; // Construct thumbnail URL
//   };

//   if (!questions) {
//     return <div className="container mt-3">Loading...</div>;
//   }

//   const handleReturnToQuizList = () => {
//     navigate("/bauddhadakshata");
//   };

//   return (
//     <div className="container-fluid question-page-container">
//       <div className="question-content mt-4">
//         <div>
//           <button className="btn btn-primary" onClick={handleReturnToQuizList}>
//             Return to Quiz List
//           </button>
//         </div>
//         <br></br>
//         <div>
//           <div className="navigation-bar">
//             {questions.map((_, index) => (
//               <button
//                 key={index}
//                 className={`btn btn-link navigation-button ${
//                   currentQuestionIndex === index ? "active" : ""
//                 }`}
//                 onClick={() => handleQuestionChange(index)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//         <br></br>
//         <h1 className="question-header">
//           Question {currentQuestionIndex + 1}
//           <button
//             className="voice-button"
//             onClick={handleVoiceReading}
//             style={{ fontSize: "14px", marginLeft: "10px" }}
//           >
//             <IoVolumeHighOutline style={{ color: "black" }} />
//           </button>
//         </h1>
//         <p className="question-text">
//           {questions[currentQuestionIndex].question}
//         </p>
//         <p className="question-text-bold">
//           {questions[currentQuestionIndex].question_in_hindi}
//         </p>
//         {questions[currentQuestionIndex].question_image && (
//           <div>
//             <img
//               src={modifyImageUrl(
//                 questions[currentQuestionIndex].question_image
//               )}
//               alt="Question Image"
//               className="question-image"
//             />
//           </div>
//         )}
//         <form className="options-form">
//           {questions[currentQuestionIndex].options.map((option, index) => (
//             <div className="form-check option-item" key={index}>
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id={`option${index}`}
//                 name="option"
//                 value={option}
//                 checked={option === selectedOption}
//                 onChange={handleOptionChange}
//               />
//               <label className="form-check-label" htmlFor={`option${index}`}>
//                 {option}
//               </label>
//             </div>
//           ))}
//         </form>
//         <div>
//           {currentQuestionIndex > 0 && (
//             <button
//               className="btn btn-secondary"
//               style={{ marginRight: "10px" }}
//               onClick={handlePreviousQuestion}
//             >
//               Previous
//             </button>
//           )}
//           {currentQuestionIndex < questions.length - 1 && (
//             <button
//               className="btn btn-primary"
//               style={{ marginRight: "10px" }}
//               onClick={handleNextQuestion}
//             >
//               Next
//             </button>
//           )}
//           <button className="btn btn-warning" onClick={clearOptions}>
//             Clear Options
//           </button>
//           <div
//             style={{
//               marginTop: "10px",
//               fontWeight: "bold",
//               color: isCorrect ? "green" : "red",
//             }}
//           >
//             {feedbackMessage}
//           </div>
//           {showAnswerImage && isCorrect && (
//             <div className="answer-explanation-container">
//               <div className="explanation-text-container">
//                 <p className="explanation-text">
//                   {
//                     questions[currentQuestionIndex]
//                       .answer_explanation_in_english
//                   }
//                 </p>
//               </div>
//               <div className="answer-image-container">
//                 <img
//                   src={modifyImageUrl(
//                     questions[currentQuestionIndex].answer_image
//                   )}
//                   alt="Answer Image"
//                   className="answer-image"
//                 />
//               </div>
//               <div className="explanation-text-container">
//                 <p className="explanation-text">
//                   {questions[currentQuestionIndex].answer_explanation_in_hindi}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuestionPage;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoVolumeHighOutline } from "react-icons/io5";
import "./QuestionPage.css"; // Import the CSS file

function QuestionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const questions = location.state ? location.state.questions : null;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showQuestionImage, setShowQuestionImage] = useState(true);
  const [showAnswerImage, setShowAnswerImage] = useState(false);
  const [shouldReadExplanation, setShouldReadExplanation] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    const currentQuestion = questions[currentQuestionIndex];
    if (event.target.value === currentQuestion.correct_answer) {
      setFeedbackMessage("Correct Option Chosen");
      setIsCorrect(true);
      setShowAnswerImage(true);
      setShouldReadExplanation(true);
    } else {
      setFeedbackMessage("Wrong Answer Chosen");
      setIsCorrect(false);
      setShowAnswerImage(false);
      setShouldReadExplanation(false);
    }
  };

  const clearOptions = () => {
    setSelectedOption(null);
    setFeedbackMessage("");
    setShowAnswerImage(false);
    setShouldReadExplanation(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      clearOptions();
      setShowQuestionImage(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      clearOptions();
      setShowQuestionImage(true);
    }
  };

  const handleQuestionChange = (index) => {
    setCurrentQuestionIndex(index);
    clearOptions();
    setShowQuestionImage(true);
  };

  const handleVoiceReading = () => {
    const speech = new SpeechSynthesisUtterance();
    const currentQuestion = questions[currentQuestionIndex];
    let fullText = `Question ${currentQuestionIndex + 1}. ${
      currentQuestion.question
    }. ${currentQuestion.question_in_hindi}. Options are: `;
    currentQuestion.options.forEach(
      (option, index) => (fullText += `${option}. `)
    );
    if (shouldReadExplanation) {
      fullText += `Explanation in English: ${currentQuestion.answer_explanation_in_english}. Explanation in Hindi: ${currentQuestion.answer_explanation_in_hindi}.`;
    }
    speech.text = fullText;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.lang = "hi-IN"; // Set language to Hindi
    window.speechSynthesis.speak(speech);
  };

  const modifyImageUrl = (imageUrl) => {
    const fileId = imageUrl.match(/\/d\/(.+?)\//)[1]; // Extract file ID from URL
    return `https://lh3.googleusercontent.com/d/${fileId}=s1900?authuser=0`; // Construct thumbnail URL
  };

  if (!questions) {
    return <div className="container mt-3">Loading...</div>;
  }

  const handleReturnToQuizList = () => {
    navigate("/bauddhadakshata");
  };

  return (
    <div className="container-fluid question-page-container">
      <div className="question-content mt-5">
        <div>
          <button className="btn btn-primary" onClick={handleReturnToQuizList}>
            Return to Quiz List
          </button>
        </div>
        <br></br>
        <div>
          <div className="navigation-bar">
            {questions.map((_, index) => (
              <button
                key={index}
                className={`btn btn-link navigation-button ${
                  currentQuestionIndex === index ? "active" : ""
                }`}
                onClick={() => handleQuestionChange(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <br></br>
        <h1 className="question-header">
          Question {currentQuestionIndex + 1}
          <button
            className="voice-button"
            onClick={handleVoiceReading}
            style={{ fontSize: "14px", marginLeft: "10px" }}
          >
            <IoVolumeHighOutline style={{ color: "black" }} />
          </button>
        </h1>
        <p className="question-text">
          {questions[currentQuestionIndex].question}
        </p>
        <p className="question-text-bold">
          {questions[currentQuestionIndex].question_in_hindi}
        </p>
        {questions[currentQuestionIndex].question_image && (
          <div>
            <img
              src={modifyImageUrl(
                questions[currentQuestionIndex].question_image
              )}
              alt="Question Image"
              className="question-image"
            />
          </div>
        )}
        <form className="options-form">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div className="form-check option-item" key={index}>
              <input
                className="form-check-input"
                type="radio"
                id={`option${index}`}
                name="option"
                value={option}
                checked={option === selectedOption}
                onChange={handleOptionChange}
              />
              <label className="form-check-label" htmlFor={`option${index}`}>
                {option}
              </label>
            </div>
          ))}
        </form>
        <div>
          {currentQuestionIndex > 0 && (
            <button
              className="btn btn-secondary"
              style={{ marginRight: "10px" }}
              onClick={handlePreviousQuestion}
            >
              Previous
            </button>
          )}
          {currentQuestionIndex < questions.length - 1 && (
            <button
              className="btn btn-primary"
              style={{ marginRight: "10px" }}
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
          <button className="btn btn-warning" onClick={clearOptions}>
            Clear Options
          </button>
          <div
            style={{
              marginTop: "10px",
              fontWeight: "bold",
              color: isCorrect ? "green" : "red",
            }}
          >
            {feedbackMessage}
          </div>
          {showAnswerImage && isCorrect && (
            <div className="answer-explanation-container">
              <div className="explanation-text-container">
                <p className="explanation-text">
                  {
                    questions[currentQuestionIndex]
                      .answer_explanation_in_english
                  }
                </p>
              </div>
              <div className="answer-image-container">
                <img
                  src={modifyImageUrl(
                    questions[currentQuestionIndex].answer_image
                  )}
                  alt="Answer Image"
                  className="answer-image"
                />
              </div>
              <div className="explanation-text-container">
                <p className="explanation-text">
                  {questions[currentQuestionIndex].answer_explanation_in_hindi}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
