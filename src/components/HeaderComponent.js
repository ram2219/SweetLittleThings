import React, {Component} from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../img/menu_item/logo.JPG'

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
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h1>Sweet Little Things</h1>
                                <h1><small>Tasty Little Treats!</small></h1>
                            </div>
                        </div>
                    </div>
                </div>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <img src={logo} id='logo' alt=''/>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <h2>
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
                                        <NavLink className="nav-link" to="/contactus">
                                            <i className="fa fa-address-card fa-lg" /> Contact Us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </h2>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;