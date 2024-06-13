import React, { useEffect, useRef } from "react";

const offerings = [
  {
    title: "Udbodh",
    description:
      "A broad base of diversified knowledge can help students think critically and creatively; leading to personal and professional growth.",
  },
  {
    title: "Bauddha Dakshata",
    description:
      "Education in analytical skills and logical reasoning helps students develop their problem-solving skills and critical thinking abilities.",
  },
  {
    title: "Get Inspired",
    description: "Motivational and inspiring stories from our young students.",
  },
];

function ProductOfferings() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: "40px 0", background: "#f8f9fa" }}>
      <h2
        ref={headingRef}
        className="heading"
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
        Our Product Offerings
      </h2>
      <div
        className="card-container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flexWrap: "wrap",
          padding: "20px",
          marginTop: "50px",
          background: "white",
        }}
      >
        {offerings.map((offering, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card"
          >
            <div
              className="card-title"
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
              {offering.title}
            </div>
            <div className="card-description">{offering.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductOfferings;
