const sliderLine = document.querySelector('.slider-line'); 
const buttonScroll = document.querySelector('.slider-button-scroll');
const buttonArrow = document.querySelector('.slider-button-arrow');

let offset = 0;

buttonScroll.addEventListener('click', async () => { 
    offset += 150;
    if (offset > 170) {
        offset = 0;
    }
    sliderLine.style.bottom = offset + 'px'
        
    if (offset === 150) {
        buttonArrow.setAttribute('href', './img/symbol-defs.svg#icon-Vector-up1-1');
        } else {
        buttonArrow.setAttribute('href', './img/symbol-defs.svg#icon-Vector-down1-1');
        };
});