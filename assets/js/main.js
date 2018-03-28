const menuBtn = document.querySelector('#btn');
let mainPage = document.querySelector('.main');
let menu = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('#btn-close');

menuBtn.addEventListener('click', () => {
    mainPage.style.display = 'none';
    menu.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
   menu.style.display = 'none';
    mainPage.style.display = 'flex';
});

