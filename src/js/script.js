const modalBtnExit = document.querySelectorAll('.modal__btn-exit');
const aside = document.querySelector('.aside');
const asideContainer = document.querySelector('.aside__container');
const modalBtnOpen = document.querySelectorAll('.btn-open');
const container = document.querySelector('.container');
const modalFeedback = document.querySelector('.modal-feedback');
const layout = document.querySelector('.layout');
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

            /* layout поверх aside */
            if (window.matchMedia("(max-width: 1365px)").matches) {
                let modalActive = document.querySelectorAll('.modal--active');
                if (modalActive.length >= 1) {
                    layout.style.zIndex = 2;
                } else {
                    layout.style.zIndex = 1;
                }
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
        layout.classList.add('layout--active');
        body.style.overflow = 'hidden';

        /* Обработчик заблюреной зоны для закрытия модального окна */
        layout.addEventListener('click', function () {

            if (modalBtnExit) {
                modalBtnExit.style.display = 'none';
            }
            elem.classList.remove('modal--active');
            layout.classList.remove('layout--active');
            body.style.overflow = 'auto';

            if (window.matchMedia("(max-width: 1365px)").matches) {
                layout.style.zIndex = 1;
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
                layout.style.zIndex = 1;
            }

        }
        
         if (btn.dataset.action === "close-sidebar") { /* Сайдбар */
            evt.preventDefault();
            elem = aside;
        }

        let modalActive = document.querySelectorAll('.modal--active');

        if (modalActive.length === 1) {
            layout.classList.remove('layout--active');
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
            layout.classList.remove('layout--active');
            body.style.overflow = 'auto';
        })
    );
}


/* Обработчик для кнопок "Показать все" */
const btnReadMore = document.querySelectorAll('.section__btn-read-more');

btnReadMore.forEach(btn =>
    btn.addEventListener('click', function () {
        let previous = btn.previousElementSibling;
        if (!this.hasAttribute('data-section')) {
            this.setAttribute('data-section', 'open');
            previous.setAttribute('data-section', 'open');
        } else {
            this.removeAttribute('data-section');
            previous.removeAttribute('data-section');
        }
    })
);

/* SECTION-SERVICES */

const serviceTitle = document.querySelector('.section-services__service--title');
const priceTitle = document.querySelector('.section-services__price--title');
const timeTitle = document.querySelector('.section-services__time--title');
const serviceSpan = document.querySelectorAll('.section-services__service');
const priceSpan = document.querySelectorAll('.section-services__price');
const timeSpan = document.querySelectorAll('.section-services__time');

if (window.matchMedia("(max-width: 767px)").matches) {
    serviceSpan.forEach(elem =>
        elem.insertAdjacentHTML('beforebegin', '<span class="service-title">Ремонтные услуги</span>')
    );
    priceSpan.forEach(elem =>
        elem.insertAdjacentHTML('beforebegin', '<span class="service-title">Цена</span>')
    );
    timeSpan.forEach(elem =>
        elem.insertAdjacentHTML('beforebegin', '<span class="service-title">Срок</span>')
    );
}

/* HEIGHT ASIDE DESKTOP */
/* 
let heightHtml = html.offsetHeight;
console.log(heightHtml);
if (window.matchMedia("(min-width: 1366px)").matches) {
    aside.style.height = heightHtml + 'px';
} */
