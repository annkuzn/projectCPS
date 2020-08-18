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
