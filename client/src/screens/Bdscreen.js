//////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllQuizs } from "../actions/quizActions";
// import Quiz from "../components/Quiz";
// import Loading from "../components/Loading";
// import Error from "../components/Error";
// import Pagination from "../components/Pagination";

// function Bdscreen() {
//   const dispatch = useDispatch();
//   const quizsState = useSelector((state) => state.getAllQuizsReducer);
//   const userLogin = useSelector((state) => state.loginUserReducer);
//   const { currentUser } = userLogin;
//   const { quizs, error, loading } = quizsState;

//   const [selectedDifficulty, setSelectedDifficulty] = useState("All");
//   const [selectedSubject, setSelectedSubject] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [quizzesPerPage] = useState(6);

//   useEffect(() => {
//     dispatch(getAllQuizs());
//   }, [dispatch]);

//   useEffect(() => {
//     setCurrentPage(1); // Reset currentPage to 1 whenever a filter is applied
//   }, [selectedDifficulty, selectedSubject]);

//   const filteredQuizzes = quizs.filter(
//     (quiz) =>
//       (selectedDifficulty === "All" ||
//         quiz.difficulty === selectedDifficulty) &&
//       (selectedSubject === "All" || quiz.subject === selectedSubject) &&
//       quiz.classs === currentUser.classs
//   );

//   // Pagination
//   const indexOfLastQuiz = currentPage * quizzesPerPage;
//   const indexOfFirstQuiz = indexOfLastQuiz - quizzesPerPage;
//   const currentQuizzes = filteredQuizzes.slice(
//     indexOfFirstQuiz,
//     indexOfLastQuiz
//   );

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="container mt-4">
//       <div className="row justify-content-center">
//         <div className="col-md-12 d-flex justify-content-between mb-3">
//           <div>
//             <label style={{ marginRight: "10px" }}>Filter by Category:</label>
//             <select
//               value={selectedDifficulty}
//               onChange={(e) => setSelectedDifficulty(e.target.value)}
//               className="form-control"
//               style={{ width: "auto", display: "inline-block" }}
//             >
//               <option value="All">All</option>
//               <option value="Primary Wing">Primary Wing</option>
//               <option value="Middle Wing">Middle Wing</option>
//               <option value="Higher Wing">Higher Wing</option>
//               <option value="Special Quiz">Special Quiz</option>
//               <option value="Weekly Quiz">Weekly Quiz</option>
//             </select>
//           </div>
//           <div>
//             <label style={{ marginRight: "10px" }}>Filter by Subject:</label>
//             <select
//               value={selectedSubject}
//               onChange={(e) => setSelectedSubject(e.target.value)}
//               className="form-control"
//               style={{ width: "auto", display: "inline-block" }}
//             >
//               <option value="All">All</option>
//               <option value="Sports">Sports</option>
//               <option value="Science">Science</option>
//             </select>
//           </div>
//         </div>
//         {loading ? (
//           <Loading />
//         ) : error ? (
//           <Error error="Something went wrong" />
//         ) : filteredQuizzes.length > 0 ? (
//           currentQuizzes.map((quiz) => (
//             <div className="col-md-3 m-3" key={quiz._id.$oid}>
//               <Quiz quiz={quiz} />
//             </div>
//           ))
//         ) : (
//           <div className="col-md-12 text-center mt-4">
//             <p className="text-danger">
//               No Quizzes Found for your class and selected filters.
//             </p>
//           </div>
//         )}
//         {filteredQuizzes.length > quizzesPerPage && (
//           <div className="col-md-12 mt-4">
//             <Pagination
//               quizzesPerPage={quizzesPerPage}
//               totalQuizzes={filteredQuizzes.length}
//               currentPage={currentPage}
//               paginate={paginate}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Bdscreen;
///////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllQuizs } from "../actions/quizActions";
// import Quiz from "../components/Quiz";
// import Loading from "../components/Loading";
// import Error from "../components/Error";
// import Pagination from "../components/Pagination";

// function Bdscreen() {
//   const dispatch = useDispatch();
//   const quizsState = useSelector((state) => state.getAllQuizsReducer);
//   const userLogin = useSelector((state) => state.loginUserReducer);
//   const { currentUser } = userLogin;
//   const { quizs, error, loading } = quizsState;

//   const [selectedDifficulty, setSelectedDifficulty] = useState("All");
//   const [selectedSubject, setSelectedSubject] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [quizzesPerPage] = useState(6);

//   useEffect(() => {
//     dispatch(getAllQuizs());
//   }, [dispatch]);

//   useEffect(() => {
//     setCurrentPage(1); // Reset currentPage to 1 whenever a filter is applied
//   }, [selectedDifficulty]);

//   console.log("quizs : ", quizs);

//   const filteredQuizzes = quizs.filter(
//     (quiz) =>
//       (selectedDifficulty === "All" ||
//         quiz.difficulty === selectedDifficulty) &&
//       quiz.classs === currentUser.classs
//   );

