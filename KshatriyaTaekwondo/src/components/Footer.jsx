import { Link } from 'react-router-dom';
import React from 'react';

export function Footer() {
    return (
        <>
            <section className="buttom-footer py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container py-lg-5 py-md-5 py-sm-4 py-4">
                    <div className="row footer-agile-grids text-center">
                        <div className="col-lg-4 col-md-4 col-sm-12 wthree-left-right">
                            <h4>About</h4>
                            <div className="abt-footer">
                                <p>"Kshatriya Sports Foundations, is a family-friendly martial arts academy committed to building leadership, discipline, and confidence in children and adults alike. We believe that 'The Family that Kicks Together, Sticks Together.' Our tailored programs for children focus on improving focus and respect and practical self-defense."</p>
                                <h5><Link to="/Home/About" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Read more..</Link></h5>
                            </div>                            
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 wthree-left-right">
                            <h4> Opening Hours</h4>
                            <div className="wls-hours-list">
                                <ul>
                                    <li className="d-flex">Monday:  <span className="time ml-auto">&nbsp;9:30-18:30</span></li>
                                    <li className="d-flex">Tuesday:  <span className="time ml-auto">&nbsp;9:30-18:30</span></li>
                                    <li className="d-flex">Wednesday:<span className="time ml-auto">&nbsp;9:30-18:30</span></li>
                                    <li className="d-flex">Thursday: <span className="time ml-auto">&nbsp;9:30-18:30</span></li>
                                    <li className="d-flex">Friday:   <span className="time ml-auto">&nbsp;9:30-18:30</span></li>
                                    <li className="d-flex">Saturday: <span className="time ml-auto"> &nbsp;9:30-18:30</span></li>
                                    <li className="d-flex">Sunday:   <span className="time ml-auto"> &nbsp;closed</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 wthree-left-right">
                            <h4>Navigation Links</h4>
                            <nav className="border-line">
                                <ul className="nav flex-column">
                                    <li className="nav-item active"><Link className="nav-link" to="/Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
                                    <li className="nav-item"><Link to="/Home/About" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link></li>
                                    <li className="nav-item"><Link to="/Home/OurServices" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Services</Link></li>
                                    <li className="nav-item"><Link to="/Home/blog" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Blog</Link></li>
                                    <li className="nav-item"><Link to="/Home/Gallery" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Gallery</Link></li>
                                    <li className="nav-item"><Link to="/Home/Contact" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <p>©2026 Kshatriya Sports Foundations. All Rights Reserved | Design by - Rohit Tumma</p>
            </footer>
        </>
    );
}
