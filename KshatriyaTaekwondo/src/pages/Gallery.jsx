import './Gallery.css';
import { Link } from 'react-router-dom';
import g1 from '../images/gallery1.jpg';
import g2 from '../images/gallery2.jpg';
import g3 from '../images/gallery3.jpg';
import g4 from '../images/gallery4.jpg';
import g5 from '../images/gallery5.jpg';
import g6 from '../images/gallery6.jpg';
import g7 from '../images/gallery7.jpg';
import g8 from '../images/gallery8.jpg';
import g9 from '../images/gallery9.jpg';


export function Gallery() {
    const youtubeVideoLinks = [        
        'https://www.youtube.com/embed/wbBJ2POaTQo',
        'https://www.youtube.com/embed/6ubqud4Gxt0',
        'https://www.youtube.com/embed/Gao-F_gwZy0',
        'https://www.youtube.com/embed/RhOISheB9IA',
        'https://www.youtube.com/embed/pw41sySgebs',
        'https://www.youtube.com/embed/kgf_p2FHyak'
    ];

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
                        <li>Gallery</li>
                    </ul>
                </div>
            </div>
            {/* Gallery content */}
            <section className="gallery py-lg-4 py-md-3 py-sm-3 py-3 ">
                <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Our Gallery</h3>
                    <div className="row grid gallery-info">
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g1} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK Sports Academy</h4>
                                    <p>(Rajguru nagar)</p>
                                    <a href={g1} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g2} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK Sports Academy</h4>
                                    <p>(Rajguru nagar)</p>
                                    <a href={g2} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g3} alt="" className="img-fluid" />
                                <figcaption>
                                   <h4>AK Sports Academy</h4>
                                    <p>(Rajguru nagar)</p>
                                    <a href={g3} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="row grid gallery-info my-lg-4 my-md-3">
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g4} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK Sports Academy</h4>
                                    <p>(Rajguru nagar)</p>
                                    <a href={g4} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g5} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK Sports Academy</h4>
                                    <p>(Rajguru nagar)</p>
                                    <a href={g5} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g6} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK Sports Academy</h4>
                                    <p>(Rajguru nagar)</p>
                                    <a href={g6} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="row grid gallery-info my-lg-4 my-md-3">
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g7} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK Sports Academy</h4>
                                    <p>(Students outing - at Visapur Fort)</p>
                                    <a href={g7} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g8} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK Sports Academy</h4>
                                    <p>(Students outing - at Visapur Fort)</p>
                                    <a href={g8} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g9} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK Sports Academy</h4>
                                    <p>(Students outing - at Visapur Fort)</p>
                                    <a href={g9} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="row grid gallery-info">
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <div className="gallery-video-card">
                                <iframe
                                    className="gallery-video"
                                    src={youtubeVideoLinks[0]}
                                    title="Taekwondo Video 1"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="gallery-video-caption">
                                <h4>AK Sports Academy</h4>
                                    <p>(Rajguru nagar)</p>
                                <br/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <div className="gallery-video-card">
                                <iframe
                                    className="gallery-video"
                                    src={youtubeVideoLinks[1]}
                                    title="Taekwondo Video 2"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="gallery-video-caption">
                                <h4>AK Sports Academy</h4>
                                    <p>(Rajguru nagar)</p>
                                <br/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <div className="gallery-video-card">
                                <iframe
                                    className="gallery-video"
                                    src={youtubeVideoLinks[2]}
                                    title="Taekwondo Video 3"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="gallery-video-caption">
                                <h4>AK Sports Academy</h4>
                                    <p>(Rajguru nagar)</p>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row grid gallery-info">
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <div className="gallery-video-card">
                                <iframe
                                    className="gallery-video"
                                    src={youtubeVideoLinks[3]}
                                    title="Taekwondo Video 1"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="gallery-video-caption">
                                <h4>AK Sports Academy</h4>
                                    <p>(Rajguru nagar)</p>
                                <br/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <div className="gallery-video-card">
                                <iframe
                                    className="gallery-video"
                                    src={youtubeVideoLinks[4]}
                                    title="Taekwondo Video 2"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="gallery-video-caption">
                                <h4>AK Sports Academy</h4>
                                    <p>(Rajguru nagar)</p>
                                <br/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <div className="gallery-video-card">
                                <iframe
                                    className="gallery-video"
                                    src={youtubeVideoLinks[5]}
                                    title="Taekwondo Video 3"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="gallery-video-caption">
                                <h4>AK Sports Academy</h4>
                                    <p>(Rajguru nagar)</p>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                <h4>Coming soon..</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}