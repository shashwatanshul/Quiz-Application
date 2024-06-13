// import React from "react";

// const Pagination = ({
//   quizzesPerPage,
//   totalQuizzes,
//   currentPage,
//   paginate,
// }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalQuizzes / quizzesPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination">
//         <li className="page-item">
//           <span className="page-link">Page No. :</span>
//         </li>
//         {pageNumbers.map((number) => (
//           <li
//             key={number}
//             className={`page-item ${number === currentPage ? "active" : ""}`}
//           >
//             <button onClick={() => paginate(number)} className="page-link">
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;
//-----------------------------------------------------------------------------------------------------------
import React from "react";

const Pagination = ({
  quizzesPerPage,
  totalQuizzes,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalQuizzes / quizzesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <span className="page-link">Page No. :</span>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