//   // Get unique subjects based on the selected difficulty
//   const uniqueSubjects = [
//     ...new Set(filteredQuizzes.map((quiz) => quiz.subject)),
//   ];

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="container mt-4" style={{ paddingTop: "70px" }}>
//       <div className="row justify-content-center">
//         <div
//           className="col-md-12 d-flex justify-content-between mb-3"
//           style={{ backgroundColor: "black", padding: "10px" }}
//         >
//           <div>
//             <label style={{ marginRight: "10px", color: "white" }}>
//               Filter by Category:
//             </label>
//             <select
//               value={selectedDifficulty}
//               onChange={(e) => {
//                 setSelectedDifficulty(e.target.value);
//                 setSelectedSubject("All"); // Reset selectedSubject when difficulty changes
//               }}
//               className="form-control"
//               style={{
//                 width: "auto",
//                 display: "inline-block",
//                 backgroundColor: "red",
//                 color: "white",
//               }}
//             >
//               <option value="All">All</option>
//               <option value="Primary Wing">Primary Wing</option>
//               <option value="Middle Wing">Middle Wing</option>
//               <option value="Higher Wing">Higher Wing</option>
//               <option value="Special Quiz">Special Quiz</option>
//               <option value="Weekly Quiz">Weekly Quiz</option>
//             </select>
//           </div>
//           <div>
//             <label style={{ marginRight: "10px", color: "white" }}>
//               Filter by Subject:
//             </label>
//             <select
//               value={selectedSubject}
//               onChange={(e) => setSelectedSubject(e.target.value)}
//               className="form-control"
//               style={{
//                 width: "auto",
//                 display: "inline-block",
//                 backgroundColor: "red",
//                 color: "white",
//               }}
//             >
//               <option value="All">All</option>
//               {uniqueSubjects.map((subject) => (
//                 <option key={subject} value={subject}>
//                   {subject}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         {loading ? (
//           <Loading />
//         ) : error ? (
//           <Error error="Something went wrong" />
//         ) : filteredQuizzes.length > 0 ? (
//           filteredQuizzes
//             .slice(
//               (currentPage - 1) * quizzesPerPage,
//               currentPage * quizzesPerPage
//             )
//             .map((quiz) => (
//               <div className="col-md-3 m-3" key={quiz._id.$oid}>
//                 <Quiz quiz={quiz} />
//               </div>
//             ))
//         ) : (
//           <div className="col-md-12 text-center mt-4">
//             <p className="text-danger">
//               No Quizzes Found for your class and selected filters.
//             </p>
//           </div>
//         )}
//         {filteredQuizzes.length > quizzesPerPage && (
//           <div className="col-md-12 mt-4">
//             <Pagination
//               quizzesPerPage={quizzesPerPage}
//               totalQuizzes={filteredQuizzes.length}
//               currentPage={currentPage}
//               paginate={paginate}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Bdscreen;
// ////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuizs } from "../actions/quizActions";
import Quiz from "../components/Quiz";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Pagination from "../components/Pagination";

function Bdscreen() {
  const dispatch = useDispatch();
  const quizsState = useSelector((state) => state.getAllQuizsReducer);
  const userLogin = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userLogin;
  const { quizs, error, loading } = quizsState;

  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [quizzesPerPage] = useState(6);

  useEffect(() => {
    dispatch(getAllQuizs());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1); // Reset currentPage to 1 whenever a filter is applied
  }, [selectedDifficulty, selectedSubject]);

  console.log("quizs : ", quizs);

  const filteredQuizzes = quizs.filter(
    (quiz) =>
      quiz.enabled &&
      (selectedDifficulty === "All" ||
        quiz.difficulty === selectedDifficulty) &&
      (selectedSubject === "All" || quiz.subject === selectedSubject) &&
      quiz.classs === currentUser.classs
  );

  // Get unique subjects based on the selected difficulty and subject
  const uniqueSubjects = [
    ...new Set(filteredQuizzes.map((quiz) => quiz.subject)),
  ];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4" style={{ paddingTop: "70px" }}>
      <div className="row justify-content-center">
        <div
          className="col-md-12 d-flex justify-content-between mb-3"
          style={{ backgroundColor: "black", padding: "10px" }}
        >
          <div>
            <label style={{ marginRight: "10px", color: "white" }}>
              Filter by Category:
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value);
                setSelectedSubject("All"); // Reset selectedSubject when difficulty changes
              }}
              className="form-control"
              style={{
                width: "auto",
                display: "inline-block",
                backgroundColor: "red",
                color: "white",
              }}
            >
              <option value="All">All</option>
              <option value="Primary Wing">Primary Wing</option>
              <option value="Middle Wing">Middle Wing</option>
              <option value="Higher Wing">Higher Wing</option>
              <option value="Special Quiz">Special Quiz</option>
              <option value="Weekly Quiz">Weekly Quiz</option>
            </select>
          </div>
          <div>
            <label style={{ marginRight: "10px", color: "white" }}>
              Filter by Subject:
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="form-control"
              style={{
                width: "auto",
                display: "inline-block",
                backgroundColor: "red",
                color: "white",
              }}
            >
              <option value="All">All</option>
              {uniqueSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : filteredQuizzes.length > 0 ? (
          filteredQuizzes
            .slice(
              (currentPage - 1) * quizzesPerPage,
              currentPage * quizzesPerPage
            )
            .map((quiz) => (
              <div className="col-md-3 m-3" key={quiz._id.$oid}>
                <Quiz quiz={quiz} />
              </div>
            ))
        ) : (
          <div className="col-md-12 text-center mt-4">
            <p className="text-danger">
              No Quizzes Found for your class and selected filters.
            </p>
          </div>
        )}
        {filteredQuizzes.length > quizzesPerPage && (
          <div className="col-md-12 mt-4">
            <Pagination
              quizzesPerPage={quizzesPerPage}
              totalQuizzes={filteredQuizzes.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Bdscreen;
