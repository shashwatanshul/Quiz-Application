import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
import { useLocation } from "react-router-dom";

function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  const location = useLocation();

  const isOnFirstScreen = location.pathname === "/";

  const [transparent, setTransparent] = useState(true);

  const buttonShadowStyle = {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    transition: "background-color 0.3s",
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTransparent = window.scrollY < 50;
      console.log(
        "Scroll Y:",
        window.scrollY,
        "Is Transparent:",
        isTransparent
      ); // Debugging scroll
      setTransparent(isTransparent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg p-3 mb-5 ${
          transparent ? "bg-transparent" : "bg-white rounded"
        }`}
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 1000, // Ensure the navbar is always on top
          transition: "background-color 0.3s",
          backgroundColor: transparent ? "transparent" : "#fff",
        }}
      >
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="/">
            <img
              src="gyankosha_logo.png"
              width="100"
              height="100"
              alt="Gyankosha Logo"
            />
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser && !isOnFirstScreen ? (
              <div className="dropdown">
                <a
                  className="dropdown-toggle nav-link btn btn-primary"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    ...buttonShadowStyle,
                    fontFamily: "'Georgia Ref', Georgia, serif",
                    //fontWeight: "bold",
                    fontSize: "15px",
                    textAlign: "center",
                    marginRight: "50px",
                  }}
                >
                  {currentUser.name}
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/udbhog">
                      Udbhodh
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/bauddhadakshata">
                      Bauddha Dakshata
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/olympiad">
                      Olympiad
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/getinspired">
                      Get Inspired
                    </a>
                  </li>
                  {currentUser.isAdmin ? (
                    <li>
                      <a className="dropdown-item" href="/adminpanel">
                        Admin Panel
                      </a>
                    </li>
                  ) : null}
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        dispatch(logoutUser());
                        // Optionally redirect to homepage or login page here after logout
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : isOnFirstScreen ? (
              <div className="dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ paddingLeft: "100px", color: "red" }}
                >
                  Explore
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/udbhog">
                      Udbhodh
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/middlescreen">
                      Bauddha Dakshata
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/olympiad">
                      Olympiad
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/getinspired">
                      Get Inspired
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
      {/* Padding to offset the fixed navbar height */}
      <div style={{ paddingTop: "70px" }}></div>
    </div>
  );
}

export default Navbar;
