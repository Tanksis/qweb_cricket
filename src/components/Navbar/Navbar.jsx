import { useState } from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <BurgerMenu pageWrapiId={"page-wrap"} outerContainerId={"outer-container"} isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)} />
      <header>
        {/* cricket club logo */}
        <div className="navbar-logo">
          <img src="src\assets\logo.png" alt="vite" />
        </div>
        {/* Navbar links when on larger screen sizes, directs to each page */}
        <nav className={`navbar-container ${isOpen ? 'open' : ''}`}>
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
    </div>
  );
}
