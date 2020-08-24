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

const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.swiper-slide');
const mMenu = document.querySelector('.m-menu');
const mMenuBtn = document.querySelectorAll('.m-menu-button');
const body = document.querySelector('body');

filters.forEach(filter => {
    filter.addEventListener('click', event => {
        const target = event.target;
        const category = target.dataset.filter;
        
        filters.forEach(item => {
            item.classList.remove('active');
        });

        if (category === 'all') {
            products.forEach(product => product.classList.remove('hide'));
        } else {
            products.forEach(product => {
                product.classList.add('hide');
    
                if (product.classList.contains(category)) {
                    product.classList.remove('hide');
                }
            });
        }
        
        target.classList.add('active');
    });
});

const toggleMenu = () => {
    mMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    mMenuBtn.forEach(item => item.classList.toggle('active'));
};

mMenuBtn.forEach(item => item.addEventListener('click', toggleMenu));