const openModalCallButton = document.querySelectorAll('.btn-open-modal--call');
const openModalChatButton = document.querySelectorAll('.btn-open-modal--chat');
const closeModalButton = document.querySelector('.modal__btn-exit');
const overlayMenu = document.querySelector('.overlay-menu');
const modal = document.querySelector('.modal');
const ESCAPE_KEYCODE = 27;


/* CLOSE MODAL */
const closeModal = function() {
    modal.classList.remove('modal--active');
    overlayMenu.classList.remove('overlay-menu--active');

    setTimeout(function() {
        modal.classList.remove('modal--request-call');
        modal.classList.remove('modal--message');
    }, 1000)

    closeModalButton.removeEventListener('click', closeModalButtonClickHandler);
    overlayMenu.removeEventListener('click', closeModalOverlayClickHandler);
    document.removeEventListener('keydown', escapeKeyDownHandler);
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


/* OPEN MODAL */
const openModal = function() {
    modal.classList.add('modal--active');
    overlayMenu.classList.add('overlay-menu--active');

    closeModalButton.addEventListener('click', closeModalButtonClickHandler);
    overlayMenu.addEventListener('click', closeModalOverlayClickHandler);
    document.addEventListener('keydown', escapeKeyDownHandler);
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