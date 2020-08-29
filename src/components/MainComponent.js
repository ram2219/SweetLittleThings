import React, {Component} from 'react';
import Home from './HomeComponent'
import Header from './HeaderComponent';

class Main extends Component
{
    render()
    {
        return(
        <React.Fragment>
            <Header/>
            <Home/>
        </React.Fragment>
        )
    }
}

export default Main;