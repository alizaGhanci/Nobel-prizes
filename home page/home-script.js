let ShowWeb = document.getElementById('ShowWeb')
let GetStarted = document.getElementById('GetStarted')

ShowWeb.addEventListener('click',function (){

    GetStarted.style.top = '-100vh'

    GetStarted.style.transition = "3s"
    console.log("clicked")
    setTimeout(() => {
        GetStarted.style.display = 'none';
    }, 3000); 

   
    navbar.classList.add('animate-header');
    
   
    setTimeout(() => {
        logo.classList.add('animate-logo');  
    }, 3000); 
})


function quizfunc1() {
    const quiz = document.getElementById("li1");


    quiz.style.backgroundColor = "rgb(67, 201, 67)";
    quiz.style.color = "white";
    quiz.style.borderColor = "transparent";

 
    quiz.addEventListener('transitionend',function ()  {
        alert("Thank you for participating in our Nobel Prize survey! Your input is invaluable and deeply appreciated.");
    });
}

function quizfunc2() {
    const quiz = document.getElementById("li2");


    quiz.style.backgroundColor = "rgb(67, 201, 67)";
    quiz.style.color = "white";
    quiz.style.borderColor = "transparent";

 
    quiz.addEventListener('transitionend',function ()  {
        alert("Thank you for participating in our Nobel Prize survey! Your input is invaluable and deeply appreciated.");
    });
}

function quizfunc3() {
    const quiz = document.getElementById("li3");


    quiz.style.backgroundColor = "rgb(67, 201, 67)";
    quiz.style.color = "white";
    quiz.style.borderColor = "transparent";

 
    quiz.addEventListener('transitionend',function ()  {
        alert("Thank you for participating in our Nobel Prize survey! Your input is invaluable and deeply appreciated.");
    });
}
function quizfunc4() {
    const quiz = document.getElementById("li4");


    quiz.style.backgroundColor = "rgb(67, 201, 67)";
    quiz.style.color = "white";
    quiz.style.borderColor = "transparent";

 
    quiz.addEventListener('transitionend',function ()  {
        alert("Thank you for participating in our Nobel Prize survey! Your input is invaluable and deeply appreciated.");
    });
}
function quizfunc5() {
    const quiz = document.getElementById("li5");


    quiz.style.backgroundColor = "rgb(67, 201, 67)";
    quiz.style.color = "white";
    quiz.style.borderColor = "transparent";

 
    quiz.addEventListener('transitionend',function ()  {
        alert("Thank you for participating in our Nobel Prize survey! Your input is invaluable and deeply appreciated.");
    });
}
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
            link.style.color = 'rgb(4, 4, 78)';
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