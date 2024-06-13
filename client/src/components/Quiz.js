// import React from "react";
// import { Link } from "react-router-dom";

// function Quiz({ quiz }) {
//   return (
//     <div className="shadow-lg p-3 mb-5 bg-white rounded">
//       <h1>{quiz.name}</h1>
//       <br></br>
//       <p style={{ textAlign: "left" }}>Subject : {quiz.subject}</p>
//       <p style={{ textAlign: "left" }}>Class : {quiz.classs}</p>
//       <p style={{ textAlign: "left" }}>Category : {quiz.dificulty}</p>
//       <Link to="/questions" state={{ questions: quiz.questions }}>
//         <button className="btn btn-primary">Start Quiz</button>
//       </Link>
//     </div>
//   );
// }

// export default Quiz;
//-----------------------------------------------------------------------------------
import React from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

function Quiz({ quiz }) {
  const modifyImageUrl = (imageUrl) => {
    const fileId = imageUrl.match(/\/d\/(.+?)\//)[1]; // Extract file ID from URL
    return `https://lh3.googleusercontent.com/d/${fileId}=s1900?authuser=0`; // Construct thumbnail URL
  };

  // Define a common style object for button shadows
  const buttonShadowStyle = {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    transition: "background-color 0.3s",
  };

  return (
    <div className="shadow-lg p-3 mb-5 bg-white" id="round">
      <img
        src={modifyImageUrl(quiz.quiz_image)}
        alt="Quiz"
        width="200px"
        height="200px"
        className="img-fluid"
      />

      <br></br>
      <br></br>
      <h1
        style={{
          fontFamily: "'Georgia Ref', Georgia, serif",
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        {quiz.name}
      </h1>
      <br />
      {/* <p style={{ textAlign: "left" }}>Subject: {quiz.subject}</p>
      <p style={{ textAlign: "left" }}>Class: {quiz.classs}</p>
      <p style={{ textAlign: "left" }}>Category: {quiz.difficulty}</p> */}
      <Link
        to="/questions"
        state={{ name: quiz.name, questions: quiz.questions }}
      >
        <button
          className="btn btn-primary"
          style={{
            ...buttonShadowStyle,
            fontFamily: "'Georgia Ref', Georgia, serif",
            //fontWeight: "bold",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          Start Quiz
        </button>
      </Link>
    </div>
  );
}

export default Quiz;
