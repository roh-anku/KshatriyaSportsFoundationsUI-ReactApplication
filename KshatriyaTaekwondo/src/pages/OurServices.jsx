import React from 'react';
import './OurServices.css';
import { Link } from 'react-router-dom';

export function OurServices() {
    const [modalService, setModalService] = React.useState(null);
    const openModal = service => setModalService(service);
    const closeModal = () => setModalService(null);
    const serviceDetails = {
        'Professional Taekwondo Training': 'delectus reiciendis maiores alias consequatur aut.maiores alias delectus reiciendis maiores alias consequatur aut.maiores alias',
        'Kickboxing': 'delectus reiciendis maiores alias consequatur aut.maiores',
        'Self Defense Course': 'delectus reiciendis maiores alias consequatur aut.maiores',
        'Fitness And Functional Training': 'delectus reiciendis maiores alias consequatur aut.maiores',
        'Belt Gradation': 'delectus reiciendis maiores alias consequatur aut.maiores',
        '10th & 12th Grace Marks': 'delectus reiciendis maiores alias consequatur aut.maiores alias delectus reiciendis maiores alias consequatur aut.maiores alias'
    };

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
                        <li>Services</li>
                    </ul>
                </div>
            </div>
            {/* service section */}
            <section className="about-inner py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Our Expertise</h3>
                    <div className="row agile-service-grid pt-lg-4 pt-md-4 pt-3">
                        <div className="col-lg-6 col-md-12 col-sm-12 layouts-service-list text-center">
                            <div className="white-shadow">
                                <div className="text-wls-ser-bake">
                                    <span className="fas fa-bullhorn banner-icon"></span>
                                </div>
                                <div className="ser-inner-info">
                                    <h4>Professional Taekwondo Training</h4>
                                    <p>delectus reiciendis maiores alias consequatur aut.maiores alias
                                        delectus reiciendis maiores alias consequatur aut.maiores alias
                                    </p>
                                </div>
                                <div className="outs-agile-buttn mt-lg-3 mt-2">
                                    <a href="#" onClick={e=>{e.preventDefault(); openModal({ title: 'Professional Taekwondo Training', content: serviceDetails['Professional Taekwondo Training'] });}}>Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 layouts-service-list text-center gap-1">
                            <div className="white-shadow">
                                <div className="text-wls-ser-bake">
                                    <span className="fab fa-superpowers banner-icon"></span>
                                </div>
                                <div className="ser-inner-info">
                                    <h4>Kickboxing</h4>
                                    <p>delectus reiciendis maiores alias consequatur aut.maiores</p>
                                </div>
                                <div className="outs-agile-buttn mt-lg-3 mt-2">
                                    <a href="#" onClick={e=>{e.preventDefault(); openModal({ title: 'Kickboxing', content: serviceDetails['Kickboxing'] });}}>Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 layouts-service-list text-center gap-1">
                            <div className="white-shadow">
                                <div className="text-wls-ser-bake">
                                    <span className="fas fa-bicycle banner-icon"></span>
                                </div>
                                <div className="ser-inner-info">
                                    <h4>Self Defense Course</h4>
                                    <p>delectus reiciendis maiores alias consequatur aut.maiores</p>
                                </div>
                                <div className="outs-agile-buttn mt-lg-3 mt-2">
                                    <a href="#" onClick={e=>{e.preventDefault(); openModal({ title: 'Self Defense Course', content: serviceDetails['Self Defense Course'] });}}>Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row agile-service-grid pt-lg-4 pt-md-4 pt-4">
                        <div className="col-lg-3 col-md-6 col-sm-12 layouts-service-list text-center gap-2">
                            <div className="white-shadow">
                                <div className="text-wls-ser-bake">
                                    <span className="fab fa-cloudversify banner-icon"></span>
                                </div>
                                <div className="ser-inner-info">
                                    <h4>Fitness And Functional Training</h4>
                                    <p>delectus reiciendis maiores alias consequatur aut.maiores</p>
                                </div>
                                <div className="outs-agile-buttn mt-lg-3 mt-2">
                                    <a href="#" onClick={e=>{e.preventDefault(); openModal({ title: 'Fitness And Functional Training', content: serviceDetails['Fitness And Functional Training'] });}}>Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 layouts-service-list text-center gap-2">
                            <div className="white-shadow">
                                <div className="text-wls-ser-bake">
                                    <span className="fas fa-fire banner-icon"></span>
                                </div>
                                <div className="ser-inner-info">
                                    <h4>Belt Gradation</h4>
                                    <p>delectus reiciendis maiores alias consequatur aut.maiores</p>
                                </div>
                                <div className="outs-agile-buttn mt-lg-3 mt-2">
                                    <a href="#" onClick={e=>{e.preventDefault(); openModal({ title: 'Belt Gradation', content: serviceDetails['Belt Gradation'] });}}>Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 layouts-service-list text-center ">
                            <div className="white-shadow">
                                <div className="text-wls-ser-bake">
                                    <span className="far fa-snowflake banner-icon"></span>
                                </div>
                                <div className="ser-inner-info">
                                    <h4>10th & 12th Grace Marks</h4>
                                    <p>delectus reiciendis maiores alias consequatur aut.maiores alias
                                        delectus reiciendis maiores alias consequatur aut.maiores alias
                                    </p>
                                </div>
                                <div className="outs-agile-buttn mt-lg-3 mt-2">
                                    <a href="#" onClick={e=>{e.preventDefault(); openModal({ title: '10th & 12th Grace Marks', content: serviceDetails['10th & 12th Grace Marks'] });}}>Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {modalService && (
                <div className="blog-modal-overlay" onClick={closeModal}>
                    <div className="blog-modal" onClick={e=>e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <h2>{modalService.title}</h2>
                        <p>{modalService.content}</p>
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