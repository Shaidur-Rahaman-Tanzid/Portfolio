import React, { Component } from 'react';

import ContactForm from './form'

class Contact extends Component {
    
    render() {
        
        return (
            <div id="contact" className="contact-page-area section-padding go-contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="contact-page-item">
                                <h2>My Contacts</h2>
                                <p>Have an idea or a project in mind? Let’s connect and build something great together.</p>
                                <div className="adress">
                                    <h3>Address</h3>
                                    <span>Madrasha Mor, Natore Sadar, Bangladesh</span>
                                </div>
                                <div className="phone">
                                    <h3>Phone</h3>
                                    <span>+88 01706-782347</span>
                                </div>
                                <div className="email">
                                    <h3>Email</h3>
                                    <span>sahidtanzid2014@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="contact-area contact-area-2 contact-area-3">
                                <h2>Quick Contact Form</h2>
                                <div className="contact-form">
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="contact-map">
                                <iframe title="Google Maps Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.8706896906027!2d88.9990543!3d24.4094116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc11714a398415:0x4b786d401795f55b!2sNatore!5e0!3m2!1sen!2sbd!4v1234567890123" width="100%" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

export default Contact;