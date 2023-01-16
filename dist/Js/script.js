//Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const FixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');


    if(window.pageYOffset > FixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

//Hamburger
const Hamburger = document.querySelector('#hamburger');
const navMenu   =document.querySelector('#nav-menu');
Hamburger.addEventListener('click', function() {
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Klik Diluar Hamburger
window.addEventListener('click', function (e) {
    if (e.target != Hamburger && e.target !=nav.navMenu) {
        Hamburger.classList.remove("Hamburger-active");
        navMenu.classList.add('hidden');
    }   
});