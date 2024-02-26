import './js/shoppinglist';
import './js/cardpagination';
import './js/header';
import './js/support';
import './js/Services/api';
import './js/Services/helpers';
import './js/signup';
import './js/signupmarkup' 
import './js/localstorage'



export function showLoader() {
  const loader = document.querySelector('.loader-container');
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader-container');

  setTimeout(() => loader.classList.add('is-hidden'), 600);
}

