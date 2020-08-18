const btnReadMore = document.querySelectorAll('.section__btn-read-more');

const btnReadMoreClickHandler = function () {
    let previous = this.previousElementSibling;

    if (!this.hasAttribute('data-section')) {
        this.setAttribute('data-section', 'open');
        previous.setAttribute('data-section', 'open');
    } else {
        this.removeAttribute('data-section');
        previous.removeAttribute('data-section');
    }
}

btnReadMore.forEach(btn =>
    btn.addEventListener('click', btnReadMoreClickHandler)
);