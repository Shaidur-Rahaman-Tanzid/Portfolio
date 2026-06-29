import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ba_1 from '../Assets/Images/gallery/ba1.png';
import Ba_2 from '../Assets/Images/gallery/ba2.png';
import Ba_3 from '../Assets/Images/gallery/ba3.png';
import Crm_1 from '../Assets/Images/gallery/crm1.png';
import Crm_2 from '../Assets/Images/gallery/crm2.png';
import Crm_3 from '../Assets/Images/gallery/crm3.png';
import Cp_1 from '../Assets/Images/gallery/cp1.png';
import Cp_2 from '../Assets/Images/gallery/cp2.png';
import Cp_3 from '../Assets/Images/gallery/cp3.png';
import Ebs_1 from '../Assets/Images/gallery/ebs1.jpeg';
import Ebs_2 from '../Assets/Images/gallery/ebs2.jpeg';
import Commune_1 from '../Assets/Images/gallery/commune1.jpeg';
import Commune_2 from '../Assets/Images/gallery/commune2.jpeg';
import Reviewdibo_1 from '../Assets/Images/gallery/reviewdibo1.jpeg';
import Reviewdibo_2 from '../Assets/Images/gallery/reviewdibo2.jpeg';

class PortfolioDetails extends Component {

    state = {
        currentSlideIndex: 0
    }

    cards = [
        {
            id: 1,
            image: Ba_1,
            gallery: [Ba_1, Ba_2, Ba_3],
            category: 'onWebApp',
            title: 'Ba Systems',
            description: 'A modern web application built with React, Laravel and Strapi',
            details: 'This project is a full-featured Protfolio It has features like Job circular posting, application management, and user authentication. Built with React for the frontend and Laravel , Strapi for the backend, it ensures a seamless user experience and efficient data handling.',
            features: ['Job Circular Posting', 'Application Management', 'User Authentication', 'Dashboard Analytics', 'Real-time Notifications'],
            technologies: ['React', 'Laravel', 'MySQL', 'Stripe API'],
            client: 'Business Automation Ltd',
            duration: '6 months',
            team: '5 developers',
            year: '2025'
        },
        {
            id: 2,
            image: Crm_1,
            gallery: [Crm_1, Crm_2, Crm_3],
            category: 'onWebApp',
            title: 'CRM System',
            description: 'Responsive web design for mobile and desktop',
            details: 'A responsive portfolio website showcasing creative work and projects. Features smooth animations, responsive design, and optimized performance for all devices.',
            features: ['Lead Generation', 'Meeting schedule', 'Task management', 'G-mail integration', 'Mobile Friendly'],
            technologies: ['React', 'Chakra', 'FastApi', 'MySql', 'Responsive Design'],
            client: 'Business Automation Ltd',
            duration: '3 months',
            team: '1 developer',
            year: '2025'
        },
        {
            id: 3,
            image: Cp_1,
            gallery: [Cp_1, Cp_2, Cp_3],
            category: 'onWebApp',
            title: 'Channel Partner',
            description: 'Full-stack web application with database',
            details: 'A comprehensive project management tool with team collaboration features, task tracking, and real-time updates. Includes user roles, permissions, and reporting dashboards.',
            features: ['Task Tracking', 'Team Collaboration', 'Real-time Updates', 'Permission System', 'Analytics Dashboard'],
            technologies: ['React', 'Firebase', 'Redux', 'Material-UI'],
            client: 'Business Automation Ltd',
            duration: '8 months',
            team: '2 developers',
            year: '2025'
        },
        {
            id: 4,
            image: Ebs_1,
            gallery: [Ebs_1, Ebs_2],
            category: 'onMobileApp',
            title: 'EBS',
            description: 'A cross-platform employee business system mobile application for iOS and Android, designed to streamline attendance, communication, and daily work management.',
            details: 'EBS is a mobile-based employee business system designed to improve internal operations and communication. The application includes punch in/out attendance tracking, real-time chat, leave management, work logs, and a dynamic activity feed. Built for scalability and long-term use, it supports daily workforce management and ongoing maintenance to adapt to evolving business needs.',
            features: ['Punch in/out feature ', 'Real-time Chat module', 'Voice/Video Calls','Leave Management', 'Work log', 'Dynamic feed', 'Push Notifications'],
            technologies: ['Flutter', 'Firebase', 'Rest API', 'Google Cloud'],
            client: 'Business Automation Ltd',
            duration: '24 months + Ongoing Maintenance',
            team: '4 developers',
            year: '2024'
        },
        {
            id: 5,
            image: Commune_1,
            gallery: [Commune_1, Commune_2],
            category: 'onMobileApp',
            title: 'iCommune',
            description: 'A cross-platform community engagement mobile application designed for communication, events, and shared services.',
            details: 'iCommune is a community-focused mobile application that enables users to stay connected through a dynamic feed, participate in community activities, manage events, and access dining-related services. Built with a focus on usability and performance, the app supports smooth interaction, real-time updates, and scalable growth for modern residential or organizational communities.',
            features: ['Dynamic Feed', 'Community Engagement', 'Event management', 'Dining management'],
            technologies: ['Flutter', 'Google Maps API', 'Couchbase', 'Rest API'],
            client: 'Business Automation Ltd',
            duration: '24 months + Ongoing Maintenance',
            team: '3 developers',
            year: '2024'
        },
        {
            id: 6,
            image: Reviewdibo_1,
            gallery: [Reviewdibo_1, Reviewdibo_2],
            category: 'onMobileApp',
            title: 'ReviewDibo',
            description: 'A Flutter mobile application for iOS and Android that provides a platform for users to share reviews, ratings, and recommendations on various products and services.',
            details: 'ReviewDibo is a user-friendly mobile application that allows users to share their opinions and experiences through reviews and ratings. The app features a clean interface for browsing and submitting reviews, a robust search functionality, and personalized recommendations based on user preferences. Built with Flutter for cross-platform compatibility, ReviewDibo offers a seamless experience for users looking to discover and share insights on products and services.',
            features: ['Home', 'Reviews', 'Merchants', 'Search', 'User Profiles'],
            technologies: ['Flutter', 'FastApi',],
            client: 'Myself',
            duration: '6 months',
            team: '1 developer',
            year: '2025'
        },
    ]

