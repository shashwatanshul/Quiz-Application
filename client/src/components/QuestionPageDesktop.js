// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IoVolumeHighOutline } from "react-icons/io5";
// import "./QuestionPageDesktop.css"; // Import the CSS file

// function QuestionPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const questions = location.state ? location.state.questions : null;
//   const name = location.state ? location.state.name : null;
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
//         <h1>{name}</h1>
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
//         <hr></hr>
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
//         <hr></hr>
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
//////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IoVolumeHighOutline } from "react-icons/io5";
// import "./QuestionPageDesktop.css"; // Import the CSS file

// function QuestionPageDesktop() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const questions = location.state ? location.state.questions : null;
//   const name = location.state ? location.state.name : null;
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [feedbackMessage, setFeedbackMessage] = useState("");
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [showQuestionImage, setShowQuestionImage] = useState(true);
//   const [showAnswerImage, setShowAnswerImage] = useState(false);
//   const [shouldReadExplanation, setShouldReadExplanation] = useState(false);

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
//       <div className="row">
//         <div className="col-md-8 question-content mt-4">
//           <div>
//             <button
//               className="btn btn-primary"
//               onClick={handleReturnToQuizList}
//             >
//               Return to Quiz List
//             </button>
//           </div>
//           <br></br>
//           <h1>{name}</h1>
//           <hr></hr>
//           <h1 className="question-header">
//             Question {currentQuestionIndex + 1}
//             <button
//               className="voice-button"
//               onClick={handleVoiceReading}
//               style={{ fontSize: "14px", marginLeft: "10px" }}
//             >
//               <IoVolumeHighOutline style={{ color: "black" }} />
//             </button>
//           </h1>
//           <hr></hr>
//           <p className="question-text">
//             {questions[currentQuestionIndex].question}
//           </p>
//           <p className="question-text-bold">
//             {questions[currentQuestionIndex].question_in_hindi}
//           </p>
//           {questions[currentQuestionIndex].question_image && (
//             <div>
//               <img
//                 src={modifyImageUrl(
//                   questions[currentQuestionIndex].question_image
//                 )}
//                 alt="Question Image"
//                 className="question-image"
//               />
//             </div>
//           )}
//           <form className="options-form">
//             {questions[currentQuestionIndex].options.map((option, index) => (
//               <div className="form-check option-item" key={index}>
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   id={`option${index}`}
//                   name="option"
//                   value={option}
//                   checked={option === selectedOption}
//                   onChange={handleOptionChange}
//                 />
//                 <label className="form-check-label" htmlFor={`option${index}`}>
//                   {option}
//                 </label>
//               </div>
//             ))}
//           </form>
//           <div>
//             {currentQuestionIndex > 0 && (
//               <button
//                 className="btn btn-secondary"
//                 style={{ marginRight: "10px" }}
//                 onClick={handlePreviousQuestion}
//               >
//                 Previous
//               </button>
//             )}
//             {currentQuestionIndex < questions.length - 1 && (
//               <button
//                 className="btn btn-primary"
//                 style={{ marginRight: "10px" }}
//                 onClick={handleNextQuestion}
//               >
//                 Next
//               </button>
//             )}
//             <button className="btn btn-warning" onClick={clearOptions}>
//               Clear Options
//             </button>
//             <div
//               style={{
//                 marginTop: "10px",
//                 fontWeight: "bold",
//                 color: isCorrect ? "green" : "red",
//               }}
//             >
//               {feedbackMessage}
//             </div>
//             {showAnswerImage && isCorrect && (
//               <div className="answer-explanation-container">
//                 <div className="explanation-text-container">
//                   <p className="explanation-text">
//                     {
//                       questions[currentQuestionIndex]
//                         .answer_explanation_in_english
//                     }
//                   </p>
//                 </div>
//                 <div className="answer-image-container">
//                   <img
//                     src={modifyImageUrl(
//                       questions[currentQuestionIndex].answer_image
//                     )}
//                     alt="Answer Image"
//                     className="answer-image"
//                   />
//                 </div>
//                 <div className="explanation-text-container">
//                   <p className="explanation-text">
//                     {
//                       questions[currentQuestionIndex]
//                         .answer_explanation_in_hindi
//                     }
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="col-md-4 navigation-box">
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
//       </div>
//     </div>
//   );
// }

// export default QuestionPageDesktop;
//////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IoVolumeHighOutline } from "react-icons/io5";
// import "./QuestionPageDesktop.css"; // Import the CSS file

// function QuestionPageDesktop() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const questions = location.state ? location.state.questions : null;
//   const name = location.state ? location.state.name : null;
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [feedbackMessage, setFeedbackMessage] = useState("");
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [showQuestionImage, setShowQuestionImage] = useState(true);
//   const [showAnswerImage, setShowAnswerImage] = useState(false);
//   const [shouldReadExplanation, setShouldReadExplanation] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to top when the component mounts
//   }, []);

