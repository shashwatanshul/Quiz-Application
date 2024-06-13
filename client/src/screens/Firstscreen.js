// import React, { useRef, useEffect, useState } from "react";
// import "./Firstscreen.css";

// function Firstscreen() {
//   const videoRef1 = useRef(null);
//   const videoRef2 = useRef(null);
//   const containerRef1 = useRef(null);
//   const containerRef2 = useRef(null);
//   const [hoverIndex, setHoverIndex] = useState(null); // State to track hover

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const videoRef = entry.target.querySelector("video");
//           if (entry.isIntersecting) {
//             videoRef?.play();
//             entry.target.classList.add("media-animate"); // Add animation class
//           } else {
//             videoRef?.pause();
//           }
//         });
//       },
//       {
//         root: null, // relative to the viewport
//         rootMargin: "0px",
//         threshold: 0.5, // trigger at 50% visibility
//       }
//     );

//     [containerRef1, containerRef2].forEach((ref) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     return () => {
//       [containerRef1, containerRef2].forEach((ref) => {
//         if (ref.current) {
//           observer.unobserve(ref.current);
//         }
//       });
//     };
//   }, []);

//   const getCardStyle = (index) => ({
//     width: "30%",
//     height: "250px",
//     textAlign: "center",
//     padding: "20px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     borderRadius: "10px",
//     background: hoverIndex === index ? "blue" : "#fff",
//     color: hoverIndex === index ? "white" : "black",
//     fontFamily: '"Libre Baskerville", serif',
//     cursor: "pointer",
//   });

//   const ringStyle = {
//     borderRadius: "50%",
//     position: "absolute",
//     border: "2px dashed #ADD8E6",
//     animation: "rotate 20s linear infinite",
//   };

//   const outerRingStyle = {
//     ...ringStyle,
//     width: "600px",
//     height: "600px",
//   };

//   const middleRingStyle = {
//     ...ringStyle,
//     width: "400px",
//     height: "400px",
//     animationDirection: "reverse",
//   };

//   const innerRingStyle = {
//     ...ringStyle,
//     width: "200px",
//     height: "200px",
//   };

//   const textStyle = {
//     position: "absolute",
//     color: "white",
//     fontSize: "70px",
//     fontFamily: '"Libre Baskerville", serif',
//     zIndex: "2",
//   };

//   // Style objects are defined here as previously shown
//   const containerStyle = {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     top: "0",
//     left: "0",
//     width: "100%",
//     background: `url('/banner-bg01.png') center center / cover no-repeat, radial-gradient(circle at 74.2% 50.9%, rgb(14, 72, 222) 5.2%, rgb(3, 22, 65) 75.3%)`,
//     backgroundBlendMode: "overlay",
//     zIndex: "1",
//   }; // Similar to the one previously defined
//   const mediaContainerStyle1 = {
//     display: "flex",
//     width: "100%",
//     height: "70vh",
//     marginTop: "100vh",
//   };

//   const mediaContainerStyle2 = {
//     display: "flex",
//     width: "100%",
//     height: "70vh",
//     marginTop: "10vh",
//   };

//   const mediaStyle = {
//     width: "50%",
//     height: "100%",
//     objectFit: "cover",
//   };

//   const productOfferingStyle = {
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//     marginTop: "2vh",
//     padding: "20px",
//     background: "#f8f9fa", // Light background for the product offerings section
//   };

//   const cardStyle = {
//     width: "30%",
//     height: "250px", // Fixed height for all cards
//     textAlign: "center",
//     padding: "20px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     borderRadius: "10px",
//     fontFamily: '"Libre Baskerville", serif',
//     background: "#fff",
//   };

//   const headingStyle = {
//     textAlign: "center",
//     fontFamily: '"Libre Baskerville", serif', // Using Libre Baskerville to approximate Baskerville
//     fontSize: "3em",
//     fontWeight: "bold",
//     marginTop: "10vh",
//     marginBottom: "2vh",
//   };

