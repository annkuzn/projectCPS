const modalBtnExit = document.querySelectorAll('.modal__btn-exit');
const aside = document.querySelector('.aside');
const asideContainer = document.querySelector('.aside__container');
const modalBtnOpen = document.querySelectorAll('.btn-open');
const container = document.querySelector('.container');
const modalFeedback = document.querySelector('.modal-feedback');
const overlay = document.querySelector('.overlay');
const overlayAside = document.querySelector('.overlay-aside');
const body = document.querySelector('body');
const html = document.querySelector('html');





/* Обработчик для раскрытия модального окна  */
modalBtnOpen.forEach(btn =>

    btn.addEventListener('click', function (evt) {
        let elem;
        let modalBtnExit;

        /* Обратная связь и Заказать звонок */
        if (btn.dataset.action === "open-call" || btn.dataset.action === "open-chat") { 
            elem = modalFeedback;
            modalBtnExit = elem.querySelector('.modal__btn-exit');

            modalBtnExit.style.display = 'block';
            overlayAside.classList.add('overlay-aside--active');
            /* overlay поверх aside */
            if (window.matchMedia("(max-width: 1365px)").matches) {
                
/*                 let modalActive = document.querySelectorAll('.modal--active');
                if (modalActive.length >= 1) {
                    overlay.style.zIndex = 2;
                } else {
                    overlay.style.zIndex = 1;
                } */
            }
        }
        
        if (btn.dataset.action === "open-call") { /* Обратная связь */
            elem.classList.add('modal-feedback--request-call');
        } else if (btn.dataset.action === "open-chat") { /* Заказать звонок, чат */
            elem.classList.add('modal-feedback--message');
        } else if (btn.dataset.action === "open-sidebar") { /* Сайдбар */
            elem = aside;
        }

        elem.classList.add('modal--active');
        overlay.classList.add('overlay--active');
        body.style.overflow = 'hidden';

        /* Обработчик заблюреной зоны для закрытия модального окна */
        overlay.addEventListener('click', function () {

            if (modalBtnExit) {
                modalBtnExit.style.display = 'none';
            }
            elem.classList.remove('modal--active');
            overlay.classList.remove('overlay--active');
            body.style.overflow = 'auto';

            if (window.matchMedia("(max-width: 1365px)").matches) {
                overlay.style.zIndex = 1;
            }
    
            setTimeout(function() {
                elem.classList.remove('modal-feedback--message');
                elem.classList.remove('modal-feedback--request-call');
            }, 1000);
        })
    })
);

/* Обработчик для закрытия модального окна  */
modalBtnExit.forEach(btn =>

    btn.addEventListener('click', function (evt) {
        let elem;
        let modalBtnExit;

        /* Обратная связь и Заказать звонок */
        if (btn.dataset.action === "close-call" || btn.dataset.action === "close-chat") { 
            elem = modalFeedback;
            modalBtnExit = elem.querySelector('.modal__btn-exit');

            if (window.matchMedia("(min-width: 1366px)").matches) {
                modalBtnExit.style.display = 'none';
            }
            
            if (window.matchMedia("(max-width: 1365px)").matches) {
                overlay.style.zIndex = 1;
            }

        }
        
         if (btn.dataset.action === "close-sidebar") { /* Сайдбар */
            evt.preventDefault();
            elem = aside;
        }

        let modalActive = document.querySelectorAll('.modal--active');

        if (modalActive.length === 1) {
            overlay.classList.remove('overlay--active');
        }

        elem.classList.remove('modal--active');
        body.style.overflow = 'auto';


        setTimeout(function() {
            elem.classList.remove('modal-feedback--message');
            elem.classList.remove('modal-feedback--request-call');
          }, 1000);
    })
);




/* Закрытие модалок после нажатия ссылки в сайдбаре */
if (window.matchMedia("(max-width: 1365px)").matches) {
    let asideLinks = aside.querySelectorAll('.aside__nav-link');

    asideLinks.forEach(asideLink => 
        asideLink.addEventListener('click', function(){
            let modalActive = document.querySelectorAll('.modal--active');

            modalActive.forEach(modal => 
                modal.classList.remove('modal--active')
            );
            overlay.classList.remove('overlay--active');
            body.style.overflow = 'auto';
        })
    );
}


/* Обработчик для кнопок "Показать все" */


/* SECTION-SERVICES */

