import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import '../Styles/Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
    <>
      <nav className="navbar">
        <div className="nav-container">
        <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div> 
          <NavLink exact to="/" className="nav-logo">
            <span>Logo</span>
          </NavLink>
            
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                smooth to="/Homepage/#product"
                activeClassName="active"
                className="nav-links nav-links1"
                onClick={handleClick}
              >
                 Product
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="/Homepage/#how-it-works"
                activeClassName="active"
                className="nav-links nav-links2"
                onClick={handleClick}
              >
                How it works
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="/Homepage/#blog"
                activeClassName="active"
                className="nav-links nav-links3"
                onClick={handleClick}
              >
               Blog
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                smooth
                to="/Homepage/#contact"
                activeClassName="active"
                className="nav-links nav-links4"
                onClick={handleClick}
              >
                Contact
              </HashLink>
            </li>


            <li className="nav-item">
              <NavLink
                exact
                to="/Login"
                activeClassName="active"
                className="nav-links nav-links5"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>

            
            <li className="nav-item">
              <NavLink
                exact
                to="/Signup"
                activeClassName="active"
                className="nav-links nav-links6"
                onClick={handleClick}
              >
                Signup
              </NavLink>
            </li>
            </ul>

        </div>
      </nav>
    </>
    );
}

export default Navbar;