//   // Define a common style object for button shadows
//   const buttonShadowStyle = {
//     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
//     transition: "background-color 0.3s",
//   };

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
//     <div className="question-page-desktop-container">
//       <div className="desktop-question-content mt-5">
//         {/* <div className="mt-5">
//           <button className="btn btn-primary" onClick={handleReturnToQuizList}>
//             Return to Quiz List
//           </button>
//         </div> */}
//         <br />
//         <h1
//           style={{ backgroundColor: "black", padding: "10px", color: "white" }}
//         >
//           {name}
//         </h1>
//         <br />
//         <h1 className="desktop-question-header">
//           Question {currentQuestionIndex + 1} :-
//           <button
//             className="desktop-voice-button btn btn-link"
//             onClick={handleVoiceReading}
//             style={{
//               ...buttonShadowStyle,
//               fontSize: "20px",
//               marginLeft: "400px",
//               color: "black",
//               //border: "1px solid black",
//             }}
//           >
//             <IoVolumeHighOutline />
//           </button>
//           <button
//             className="btn btn-primary"
//             style={{
//               ...buttonShadowStyle,
//               marginLeft: "100px",
//               //border: "1px solid black",
//             }}
//             onClick={handleReturnToQuizList}
//           >
//             Return to Quiz List
//           </button>
//         </h1>
//         <hr />
//         <p className="desktop-question-text">
//           {questions[currentQuestionIndex].question}
//         </p>
//         <p className="desktop-question-text-bold">
//           {questions[currentQuestionIndex].question_in_hindi}
//         </p>
//         {questions[currentQuestionIndex].question_image && (
//           <div>
//             <img
//               src={modifyImageUrl(
//                 questions[currentQuestionIndex].question_image
//               )}
//               alt="Question Image"
//               className="desktop-question-image"
//             />
//           </div>
//         )}
//         <form className="desktop-options-form ms-5">
//           {questions[currentQuestionIndex].options.map((option, index) => (
//             <div className="form-check desktop-option-item" key={index}>
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
//               style={{ ...buttonShadowStyle, marginRight: "10px" }}
//               onClick={handlePreviousQuestion}
//             >
//               Previous
//             </button>
//           )}
//           {currentQuestionIndex < questions.length - 1 && (
//             <button
//               className="btn btn-primary"
//               style={{ ...buttonShadowStyle, marginRight: "10px" }}
//               onClick={handleNextQuestion}
//             >
//               Next
//             </button>
//           )}
//           <button
//             className="btn btn-warning"
//             onClick={clearOptions}
//             style={{ ...buttonShadowStyle }}
//           >
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
//             <div className="desktop-answer-explanation-container">
//               <div className="desktop-explanation-text-container">
//                 <p className="desktop-explanation-text">
//                   {
//                     questions[currentQuestionIndex]
//                       .answer_explanation_in_english
//                   }
//                 </p>
//               </div>
//               <div className="desktop-answer-image-container">
//                 <img
//                   src={modifyImageUrl(
//                     questions[currentQuestionIndex].answer_image
//                   )}
//                   alt="Answer Image"
//                   className="desktop-answer-image"
//                 />
//               </div>
//               <div className="desktop-explanation-text-container">
//                 <p className="desktop-explanation-text">
//                   {questions[currentQuestionIndex].answer_explanation_in_hindi}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="desktop-navigation-box mt-5">
//         <h1 style={{ width: "100%", textAlign: "left" }}>
//           {
//             <div>
//               <hr></hr>
//             </div>
//           }
//           Questions :
//           {
//             <div>
//               <hr></hr>
//             </div>
//           }
//         </h1>
//         <div className="desktop-navigation-grid mt-1">
//           {questions.map((_, index) => (
//             <button
//               style={{ ...buttonShadowStyle }}
//               key={index}
//               className={`desktop-navigation-button ${
//                 currentQuestionIndex === index ? "active" : "btn btn-primary"
//               }`}
//               onClick={() => handleQuestionChange(index)}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuestionPageDesktop;
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoVolumeHighOutline } from "react-icons/io5";
import "./qp.css"; // Import the CSS file

