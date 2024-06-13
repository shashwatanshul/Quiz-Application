// import React from "react";
// import "./StatisticsCounter.css"; // Assuming you will create a separate CSS file for styles

// function StatisticsCounter() {
//   return (
//     <>
//       <div className="statistics-container">
//         <div className="statistic">
//           <h5>5000+</h5>
//           <p>Students</p>
//         </div>
//         <div className="statistic">
//           <h5>11+</h5>
//           <p>Schools</p>
//         </div>
//         <div className="statistic">
//           <h5>1</h5>
//           <p>City</p>
//         </div>
//       </div>
//       <br></br>
//     </>
//   );
// }

// export default StatisticsCounter;
//////////////////////////////////////////////////////////////////
import React, { useState, useEffect, useRef } from "react";
import "./StatisticsCounter.css";

function StatisticsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const [countAnimationStarted, setCountAnimationStarted] = useState(false);
  const observer = useRef(null);

  const statisticItems = [
    { label: "Students", value: 5000 },
    { label: "Schools", value: 11 },
    { label: "City", value: 1 },
  ];

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.current.observe(document.querySelector(".statistics-container"));

    return () => observer.current.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !countAnimationStarted) {
      setCountAnimationStarted(true);
    }
  }, [isVisible, countAnimationStarted]);

  useEffect(() => {
    if (countAnimationStarted) {
      const timers = statisticItems.map((item, index) => {
        const startTime = Date.now();
        const endTime = startTime + 2000; // 2 seconds
        const startValue = 0;
        const valueDifference = item.value - startValue;

        const updateCount = () => {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.min(1, elapsedTime / 2000); // Limit to 1
          const currentValue = startValue + valueDifference * progress;
          document.getElementById(`count-${index}`).innerText =
            Math.floor(currentValue);

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        };

        return setTimeout(updateCount, 0);
      });

      return () => timers.forEach((timer) => clearTimeout(timer));
    }
  }, [countAnimationStarted, statisticItems]);

  return (
    <>
      <div className="statistics-container">
        {statisticItems.map((item, index) => (
          <div className="statistic" key={index}>
            <h5 id={`count-${index}`}>0</h5>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <br></br>
    </>
  );
}

export default StatisticsCounter;
