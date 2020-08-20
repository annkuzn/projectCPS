const openMenuButton = document.querySelector('.header__btn-open-sidebar');
const closeMenuButton = document.querySelector('.menu__btn-exit');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const ESCAPE_KEYCODE = 27;


/* CLOSE MENU */
const closeMenu = function() {
    menu.classList.remove('menu--active');
    overlay.classList.remove('overlay--active-container');

    closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);
    overlay.removeEventListener('click', closeMenuOverlayClickHandler);
    document.removeEventListener('keydown', escapeKeyDownHandler);
}

const closeMenuButtonClickHandler = function() {
     closeMenu();
}

const closeMenuOverlayClickHandler = function() {
    closeMenu();
}

const escapeKeyDownHandler = function(evt) {
    if (evt.keyCode === ESCAPE_KEYCODE) {
        closeMenu();
    }
}

/* OPEN MENU */
const openMenu = function() {
    menu.classList.add('menu--active');
    overlay.classList.add('overlay--active-container');

    closeMenuButton.addEventListener('click', closeMenuButtonClickHandler);
    overlay.addEventListener('click', closeMenuOverlayClickHandler);
    document.addEventListener('keydown', escapeKeyDownHandler);
}

const openMenuButtonClickHandler = function() {
    openMenu();
}


openMenuButton.addEventListener('click', openMenuButtonClickHandler);