import './About.css';
import { Link } from 'react-router-dom';
import { ClientCarousel } from '../components/ClientCarousel.jsx';
// images used in this page
import t11 from '../images/t11.jpg';
import t22 from '../images/t22.jpg';
import t33 from '../images/t33.jpg';
import t44 from '../images/t44.jpg';
import t1 from '../images/t1.jpg';
import t2 from '../images/t2.jpg';
import t3 from '../images/t3.jpg';

export function About() {
    return (
        <>
            {/* banner */}
            <div className="inner_page-banner"></div>
            {/* breadcrumb */}
            <div className="using-border py-3">
                <div className="inner_breadcrumb  ml-4">
                    <ul className="short_ls">
                        <li>
                            <Link to="/Home">Home</Link>
                            <span>/ /</span>
                        </li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
            {/* about section */}
            <section className="about-inner py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">About Us</h3>
                    <div className="abt-inner-one pb-lg-3 pb-3 text-center">
                        <div className=" abut-inner-right">
                            <h4>Your Training With<br />Professional Coaches</h4>
                        </div>
                        <div className="abut-inner-left mt-lg-4 mt-md-3 mt-2">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* about-two */}
            <section className="abt-inner-agile py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container-fluid text-center py-lg-5 py-md-4 py-sm-4 py-3">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 abut-inner-img">
                            <div className="using-icon-inner">
                                <span className="fas fa-map-pin"></span>
                                <div className="w3l-abt-sub-txt mt-lg-4 mt-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                    <h4 className="mt-3">Taekwondo Training</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 abut-inner-img">
                            <div className="using-icon-inner">
                                <span className="fas fa-undo"></span>
                                <div className="w3l-abt-sub-txt mt-lg-4 mt-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                    <h4 className="mt-3">Kickboxing</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 abut-inner-img">
                            <div className="using-icon-inner">
                                <span className="fas fa-magic"></span>
                                <div className="w3l-abt-sub-txt mt-lg-4 mt-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                    <h4 className="mt-3">Self Defense Course</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 abut-inner-img">
                            <div className="using-icon-inner">
                                <span className="fas fa-map-pin"></span>
                                <div className="w3l-abt-sub-txt mt-lg-4 mt-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                    <h4 className="mt-3">Belt Gradation</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* team */}
            <section className="team py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
                    <h3 className="title text-center clr mb-lg-5 mb-md-4 mb-sm-4 mb-3">Our Trainers</h3>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb30 team-four-grids-w3layouts">
                            <div data-aos="fade-up" className="team-block active">
                                <div className="team-img">
                                    <a href="#">
                                        <img className="img-fluid" src={t11} alt="" />
                                        <div className="social-media">
                                            <a href="#" className="social-icon-box"><span className="fab fa-facebook-f"></span></a><br />
                                            <a href="#" className="social-icon-box"><span className="fab fa-twitter"></span></a><br />
                                            <a href="#" className="social-icon-box"><span className="fab fa-google-plus-g"></span></a><br />
                                            <a href="#" className="social-icon-box"><span className="fab fa-pinterest-p"></span></a>
                                        </div>
                                    </a>
                                </div>
                                <div className="team-content text-center">
                                    <h4>Poonam Khillari</h4>
                                    <span className="pt-2">FITNESS INSTRUCTOR</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb30 team-four-grids-w3layouts">
                            <div data-aos="fade-up" className="team-block">
                                <div className="team-img">
                                    <a href="#">
                                        <img className="img-fluid" src={t22} alt="" />
                                        <div className="social-media">
                                            <a href="#" className="social-icon-box"><span className="fab fa-facebook-f"></span></a><br />
                                            <a href="#" className="social-icon-box"><span className="fab fa-twitter"></span></a><br />
                                            <a href="#" className="social-icon-box"><span className="fab fa-google-plus-g"></span></a><br />
                                            <a href="#" className="social-icon-box"><span className="fab fa-pinterest-p"></span></a>
                                        </div>
                                    </a>
                                </div>
                                <div className="team-content text-center">
                                    <h4>Akshay Khillari</h4>
                                    <span className="pt-2">BODYBUILDER</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb30 team-four-grids-w3layouts">
                            <div data-aos="fade-up" className="team-block">
                                <div className="team-img">
                                    <a href="#">
                                        <img className="img-fluid" src={t33} alt="" />
                                        <div className="social-media">
                                            <a href="#" className="social-icon-box"><span className="fab fa-facebook-f"></span></a><br />
                                            <a href="#" className="social-icon-box"><span className="fab fa-twitter"></span></a><br />
                                            <a href="#" className="social-icon-box"><span className="fab fa-google-plus-g"></span></a><br />
                                            <a href="#" className="social-icon-box"><span className="fab fa-pinterest-p"></span></a>
                                        </div>
                                    </a>
                                </div>
                                <div className="team-content text-center">
                                    <h4>Mayur Bhaiya</h4>
                                    <span className="pt-2">BODYBUILDER</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb30 team-four-grids-w3layouts">
                            <div data-aos="fade-up" className="team-block">
                                <div className="team-img">
                                    <a href="#">
                                        <img className="img-fluid" src={t44} alt="" />
                                        <div className="social-media">
                                            <a href="#" className="social-icon-box"><span className="fab fa-facebook-f"></span></a><br />
                                            <a href="#" className="social-icon-box"><span className="fab fa-twitter"></span></a><br />
                                            <a href="#" className="social-icon-box"><span className="fab fa-google-plus-g"></span></a><br />
                                            <a href="#" className="social-icon-box"><span className="fab fa-pinterest-p"></span></a>
                                        </div>
                                    </a>
                                </div>
                                <div className="team-content text-center">
                                    <h4>Poonam Khilari 2</h4>
                                    <span className="pt-2 ">YOGA INSTRUCTOR</span>
                                </div>
                            </div>
                            {/* /.team-block */}
                        </div>
                    </div>
                </div>
            </section>
            {/*//team */}
            {/*testimonial*/}
            <section className="testimonial py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Our Clients</h3>
                    {/* using shared React carousel component */}
                    <ClientCarousel
                        testimonials={[
                            { img: t1, name: 'Kelly West', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,delectus reiciendis maiores alias consequatur aut.maiores alias' },
                            { img: t2, name: 'Sunny Jack', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,delectus reiciendis maiores alias consequatur aut.maiores alias' },
                            { img: t3, name: 'jolly Deo', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,delectus reiciendis maiores alias consequatur aut.maiores alias' }
                        ]}
                    />
                </div>
            </section>
            {/*//testimonial */}
            {/*subscribe*/}
            <section className="subscribe py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container py-lg-5 py-md-5 py-sm-4 py-4">
                    <h3 className="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Subscribe Us</h3>
                    <div className="row subscribe-form text-center">
                        <div className="col-md-6 email-sub-agile">
                            <form action="#" method="post">
                                <div className="form-group ">
                                    <input type="email" className="form-control email-sub-agile" placeholder="Email" />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn subscrib-btnn">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="wthree-form-list">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit,delectus reiciendis maiores alias consequatur aut.maiores alias</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}