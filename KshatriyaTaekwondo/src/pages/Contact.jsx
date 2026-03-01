import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { SendEnquiry } from '../services/ContactService.js';
import { EnquiryModel } from '../models/ContactDto.js'; 

export function Contact() {
    const ENQUIRY_LOADER_SUCCESS_DELAY_MS = 4000;
    const ENQUIRY_LOADER_ERROR_DELAY_MS = 5000;

    const [contactForm, setContactForm] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [contactErrors, setContactErrors] = React.useState({});
    const [contactSubmitted, setContactSubmitted] = React.useState(false);
    const [isSubmittingEnquiry, setIsSubmittingEnquiry] = React.useState(false);
    const [enquiryLoader, setEnquiryLoader] = React.useState({
        isVisible: false,
        status: 'loading',
        message: 'Sending your enquiry...'
    });

    const [subscribeEmail, setSubscribeEmail] = React.useState('');
    const [subscribeErrors, setSubscribeErrors] = React.useState({});
    const [subscribeSubmitted, setSubscribeSubmitted] = React.useState(false);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

    const validateContactForm = () => {
        const errors = {};
        const trimmedPhone = contactForm.phone.trim();

        if (!contactForm.name.trim()) errors.name = 'Name is required';
        if (!trimmedPhone) {
            errors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(trimmedPhone)) {
            errors.phone = 'Phone must be a valid 10-digit number';
        }

        if (!contactForm.email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(contactForm.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const validateSubscribeForm = () => {
        const errors = {};

        if (!subscribeEmail.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(subscribeEmail)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const handleContactChange = (event) => {
        const { name, value } = event.target;
        setContactForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleContactSubmit = async (event) => {
        event.preventDefault();
        if (isSubmittingEnquiry) return;

        setContactSubmitted(true);

        const errors = validateContactForm();
        setContactErrors(errors);
        
        if (Object.keys(errors).length) return;

        setIsSubmittingEnquiry(true);
        setEnquiryLoader({
            isVisible: true,
            status: 'loading',
            message: 'Sending your enquiry...'
        });

        try {
            const enquiryRequestDto = new EnquiryModel(contactForm.name, contactForm.email, contactForm.phone, contactForm.message);
            const response = await SendEnquiry(enquiryRequestDto);

            setEnquiryLoader({
                isVisible: true,
                status: 'success',
                message: response.message || 'Enquiry sent successfully.'
            });

            setContactForm({ name: '', email: '', phone: '', message: '' });
            setContactErrors({});
            setContactSubmitted(false);
            await delay(ENQUIRY_LOADER_SUCCESS_DELAY_MS);
        } catch (error) {
            const errorMessage = error?.message || 'Failed to send enquiry. Please try again.';
            setEnquiryLoader({
                isVisible: true,
                status: 'error',
                message: errorMessage
            });
            await delay(ENQUIRY_LOADER_ERROR_DELAY_MS);
        } finally {
            setEnquiryLoader((previousState) => ({
                ...previousState,
                isVisible: false
            }));
            setIsSubmittingEnquiry(false);
        }
    };

    const handleSubscribeSubmit = (event) => {
        event.preventDefault();
        setSubscribeSubmitted(true);

        const errors = validateSubscribeForm();
        setSubscribeErrors(errors);

        if (Object.keys(errors).length) return;

        setSubscribeEmail('');
        setSubscribeErrors({});
        setSubscribeSubmitted(false);
    };

    return (
        <>
            {enquiryLoader.isVisible && (
                <div className="enquiry-loader-overlay" role="status" aria-live="polite" aria-label="Sending enquiry, please wait">
                    <div className={`enquiry-loader-card enquiry-loader-${enquiryLoader.status}`}>
                        {enquiryLoader.status === 'loading' ? (
                            <div className="enquiry-loader-spinner" aria-hidden="true"></div>
                        ) : (
                            <div className="enquiry-loader-status-icon" aria-hidden="true">
                                {enquiryLoader.status === 'success' ? '✓' : '!'}
                            </div>
                        )}
                        <p>{enquiryLoader.message}</p>
                    </div>
                </div>
            )}
            {/* banner */}
            <div className="inner_page-banner two-img"></div>
            {/* breadcrumb */}
            <div className="using-border py-3">
                <div className="inner_breadcrumb  ml-4">
                    <ul className="short_ls">
                        <li>
                            <Link to="/Home">Home</Link>
                            <span>/ /</span>
                        </li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            {/* contact section */}
            <section className="contact py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Contact Us</h3>
                    <div className="agile-info-para">
                        <div className="row contactright pb-lg-5 pb-md-4 pb-sm-3 pb-3">
                            <div className="col-lg-4 col-md-4  text-center contact-address-grid">
                                <div className="footer_grid_left">
                                    <div className="contact_footer_grid_left text-center mb-3">
                                        <h5> Address</h5>
                                    </div>
                                    <p>Coming soon..<br />Pune-411051, India</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 text-center contact-address-grid">
                                <div className="footer_grid_left">
                                    <div className="contact_footer_grid_left text-center mb-3">
                                        <h5>Phone</h5>
                                    </div>
                                    <p>+(91) 9130330506 (Akshay Sir)<br />+(91) 8149200719 (Poonam Ma'am)</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 text-center contact-address-grid">
                                <div className="footer_grid_left">
                                    <div className="contact_footer_grid_left text-center mb-3">
                                        <h5>Email</h5>
                                    </div>
                                    <p><a href="mailto:akshaykhillari75@gmail.com">akshaykhillari75@gmail.com</a> <br /><a href="mailto:poonam.alan@gmail.com">poonam.alan@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="row contact-wls-detail">
                            <div className="col-lg-6 contact-form pb-lg-3 pb-2">
                                <form onSubmit={handleContactSubmit} noValidate>
                                    <div className="row agile-wls-contact-mid mb-lg-4 mb-3">
                                        <div className="col-lg-6 col-md-6 form-group contact-forms">
                                            <input
                                                type="text"
                                                name="name"
                                                className={`form-control ${contactSubmitted && contactErrors.name ? 'is-invalid' : ''}`}
                                                placeholder="Name"
                                                value={contactForm.name}
                                                onChange={handleContactChange}
                                                disabled={isSubmittingEnquiry}
                                                aria-invalid={contactSubmitted && contactErrors.name ? 'true' : 'false'}
                                            />
                                            {contactSubmitted && contactErrors.name && (
                                                <div className="invalid-feedback">{contactErrors.name}</div>
                                            )}
                                        </div>
                                        <div className="col-lg-6 col-md-6 form-group contact-forms">
                                            <input
                                                type="email"
                                                name="email"
                                                className={`form-control ${contactSubmitted && contactErrors.email ? 'is-invalid' : ''} ${contactSubmitted && !contactErrors.email && contactForm.email ? 'is-valid' : ''}`}
                                                placeholder="Email"
                                                value={contactForm.email}
                                                onChange={handleContactChange}
                                                disabled={isSubmittingEnquiry}
                                                aria-invalid={contactSubmitted && contactErrors.email ? 'true' : 'false'}
                                            />
                                            {contactSubmitted && contactErrors.email && (
                                                <div className="invalid-feedback">{contactErrors.email}</div>
                                            )}
                                            {contactSubmitted && !contactErrors.email && contactForm.email && (
                                                <div className="valid-feedback">Valid email address</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row agile-wls-contact-mid mb-lg-4 mb-3">
                                        <div className="col-lg-6 col-md-6 form-group contact-forms">
                                            <input
                                                type="text"
                                                name="phone"
                                                className={`form-control ${contactSubmitted && contactErrors.phone ? 'is-invalid' : ''}`}
                                                placeholder="Phone"
                                                value={contactForm.phone}
                                                onChange={handleContactChange}
                                                disabled={isSubmittingEnquiry}
                                                aria-invalid={contactSubmitted && contactErrors.phone ? 'true' : 'false'}
                                            />
                                            {contactSubmitted && contactErrors.phone && (
                                                <div className="invalid-feedback">{contactErrors.phone}</div>
                                            )}
                                        </div>
                                        {/* <div className="col-lg-6 col-md-6 form-group contact-forms">
                                            <input type="text" className="form-control" placeholder="subjecct" />
                                        </div> */}
                                    </div>
                                    <div className="form-group contact-forms">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            placeholder="Meassage"
                                            value={contactForm.message}
                                            onChange={handleContactChange}
                                            disabled={isSubmittingEnquiry}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn sent-butnn btn-lg" disabled={isSubmittingEnquiry}>
                                        {isSubmittingEnquiry ? 'Sending...' : 'Send Enquiry'}
                                    </button>
                                </form>
                            </div>
                            <div className="col-lg-6 address_mail_footer_grids">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0684903822503!2d73.82543967519075!3d18.48055658260528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29558701ee9c1%3A0xd7c45c5919f6b297!2sNityanand%20hall%2C%20Vitthalwadi%2C%20Hingne%20Khurd%2C%20Pune%2C%20Maharashtra%20411051!5e0!3m2!1sen!2sin!4v1772386275629!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                          
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* subscribe */}
            <section className="subscribe py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container-fluid py-lg-5 py-md-5 py-sm-4 py-4">
                    <h3 className="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Subscribe Us</h3>
                    <div className="row subscribe-form text-center">
                        <div className="col-md-6 email-sub-agile">
                            <form onSubmit={handleSubscribeSubmit} noValidate>
                                <div className="form-group ">
                                    <input
                                        type="email"
                                        className={`form-control email-sub-agile ${subscribeSubmitted && subscribeErrors.email ? 'is-invalid' : ''} ${subscribeSubmitted && !subscribeErrors.email && subscribeEmail ? 'is-valid' : ''}`}
                                        placeholder="Email"
                                        value={subscribeEmail}
                                        onChange={(event) => setSubscribeEmail(event.target.value)}
                                        disabled={isSubmittingEnquiry}
                                        aria-invalid={subscribeSubmitted && subscribeErrors.email ? 'true' : 'false'}
                                    />
                                    {subscribeSubmitted && subscribeErrors.email && (
                                        <div className="invalid-feedback">{subscribeErrors.email}</div>
                                    )}
                                    {subscribeSubmitted && !subscribeErrors.email && subscribeEmail && (
                                        <div className="valid-feedback">Valid email address</div>
                                    )}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn subscrib-btnn" disabled={isSubmittingEnquiry}>Submit</button>
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