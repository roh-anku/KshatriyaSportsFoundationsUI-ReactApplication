import './Gallery.css';
import { Link } from 'react-router-dom';
// gallery images
import g1 from '../images/g1.jpg';
import g2 from '../images/g2.jpg';
import g3 from '../images/g3.jpg';
import g4 from '../images/g4.jpg';
import g5 from '../images/g5.jpg';
import g6 from '../images/g6.jpg';
import g7 from '../images/g7.jpg';
import g8 from '../images/g8.jpg';

export function Gallery() {
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
                                    <h4>AK<span><br />Sports</span></h4>
                                    <p>Lorem ipsum dolor</p>
                                    <a href={g1} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g2} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK<span><br />Sports</span></h4>
                                    <p>Lorem ipsum dolor</p>
                                    <a href={g2} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g3} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK<span><br />Sports</span></h4>
                                    <p>Lorem ipsum dolor</p>
                                    <a href={g3} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="row grid gallery-info my-lg-4 my-md-3">
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g3} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK<span><br />Sports</span></h4>
                                    <p>Lorem ipsum dolor</p>
                                    <a href={g3} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g4} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK<span><br />Sports</span></h4>
                                    <p>Lorem ipsum dolor</p>
                                    <a href={g4} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g5} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK<span><br />Sports</span></h4>
                                    <p>Lorem ipsum dolor</p>
                                    <a href={g5} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="row grid gallery-info">
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g6} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK<span><br />Sports</span></h4>
                                    <p>Lorem ipsum dolor</p>
                                    <a href={g6} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g7} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK<span><br />Sports</span></h4>
                                    <p>Lorem ipsum dolor</p>
                                    <a href={g7} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 gallery-grids">
                            <figure className="effect-moses">
                                <img src={g8} alt="" className="img-fluid" />
                                <figcaption>
                                    <h4>AK<span><br />Sports</span></h4>
                                    <p>Lorem ipsum dolor</p>
                                    <a href={g8} className="gallery-box" data-lightbox="example-set" data-title="">
                                    </a>
                                </figcaption>
                            </figure>
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
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit,delectus reiciendis maiores alias consequatur aut.maiores alias</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}