import { Link } from 'react-router-dom';
import React from 'react';

export function Header() {
    return (
        <div className="header-outs" id="home">
            <div className="header-w3layouts">
                <div className="headr-title">
                    <div className="hedder-up">
                        <h1><Link className="navbar-brand" to="/Home">Kshatriya Sport - Taekwondo Academy</Link></h1>
                    </div>
                    <div className="header-call">
                        <Link to="/Home/AdminLogin" className="btn btn-sm btn-outline-light">
                            <span className="fas fa-user-lock"></span> Admin Login
                        </Link>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  nav-fill " id="navbarSupportedContent">
                        <ul className="navbar-nav nav-pills nav-fill">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home/About" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home/OurServices" className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home/Gallery" className="nav-link">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Home/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Home/Contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
