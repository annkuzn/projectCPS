const openModalCallButton = document.querySelectorAll('.btn-open-modal--call');
const openModalChatButton = document.querySelectorAll('.btn-open-modal--chat');
const closeModalButton = document.querySelector('.modal__btn-exit');
const overlayMenu = document.querySelector('.overlay-menu');
const modal = document.querySelector('.modal');
const ESCAPE_KEYCODE = 27;

/* OPEN MODAL */
const openModal = function() {
    modal.classList.add('modal--active');
    overlayMenu.classList.add('overlay-menu--active');
}

const openModalCall = function() {
    modal.classList.add('modal--request-call');
}

const openModalChat = function() {
    modal.classList.add('modal--message');
}

const openModalCallButtonClickHandler = function() {
    openModal();
    openModalCall();
}

const openModalChatButtonClickHandler = function() {
    openModal();
    openModalChat();
}

openModalCallButton.forEach( btn =>
    btn.addEventListener('click', openModalCallButtonClickHandler)
);

openModalChatButton.forEach( btn =>
    btn.addEventListener('click', openModalChatButtonClickHandler)
);

/* CLOSE MODAL */
const closeModal = function() {
    modal.classList.remove('modal--active');
    overlayMenu.classList.remove('overlay-menu--active');

    setTimeout(function() {
        modal.classList.remove('modal--request-call');
        modal.classList.remove('modal--message');
    }, 1000)
}

const closeModalButtonClickHandler = function() {
     closeModal();
}

const closeModalOverlayClickHandler = function() {
    closeModal();
}

const escapeKeyDownHandler = function(evt) {
    if (evt.keyCode === ESCAPE_KEYCODE) {
        closeModal();
    }
}

closeModalButton.addEventListener('click', closeModalButtonClickHandler);
overlayMenu.addEventListener('click', closeModalOverlayClickHandler);
document.addEventListener('keydown', escapeKeyDownHandler);

