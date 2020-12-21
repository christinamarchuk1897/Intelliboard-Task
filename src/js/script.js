const hamburger = document.querySelector('.hamburger__span');
const menu = document.querySelector('.header-mobile');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('header-mobile__active');
});