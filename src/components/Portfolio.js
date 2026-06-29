import React, { Component } from 'react';
import Gallery_1 from '../Assets/Images/gallery/commune1.jpeg';
import Gallery_3 from '../Assets/Images/gallery/ebs1.jpeg';
import Gallery_4 from '../Assets/Images/gallery/reviewdibo1.jpeg';
import Gallery_7 from '../Assets/Images/gallery/ba1.png';
import Gallery_8 from '../Assets/Images/gallery/crm1.png';
import Gallery_9 from '../Assets/Images/gallery/cp1.png';


import {Link} from 'react-router-dom'

class Porfolio extends Component {

    state = {
        onWebApp: true,
        onMobileApp: true,
    }

    cards = [
        { id: 1, image: Gallery_7, category: 'onWebApp', title: 'Ba Systems', description: 'A modern web application built with React' },
        { id: 2, image: Gallery_8, category: 'onWebApp', title: 'CRM', description: 'Responsive web design for mobile and desktop' },
        { id: 3, image: Gallery_9, category: 'onWebApp', title: 'Channel Partner', description: 'Full-stack web application with database' },
        { id: 4, image: Gallery_3, category: 'onMobileApp', title: 'EBS', description: 'iOS and Android mobile application' },
        { id: 5, image: Gallery_1, category: 'onMobileApp', title: 'ICommune', description: 'Cross-platform mobile app development' },
        { id: 6, image: Gallery_4, category: 'onMobileApp', title: 'ReviewDibo', description: 'Native mobile application with features' },
    ]

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onMobileApp: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onMobileApp: false,
            });
        }

        const mobileApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: false,
                onMobileApp: true,
            });
        }



        return (
            <section id="protfolio" className="gallery-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <div className="section-title">
                                    <span>Portfolio</span>
                                    <h2>Work I Have Done</h2>
                                </div>
                                <ul>
                                    <li><a href="/" className={this.state.onWebApp && this.state.onMobileApp ? "current active" : ""} onClick={allElement}>All</a></li>
                                    <li><a href="/" className={this.state.onWebApp && !this.state.onMobileApp ? "current active" : ""} onClick={webApp}>Web Application</a></li>               
                                    <li><a href="/" className={!this.state.onWebApp && this.state.onMobileApp ? "current active" : ""} onClick={mobileApp}>Mobile Application</a></li> 
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
                               
                                {this.cards.map((card) => (
                                    <div key={card.id} className={this.state[card.category] ? "grid active" : "grid"}>
                                        <img src={card.image} className="img img-responsive" alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }} />
                                        <div className="icon">
                                            <Link to={`/portfolio/${card.id}`} state={{ card }} className="view-icon">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="white_svg svg_white">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
            </section>
        );
    }
}

export default Porfolio;