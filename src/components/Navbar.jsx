import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { routes } from '../routes';

import '../styles/Navbar.css';

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
                    <img src="../images/icons/lull-logo.svg" alt="brand-logo" />
                </NavLink>
            
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <HashLink
                            smooth to="/#product"
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
                            to="/#how-it-works"
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
                            to="/#blog"
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
                        to="/#contact"
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
                            to={routes.Login}
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
                            to={routes.Register}
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
