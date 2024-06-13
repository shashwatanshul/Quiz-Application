// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Error from "../components/Error";
// import { deleteQuiz, getAllQuizs } from "../actions/quizActions";
// import { Link } from "react-router-dom";

// export default function QuizsList() {
//   const dispatch = useDispatch();
//   const quizsstate = useSelector((state) => state.getAllQuizsReducer);
//   const { quizs, error } = quizsstate;

//   useEffect(() => {
//     dispatch(getAllQuizs());
//   }, []);

//   return (
//     <div>
//       <hr></hr>
//       <h1>Quizzes List</h1>
//       <hr></hr>
//       <div className="table-responsive">
//         {error && <Error error="Something went wrong" />}
//         <table
//           className="table table-bordered"
//           style={{ borderColor: "#343a40" }}
//         >
//           <thead className="table-dark">
//             <tr>
//               <th>Name</th>
//               <th>Subject</th>
//               <th>Class</th>
//               <th>Category</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {quizs &&
//               quizs.map((quiz) => {
//                 return (
//                   <tr key={quiz._id}>
//                     <td>{quiz.name}</td>
//                     <td>{quiz.subject}</td>
//                     <td>{quiz.classs}</td>
//                     <td>{quiz.difficulty}</td>
//                     <td>
//                       <i
//                         className="fa fa-trash m1"
//                         style={{ cursor: "pointer", marginRight: "10px" }}
//                         onClick={() => {
//                           dispatch(deleteQuiz(quiz._id));
//                         }}
//                       ></i>
//                       {/* <Link to={`/adminpanel/editquiz/${quiz._id}`}>
//                         <i
//                           className="fa fa-edit m1"
//                           style={{ cursor: "pointer" }}
//                         ></i>
//                       </Link> */}
//                     </td>
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
////////////////////////////////////////////////////////////////////////
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import {
  deleteQuiz,
  getAllQuizs,
  updateQuizEnabledStatus,
} from "../actions/quizActions";
import { Link } from "react-router-dom";

export default function QuizsList() {
  const dispatch = useDispatch();
  const quizsstate = useSelector((state) => state.getAllQuizsReducer);
  const { quizs, error } = quizsstate;

  useEffect(() => {
    dispatch(getAllQuizs());
  }, [dispatch]);

  const handleEnabledChange = (quizId, enabled) => {
    dispatch(updateQuizEnabledStatus(quizId, enabled));
  };

  return (
    <div>
      <hr />
      <h1>Quizzes List</h1>
      <hr />
      <div className="table-responsive">
        {error && <Error error="Something went wrong" />}
        <table
          className="table table-bordered"
          style={{ borderColor: "#343a40" }}
        >
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Class</th>
              <th>Category</th>
              <th>Enabled</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizs &&
              quizs.map((quiz) => {
                return (
                  <tr key={quiz._id}>
                    <td>{quiz.name}</td>
                    <td>{quiz.subject}</td>
                    <td>{quiz.classs}</td>
                    <td>{quiz.difficulty}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={quiz.enabled}
                        onChange={(e) =>
                          handleEnabledChange(quiz._id, e.target.checked)
                        }
                      />
                    </td>
                    <td>
                      <i
                        className="fa fa-trash m1"
                        style={{ cursor: "pointer", marginRight: "10px" }}
                        onClick={() => {
                          dispatch(deleteQuiz(quiz._id));
                        }}
                      ></i>
                      <Link to={`/adminpanel/editquiz/${quiz._id}`}>
                        <i
                          className="fa fa-edit m1"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
