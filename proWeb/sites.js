/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ========================product swiper========================
let swiperProduct = new Swiper(".product_container", {
    loop:true,
    spaceBetween: 24,
    slidesPerview: 'auto',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        }
    },
});

// ==============================login====================
const wrap =document.querySelector('.wrap');
const loginLink = document.querySelector('.login_link');
const registerLink = document.querySelector('.register_link');
const btnPopup = document.querySelector('.btnLogin_popup');
const iconClose = document.querySelector('.icon_close');

registerLink.addEventListener('click', ()=> {
    wrap.classList.add('active');

});

loginLink.addEventListener('click', ()=> {
    wrap.classList.remove('active');

});

btnPopup.addEventListener('click', ()=> {
    wrap.classList.add('active_popup');

});

iconClose.addEventListener('click', ()=> {
    wrap.classList.remove('active_popup');

});