import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends Component
{
    render ()
    {
        return (
            <footer>
                <div className="container">
                    <Row className="row-content"> 
                        <Col xs={6} sm={6} md={4} className="text-center">
                            <h3> <u>Links</u>
                                <small>
                                    <ul className="list-unstyled">
                                        <li><Link to='/home'>Home</Link></li>
                                        <li><Link to='/menu'>Menu</Link></li>
                                        <li><Link to='/contact'>Contact</Link></li>
                                    </ul>
                                </small>
                            </h3> 
                        </Col>
                        <Col xs={6} sm={6} md={4} className="text-center">
                            <h3><u>Social</u></h3> 
                            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/sweetlittlem_/?hl=en"><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-youtube" href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a>
                        </Col>
                        <Col sm={12} md={4} className="text-center">
                            <h3>
                                <u>Contact Info</u> <br/>
                                <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone fa-lg"></i> 1-206-555-1234</a><br/>
                                <a role="button" className="btn btn-link" href="mailto:campsites@nucamp.com"><i className="fa fa-envelope fa-lg"></i> sweet_little_things@gmail.com</a>
                            </h3>
                        </Col>
                    </Row>
                </div>
            </footer>
        );
    }
}

export default Footer;