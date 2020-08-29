$(function()
{
    $(".carousel").carousel({interval:3000});
});

/* Set the width of the sidebar to 140px and the left margin of the page content to 140px */
function openNav() 
{ 
    if(window.innerWidth > 450)
    {
        document.getElementById("pageContent").style.marginLeft = "150px";
        document.getElementById("menuSideBar").style.width = "150px";
        document.getElementById("open").style.display = "none";
    }
    else
    {
        document.getElementById("menuSideBar").style.width = "150px";
        document.getElementById("menuNav").style.marginLeft = "150px";
    }
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() 
{
    if(window.innerWidth > 450)
    {
        document.getElementById("pageContent").style.marginLeft = "0px";
        document.getElementById("menuSideBar").style.width = "0px";
        document.getElementById("open").style.display = "block";
    }
    else
    {
        document.getElementById("menuSideBar").style.width = "0px";
        document.getElementById("menuNav").style.marginLeft = "0px";
    }
}
