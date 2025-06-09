document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.getElementById('navbar-toggler');
    const menu = document.getElementById('navbar-menu');

    toggler.addEventListener('click', function () {
        menu.classList.toggle('active');
        document.getElementById("navbar")
    });

 
   
});
window.addEventListener( "scroll",function () {
    const nav = document.getElementById("navbar")
    if (window.scrollY>50) {
        nav.style.backgroundColor="white";nav.style.height="80px";    nav.style.boxShadow = "0px 3px 3px #000";

    } else {
            nav.style.backgroundColor=" rgba(4, 4, 78,0.9)";nav.style.height="100px"; nav.style.boxShadow = "0px 0px 0px #000";
    }
} )
function togglefunc(){
    const nav = document.getElementById("navbar")
let navbarMenu=document.getElementById("navbar-menu");
let navbarLinks = document.querySelectorAll('.navbar a');

        nav.style.backgroundColor="white";nav.style.height="80px"
   navbarMenu.style.backgroundColor="white";
   navbarLinks.forEach(link => {
    link.style.color = 'rgb(4, 4, 78)';link.style.fontWeight="bold";
   
})
} 


window.addEventListener('scroll', function () {

    const navbarLinks = document.querySelectorAll('.navbar-menu a');
    navbarLinks.forEach(link => {
        if (window.scrollY > 50) {
            link.style.color = 'rgb(4, 4, 78)';
        } else {
            link.style.color = 'white';
        }
    });
});

