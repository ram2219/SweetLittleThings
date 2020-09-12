import React, {Component} from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../img/menu_item/logo.JPG'
import {Col, Row} from 'reactstrap';

class Header extends Component
{
    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render()
    {
        return(
            <React.Fragment>
                <div className="header">
                    <div className="container">
                        <Row>
                            <Col>
                                <h1>Sweet Little Things</h1>
                                <h1><small>Tasty Little Treats!</small></h1>
                            </Col>
                        </Row>
                    </div>
                </div>

                <Navbar dark sticky="top" expand="sm">
                    <div className="container">
                        <NavLink className="nav-link" to="/home">
                            <img src={logo} id='logo' alt=''/>
                        </NavLink>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <h3>
                                <Nav navbar>
                                    <NavItem className="active">
                                        <NavLink className="nav-link" to="/home">
                                            <i className="fa fa-home fa-lg" /> Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="active">
                                        <NavLink className="nav-link" to="/menu">
                                            <i className="fa fa-birthday-cake fa-lg" /> Menu
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="active">
                                        <NavLink className="nav-link" to="/contact">
                                            <i className="fa fa-address-card fa-lg" /> Contact Us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </h3>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;