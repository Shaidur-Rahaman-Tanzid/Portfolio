import React, { Component } from 'react';
import Logo from '../Assets/Images/logo.svg';
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <Link to="/">
                                    <img src={Logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                    <li><Link to="https://www.facebook.com/share/1GDezAxwyK/?mibextid=wwXIfr"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link to="https://x.com/sahid_tanzid?s=21&t=YxXUr1pzznvnMdgk7wx8aw"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link to="https://www.linkedin.com/in/md-shaidur-rahaman-18ab2024b/"><i className="fa fa-linkedin"></i></Link></li>
                                    <li><Link to="https://github.com/Shaidur-Rahaman-Tanzid"><i className="fa fa-github"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p><i className="fa fa-copyright"></i>Copyright <span> 2026 Tanzid. All rights reserved</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;