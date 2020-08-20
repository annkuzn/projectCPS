const openMenuButton = document.querySelector('.header__btn-open-sidebar');
const closeMenuButton = document.querySelector('.menu__btn-exit');
const overlayContainer = document.querySelector('.overlay--container');
const menu = document.querySelector('.menu');
const ESCAPE_KEYCODE = 27;


/* CLOSE MENU */
const closeMenu = function() {
    menu.classList.remove('menu--active');
    overlayContainer.classList.remove('overlay--active');

    closeMenuButton.removeEventListener('click', closeMenuButtonClickHandler);
    overlayContainer.removeEventListener('click', closeMenuOverlayClickHandler);
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
    overlayContainer.classList.add('overlay--active');

    closeMenuButton.addEventListener('click', closeMenuButtonClickHandler);
    overlayContainer.addEventListener('click', closeMenuOverlayClickHandler);
    document.addEventListener('keydown', escapeKeyDownHandler);
}

const openMenuButtonClickHandler = function() {
    openMenu();
}


openMenuButton.addEventListener('click', openMenuButtonClickHandler);
