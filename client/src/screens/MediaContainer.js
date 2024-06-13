import React, { useRef, useEffect, useState } from "react";

function MediaContainer() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoRef = entry.target.querySelector("video");
          if (entry.isIntersecting) {
            videoRef?.play();
            entry.target.classList.add("media-animate");
          } else {
            videoRef?.pause();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    [containerRef1, containerRef2].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [containerRef1, containerRef2].forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef1}
        className="media-container"
        style={{
          display: isMobile ? "block" : "flex",
          width: "100%",
          height: "70vh",
          marginTop: "100vh",
        }}
      >
        {isMobile ? (
          <>
            <video
              ref={videoRef1}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loop
              muted
              playsInline
            >
              <source src="/main.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <br></br>

            <img
              src="/homepage_image_1.png"
              style={{ width: "100%", height: "auto" }}
              alt="Descriptive Alt Text"
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </>
        ) : (
          <>
            <video
              ref={videoRef1}
              style={{ width: "50%", height: "100%", objectFit: "cover" }}
              loop
              muted
              playsInline
            >
              <source src="/main.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              src="/homepage_image_1.png"
              style={{ width: "50%", height: "100%", objectFit: "cover" }}
              alt="Descriptive Alt Text"
            />
          </>
        )}
      </div>
      <div
        ref={containerRef2}
        className="media-container"
        style={{
          display: "flex",
          width: "100%",
          height: "70vh",
          marginTop: isMobile ? "40vh" : "10vh",
        }}
      >
        <img
          src="/homepage_image_2.jpeg"
          style={{ width: "50%", height: "100%", objectFit: "cover" }}
          alt="Second Description"
        />
        <video
          ref={videoRef2}
          style={{ width: "50%", height: "100%", objectFit: "cover" }}
          loop
          muted
          playsInline
        >
          <source src="/main2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default MediaContainer;
