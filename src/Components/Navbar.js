import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          PrezScope
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/sw">
                Stein and Ware
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wa">
                West and Abdullah
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kw">
                Kamala and Waltz
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tv">
                Trump and Vance
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
