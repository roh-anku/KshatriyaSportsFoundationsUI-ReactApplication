import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
// images
import g8 from '../images/g8.jpg';
import g2 from '../images/g2.jpg';
import g1 from '../images/g1.jpg';
import g4 from '../images/g4.jpg';
import g7 from '../images/g7.jpg';
import g6 from '../images/g6.jpg';

export function Blog() {
    const posts = [
        { img: g8, date: '15 May 2018', title: 'Stretching', snippet: 'Lorem ipsum dolor adipiscing elit, sed do sit amet, consectetur adipiscing elit, sed do', content: `Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellusVivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus` },
        { img: g2, date: '15 Oct 2018', title: 'Protein plan', snippet: 'Lorem ipsum dolor adipiscing elit, sed do sit amet, consectetur adipiscing elit, sed do', content: 'Protein plan detailed text...' },
        { img: g1, date: '15 Nov 2018', title: 'Cardio Fitness', snippet: 'Lorem ipsum dolor adipiscing elit, sed do sit amet, consectetur adipiscing elit, sed do', content: 'Cardio Fitness detailed text...' },
        { img: g4, date: '15 Dec 2018', title: 'Body improve', snippet: 'Lorem ipsum dolor adipiscing elit, sed do sit amet, consectetur adipiscing elit, sed do', content: 'Body improve detailed text...' },
        { img: g7, date: '15 Oct 2018', title: 'Build muscle', snippet: 'Lorem ipsum dolor adipiscing elit, sed do sit amet, consectetur adipiscing elit, sed do', content: 'Build muscle detailed text...' },
        { img: g6, date: '15 Oct 2018', title: 'Level Up', snippet: 'Lorem ipsum dolor adipiscing elit, sed do sit amet, consectetur adipiscing elit, sed do', content: 'Level Up detailed text...' }
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
                            <div key={idx} className={`col-lg-4 col-md-4 col-sm-4 ser-inner-img p-0${idx % 3 === 2 ? ' blog-gap' : ''}`}
                                onClick={() => openModal(post)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={post.img} alt="" className="img-fluid" />
                                <div className="w3l-ser-sub-txt">
                                    <span className="far fa-calendar-alt"></span>
                                    <p className="date-here mb-2">{post.date}</p>
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
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit,delectus reiciendis maiores alias consequatur aut.maiores alias</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}