//   const offerings = [
//     {
//       title: "Udbodh",
//       description:
//         "A broad base of diversified knowledge can help students think critically and creatively; leading to personal and professional growth.",
//     },
//     {
//       title: "Bauddha Dakshata",
//       description:
//         "Education in analytical skills and logical reasoning helps students develop their problem-solving skills and critical thinking abilities.",
//     },
//     {
//       title: "Get Inspired",
//       description:
//         "Motivational and inspiring stories from our young students.",
//     },
//   ];

//   return (
//     <div>
//       <div style={containerStyle}>
//         <div style={outerRingStyle}></div>
//         <div style={middleRingStyle}></div>
//         <div style={innerRingStyle}></div>
//         <div style={textStyle}>
//           A platform for diversified learning and inspiration.
//         </div>
//       </div>
//       <div
//         ref={containerRef1}
//         className="media-container"
//         style={mediaContainerStyle1}
//       >
//         <video ref={videoRef1} style={mediaStyle} loop muted playsInline>
//           <source src="/main.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <img
//           src="/homepage_image_1.png"
//           style={mediaStyle}
//           alt="Descriptive Alt Text"
//         />
//       </div>
//       <div
//         ref={containerRef2}
//         className="media-container"
//         style={mediaContainerStyle2}
//       >
//         <img
//           src="/homepage_image_2.jpeg"
//           style={mediaStyle}
//           alt="Second Description"
//         />
//         <video ref={videoRef2} style={mediaStyle} loop muted playsInline>
//           <source src="/main2.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <h2 style={headingStyle}>Our Product Offerings</h2>
//       <div style={productOfferingStyle}>
//         {offerings.map((offering, index) => (
//           <div
//             key={offering.title}
//             style={getCardStyle(index)}
//             onMouseEnter={() => setHoverIndex(index)}
//             onMouseLeave={() => setHoverIndex(null)}
//             className="rounded"
//           >
//             <h3 style={{ fontSize: "30px", fontWeight: "bold" }}>
//               {offering.title}
//             </h3>
//             <p style={{ fontSize: "20px" }}>{offering.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Firstscreen;
///////////////////////////////////////////////////////////////////////////////////////////
// import React, { useRef, useEffect } from "react";
// import "./Firstscreen.css";

// function Firstscreen() {
//   const videoRef1 = useRef(null);
//   const videoRef2 = useRef(null);
//   const containerRef1 = useRef(null);
//   const containerRef2 = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const videoRef = entry.target.querySelector("video");
//           if (entry.isIntersecting) {
//             videoRef?.play();
//             entry.target.classList.add("media-animate"); // Add animation class
//           } else {
//             videoRef?.pause();
//           }
//         });
//       },
//       {
//         root: null, // relative to the viewport
//         rootMargin: "0px",
//         threshold: 0.5, // trigger at 50% visibility
//       }
//     );

//     [containerRef1, containerRef2].forEach((ref) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     return () => {
//       [containerRef1, containerRef2].forEach((ref) => {
//         if (ref.current) {
//           observer.unobserve(ref.current);
//         }
//       });
//     };
//   }, []);

//   const ringStyle = {
//     borderRadius: "50%",
//     position: "absolute",
//     border: "2px dashed #ADD8E6",
//     animation: "rotate 20s linear infinite",
//   };

//   const outerRingStyle = {
//     ...ringStyle,
//     width: "600px",
//     height: "600px",
//   };

//   const middleRingStyle = {
//     ...ringStyle,
//     width: "400px",
//     height: "400px",
//     animationDirection: "reverse",
//   };

//   const innerRingStyle = {
//     ...ringStyle,
//     width: "200px",
//     height: "200px",
//   };

//   const textStyle = {
//     position: "absolute",
//     color: "white",
//     fontSize: "70px",
//     fontFamily: '"Libre Baskerville", serif',
//     zIndex: "2",
//   };

