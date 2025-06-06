


function togglefunc() {
    const navbarMenu = document.getElementById('navbar-menu');
    navbarMenu.classList.toggle('active');
}


window.addEventListener('scroll', function () {
    const nav = document.getElementById('navbar');
    const ulmenu = document.getElementById('navbar-menu');
    const logo = document.getElementById('logo');

    if (window.scrollY > 50) {
        nav.style.backgroundColor = "white";
        nav.style.height = "80px";
        nav.style.boxShadow = "0px 3px 3px #000";
        ulmenu.style.marginTop = "0px";
        ulmenu.style.backgroundColor = "white";
        logo.style.marginBottom = "20px";
    } else {
        nav.style.backgroundColor = "rgba(4, 4, 78, 0.9)";
        nav.style.height = "100px";
        nav.style.boxShadow = "none";
        ulmenu.style.marginTop = "10px";
        ulmenu.style.backgroundColor = "transparent";
        logo.style.marginBottom = "0px";
    }
});

window.addEventListener('scroll', function () {
    const navbarLinks = document.querySelectorAll('.navbar-menu a');
    navbarLinks.forEach(link => {
        if (window.scrollY > 50) {
            link.style.color = 'rgba(4, 4, 78, 0.9)';
        } else {
            link.style.color = 'white';
        }
    });
});function yearBox1(){
    let box1=document.getElementById("timeline-box1");
    let box2=document.getElementById("timeline-box2");
    let box3=document.getElementById("timeline-box3");
    let box4=document.getElementById("timeline-box4");
    let box5=document.getElementById("timeline-box5");

    box1.style.opacity="1";
    box2.style.opacity="0";
    box3.style.opacity="0";
    box4.style.opacity="0";
    box5.style.opacity="0";

}
function yearBox4(){
    let box1=document.getElementById("timeline-box1");
    let box2=document.getElementById("timeline-box2");
    let box3=document.getElementById("timeline-box3");
    let box4=document.getElementById("timeline-box4");
    let box5=document.getElementById("timeline-box5");

    box4.style.opacity="1";
    box2.style.opacity="0";
    box3.style.opacity="0";
    box1.style.opacity="0";
    box5.style.opacity="0";

}function yearBox3(){
    let box1=document.getElementById("timeline-box1");
    let box2=document.getElementById("timeline-box2");
    let box3=document.getElementById("timeline-box3");
    let box4=document.getElementById("timeline-box4");
    let box5=document.getElementById("timeline-box5");
    box3.style.opacity="1";
    box2.style.opacity="0";
    box4.style.opacity="0";
    box1.style.opacity="0";
    box5.style.opacity="0";

}function yearBox2(){
    let box1=document.getElementById("timeline-box1");
    let box2=document.getElementById("timeline-box2");
    let box3=document.getElementById("timeline-box3");
    let box4=document.getElementById("timeline-box4");
    let box5=document.getElementById("timeline-box5");
    box2.style.opacity="1";
    box1.style.opacity="0";
    box3.style.opacity="0";
    box1.style.opacity="0";
    box5.style.opacity="0";
}
function crossBtn() {
    let cross = document.getElementById("pop-updiv");
    console.log("Button clicked!");  
    cross.style.display = "none";
  }
  function yearBox5(){
    let box1=document.getElementById("timeline-box1");
    let box2=document.getElementById("timeline-box2");
    let box3=document.getElementById("timeline-box3");
    let box4=document.getElementById("timeline-box4");
    let box5=document.getElementById("timeline-box5");
    box5.style.opacity="1";
    box2.style.opacity="0";
    box3.style.opacity="0";
    box1.style.opacity="0";
    box4.style.opacity="0";
}
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
        popUp.style.borderColor =  "  #a465ed";
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

window.addEventListener("scroll", function () {
    let popUp = document.getElementById("history-funfact");

    // Add a condition to trigger the display (e.g., scroll distance > 100px)
    if (window.scrollY > 100 ) {
       setTimeout(()=>{
        popUp.style.opacity = "1";
        popUp.style.visibility = "visible";
    },2000)
    } else {
        popUp.style.opacity = "0";
        popUp.style.visibility = "hidden";
    }
});