    nextSlide = () => {
        const card = this.cards.find(c => c.id === parseInt(this.props.match.params.id)) || this.cards[0];
        this.setState({
            currentSlideIndex: (this.state.currentSlideIndex + 1) % card.gallery.length
        });
    }

    prevSlide = () => {
        const card = this.cards.find(c => c.id === parseInt(this.props.match.params.id)) || this.cards[0];
        this.setState({
            currentSlideIndex: (this.state.currentSlideIndex - 1 + card.gallery.length) % card.gallery.length
        });
    }

    render() {
        const { id } = this.props.match.params;
        const card = this.cards.find(c => c.id === parseInt(id)) || this.cards[0];

        return (
            <section className="portfolio-details section-padding" style={{ backgroundColor: '#1a1a1a' }}>
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="portfolio-header" style={{ marginBottom: '30px' }}>
                                <Link to="/#protfolio" className="back-btn" style={{ display: 'inline-block', marginBottom: '20px', color: '#888888', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }}>
                                    ← Back to Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ marginBottom: '60px' }}>
                        <div className="col col-xs-12">
                            <div style={{ position: 'relative', backgroundColor: '#202020', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                                <img src={card.gallery[this.state.currentSlideIndex]} alt="Gallery" style={{ width: '100%', height: '500px', objectFit: 'contain', display: 'block', backgroundColor: '#202020' }} />

                                <button onClick={this.prevSlide} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#aaa', border: 'none', padding: '10px 15px', borderRadius: '50%', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold', zIndex: 10, color: 'white' }}>
                                    ❮
                                </button>
                                <button onClick={this.nextSlide} style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#aaa', border: 'none', padding: '10px 15px', borderRadius: '50%', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold', zIndex: 10, color: 'white' }}>
                                    ❯
                                </button>

                                <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
                                    {card.gallery.map((_, index) => (
                                        <div key={index} style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: index === this.state.currentSlideIndex ? '#888888' : 'rgba(255,255,255,0.5)', cursor: 'pointer' }} onClick={() => this.setState({ currentSlideIndex: index })}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ alignItems: 'flex-start' }}>
                        <div className="col col-md-7 col-sm-12">
                            <div style={{ backgroundColor: '#252525', padding: '30px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
                                <h2 style={{ fontSize: '36px', marginBottom: '15px', color: '#fff' }}>{card.title}</h2>

                                <div style={{ marginBottom: '20px' }}>
                                    <span style={{ display: 'inline-block', backgroundColor: '#888888', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>
                                        {card.category === 'onWebApp' ? 'Web Application' : 'Mobile Application'}
                                    </span>
                                </div>

                                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#ccc', marginBottom: '25px' }}>
                                    {card.description}
                                </p>

                                <div style={{ marginBottom: '30px' }}>
                                    <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#fff' }}>Key Features</h3>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {card.features.map((feature, index) => (
                                            <li key={index} style={{ padding: '8px 0', color: '#aaa', fontSize: '15px' }}>
                                                <span style={{ color: '#888888', marginRight: '10px', fontWeight: 'bold' }}>✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <a
                                        href="/"
                                        onClick={(e) => e.preventDefault()}
                                        style={{
                                            display: 'inline-block',
                                            backgroundColor: '#888888',
                                            color: 'white',
                                            padding: '12px 30px',
                                            textDecoration: 'none',
                                            borderRadius: '4px',
                                            transition: 'background-color 0.3s',
                                            fontWeight: 'bold'
                                        }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#707070'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#888888'}
                                    >
                                        Visit Project
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col col-md-5 col-sm-12" style={{ marginTop: '20px' }}>
                            <div style={{ backgroundColor: '#252525', padding: '25px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
                                <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#fff' }}>Project Details</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ padding: '12px 0', borderBottom: '1px solid #3a3a3a', display: 'flex', justifyContent: 'space-between' }}>
                                        <strong style={{ color: '#fff' }}>Client:</strong> <span style={{ color: '#aaa' }}>{card.client}</span>
                                    </li>
                                    <li style={{ padding: '12px 0', borderBottom: '1px solid #3a3a3a', display: 'flex', justifyContent: 'space-between' }}>
                                        <strong style={{ color: '#fff' }}>Duration:</strong> <span style={{ color: '#aaa' }}>{card.duration}</span>
                                    </li>
                                    <li style={{ padding: '12px 0', borderBottom: '1px solid #3a3a3a', display: 'flex', justifyContent: 'space-between' }}>
                                        <strong style={{ color: '#fff' }}>Team Size:</strong> <span style={{ color: '#aaa' }}>{card.team}</span>
                                    </li>
                                    <li style={{ padding: '12px 0', display: 'flex', justifyContent: 'space-between' }}>
                                        <strong style={{ color: '#fff' }}>Year:</strong> <span style={{ color: '#aaa' }}>{card.year}</span>
                                    </li>
                                </ul>
                            </div>

                            <div style={{ backgroundColor: '#252525', padding: '25px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
                                <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#fff' }}>Technologies</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {card.technologies.map((tech, index) => (
                                        <span key={index} style={{ backgroundColor: '#1a1a1a', padding: '8px 14px', borderRadius: '20px', fontSize: '13px', color: '#888888', border: '1px solid #888888' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: '60px' }}>
                        <div className="col col-xs-12">
                            <div style={{ backgroundColor: '#252525', padding: '30px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
                                <h3 style={{ fontSize: '28px', marginBottom: '20px', color: '#fff' }}>Project Overview</h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#aaa', marginBottom: '30px' }}>
                                    {card.details}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="row" style={{ marginTop: '40px', marginBottom: '60px' }}>
                        <div className="col col-xs-12">
                            <div style={{ backgroundColor: '#252525', padding: '30px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
                                <h3 style={{ fontSize: '28px', marginBottom: '20px', color: '#fff' }}>Technologies Used</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                                    {card.technologies.map((tech, index) => (
                                        <div key={index} style={{ padding: '15px', backgroundColor: '#1a1a1a', borderRadius: '6px', textAlign: 'center', border: '2px solid #888888' }}>
                                            <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#fff' }}>
                                                {tech}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="row" style={{ borderTop: '2px solid #888888', paddingTop: '40px', marginBottom: '40px' }}>
                        <div className="col col-xs-12" style={{ textAlign: 'center', backgroundColor: '#252525', padding: '40px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
                            <h3 style={{ fontSize: '28px', marginBottom: '15px', color: '#fff' }}>Want to work on a project like this?</h3>
                            <p style={{ fontSize: '16px', color: '#aaa', marginBottom: '25px' }}>Let's discuss your project requirements and create something amazing together.</p>
                            <Link to="/#contact" style={{ display: 'inline-block', backgroundColor: '#888888', color: 'white', padding: '14px 45px', textDecoration: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', transition: 'background-color 0.3s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#aaa'} onMouseLeave={(e) => e.target.style.backgroundColor = '##888888'}>
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioDetails;
