// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const MiddleScreen = () => {
//   const userstate = useSelector((state) => state.loginUserReducer);
//   const { currentUser } = userstate;

//   // Define a common style object for button shadows
//   const buttonShadowStyle = {
//     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", // Customize this shadow style as needed
//     transition: "background-color 0.3s",
//   };

//   return (
//     <div>
//       <button
//         className="btn btn-primary"
//         style={{
//           ...buttonShadowStyle,
//           backgroundColor: "#007bff",
//         }}
//       >
//         <Link
//           to="/login"
//           className="text-white text-decoration-none"
//           style={{ color: "#fff" }}
//         >
//           Login
//         </Link>
//       </button>
//       {currentUser ? (
//         <button
//           className="btn btn-success mx-2"
//           style={{
//             ...buttonShadowStyle,
//             backgroundColor: "#28a745",
//             pointerEvents: "none", // Disable pointer events
//             opacity: "0.5", // Reduce opacity
//           }}
//           disabled
//         >
//           Registration
//         </button>
//       ) : (
//         <button
//           className="btn btn-success mx-2"
//           style={{
//             ...buttonShadowStyle,
//             backgroundColor: "#28a745",
//           }}
//         >
//           <Link
//             to="/registration"
//             className="text-white text-decoration-none"
//             style={{ color: "#fff" }}
//           >
//             Registration
//           </Link>
//         </button>
//       )}
//       <div
//         className="text-center mt-5 position-relative"
//         style={{ paddingBottom: "450px", left: "200px" }}
//       >
//         {currentUser ? (
//           <Link
//             to="/bauddhadakshata"
//             className="btn btn-info btn-lg rounded-circle p-5 position-absolute start-50 translate-middle-x"
//             style={{
//               ...buttonShadowStyle,
//               bottom: "50px",
//               border: "2px solid black",
//             }}
//           >
//             <span style={{ fontSize: "24px" }}>Quiz</span>
//           </Link>
//         ) : (
//           <button
//             className="btn btn-info btn-lg rounded-circle p-5 position-absolute start-50 translate-middle-x"
//             style={{
//               ...buttonShadowStyle,
//               bottom: "50px",
//               border: "2px solid black",
//               pointerEvents: "none",
//               opacity: "0.5",
//               backgroundColor: "#17a2b8",
//             }}
//             disabled
//           >
//             <span style={{ fontSize: "24px" }}>Quiz</span>
//           </button>
//         )}
//       </div>
//       <img
//         src={"gk_midpage_bd.png"}
//         alt=""
//         style={{
//           position: "absolute",
//           bottom: "30px",
//           left: "70px",
//           width: "350px",
//           height: "350px",
//           boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
//         }}
//       />
//       <img
//         src={"hello_welcome.png"}
//         alt=""
//         style={{
//           position: "absolute",
//           bottom: "100px",
//           left: "500px",

//           width: "500px",
//           height: "250px",
//           margin: "20px",
//           padding: "10px",
//           boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
//         }}
//       />
//     </div>
//   );
// };

// export default MiddleScreen;
///////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const MiddleScreen = () => {
//   const userstate = useSelector((state) => state.loginUserReducer);
//   const { currentUser } = userstate;

//   // Define a common style object for button shadows
//   const buttonShadowStyle = {
//     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
//     transition: "background-color 0.3s",
//   };

