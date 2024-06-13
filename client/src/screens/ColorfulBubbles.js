// import React from "react";
// import "./ColorfulBubbles.css"; // Assuming you will create a separate CSS file for styles

// function ColorfulBubbles() {
//   return (
//     <>
//       <h2
//         style={{
//           textAlign: "center",
//           fontFamily: '"Libre Baskerville", serif',
//           fontSize: "2em",
//           fontWeight: "bold",
//           marginTop: "5vh",
//           marginBottom: "2vh",
//           width: "100%",
//         }}
//       >
//         Program Design
//       </h2>
//       <br></br>
//       <div className="bubbles-container">
//         <div className="bubble" style={{ backgroundColor: "#FFD700" }}>
//           {" "}
//           {/* Yellow */}
//           <h2>Curriculum</h2>
//           <p>
//             Curriculum across domains, designed by India's leading
//             practitioners, entrepreneurs, and academics to make you as an
//             individual stand out.
//           </p>
//         </div>
//         <div className="bubble" style={{ backgroundColor: "#1E90FF" }}>
//           {" "}
//           {/* Blue */}
//           <h2>Pedagogy</h2>
//           <p>
//             A rich range of learning approaches, including interactive lectures,
//             online content, discussion based learning, brain teasers, and
//             puzzles and skill drills for deep proficiency.
//           </p>
//         </div>
//         <div className="bubble" style={{ backgroundColor: "#FF8C00" }}>
//           {" "}
//           {/* Orange */}
//           <h2>Success Factors</h2>
//           <p>
//             Significant transformation with increased diversified knowledge and
//             ability to critically analyze and evaluate information. Enhanced
//             interest development in other core subjects leading to a
//             well-groomed and confident personality.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ColorfulBubbles;
///////////////////////////////////////////////////////////////////////////
// import React, { useRef, useEffect } from "react";
// import "./ColorfulBubbles.css";

// function ColorfulBubbles() {
//   const headingRef = useRef(null);
//   const bubblesRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (headingRef.current) {
//       observer.observe(headingRef.current);
//     }
//     bubblesRef.current.forEach((bubble) => bubble && observer.observe(bubble));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <h2
//         ref={headingRef}
//         style={{
//           textAlign: "center",
//           fontFamily: '"Libre Baskerville", serif',
//           fontSize: "2em",
//           fontWeight: "bold",
//           marginTop: "5vh",
//           marginBottom: "2vh",
//           width: "100%",
//         }}
//       >
//         Program Design
//       </h2>
//       <div className="bubbles-container">
//         {["#FFD700", "#1E90FF", "#FF8C00"].map((color, index) => (
//           <div
//             key={color}
//             ref={(el) => (bubblesRef.current[index] = el)}
//             className={`bubble bubble-${index + 1}`}
//             style={{ backgroundColor: color, opacity: 0.75 }}
//           >
//             <h2>{["Curriculum", "Pedagogy", "Success Factors"][index]}</h2>
//             <p>
//               {
//                 [
//                   "Curriculum across domains, designed by India's leading practitioners, entrepreneurs, and academics to make you as an individual stand out.",
//                   "A rich range of learning approaches, including interactive lectures, online content, discussion based learning, brain teasers, and puzzles and skill drills for deep proficiency.",
//                   "Significant transformation with increased diversified knowledge and ability to critically analyze and evaluate information. Enhanced interest development in other core subjects leading to a well-groomed and confident personality.",
//                 ][index]
//               }
//             </p>
//           </div>
//         ))}
//       </div>
//       <br />
//     </>
//   );
// }

// export default ColorfulBubbles;
//////////////////////////////////////////////////////////////////////////////////
import React, { useRef, useEffect } from "react";
import "./cb.css";

function ColorfulBubbles() {
  const headingRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    bubblesRef.current.forEach((bubble) => bubble && observer.observe(bubble));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h2
        ref={headingRef}
        style={{
          textAlign: "center",
          fontFamily: '"Libre Baskerville", serif',
          fontSize: "2em",
          fontWeight: "bold",
          marginTop: "5vh",
          marginBottom: "2vh",
          width: "100%",
        }}
      >
        Program Design
      </h2>
      <div className="bubbles-container">
        {["#FFD700", "#1E90FF", "#FF8C00"].map((color, index) => (
          <div
            key={color}
            ref={(el) => (bubblesRef.current[index] = el)}
            className={`bubble bubble-${index + 1}`}
            style={{ backgroundColor: color, opacity: 0.75 }}
          >
            <h2>{["Curriculum", "Pedagogy", "Success Factors"][index]}</h2>
            <p>
              {
                [
                  "Curriculum across domains, designed by India's leading practitioners, entrepreneurs, and academics to make you as an individual stand out.",
                  "A rich range of learning approaches, including interactive lectures, online content, discussion based learning, brain teasers, and puzzles and skill drills for deep proficiency.",
                  "Significant transformation with increased diversified knowledge and ability to critically analyze and evaluate information. Enhanced interest development in other core subjects leading to a well-groomed and confident personality.",
                ][index]
              }
            </p>
          </div>
        ))}
      </div>
      <br />
    </>
  );
}

export default ColorfulBubbles;
