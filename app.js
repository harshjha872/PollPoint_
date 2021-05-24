const random = function () {
    return Math.trunc(Math.random() * 5) + 1;
}
const img = document.querySelector('.img');

const btnLeft = document.querySelector('.left')
const btnRight = document.querySelector('.right')
const images = document.querySelectorAll('.imagesss');
const section1 = document.querySelector('.section--0');
const header = document.querySelector('.header');
const mainImage = document.querySelector('.mainImage')
let current = 0;
let maxslide = images.length
const nxt = function () {

    if (current === maxslide - 1)
        current = 0;
    else
        current++;
    images.forEach((CurSlide, i) => {

        CurSlide.style.transform = `translateX(${100 * (i - current)}%)`;
    });
}
const Pre = function () {
    console.log(current);
    if (current === 0)
        current = maxslide - 1;
    else
        current--;
    images.forEach((CurSlide, i) => {

        CurSlide.style.transform = `translateX(${100 * (i - current)}%)`;
    });
}

setInterval(nxt, 4000)

btnRight.addEventListener('click', nxt)
btnLeft.addEventListener('click', Pre)

// const obeerserver = new IntersectionObserver(function (entries, obeerserver) {
//     // entry
//     const [entry] = entries;
//     // console.log(header.getBoundingClientRect().height);
//     if (!entry.isIntersecting)
//         header.classList.add('Enable__opacity');
//     else
//         header.classList.remove('Enable__opacity')
// }, {
//     root: null,
//     threshold: 0,
//     rootMargin: `-${header.getBoundingClientRect().height + 1}px`
// })
// obeerserver.observe(mainImage);
