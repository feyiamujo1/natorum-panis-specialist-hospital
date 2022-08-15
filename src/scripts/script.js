// const showSideBar = () => {
//     // document.getElementById("nav_links").style.height = "100%";
//     document.getElementById("menubtn").style.display = "none";
//     document.getElementById("closebtn").style.display = "block";
//     // for(var i =0; i < nav_link.length; i++ ){
//     //   nav_link[i].style.display = "block";
//     // }
// }

// const closeSideBar = () => {
//     // document.getElementById("nav_links").style.height = "0%";
//     document.getElementById("menubtn").style.display = "block";
//     document.getElementById("closebtn").style.display = "none";
//     // for(var i =0; i < nav_link.length; i++ ){
//     //     nav_link[i].style.display = "none";
//     // }
// }

const Togglemenu = (e) =>{
    let nav_links = document.getElementById("nav_links");
    e.name === 'menu' ? (e.name = 'close', nav_links.classList.add('top-[80px]'), nav_links.classList.add('opacity-100')) 
    : (e.name = 'menu', nav_links.classList.remove('opacity-100'), nav_links.classList.remove('top-[80px]'))
};