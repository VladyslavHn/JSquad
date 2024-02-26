import './js/shoppinglist';
import './js/cardpagination';
import './js/header';
import './js/support';
import './js/Services/api';
import './js/Services/helpers';
import './js/signup';
import './js/signupmarkup' 
import './js/localstorage'

window.addEventListener('load', () => {
  let background = document.querySelector('.background');
  background.classList.add('hide');
  setTimeout(() => {
    background.remove();
  }, 600)
})