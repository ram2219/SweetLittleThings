import React, {Component} from 'react';
import Home from './HomeComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect} from "react-router-dom";

class Main extends Component
{
    render()
    {
        const HomePage = () => {return(<Home/>)}
        const MenuPage = () => {return(<Menu/>)}
        const ContactPage = () => {return(<Contact/>)}

        return(
        <React.Fragment>
            <Header/>
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/menu' component={MenuPage} />
                <Route path='/contact' component={ContactPage} />
                <Redirect to='/home' />
            </Switch>
            <Footer/>
        </React.Fragment>
        )
    }
}

export default Main;