import React, { Component } from 'react';
class Sidebar extends Component
{
    constructor(props)
    {
        super(props)
        this.closeNav = this.closeNav.bind(this);
    }

    

    closeNav() 
    {
        if(window.innerWidth > 450)
        {
            document.getElementById("responsiveHeader").style.marginLeft = "0px";
            document.getElementById("pageContent").style.marginLeft = "0px";
            document.getElementById("menuSideBar").style.width = "0px";
            document.getElementById("menuNav").style.marginLeft = "0px";
            document.getElementById("open").style.display = "block";
        }
        else
        {
            document.getElementById("responsiveHeader").style.marginLeft = "0px";
            document.getElementById("open").style.display = "block";
            document.getElementById("pageContent").style.marginLeft = "0px";
            document.getElementById("menuSideBar").style.width = "0px";
            document.getElementById("menuNav").style.marginLeft = "0px";
        }
    }

    render()
    {
        return(
            <React.Fragment>
                <div id="menuSideBar" className="sidebar">            
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <h2 style={{marginTop: 165, marginLeft: 20, marginBottom: 15}}>Catalog</h2>
                    <a href="#"><h3>Cheesecakes</h3></a>
                    <a href="#"><h3>Cupcakes</h3></a>
                    <a href="#"><h3>Banana Bread</h3></a>
                    <a href="#"><h3>Jello</h3></a>
                    <a href="#"><h3>Arrangements</h3></a>             
                </div>
            </React.Fragment>
        )
    }
}

export default Sidebar;