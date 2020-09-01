import React, {Component} from 'react';

class Footer extends Component
{
    render ()
    {
        return (
            <footer>
                <div className="container">
                    <div className="row row-content"> 
                        <div className="col-6 col-sm-6 col-md-4 text-center">
                            <h3> <u>Links</u>
                                <ul className="list-unstyled">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Sites</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </h3> 
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 text-center">
                            <h3><u>Social</u></h3>
                            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/sweetlittlem_/?hl=en"><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-youtube" href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a>
                        </div>
                        <div className="col col-sm col-md-4 text-center">
                            <h3>
                                <u>Contact Info</u> <br/>
                                <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone fa-lg"></i> 1-206-555-1234</a><br/>
                                <a role="button" className="btn btn-link" href="mailto:campsites@nucamp.com"><i className="fa fa-envelope fa-lg"></i> sweet_little_things@gmail.com</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;