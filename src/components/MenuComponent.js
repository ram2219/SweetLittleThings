import React, {Component} from 'react';
import Sidebar from './SidebarComponent';
import MenuHeader from './MenuHeaderComponent';
import banana_bread from '../img/menu_item/banana_bread.png';
import plain_cc from '../img/menu_item/plain_cc.png';
import pecan_cc from '../img/menu_item/pecan_cc.png';
import strawberry_cc from '../img/menu_item/strawberry_cc.png';
import oreo_cheesecake from '../img/menu_item/oreo_cheesecake.png';


class Menu extends Component
{
    render()
    {
        return(
        <React.Fragment>
            <Sidebar/>
            <MenuHeader/>
            <div id="pageContent" className="page">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 style={{paddingTop: 25}}><u>Cheesecakes</u></h1>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-6 col-lg-3 menu-background-1">
                            <img className='img-fluid d-block w-100' src={plain_cc} alt='Plain Cheesecake'/>
                            <h2 style={{paddingTop: 5}}>Plain Cheesecake</h2>
                            <h2>Price: $19.99</h2>
                        </div>
                        <div className="col-6 col-lg-3 menu-background-2">
                            <img className='img-fluid d-block w-100' src={strawberry_cc} alt='Strawberry Cheesecake'/>
                            <h2 style={{paddingTop: 5}}>Strawberry Cheesecake</h2>
                            <h2>Price: $22.99</h2>
                        </div>
                        
                        <div className="col-6 col-lg-3 order-last menu-background-1 ">
                            <img className='img-fluid d-block w-100' src={oreo_cheesecake} alt='Oreo Cheesecake'/>
                            <h2 style={{paddingTop: 5}}>Oreo Cheesecake</h2>
                            <h2>Price: $22.99</h2>
                        </div>
                        <div className="col-6 col-lg-3 order-lg-last menu-background-2">
                            <img className='img-fluid d-block w-100' src={pecan_cc} alt='Pecan Cheesecake'/>
                            <h2 style={{paddingTop: 5}}>Pecan Cheesecake</h2>
                            <h2>Price: $22.99</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h1 style={{paddingTop: 25}}><u>Banana Bread </u></h1>
                        </div>
                    </div>

                    <div className="row row-content">
                        <div className="col-6 col-lg-3 menu-background-2">
                            <img className='img-fluid d-block w-100' src={banana_bread} alt='Banana Bread'/>
                            <h2 style={{paddingTop: 5}}>Banana Bread</h2>
                            <h2>Price: $9.99</h2>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
            
            
        )
    }
}

export default Menu;