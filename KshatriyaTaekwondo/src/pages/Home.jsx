import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { ClientCarousel } from '../components/ClientCarousel.jsx';

import sc1 from '../images/whatWeOfferSupportImage.png';
import bb1 from '../images/bb1.jpg';
import bb2 from '../images/bb2.jpg';
import bb3 from '../images/bb3.jpg';
import t1 from '../images/mayurClient1.jpg';
import t2 from '../images/placeholder.png';
import t3 from '../images/placeholder.png';

export function Home() {
    const slides = [
        {
            imgClass: 'two-img',
            title: 'Master the Art of\nSelf-Discipline',
            text: 'Beyond the kick lies a path of unwavering focus. Taekwondo is more than a sport; it is a journey of refining the spirit and strengthening the character through every movement.'
        },
        {
            imgClass: 'one-img',
            title: 'Precision in Every\nPowerful Motion',
            text: 'Transform your potential into mastery with world-class training in technical poomsae and sparring.'
        },
        {
            imgClass: 'three-img',
            title: 'Building Tomorrow’s\nLeaders Today',
            text: 'Empowering the next generation with confidence, respect, and the courage to lead'
        }
    ];
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const testimonials = [
        { img: t1, name: 'Mayur Aadak', text: 'Unleash your inner warrior with every punch and kick.' },
        { img: t2, name: 'Sandeep Tribhuvan', text: 'Every kick you take today brings you closer to the black belt you want tomorrow.' },
        { img: t3, name: 'Ashiwini Pawar', text: 'Taekwondo is not just a sport—it is the power to overcome any challenge.' }
    ];
    
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
                            <h2>Welcome To <br/> Kshatriya Sports Foundations<br />Why We Are Best To Others
                            </h2>
                            <div className="info-sub-w3 pb-lg-4 pb-md-3 pb-sm-3 pb-3">
                                <p><b>Heritage Meets Modern Mastery</b><br/>
                                    We don’t just teach techniques; we forge character. By blending the ancient warrior spirit of the Kshatriya with world-class modern Taekwondo training, we provide an elite environment where physical prowess and mental fortitude grow in perfect harmony.
                                </p>
                            </div>
                            <div className="info-sub-w3">
                                <p><b>A Legacy of Excellence and Discipline</b><br/>
                                    Our foundation stands apart through personalized mentorship and a curriculum designed to push boundaries. From precision poomsae to high-octane sparring, we empower our students to lead with confidence, act with integrity, and master the indomitable spirit.
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
                                            <span className="fa-solid fa-shirt banner-icon" aria-hidden="true"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Traditional Dobok</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fa-solid fa-people-arrows-left-right banner-icon" aria-hidden="true"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Build Discipline</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fa-solid fa-torii-gate banner-icon" aria-hidden="true"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Poomsae Form</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center about-mid-right mb-lg-4 mb-md-3 mb-sm-3">
                                <div className="col-lg-6 col-md-6 col-sm-6 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fa-solid fa-utensils banner-icon" aria-hidden="true"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Mindful Nutrition</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fa-solid fa-hand-fist banner-icon" aria-hidden="true"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Sparring Kyorugi</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center about-down-right">
                                <div className="col-lg-4 col-md-4 col-sm-4 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fa-solid fa-person-rays banner-icon" aria-hidden="true"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Core Balance</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fa-solid fa-handshake banner-icon" aria-hidden="true"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Respect Master</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 fit-about-agile-grid">
                                    <div className="white-shadow rounded">
                                        <div className="white-left">
                                            <span className="fa-solid fa-bullseye banner-icon" aria-hidden="true"></span>
                                        </div>
                                        <div className="white-right">
                                            <h4>Focus Stance</h4>
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
                        <div className="col-lg-7 layouts-service-right">
                            <div className="ser-list-using-agile">
                                <h4>What We Offer For You</h4>
                                <div className="info-sub-w3">
                                    <p>Our services combine disciplined martial arts training with fitness and academic support to help every student grow confidently.
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
                                                <p>Learn kicks, blocks, stances, and poomsae with structured coaching for every level.</p>
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
                                                <p>Build speed, power, accuracy, and stamina through pad drills, combinations, and safe sparring sessions.</p>
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
                                                <p>Practice practical self-defense, situational awareness, and escape responses for everyday confidence.</p>
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
                                                <p>Improve strength, mobility, balance, and endurance using martial-arts-based functional training routines.</p>
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
                                                <p>Prepare for belt promotions with syllabus coaching, mock tests, and consistent progress review.</p>
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
                                                <p>Receive guidance on eligibility, records, and certification required for 10th/12th grace marks.</p>
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
                                <div className="counter">3</div>
                                <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-2">
                                    <h4>Active Academies</h4>
                                </div>
                                <p>Delivering disciplined Taekwondo training in fully equipped centers designed for safety, growth, and excellence.</p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 stats-grid stats-grid-2">
                                <div className="counter">850</div>
                                <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-2">
                                    <h4>Happy Students</h4>
                                </div>
                                <p>Proudly shaping confident students through structured martial arts programs and positive mentorship.</p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 stats-grid stats-grid-3">
                                <div className="counter">11 Years</div>
                                <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-2">
                                    <h4>Experience</h4>
                                </div>
                                <p>A decade of dedicated coaching, championship preparation, and character development through Taekwondo.</p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 stats-grid stats-grid-4">
                                <div className="counter">15</div>
                                <div className="stat-info py-lg-3 py-md-3 py-sm-3 py-2">
                                    <h4>Expert Trainers</h4>
                                </div>
                                <p>Certified black belt instructors committed to technical mastery, fitness improvement, and student success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* events */}
            <section className="events py-lg-4 py-md-3 py-sm-3 py-3" id="events" style={{ display: 'none' }}>
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
                                    <h4>Silver Plan – Beginner Warrior</h4>
                                </div>
                                <span className="cost"> 999<p style={{color:"white"}}>₹</p></span>
                                <p>Per-Month</p>
                            </div>
                            <div className="price-tags-grid">
                                <div className="agileits-banner-grid">
                                    <div className="list-price">
                                        <ul>
                                            <li>Learn basic kicks, blocks & stances</li>
                                            <li>Improve flexibility & coordination</li>
                                            <li>Cardio endurance training</li>
                                            <li>Introduction to poomsae-forms</li>
                                            <li>Discipline & confidence building</li>
                                            <li>Belt promotion eligibility</li>
                                        </ul>
                                        <br></br>
                                        <br></br>
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
                                    <h4>Gold Plan – Advanced Fighter</h4>
                                </div>
                                <span className="cost"> 1499<p style={{color:"white"}}>₹</p></span>
                                <p>Per-Month</p>
                            </div>
                            <div className="price-tags-grid">
                                <div className="list-price">
                                    <ul>
                                        <li>Advanced kicking combinations</li>
                                        <li>Sparring fundamentals & tactics</li>
                                        <li>Strength & agility conditioning</li>
                                        <li>Self-defense techniques</li>
                                        <li>Poomsae refinement training</li>
                                        <li>Priority belt grading support</li>
                                        <li>Tournament preparation basics</li>
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
                                    <h4>Platinum Plan – Elite Champion</h4>
                                </div>
                                <span className="cost">1999<p style={{color:"white"}}>₹</p></span>
                                <p>Per-Month</p>
                            </div>
                            <div className="price-tags-grid">
                                <div className="agileits-banner-grid">
                                    <div className="list-price">
                                        <ul>
                                            <li>High-intensity sparring sessions</li>
                                            <li>Competition-level strategy training</li>
                                            <li>Power & explosive kick development</li>
                                            <li>One-on-one technique correction</li>
                                            <li>Advanced self-defense mastery</li>
                                            <li>National / State tournament coaching</li>
                                            <li>Leadership & black belt preparation</li>
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
                        <h4>UNLEASH YOUR INNER WARRIOR.<br/>
                            Train with discipline. Strike with confidence.
                        </h4>
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