//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div style={{ paddingTop: "70px" }}>
//       <button
//         className="btn btn-primary"
//         style={{
//           ...buttonShadowStyle,
//           backgroundColor: "#007bff",
//         }}
//       >
//         <Link
//           to="/login"
//           className="text-white text-decoration-none"
//           style={{ color: "#fff" }}
//         >
//           Login
//         </Link>
//       </button>
//       {currentUser ? (
//         <button
//           className="btn btn-success mx-2"
//           style={{
//             ...buttonShadowStyle,
//             backgroundColor: "#28a745",
//             pointerEvents: "none",
//             opacity: "0.5",
//           }}
//           disabled
//         >
//           Registration
//         </button>
//       ) : (
//         <button
//           className="btn btn-success mx-2"
//           style={{
//             ...buttonShadowStyle,
//             backgroundColor: "#28a745",
//           }}
//         >
//           <Link
//             to="/register"
//             className="text-white text-decoration-none"
//             style={{ color: "#fff" }}
//           >
//             Registration
//           </Link>
//         </button>
//       )}
//       <div
//         className="text-center mt-5 position-relative"
//         style={{ paddingBottom: "450px", left: isMobile ? "10px" : "200px" }}
//       >
//         {currentUser ? (
//           <Link
//             to="/bauddhadakshata"
//             className="btn btn-info btn-lg rounded-circle p-5 position-absolute start-50 translate-middle-x"
//             style={{
//               ...buttonShadowStyle,
//               bottom: "50px",
//               border: "2px solid black",
//             }}
//           >
//             <span style={{ fontSize: "24px" }}>Quiz</span>
//           </Link>
//         ) : (
//           <button
//             className="btn btn-info btn-lg rounded-circle p-5 position-absolute start-50 translate-middle-x"
//             style={{
//               ...buttonShadowStyle,
//               bottom: "50px",
//               border: "2px solid black",
//               pointerEvents: "none",
//               opacity: "0.5",
//               backgroundColor: "#17a2b8",
//             }}
//             disabled
//           >
//             <span style={{ fontSize: "24px" }}>Quiz</span>
//           </button>
//         )}
//       </div>
//       {!isMobile && (
//         <>
//           <img
//             src={"gk_midpage_bd.png"}
//             alt=""
//             style={{
//               position: "absolute",
//               bottom: "30px",
//               left: "70px",
//               width: "350px",
//               height: "350px",
//               boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
//             }}
//           />
//           <img
//             src={"hello_welcome.png"}
//             alt=""
//             style={{
//               position: "absolute",
//               bottom: "100px",
//               left: "500px",
//               width: "500px",
//               height: "250px",
//               margin: "20px",
//               padding: "10px",
//               boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
//             }}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default MiddleScreen;
//////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MiddleScreen = () => {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  // Define a common style object for button shadows
  const buttonShadowStyle = {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    transition: "background-color 0.3s",
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ paddingTop: "70px" }} className="position-relative">
      <button
        className="btn btn-primary"
        style={{
          ...buttonShadowStyle,
          backgroundColor: "#007bff",
        }}
      >
        <Link
          to="/login"
          className="text-white text-decoration-none"
          style={{ color: "#fff" }}
        >
          Login
        </Link>
      </button>
      {currentUser ? (
        <button
          className="btn btn-success mx-2"
          style={{
            ...buttonShadowStyle,
            backgroundColor: "#28a745",
            pointerEvents: "none",
            opacity: "0.5",
          }}
          disabled
        >
          Registration
        </button>
      ) : (
        <button
          className="btn btn-success mx-2"
          style={{
            ...buttonShadowStyle,
            backgroundColor: "#28a745",
          }}
        >
          <Link
            to="/register"
            className="text-white text-decoration-none"
            style={{ color: "#fff" }}
          >
            Registration
          </Link>
        </button>
      )}
      <div
        className="text-center mt-5"
        style={{ paddingBottom: "450px", left: isMobile ? "10px" : "200px" }}
      >
        {currentUser ? (
          <Link
            to="/bauddhadakshata"
            className="btn btn-info btn-lg rounded-circle p-5 position-absolute start-50 translate-middle-x"
            style={{
              ...buttonShadowStyle,
              bottom: "50px",
              border: "2px solid black",
            }}
          >
            <span style={{ fontSize: "24px" }}>Quiz</span>
          </Link>
        ) : (
          <button
            className="btn btn-info btn-lg rounded-circle p-5 position-absolute start-50 translate-middle-x"
            style={{
              ...buttonShadowStyle,
              bottom: "10px",
              border: "2px solid black",
              pointerEvents: "none",
              opacity: "0.5",
              backgroundColor: "#17a2b8",
            }}
            disabled
          >
            <span style={{ fontSize: "24px" }}>Quiz</span>
          </button>
        )}
      </div>
      {!isMobile && (
        <>
          <img
            src={"gk_midpage_bd.png"}
            alt=""
            style={{
              position: "absolute",
              bottom: "100px",
              left: "70px",
              width: "350px",
              height: "350px",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            }}
          />
        </>
      )}
      <img
        src={"hello_welcome.png"}
        alt=""
        style={{
          position: "absolute",
          bottom: "200px",
          left: isMobile ? "0px" : "500px",
          right: isMobile ? "50px" : "0px",
          width: isMobile ? "100%" : "500px",
          height: isMobile ? "auto" : "250px",
          maxHeight: "250px",
          margin: "20px",
          padding: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
      />
    </div>
  );
};

export default MiddleScreen;
