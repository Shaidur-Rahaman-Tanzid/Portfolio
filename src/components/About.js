import React, { Component } from 'react';
import aboutImg from '../Assets/Images/about.png';

class About extends Component {
    render() {
        return (
            <div id="about" className="about-area">
                <div className="borderd"></div>
                <div className="container">
                    <div className="about-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img src={aboutImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <h2>About Me</h2>
                                    <p>
                                        I am an experienced mobile application developer focused on building scalable, high-performance
                                        solutions with clean architecture and maintainable code.
                                    </p>

                                    <p className="mt-4">
                                        I have strong experience with React for modern web interfaces and FastAPI for designing fast,
                                        secure backend APIs, delivering reliable applications end to end.
                                    </p>
                                    <a href="/Resume.pdf" className="template-btn" download>Download Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white_svg svg_white">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </div>
        );
    }
}

export default About;