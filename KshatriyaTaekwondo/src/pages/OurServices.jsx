import React from 'react';
import './OurServices.css';
import { Link } from 'react-router-dom';

export function OurServices() {
    const [modalService, setModalService] = React.useState(null);
    const openModal = service => setModalService(service);
    const closeModal = () => setModalService(null);
    const serviceDetails = {
        'Professional Taekwondo Training': "Professional Taekwondo training at a professional level is a rigorous, holistic discipline that balances explosive physical power with profound mental fortitude. Modern professional programs, often aligned with World Taekwondo (WT) or Kukkiwon standards, focus on a systematic curriculum.",
        'Kickboxing': 'Kickboxing is a high-intensity, full-contact combat sport and martial art that combines punching techniques from boxing with kicking techniques, often derived from karate and Muay Thai. Emerging in Japan in the 1960s and popularizing in the US during the 1970s, it has evolved into a premier full-body workout and competitive sport focused on stand-up striking. Beyond its use in competition, kickboxing is highly regarded as an effective fitness regimen, offering significant cardiovascular benefits, improved muscular strength, better coordination, and enhanced self-defense skills. With various styles ranging from "cardio" (non-contact) to full-contact rules, participants use punching bags or sparring to burn calories, relieve stress, and develop discipline in a fast-paced environment.',
        'Self Defense Course': 'Empower yourself with our comprehensive Self-Defense Course, designed to build both physical capability and mental resilience in an unpredictable world. This program goes beyond just physical techniques, providing practical training in situational awareness, conflict de-escalation, and essential, easy-to-learn moves that enable you to resist, escape, and survive potential threats. Perfect for all fitness levels, our classes boost self-confidence and foster a sense of security, equipping you with the tools needed to protect yourself and your loved ones while reducing fear in daily life. Whether you are looking to improve your overall wellness or gain specific, actionable safety skills, this course offers a proactive step toward a more empowered and secure future.',
        'Fitness And Functional Training': 'Fitness and functional training focuses on preparing the body for the rigors of daily life rather than just aesthetic improvement, utilizing multi-joint, compound movements like squats, lunges, pushing, and pulling. By simulating real-world actions, this training approach strengthens muscles in harmony, enhances coordination, improves core stability, and increases balance, which significantly reduces the risk of injury. It is a scalable, effective method suitable for all fitness levels—ranging from rehabilitation to advanced athletic performance—that promotes long-term independence, agility, and joint health by training the body to work as an integrated unit.',
        'Belt Gradation': "The belt gradation system in martial arts serves as a structured roadmap for a practitioner's development, symbolizing technical proficiency, mental maturity, and dedication through a sequence of colors. Beginning with a white belt, which represents a blank slate and the start of a beginner's journey, students progress through various intermediate, increasingly darker colors—such as yellow, green, and brown—that signify growing knowledge and capability. These ranks are earned through rigorous examinations, or gradings, where instructors evaluate a student's technical skill, discipline, and understanding of principles. Ultimately, the gradation process culminates in the black belt, which signifies not an end to learning, but a mastery of basic techniques and the beginning of a deeper, more profound study of the art.",
        '10th & 12th Grace Marks': "Taekwondo practitioners in 10th and 12th grades can avail themselves of significant academic benefits, specifically through grace marks for their participation in recognised competitions. Under guidelines from various state boards (such as Maharashtra), student-athletes who have participated in state, national, or international-level Taekwondo events during the academic year are entitled to grace marks, ranging from 5 to 25 marks based on the level of achievement. Proficiency or high placement in state-level meets can secure up to 15-20 marks, while international participation can earn up to 25 bonus marks. To avail of these, students must generally submit their certificates and a proposal through their school to the District Sports Officer (DSO) before the designated deadline, usually within one month of the board results or exam time. These marks are typically added to the final results to help students pass or improve their overall percentage, acknowledging their dedication to both sports and academics."
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
                                    <p>A comprehensive, high-intensity martial arts program focusing on elite-level kicking, speed, and strategic sparring (Kyorugi) for competition, alongside mastering complex forms (Poomsae)
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
                                    <p>A high-intensity, full-body fitness routine combining martial arts techniques—such as punches, kicks, knee strikes, and jabs—with aerobic exercise</p>
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
                                    <p>A structured, reality-based training program designed to teach, and mentally prepare individuals to recognize, avoid, and physically counter real-world threats</p>
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
                                    <p>A specialized, multi-joint exercise approach designed to improve strength, stability, and range of motion by mimicking daily life movements like lifting, reaching, and squatting</p>
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
                                    <p>The structured examination and ranking system used in martial arts—primarily Karate, Taekwondo, and Judo—to signify a practitioners skill level, experience, and progress</p>
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
                                    <p>Extra marks awarded to student-athletes for participating in or winning medals at district, state, national, or international competitions
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