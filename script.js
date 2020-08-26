import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
      
const swiper = new Swiper('.swiper-container', {

    loop: true,
    slidesPerView: 1,
    spaceBetween: 45,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        }
    },
});

const mMenu = document.querySelector('.m-menu');
const link = document.querySelectorAll('.m-menu__link');
const mMenuBtn = document.querySelectorAll('.m-menu-button');
const body = document.querySelector('body');

const toggleMenu = () => {
    mMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    mMenuBtn.forEach(item => item.classList.toggle('active'));
};

mMenuBtn.forEach(item => item.addEventListener('click', toggleMenu));

link.forEach(item => item.addEventListener('click', toggleMenu));