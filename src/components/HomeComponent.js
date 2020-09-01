import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import InstagramEmbed from 'react-instagram-embed';
import heart_cake from '../img/menu_item/heart_cake.png';
import banana_bread from '../img/menu_item/banana_bread_2.png';
import mm_cupcake_square from '../img/menu_item/mm_cupcake_square.png';

class Home extends Component
{
    render()
    {
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col"></div>
                    <div className="col-12 col-lg-9 col-xl-7">
                        <h1>Welcome To Sweet Little Things!</h1>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row row-content">

                    <div className="col-12 col-md-6 mx-auto content-background-1" id='carousel'>
                        <Carousel>
                            <Carousel.Item>
                                <img className='w-100' src={heart_cake} alt=''/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={banana_bread} alt=''/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='d-block w-100' src={mm_cupcake_square} alt=''/>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col col-lg-6 content-background-2" id='ad'>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum."
                        </h2>
                    </div>
                </div>
                <div className="row" style={{marginTop: 25}}>
                    <div className="col">
                        <h1 className="text-center">About Me!</h1>
                    </div>             
                </div>
                <div className="row row-content">
                    <div id="aboutme" className="col-md-6 content-background-2">
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Elementum integer enim neque volutpat. Pellentesque elit eget gravida cum sociis natoque penatibus et. Odio pellentesque diam 
                            volutpat commodo sed. Viverra vitae congue eu consequat ac felis donec. 
                        <hr/>
                            Dignissim diam quis enim lobortis scelerisque fermentum. 
                            Mattis rhoncus urna neque viverra justo nec ultrices. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Donec pretium
                            vulputate sapien nec sagittis aliquam. Amet mauris commodo quis imperdiet.
                        <hr/>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et 
                            quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum
                            et dolorum fuga. 
                        </h2>
                    </div>
                    
                    <div className="col-md-6 content-background-1">
                        <InstagramEmbed
                            url='https://www.instagram.com/p/CCJftY6hFpC/'
                            maxWidth={640}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                        />
                    </div>
                </div>
                <div className="col"></div>
            </div>
        )
    }
}

export default Home;