const navButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    navButton.classList.toggle('open');
});