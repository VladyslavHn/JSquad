// const sliderLine = document.querySelector('.slider-line');
// const buttonScroll = document.querySelector('.slider-button-scroll');
// const buttonArrow = document.querySelector('.slider-button-arrow');

// let offset = 0;

// buttonScroll.addEventListener('click', async () => {
//     offset += 150;
//     if (offset > 170) {
//         offset = 0;
//     }
//     sliderLine.style.bottom = offset + 'px'
        
//     if (offset === 150) {
//         buttonArrow.setAttribute('href', './img/symbol-defs.svg#icon-Vector-up1-1');
//         } else {
//         buttonArrow.setAttribute('href', './img/symbol-defs.svg#icon-Vector-down1-1');
//         };
// });

const sliderLine = document.querySelector('.slider-line'); 
const buttonScrollDown = document.querySelector('.slider-button-scrolldown');
const buttonScrollUp = document.querySelector('.slider-button-scrollup');

let offset = 0;

buttonScrollDown.addEventListener('click', async () => { 
    offset += 150;
    if (offset > 170) {
        offset = 0;
    }
    sliderLine.style.bottom = offset + 'px'
        
    if (offset === 150) {
        buttonScrollDown.classList.remove('scrolldown-open')
        buttonScrollDown.classList.add('scrolldown-hidden');
        buttonScrollUp.classList.remove('scrolldown-hidden');
        buttonScrollUp.classList.add('scrolldown-open');
    }
});

buttonScrollUp.addEventListener('click', async () => { 
    offset += 150;
    if (offset > 170) {
        offset = 0;
    }
    sliderLine.style.bottom = offset + 'px'
        
    if (offset === 0) {
        buttonScrollUp.classList.remove('scrolldown-open')
        buttonScrollUp.classList.add('scrolldown-hidden');
        buttonScrollDown.classList.remove('scrolldown-hidden');
        buttonScrollDown.classList.add('scrolldown-open');
    }
});