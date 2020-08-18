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