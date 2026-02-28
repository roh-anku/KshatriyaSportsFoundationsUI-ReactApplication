import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { ClientCarousel } from '../components/ClientCarousel.jsx';

// import images used on the page
import sc1 from '../images/sc1.png';
import bb1 from '../images/bb1.jpg';
import bb2 from '../images/bb2.jpg';
import bb3 from '../images/bb3.jpg';
import t1 from '../images/t1.jpg';
import t2 from '../images/t2.jpg';
import t3 from '../images/t3.jpg';

export function Home() {
    const slides = [
        {
            imgClass: 'two-img',
            title: 'Build Perfect Body With\nClean Mind',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolorL orem ipsum dolor sit amet eget dolor'
        },
        {
            imgClass: 'one-img',
            title: 'Feeling Good in Perfect \nBalance',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor Lorem ipsum dolor sit amet eget dolor'
        },
        {
            imgClass: 'three-img',
            title: 'Fitness Grow Your\nStrenght',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolorL orem ipsum dolor sit amet eget dolor'
        }
    ];
    const [current, setCurrent] = React.useState(0);

    // advance slides every 5 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [slides.length]);

    // testimonials carousel data (shared component handles the behaviour)
    const testimonials = [
        { img: t1, name: 'Kelly West', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,delectus reiciendis maiores alias consequatur aut.maiores alias' },
        { img: t2, name: 'Sunny Jack', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,delectus reiciendis maiores alias consequatur aut.maiores alias' },
        { img: t3, name: 'jolly Deo', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,delectus reiciendis maiores alias consequatur aut.maiores alias' }
    ];
    
    // no internal state here; ClientCarousel manages its own index


    return (
        <>
            {/* slides/banner section for homepage */}
            <div className="slides">
                {slides.map((s, idx) => (
                    <div
                        key={idx}
                        className={`slide ${s.imgClass}${idx === current ? ' slide--current' : ''}`}
                    >
                        <div className="slider-up">
                            <h4>{s.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</h4>
                            <p>{s.text}</p>
                            <div className="outs_more-buttn">
                                <Link to="/Home/Contact">Book Free Session</Link>
                            </div>
                        </div>
                        <div className="slide__img"></div>
                    </div>
                ))}
                <div className="clearfix"></div>
            </div>
            <ul className="pagination">
                {slides.map((_, idx) => (
                    <li key={idx}>
                        <span
                            className={`pagination__item${idx === current ? ' pagination__item--current' : ''}`}
                            onClick={() => setCurrent(idx)}
                        >
                        </span>
                    </li>
                ))}
            </ul>
            <div className="clearfix"></div>
            {/* about */}
            <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
                <div className="container-fluid py-lg-5 py-md-5 py-sm-4 py-4">
                    <div className="row agile-abt-info text-left">
                        <div className="col-lg-6 agile-abt-info ">
                            <h2>Welcome To <br/> Kshatriya Sport - Taekwondo Academy<br />Why We Are Best To Others
                            </h2>
                            <div className="info-sub-w3 pb-lg-4 pb-md-3 pb-sm-3 pb-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                </p>
                            </div>
                            <div className="info-sub-w3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                </p>
                            </div>
                            <div className="outs-about-buttn">
                                <Link to="/Home/About">Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 abut-middle-grid">
                            <div className="row text-center about-top-right mb-lg-4 mb-md-3 mb-sm-3">
                                <div className="col-lg-4 col-md-4 col-sm-4 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fab fa-slideshare banner-icon" aria-hidden="true"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Weight left</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fas fa-users banner-icon" aria-hidden="true"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Build muscle</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fas fa-bullhorn banner-icon"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Level Up</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center about-mid-right mb-lg-4 mb-md-3 mb-sm-3">
                                <div className="col-lg-6 col-md-6 col-sm-6 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fab fa-superpowers banner-icon" ></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Body improve</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fas fa-bicycle banner-icon"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Cardio fitness</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center about-down-right">
                                <div className="col-lg-4 col-md-4 col-sm-4 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fab fa-cloudversify banner-icon"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Protein plan</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fab fa-whmcs banner-icon" aria-hidden="true"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Stay fit</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fas fa-fire banner-icon" aria-hidden="true"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Stretching</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* services */}
            <section className="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
                <div className="container-fluid py-lg-5 py-md-5 py-sm-4 py-4">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Our Services</h3>
                    <div className="row service-abt-info text-left">
                        <div className="col-lg-7 w3layouts-service-right">
                            <div className="ser-list-using-agile">
                                <h4>What We Offer For You</h4>
                                <div className="info-sub-w3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-lg-4 mt-md-3 mt-3">
                                <div className="col-md-6 col-sm-6 ser-w3l-jst-abt ">
                                    <div className="ser-back-ground p-lg-4 p-md-4 p-sm-3 p-3 clo-ser-one">
                                        <div className="row ">
                                            <div className="col-md-4 ser-wthree-icon">
                                                <span className="fas fa-users banner-icon" aria-hidden="true"></span>
                                            </div>
                                            <div className="col-md-8 ser-agile-para px-0">
                                                <h5>Taekwondo Training</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 ser-w3l-jst-abt">
                                    <div className="ser-back-ground p-lg-4 p-md-4 p-sm-3 p-3 clo-ser-two">
                                        <div className="row ">
                                            <div className="col-md-4 ser-wthree-icon">
                                                <span className="fas fa-fire banner-icon" aria-hidden="true"></span>
                                            </div>
                                            <div className="col-md-8 ser-agile-para px-0">
                                                <h5>Kickboxing</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-lg-4 mt-md-3 mt-3">
                                <div className="col-md-6 col-sm-6 ser-w3l-jst-abt ">
                                    <div className="ser-back-ground p-lg-4 p-md-4 p-sm-3 p-3 clo-ser-three">
                                        <div className="row ">
                                            <div className="col-md-4 ser-wthree-icon">
                                                <span className="fab fa-slideshare banner-icon" aria-hidden="true"></span>
                                            </div>
                                            <div className="col-md-8 ser-agile-para px-0">
                                                <h5>Self Defense Course</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 ser-w3l-jst-abt">
                                    <div className="ser-back-ground p-lg-4 p-md-4 p-sm-3 p-3 clo-ser-four">
                                        <div className="row ">
                                            <div className="col-md-4 ser-wthree-icon">
                                                <span className="fab fa-whmcs banner-icon" aria-hidden="true"></span>
                                            </div>
                                            <div className="col-md-8 ser-agile-para px-0">
                                                <h5>Fitness & Functional Training</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="row mt-lg-4 mt-md-3 mt-3">
                                <div className="col-md-6 col-sm-6 ser-w3l-jst-abt ">
                                    <div className="ser-back-ground p-lg-4 p-md-4 p-sm-3 p-3 clo-ser-one">
                                        <div className="row ">
                                            <div className="col-md-4 ser-wthree-icon">
                                                <span className="fas fa-users banner-icon" aria-hidden="true"></span>
                                            </div>
                                            <div className="col-md-8 ser-agile-para px-0">
                                                <h5>Belt Gradation</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 ser-w3l-jst-abt">
                                    <div className="ser-back-ground p-lg-4 p-md-4 p-sm-3 p-3 clo-ser-two">
                                        <div className="row ">
                                            <div className="col-md-4 ser-wthree-icon">
                                                <span className="fas fa-fire banner-icon" aria-hidden="true"></span>
                                            </div>
                                            <div className="col-md-8 ser-agile-para px-0">
                                                <h5>10th & 12th Grace Marks</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 ser-img text-center">
                            <img src={sc1} alt="" className="img-fluid-custom" />
                        </div>
                    </div>
                </div>
            </section>
            {/* state */}
            <section className="state py-lg-4 py-md-3 py-sm-3 py-3" id="state">
                <div className="container-fluid py-lg-5 py-md-5 py-sm-4 py-4">
                    <div className="jst-must-info text-center">
                        <div className="stats-info row py-lg-4 py-md-3 py-sm-3 py-2">
                            <div className="col-lg-3 col-md-6 col-sm-6 stats-grid stats-grid-1">
                                <div className="counter">4</div>
                                <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-2">
                                    <h4>Active Academies</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet<br />consectetur adipiscing elit,</p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 stats-grid stats-grid-2">
                                <div className="counter">650</div>
                                <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-2">
                                    <h4>Happy Customers</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet<br />consectetur adipiscing elit,</p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 stats-grid stats-grid-3">
                                <div className="counter">10 Years</div>
                                <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-2">
                                    <h4>Expereince</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet<br />consectetur adipiscing elit,</p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 stats-grid stats-grid-4">
                                <div className="counter">15</div>
                                <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-2">
                                    <h4>Expert Trainers</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet<br />consectetur adipiscing elit,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* events */}
            <section className="events py-lg-4 py-md-3 py-sm-3 py-3" id="events">
                <div className="container-fluid py-lg-5 py-md-5 py-sm-4 py-4">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Our Events</h3>
                    <div className="row blog-top-grids">
                        <div className="col-lg-7 left-side-agile p-lg-4 p-md-4 p-3">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio consequat
                            </h4>
                            <p className="groom-right">velit sagittis vehicula. Duis posuere 
                                ex in mollis iaculis. Suspendisse tincidunt ut velit id euismod.vulputate turpis porta ex sodales, dignissim
                            </p>
                            <div className="row mt-2">
                                <div className="col-md-2 col-sm-2 col-3 event-w3ls-date text-center">
                                    <h5>20</h5><span>May</span>
                                </div>
                                <div className="col-md-10 col-sm-10 col-9 event-w3ls-sub-txt text-left">
                                    <h4 className="mb-2">Body Improve</h4>
                                    <ul>
                                        <li><span className="fas fa-clock" aria-hidden="true"></span>15 july 2017</li>
                                        <li><span className="fas fa-map-marker-alt" aria-hidden="true"></span>New York</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 blog-w3l-right ">
                            <img src={bb1} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="row blog-top-grids my-lg-5 my-md-4 my-3">
                        <div className="col-lg-5 blog-w3l-right ">
                            <img src={bb2} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-7 left-side-agile p-lg-4 p-md-4 p-3">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio consequat
                            </h4>
                            <p className="groom-right">velit sagittis vehicula. Duis posuere 
                                ex in mollis iaculis. Suspendisse tincidunt ut velit id euismod.vulputate turpis porta ex sodales, dignissim
                            </p>
                            <div className="row mt-2">
                                <div className="col-md-2 col-sm-2 col-3 event-w3ls-date text-center">
                                    <h5>28</h5><span>May</span>
                                </div>
                                <div className="col-md-10 col-sm-10 col-9 event-w3ls-sub-txt text-left">
                                    <h4 className="mb-2">Build Muscle</h4>
                                    <ul>
                                        <li><span className="fas fa-clock" aria-hidden="true"></span>15 july 2017</li>
                                        <li><span className="fas fa-map-marker-alt" aria-hidden="true"></span>New York</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row blog-top-grids">
                        <div className="col-lg-7 left-side-agile p-lg-4 p-md-4 p-3">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio consequat
                            </h4>
                            <p className="groom-right">velit sagittis vehicula. Duis posuere 
                                ex in mollis iaculis. Suspendisse tincidunt ut velit id euismod.vulputate turpis porta ex sodales, dignissim
                            </p>
                            <div className="row mt-2">
                                <div className="col-md-2 col-sm-2 col-3 event-w3ls-date text-center">
                                    <h5>15</h5><span>May</span>
                                </div>
                                <div className="col-md-10 col-sm-10 col-9 event-w3ls-sub-txt text-left">
                                    <h4 className="mb-2">Lose weight</h4>
                                    <ul>
                                        <li><span className="fas fa-clock" aria-hidden="true"></span>15 july 2017</li>
                                        <li><span className="fas fa-map-marker-alt" aria-hidden="true"></span>New York</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 blog-w3l-right ">
                            <img src={bb3} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* price table */}
            <section className="price py-lg-4 py-md-3 py-sm-3 py-3" id="price">
                <div className="container-fluid py-lg-5 py-md-5 py-sm-4 py-3">
                    <h3 className="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Price Table</h3>
                    <div className="row agileits-banner-grids text-center">
                        <div className=" col-md-4 priceing-tag">
                            <div className="table_cost clr-one">
                                <div className="price-title ">
                                    <h4>Sliver</h4>
                                </div>
                                <span className="cost"> 999<p style={{color:"white"}}>₹</p></span>
                                <p>Per-Month</p>
                            </div>
                            <div className="price-tags-grid">
                                <div className="agileits-banner-grid">
                                    <div className="list-price">
                                        <ul>
                                            <li>Ripper</li>
                                            <li>Stay fit</li>
                                            <li>Cardio fitness</li>
                                            <li>Build muscle</li>
                                            <li>Level Up</li>
                                        </ul>
                                    </div>
                                    <div className="buy-buttn ">
                                        <Link className="w3_play_icon1 scroll" to="/Home/Contact"> Book Free Session</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-4 priceing-tag">
                            <div className="table_cost clr-two">
                                <div className="price-title ">
                                    <h4>Gold</h4>
                                </div>
                                <span className="cost"> 1499<p style={{color:"white"}}>₹</p></span>
                                <p>Per-Month</p>
                            </div>
                            <div className="price-tags-grid">
                                <div className="list-price">
                                    <ul>
                                        <li>Ripper</li>
                                        <li>Stay fit</li>
                                        <li>Cardio fitness</li>
                                        <li>Build muscle</li>
                                        <li>Level Up</li>
                                    </ul>
                                </div>
                                <div className="buy-buttn  ">
                                    <Link className="w3_play_icon1 scroll" to="/Home/Contact">Book Free Session</Link>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-4 priceing-tag">
                            <div className="table_cost clr-three ">
                                <div className="price-title ">
                                    <h4>Diamond</h4>
                                </div>
                                <span className="cost">1999<p style={{color:"white"}}>₹</p></span>
                                <p>Per-Month</p>
                            </div>
                            <div className="price-tags-grid">
                                <div className="agileits-banner-grid">
                                    <div className="list-price">
                                        <ul>
                                            <li>Ripper</li>
                                            <li>Stay fit</li>
                                            <li>Cardio fitness</li>
                                            <li>Build muscle</li>
                                            <li>Level Up</li>
                                        </ul>
                                    </div>
                                    <div className="buy-buttn  ">
                                        <Link className="w3_play_icon1 scroll" to="/Home/Contact">Book Free Session</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* statement */}
            <section className="statement py-lg-4 py-md-3 py-sm-3 py-3" id="statement">
                <div className="container-fluid py-lg-5 py-md-5 py-sm-4 py-4">
                    <div className="w3ls-statement-list text-center">
                        <h4>BECOME YOUR 
STRONGEST SELF<br />
KEEP CALM AND WORK HARD</h4>
                    </div>
                </div>
            </section >
            {/* testimonial */}
            <section className="testimonial py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container-fluid py-lg-5 py-md-5 py-sm-4 py-3">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Our Clients</h3>
                    <ClientCarousel testimonials={testimonials} />
                </div>
            </section>
            {/* subscribe */}
            <section className="subscribe py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container-fluid py-lg-5 py-md-5 py-sm-4 py-4">
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
                        <div className="col-md-6 email-info">
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