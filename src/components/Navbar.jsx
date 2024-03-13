import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className="navbar-logo">
        <img src="src\assets\logo.png" alt="vite" />
      </div>
      <nav className="navbar-container">
        <ul className="navbar-links">
          <li>
            <NavLink to="/" exact activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" activeClassName="active">
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" activeClassName="active">
              BLOGS
            </NavLink>
          </li>
          <li>
            <NavLink to="/matches" activeClassName="active">
              MATCHES
            </NavLink>
          </li>
          <li>
            <NavLink to="/involved" activeClassName="active">
              GET INVOLVED
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
            CONTACT US
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
