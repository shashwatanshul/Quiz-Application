import React, { useRef, useEffect } from "react";
import "./LearningOutcomes.css";

const data = [
  { title: "Career Progressions", count: 20, color: "gray" },
  { title: "Problem Solving Skills", count: 30, color: "red" },
  { title: "Critical thinking abilities", count: 25, color: "orange" },
  { title: "Connecting the dots", count: 22, color: "blue" },
  { title: "Mental Agility and Creativity", count: 28, color: "lightblue" },
  { title: "Informed Decision Making", count: 26, color: "green" },
];

function LearningOutcomes() {
  const headerRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

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
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="learning-outcomes">
      <h2
        ref={headerRef}
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
        Learning Outcomes
      </h2>
      <p ref={paragraphRef}>
        Well-rounded individual with a broad understanding of the world & the
        ability to think critically & solve problems effectively
      </p>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <img
          ref={imageRef}
          src="design.png"
          alt=""
          style={{
            width: "90%",
            padding: "10px",
            height: "auto",
            margin: "auto",
          }}
        />
      </div>
    </div>
  );
}

export default LearningOutcomes;
