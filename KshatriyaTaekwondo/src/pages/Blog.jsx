import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import g8 from '../images/mobilityForHigherKicks.png';
import g2 from '../images/nutrition.jpg';
import g1 from '../images/buildStamina.png';
import g4 from '../images/g4.jpg';
import g7 from '../images/g7.jpg';
import g6 from '../images/BeltExamPreparationGuide.jpg';

export function Blog() {
    const posts = [
        {
            img: g6,
            date: '28 Feb 2026',
            title: 'Belt Exam Preparation Guide',
            snippet: 'Prepare confidently for grading with a clear plan for technique, fitness, mindset and professional training.',
            content: `Belt exam success comes from consistency and focused revision. Break preparation into poomsae, fundamentals, sparring basics, terminology, and discipline habits. Weekly feedback from coaches and regular mock evaluations help students perform with confidence on grading day.`
        },
        {
            img: g7,
            date: '20 Feb 2026',
            title: 'Power Training for Athletes',
            snippet: 'Use smart strength work to improve explosive kicks, joint stability, and the overall athletic power.',
            content: `Power training for Taekwondo should improve speed and explosiveness, not just muscle size. Combine squats, lunges, plyometric drills, and controlled resistance training with proper recovery. This approach builds stronger kicks while protecting joints and reducing injury risk.`
        },
        {
            img: g4,
            date: '12 Feb 2026',
            title: 'Core Strength & Balance',
            snippet: 'Develop a stable core and posture for better kicks, stronger stances, and smoother movement.',
            content: `Core strength is the center of Taekwondo control and balance. Add planks, stability drills, and bodyweight movements to support clean kicking mechanics and quick directional changes. A stronger core improves posture, reduces fatigue, and sharpens overall technique.`
        },
        {
            img: g1,
            date: '04 Feb 2026',
            title: 'Sparring Endurance Basics',
            snippet: 'Build stamina so your speed, timing, and focus stay strong in every sparring round.',
            content: `Sparring endurance combines cardio fitness with technical efficiency. Include jump rope, interval rounds, and controlled high-tempo drills to improve recovery between bursts. Better stamina lets students maintain guard discipline, movement quality, and decision-making under pressure.`
        },
        {
            img: g2,
            date: '27 Jan 2026',
            title: 'Nutrition for Students',
            snippet: 'Fuel training sessions with balanced meals that support recovery, stamina, and healthy growth.',
            content: `Good nutrition helps students train harder and recover faster. Focus on balanced meals with protein, complex carbohydrates, vegetables, fruits, and enough hydration throughout the day. Keep food choices simple, consistent, and age-appropriate for long-term performance and health.`
        },
        {
            img: g8,
            date: '18 Jan 2026',
            title: 'Mobility for Higher Kicks',
            snippet: 'Improve hip mobility and flexibility to kick higher with control, balance, and reduced injury risk.',
            content: `Flexible hips and hamstrings are essential for fast, controlled Taekwondo kicks. Use dynamic warm-ups before class and static stretching after class to build range safely. Practicing 10 to 15 minutes daily creates steady improvement in kick height and technique quality.`
        }
    ];

    const [modalPost, setModalPost] = React.useState(null);

    const openModal = (post) => setModalPost(post);
    const closeModal = () => setModalPost(null);

    return (
        <>
            {/* banner */}
            <div className="inner_page-banner one-img"></div>
            {/* breadcrumb */}
            <div className="using-border py-3">
                <div className="inner_breadcrumb  ml-4">
                    <ul className="short_ls">
                        <li>
                            <Link to="/Home">Home</Link>
                            <span>/ /</span>
                        </li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            {/* blog section */}
            <section className="about-inner py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Our Blog</h3>
                    <div className="row blog-inner-wls">
                        {posts.map((post, idx) => (
                            <div key={idx} className="col-lg-4 col-md-4 col-sm-6 ser-inner-img blog-post-card"
                                onClick={() => openModal(post)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={post.img} alt="" className="img-fluid" />
                                <div className="w3l-ser-sub-txt">
                                    <span className="far fa-calendar-alt"></span>
                                    <p className="date-here mb-2" style={{color:"black"}}>{post.date}</p>
                                    <p>{post.snippet}</p>
                                    <h4 className="mt-3">{post.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {modalPost && (
                <div className="blog-modal-overlay" onClick={closeModal}>
                    <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <h2>{modalPost.title}</h2>
                        <img src={modalPost.img} alt="" className="img-fluid" />
                        <p>{modalPost.content}</p>
                    </div>
                </div>
            )}
            {/* subscribe */}
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
                                <h4>Get Taekwondo training tips, academy updates, belt exam guidance, and event announcements delivered to your inbox.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}