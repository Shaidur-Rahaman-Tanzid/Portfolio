import React, { Component } from 'react';
import Gallery_1 from '../Assets/Images/gallery/img-1.jpg';
import Gallery_2 from '../Assets/Images/gallery/img-2.jpg';
import Gallery_3 from '../Assets/Images/gallery/img-3.jpg';
import Gallery_4 from '../Assets/Images/gallery/img-4.jpg';
import Gallery_5 from '../Assets/Images/gallery/img-5.jpg';
import Gallery_6 from '../Assets/Images/gallery/img-6.jpg';
import {Link} from 'react-router-dom'

class Porfolio extends Component {

    state = {
        onWebApp: true,
        onMobileApp: true,
    }

    cards = [
        { id: 1, image: Gallery_1, category: 'onWebApp', title: 'Ba Systems', description: 'A modern web application built with React' },
        { id: 2, image: Gallery_2, category: 'onWebApp', title: 'CRM', description: 'Responsive web design for mobile and desktop' },
        { id: 3, image: Gallery_6, category: 'onWebApp', title: 'Channel Partner', description: 'Full-stack web application with database' },
        { id: 4, image: Gallery_5, category: 'onMobileApp', title: 'EBS', description: 'iOS and Android mobile application' },
        { id: 5, image: Gallery_3, category: 'onMobileApp', title: 'ICommune', description: 'Cross-platform mobile app development' },
        { id: 6, image: Gallery_4, category: 'onMobileApp', title: 'Goal', description: 'Native mobile application with features' },
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
                                    <li><a href="#" className={this.state.onWebApp && this.state.onMobileApp ? "current active" : ""} onClick={allElement}>All</a></li>
                                    <li><a href="#" className={this.state.onWebApp && !this.state.onMobileApp ? "current active" : ""} onClick={webApp}>Web Application</a></li>               
                                    <li><a href="#" className={!this.state.onWebApp && this.state.onMobileApp ? "current active" : ""} onClick={mobileApp}>Mobile Application</a></li> 
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
                               
                                {this.cards.map((card) => (
                                    <div key={card.id} className={this.state[card.category] ? "grid active" : "grid"}>
                                        <img src={card.image} className="img img-responsive" alt={card.title} />
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