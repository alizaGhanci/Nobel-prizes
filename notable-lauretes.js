window.addEventListener( "scroll",function () {
    const nav = document.getElementById("fixed-btn1")
    if (window.scrollY>50) {
        nav.style.display="flex"
    } else {
            nav.style.display="none"
    }
} 
)
window.addEventListener( "scroll",function () {
    const nav = document.getElementById("fixed-btn2")
    if (window.scrollY>50) {
        nav.style.display="flex"
    } else {
            nav.style.display="none"
    }
} 
)
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



 navbarLinks = document.querySelectorAll('.navbar a');


function changeNavbarLinkColorOnScroll() {
  
    if (window.scrollY > 50) {
     
        navbarLinks.forEach(link => {
            link.style.color = 'rgb(4, 4, 78)';
        });
    } else {
       
        navbarLinks.forEach(link => {
            link.style.color = 'white'; 
        });
    }
}

window.addEventListener('scroll', changeNavbarLinkColorOnScroll);
window.addEventListener( "scroll",function () {
    const ulmenu = document.getElementById("navbar-menu")
    const logo=document.getElementById("logo")
    if (window.scrollY>50) {
        ulmenu.style.marginTop="0px";ulmenu.style.backgroundColor="white";
logo.style.marginBottom="20px";
    }
    else{
        ulmenu.style.marginTop="10px";ulmenu.style.backgroundColor="transparent";ulmenu.style.fontWeight="bold"
 logo.style.marginBottom="0px"
    }
} 
)
window.addEventListener("scroll", function () {
    let popUp = document.getElementById("nav-btns1");

    if (window.scrollY > 100 ) {
       setTimeout(()=>{
        popUp.style.borderColor =  " #a465ed";
    },1000)
    } else {
        popUp.style.borderColor = "white";
    }
});
window.addEventListener("scroll", function () {
    let popUp = document.getElementById("nav-btns2");

    if (window.scrollY > 100 ) {
       setTimeout(()=>{
        popUp.style.borderColor =  " #a465ed";
    },1000)
    } else {
        popUp.style.borderColor = "white";
    }
});
window.addEventListener("scroll", function () {
    let popUp = document.getElementById("nav-btns3");

    if (window.scrollY > 100 ) {
       setTimeout(()=>{
        popUp.style.borderColor =  " #a465ed";
    },1000)
    } else {
        popUp.style.borderColor = "white";
    }
});
window.addEventListener("scroll", function () {
    let popUp = document.getElementById("nav-btns4");

    if (window.scrollY > 100 ) {
       setTimeout(()=>{
        popUp.style.borderColor =  " #a465ed";
    },1000)
    } else {
        popUp.style.borderColor = "white";
    }
});
window.addEventListener("scroll", function () {
    let popUp = document.getElementById("nav-btns5");

    if (window.scrollY > 100 ) {
       setTimeout(()=>{
        popUp.style.borderColor =  " #a465ed";
    },1000)
    } else {
        popUp.style.borderColor = "white";
    }
});
window.addEventListener("scroll", function () {
    let popUp = document.getElementById("nav-btns6");

    if (window.scrollY > 100 ) {
       setTimeout(()=>{
        popUp.style.borderColor =  " #a465ed";
    },1000)
    } else {
        popUp.style.borderColor = "white";
    }
});
window.addEventListener("scroll", function () {
    let popUp = document.getElementById("nav-btns7");

    if (window.scrollY > 100 ) {
       setTimeout(()=>{
        popUp.style.borderColor =  " #a465ed";
  

    },1000)
    } else {
        popUp.style.borderColor = "white";
    }
});