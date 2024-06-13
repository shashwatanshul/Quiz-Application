import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h2>About us</h2>
      </div>
      <p>
        Empowering individuals, organizations, and communities to achieve their
        full potential through sustainable and impactful social solutions.
      </p>
      <div style={{ marginTop: "20px" }}>
        <h3>Social Media</h3>
        <a
          href="https://www.youtube.com/@gyankosha"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>{" "}
        |
        <a
          href="http://twitter.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        |
        <a
          href="https://www.instagram.com/_gyankosha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        |
        <a
          href="https://www.linkedin.com/company/gyankosha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {/* Add more social media links as needed */}
      </div>
    </footer>
  );
};

export default Footer;
