const showSideBar = () => {
    // document.getElementById("nav_links").style.width = "60%";
    document.getElementById("menubtn").style.display = "none";
    document.getElementById("closebtn").style.display = "block";
    // for(var i =0; i < nav_link.length; i++ ){
    //   nav_link[i].style.display = "block";
    // }
}

const closeSideBar = () => {
    // document.getElementById("nav_links").style.width = "0%";
    document.getElementById("menubtn").style.display = "block";
    document.getElementById("closebtn").style.display = "none";
    // for(var i =0; i < nav_link.length; i++ ){
    //     nav_link[i].style.display = "none";
    // }
}