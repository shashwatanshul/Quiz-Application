import React from "react";

const FirstscreenNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="/">
            <img src="gyankosha_logo.png" width="75" height="75" alt="hello" />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <div className="dropdown">
              <a
                className="dropdown-toggle nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Explore
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/udbhog">
                    Udbhog
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
              </ul>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FirstscreenNavbar;
