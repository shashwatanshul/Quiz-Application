import React from "react";
import "./FooterInfo.css"; // Assuming you will create a separate CSS file for styles

function FooterInfo() {
  return (
    <div className="footer-info">
      <div className="about-us">
        <h2>About us</h2>
        <p>
          Empowering individuals, organizations, and communities to achieve
          their full potential through sustainable and impactful social
          solutions.
        </p>
      </div>
      <div className="social-media">
        <h2>Social Media</h2>
        <div className="icons">
          <a
            href="https://www.youtube.com/@gyankosha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/gyankosha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/_gyankosha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterInfo;