function QuestionPageDesktop() {
  const location = useLocation();
  const navigate = useNavigate();
  const questions = location.state ? location.state.questions : null;
  const name = location.state ? location.state.name : null;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showQuestionImage, setShowQuestionImage] = useState(true);
  const [showAnswerImage, setShowAnswerImage] = useState(false);
  const [shouldReadExplanation, setShouldReadExplanation] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);

  // Define a common style object for button shadows
  const buttonShadowStyle = {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    transition: "background-color 0.3s",
  };

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
    <div className="question-page-desktop-container">
      <div className="desktop-question-content mt-5">
        {/* <div className="mt-5">
          <button className="btn btn-primary" onClick={handleReturnToQuizList}>
            Return to Quiz List
          </button>
        </div> */}
        <br />
        <h2
          style={{
            backgroundColor: "black",
            padding: "10px",
            color: "white",
            fontFamily: "'Georgia Ref', Georgia, serif",
            //fontWeight: "bold",
            fontSize: "35px",
            textAlign: "center",
          }}
        >
          {name}
        </h2>
        <br />
        <h2
          className="desktop-question-header"
          style={{
            //backgroundColor: "black",
            //padding: "10px",
            //color: "white",
            fontFamily: "'Georgia Ref', Georgia, serif",
            //fontWeight: "bold",
            fontSize: "28px",
            //textAlign: "center",
          }}
        >
          Question {currentQuestionIndex + 1} :-
          <button
            className="desktop-voice-button btn btn-link"
            onClick={handleVoiceReading}
            style={{
              ...buttonShadowStyle,
              fontSize: "20px",
              marginLeft: "400px",
              color: "black",
              //border: "1px solid black",
            }}
          >
            <IoVolumeHighOutline />
          </button>
          <button
            className="btn btn-primary"
            style={{
              ...buttonShadowStyle,
              marginLeft: "100px",
              fontFamily: "'Georgia Ref', Georgia, serif",
              //fontWeight: "bold",
              fontSize: "20px",
              //border: "1px solid black",
            }}
            onClick={handleReturnToQuizList}
          >
            Exit Quiz
          </button>
        </h2>
        <hr />
        <p
          className="desktop-question-text"
          style={{
            //backgroundColor: "black",
            //padding: "10px",
            //color: "white",
            fontFamily: "'Maged Bold', Georgia, serif",
            fontWeight: "bold",
            fontSize: "20px",
            //textAlign: "center",
          }}
        >
          {questions[currentQuestionIndex].question}
        </p>
        <p
          className="desktop-question-text-bold"
          style={{
            //backgroundColor: "black",
            //padding: "10px",
            //color: "white",
            fontFamily: "'Maged Bold', Georgia, serif",
            fontWeight: "bold",
            fontSize: "20px",
            //textAlign: "center",
          }}
        >
          {questions[currentQuestionIndex].question_in_hindi}
        </p>
        {questions[currentQuestionIndex].question_image && (
          <div>
            <img
              src={modifyImageUrl(
                questions[currentQuestionIndex].question_image
              )}
              alt="Question Image"
              className="desktop-question-image"
            />
          </div>
        )}
        <form className="desktop-options-form ms-5">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div className="form-check desktop-option-item" key={index}>
              <input
                className="form-check-input"
                type="radio"
                id={`option${index}`}
                name="option"
                value={option}
                checked={option === selectedOption}
                onChange={handleOptionChange}
              />
              <label
                className="form-check-label"
                htmlFor={`option${index}`}
                style={{
                  fontFamily: "'Georgia Ref', Georgia, serif",
                  //fontWeight: "bold",
                  fontSize: "25px",
                  textAlign: "center",
                }}
              >
                {option}
              </label>
            </div>
          ))}
        </form>
        <div>
          {currentQuestionIndex > 0 && (
            <button
              className="btn btn-secondary"
              style={{ ...buttonShadowStyle, marginRight: "10px" }}
              onClick={handlePreviousQuestion}
            >
              Previous
            </button>
          )}
          {currentQuestionIndex < questions.length - 1 && (
            <button
              className="btn btn-primary"
              style={{ ...buttonShadowStyle, marginRight: "10px" }}
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
          <button
            className="btn btn-warning"
            onClick={clearOptions}
            style={{ ...buttonShadowStyle }}
          >
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
            <div className="desktop-answer-explanation-container">
              <div className="desktop-explanation-text-container-left">
                <p
                  className="desktop-explanation-text"
                  style={{
                    //backgroundColor: "black",
                    //padding: "10px",
                    //color: "white",
                    fontFamily: "'Maged Bold', Georgia, serif",
                    //fontWeight: "bold",
                    fontSize: "20px",
                    //textAlign: "center",
                  }}
                >
                  {
                    questions[currentQuestionIndex]
                      .answer_explanation_in_english
                  }
                </p>
              </div>
              <div className="desktop-answer-image-container">
                <img
                  src={modifyImageUrl(
                    questions[currentQuestionIndex].answer_image
                  )}
                  width="200px"
                  height="auto"
                  alt="Answer Image"
                  className="desktop-answer-image"
                />
              </div>
              <div className="desktop-explanation-text-container-right">
                <p
                  className="desktop-explanation-text"
                  style={{
                    //backgroundColor: "black",
                    //padding: "10px",
                    //color: "white",
                    fontFamily: "'Maged Bold', Georgia, serif",
                    //fontWeight: "bold",
                    fontSize: "20px",
                    //textAlign: "center",
                  }}
                >
                  {questions[currentQuestionIndex].answer_explanation_in_hindi}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="desktop-navigation-box mt-5">
        <h2
          style={{
            width: "100%",
            textAlign: "left",
            fontFamily: "'Georgia Ref', Georgia, serif",
            //fontWeight: "bold",
            fontSize: "28px",
          }}
        >
          {
            <div>
              <hr></hr>
            </div>
          }
          Questions :
          {
            <div>
              <hr></hr>
            </div>
          }
        </h2>
        <div className="desktop-navigation-grid mt-1">
          {questions.map((_, index) => (
            <button
              style={{ ...buttonShadowStyle }}
              key={index}
              className={`desktop-navigation-button ${
                currentQuestionIndex === index ? "active" : "btn btn-primary"
              }`}
              onClick={() => handleQuestionChange(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionPageDesktop;
