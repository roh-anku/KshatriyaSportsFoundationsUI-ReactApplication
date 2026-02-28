import React from 'react';

export function ClientCarousel({ testimonials }) {
    const [current, setCurrent] = React.useState(0);

    const prev = () => {
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    };
    const next = () => {
        setCurrent((c) => (c + 1) % testimonials.length);
    };

    if (testimonials.length === 0) {
        return null;
    }

    return (
        <div className="carousel slider">
            <div className="carousel-inner text-center">
                <div className="carousel-item active client-img py-lg-4 py-md-3 py-sm-3 py-2">
                    <div className="img-move">
                        <img
                            className="img-fluid"
                            src={testimonials[current].img}
                            alt="client picture"
                        />
                    </div>
                    <div className="client-matter pt-lg-4 pt-md-3 pt-3">
                        <p>{testimonials[current].text}</p>
                        <h6 className="pt-lg-3 pt-2">{testimonials[current].name}</h6>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" role="button" onClick={prev}>
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" role="button" onClick={next}>
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}
