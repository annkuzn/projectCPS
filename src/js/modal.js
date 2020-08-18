const openMenuButtonClickHandler = document.querySelector('.btn-open-burger');
const modalBtnExit = document.querySelector('.aside__btn-exit');
const overlay = document.querySelector('.overlay');
const aside = document.querySelector('.aside');
const body = document.querySelector('body');
const escapeCode = 27;


let closeMenu = function() {
    aside.classList.remove('modal--active');
    overlay.classList.remove('overlay--active');
    body.classList.remove('hidden');
}

let closeMenuByPressBtnExit = function() {
    modalBtnExit.addEventListener('click', closeMenu);
}

let closeMenuByPressOverlay = function() {
    overlay.addEventListener('click', closeMenu);
}

let closeMenuByPressEscape = function() {
    window.addEventListener('keydown', function(btn) {
        if (btn.keyCode === escapeCode) {
            closeMenu();
        }
    });
}





openMenuButtonClickHandler.addEventListener('click', function() {
    aside.classList.add('modal--active');
    overlay.classList.add('overlay--active');
    body.classList.add('hidden');

    closeMenuByPressBtnExit();
    closeMenuByPressOverlay();
    closeMenuByPressEscape();
})


