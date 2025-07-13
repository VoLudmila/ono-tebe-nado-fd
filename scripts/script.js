// Плавные якоря героя
const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href');

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            // behavior: 'smooth или auto' ,
            block: 'center',
            // block: 'start, center, end или nearest',
        });
    })
};