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
})

