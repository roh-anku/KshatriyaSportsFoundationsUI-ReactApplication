import './Typography.css';
import { Link } from 'react-router-dom';

export function Typography() {
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
                        <li>Typography</li>
                    </ul>
                </div>
            </div>
            {/* typography content */}
            <section className="about-inner py-lg-4 py-md-3 py-sm-3 py-3">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Typography</h3>
                    <div className="typo-grids">
                        <div className="sub-title">
                            <div className="sub-head mb-4">
                                <h4>Headings</h4>
                            </div>
                            <div className="bs-example">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><h1 className="bootstrap-heading">h1. Bootstrap heading</h1></td>
                                            <td className="type-info">Semibold 36px</td>
                                        </tr>
                                        <tr>
                                            <td><h2 className="bootstrap-heading">h2. Bootstrap heading</h2></td>
                                            <td className="type-info">Semibold 30px</td>
                                        </tr>
                                        <tr>
                                            <td><h3 className="bootstrap-heading">h3. Bootstrap heading</h3></td>
                                            <td className="type-info">Semibold 24px</td>
                                        </tr>
                                        <tr>
                                            <td><h4 className="bootstrap-heading">h4. Bootstrap heading</h4></td>
                                            <td className="type-info">Semibold 18px</td>
                                        </tr>
                                        <tr>
                                            <td><h5 className="bootstrap-heading">h5. Bootstrap heading</h5></td>
                                            <td className="type-info">Semibold 14px</td>
                                        </tr>
                                        <tr>
                                            <td><h6>h6. Bootstrap heading</h6></td>
                                            <td className="type-info">Semibold 12px</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* additional typography examples could go here */}
                    </div>
                </div>
            </section>
        </>
    );
}