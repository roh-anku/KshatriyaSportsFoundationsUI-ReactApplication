import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="header-outs" id="home">
            <div className="header-layouts">
                <div className="headr-title">
                    <div className="hedder-up">
                        <h1><Link className="navbar-brand" to="/Home">Kshatriya Sports Foundations</Link></h1>
                    </div>
                    <div className="header-call">
                        <Link to="/Home/AdminLogin" className="btn btn-sm btn-outline-light admin-login-btn" onClick={handleNavLinkClick}>
                            <span className="fas fa-user-lock"></span> Login
                        </Link>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse nav-fill ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav nav-pills nav-fill">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Home" onClick={handleNavLinkClick}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home/About" className="nav-link" onClick={handleNavLinkClick}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home/OurServices" className="nav-link" onClick={handleNavLinkClick}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home/Gallery" className="nav-link" onClick={handleNavLinkClick}>Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Home/blog" onClick={handleNavLinkClick}>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home/Contact" className="nav-link" onClick={handleNavLinkClick}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
