const openMenuButton = document.querySelector('.btn-open-burger');
const closeMenuButton = document.querySelector('.aside__btn-exit');
const overlay = document.querySelector('.overlay');
const asideLinks = document.querySelectorAll('.aside__nav-link');
const aside = document.querySelector('.aside');
const ESCAPE_KEYCODE = 27;


const closeMenu = function() {
    aside.classList.remove('aside--active');
    overlay.classList.remove('overlay--active');
}

const closeMenuButtonClickHandler = function() {
     closeMenu();
}

const closeMenuOverlayClickHandler = function() {
    overlay.addEventListener('click', closeMenu);
}

const escapeKeyDownHandler = function(btn) {
    if (btn.keyCode === ESCAPE_KEYCODE) {
        closeMenu();
    }
}

const closeMenuLinkClickHandler = function() {
    closeMenu();
}

openMenuButton.addEventListener('click', function() {
    aside.classList.add('aside--active');
    overlay.classList.add('overlay--active');
});

closeMenuButton.addEventListener('click', closeMenuButtonClickHandler);
overlay.addEventListener('click', closeMenuOverlayClickHandler);
document.addEventListener('keydown', escapeKeyDownHandler);
asideLinks.forEach(asideLink => 
    asideLink.addEventListener('click', closeMenuLinkClickHandler)
);
