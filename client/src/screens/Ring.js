import React, { useState } from "react";

function Ring() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    background: `url('/banner-bg01.png') center center / cover no-repeat, radial-gradient(circle at 74.2% 50.9%, rgb(14, 72, 222) 5.2%, rgb(3, 22, 65) 75.3%)`,
    backgroundBlendMode: "overlay",
    zIndex: "1",
  };

  const ringStyle = {
    borderRadius: "50%",
    position: "absolute",
    border: "2px dashed #ADD8E6",
    animation: "rotate 20s linear infinite",
  };

  const textStyle = {
    position: "absolute",
    color: "white",
    fontSize: isMobile ? "50px" : "70px",
    fontFamily: '"Libre Baskerville", serif',
    zIndex: "2",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          ...ringStyle,
          width: isMobile ? "300px" : "600px",
          height: isMobile ? "300px" : "600px",
        }}
      ></div>
      <div
        style={{
          ...ringStyle,
          width: isMobile ? "200px" : "400px",
          height: isMobile ? "200px" : "400px",
          animationDirection: "reverse",
        }}
      ></div>
      <div
        style={{
          ...ringStyle,
          width: isMobile ? "100px" : "200px",
          height: isMobile ? "100px" : "200px",
        }}
      ></div>
      <div style={textStyle}>
        A platform for diversified learning and inspiration.
      </div>
    </div>
  );
}

export default Ring;
//////////////////////////////////////////////////////////////////////////////////////////////////