//   // Style objects are defined here as previously shown
//   const containerStyle = {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     top: "0",
//     left: "0",
//     width: "100%",
//     background: `url('/banner-bg01.png') center center / cover no-repeat, radial-gradient(circle at 74.2% 50.9%, rgb(14, 72, 222) 5.2%, rgb(3, 22, 65) 75.3%)`,
//     backgroundBlendMode: "overlay",
//     zIndex: "1",
//   }; // Similar to the one previously defined
//   const mediaContainerStyle1 = {
//     display: "flex",
//     width: "100%",
//     height: "70vh",
//     marginTop: "100vh",
//   };

//   const mediaContainerStyle2 = {
//     display: "flex",
//     width: "100%",
//     height: "70vh",
//     marginTop: "10vh",
//   };

//   const mediaStyle = {
//     width: "50%",
//     height: "100%",
//     objectFit: "cover",
//   };

//   const productOfferingStyle = {
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//     marginTop: "2vh",
//     padding: "20px",
//     background: "#f8f9fa", // Light background for the product offerings section
//   };

//   const cardStyle = {
//     width: "30%",
//     height: "250px", // Fixed height for all cards
//     textAlign: "center",
//     padding: "20px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     borderRadius: "10px",
//     fontFamily: '"Libre Baskerville", serif',
//     background: "#fff",
//   };

//   const headingStyle = {
//     textAlign: "center",
//     fontFamily: '"Libre Baskerville", serif', // Using Libre Baskerville to approximate Baskerville
//     fontSize: "2em",
//     fontWeight: "bold",
//     marginTop: "10vh",
//     marginBottom: "2vh",
//   };

//   const offerings = [
//     {
//       title: "Udbodh",
//       description:
//         "A broad base of diversified knowledge can help students think critically and creatively; leading to personal and professional growth.",
//     },
//     {
//       title: "Bauddha Dakshata",
//       description:
//         "Education in analytical skills and logical reasoning helps students develop their problem-solving skills and critical thinking abilities.",
//     },
//     {
//       title: "Get Inspired",
//       description:
//         "Motivational and inspiring stories from our young students.",
//     },
//   ];

//   return (
//     <div>
//       <div style={containerStyle}>
//         <div style={outerRingStyle}></div>
//         <div style={middleRingStyle}></div>
//         <div style={innerRingStyle}></div>
//         <div style={textStyle}>
//           A platform for diversified learning and inspiration.
//         </div>
//       </div>
//       <div
//         ref={containerRef1}
//         className="media-container"
//         style={mediaContainerStyle1}
//       >
//         <video ref={videoRef1} style={mediaStyle} loop muted playsInline>
//           <source src="/main.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <img
//           src="/homepage_image_1.png"
//           style={mediaStyle}
//           alt="Descriptive Alt Text"
//         />
//       </div>
//       <div
//         ref={containerRef2}
//         className="media-container"
//         style={mediaContainerStyle2}
//       >
//         <img
//           src="/homepage_image_2.jpeg"
//           style={mediaStyle}
//           alt="Second Description"
//         />
//         <video ref={videoRef2} style={mediaStyle} loop muted playsInline>
//           <source src="/main2.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <h2 style={headingStyle}>Our Product Offerings</h2>
//       <div style={productOfferingStyle}>
//         {offerings.map((offering) => (
//           <div key={offering.title} style={cardStyle} className="rounded">
//             <h3 style={{ fontSize: "30px", fontWeight: "bold" }}>
//               {offering.title}
//             </h3>
//             <p style={{ fontSize: "20px" }}>{offering.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Firstscreen;
///////////////////////////////////////////////////////////////////////////
import React from "react";
import "./Firstscreen.css";
import Ring from "./Ring";
import MediaContainer from "./MediaContainer";
import ProductOfferings from "./ProductOfferings";
import LearningOutcomes from "./LearningOutcomes";
import ColorfulBubbles from "./ColorfulBubbles";
import StatisticsCounter from "./StatisticsCounter";
import FooterInfo from "./FooterInfo";

function Firstscreen() {
  return (
    <div>
      <Ring />
      <MediaContainer />
      <ProductOfferings />
      <LearningOutcomes />
      <ColorfulBubbles />
      <StatisticsCounter />
      <FooterInfo />
    </div>
  );
}

export default Firstscreen;
