import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import Slides from '../Assets/banner.jpeg';


class Banner extends Component {
    render() {
        return(
            <section id="home" className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    <div className="slide">
                        <div className="slider-image">
                            <img src={Slides} alt="" style={{objectFit: 'cover'}} />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-subtitle">
                                        <h4>I Am Tanzid</h4>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Software Developer</h2>
                                    </div>
                                    <div className="btns">
                                        <a href="#contact" className="template-btn go-contact-area">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy"><p>Software Developer</p></div>
                <div className="social-links">
                    <ul>
                        <li><Link to="https://www.facebook.com/share/1GDezAxwyK/?mibextid=wwXIfr"><i className="fa fa-facebook"></i></Link></li>
                        <li><Link to="https://x.com/sahid_tanzid?s=21&t=YxXUr1pzznvnMdgk7wx8aw"><i className="fa fa-twitter"></i></Link></li>
                        <li><Link to="https://www.linkedin.com/in/md-shaidur-rahaman-18ab2024b/"><i className="fa fa-linkedin"></i></Link></li>
                        <li><Link to="https://github.com/Shaidur-Rahaman-Tanzid"><i className="fa fa-github"></i></Link></li>
                    </ul>
                </div>
                <div className="white_svg">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </section>
        )
    }
}

export default Banner;