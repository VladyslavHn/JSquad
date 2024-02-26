
import './js/header';
import './js/bestsellers';
import './js/categorypage';
import './js/sidebarallcategories';
import './js/support';
import './js/Services/api';
import './js/Services/helpers';
import './js/signup';
import './js/signupmarkup' 
import './js/modalwindow' 
import './js/localstorage'
import { topPageBestsellersBooks } from './js/bestsellers';

topPageBestsellersBooks();

document.addEventListener("DOMContentLoaded", function() {
  const scrollUpButton = document.querySelector('.scroll-up');

  scrollUpButton.classList.remove('show');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 650) {
      scrollUpButton.classList.add('show');
      // scrollUpButton.classList.add('border');
    } else {
      scrollUpButton.classList.remove('show');
      // scrollUpButton.classList.remove('border');
    }
  });

  scrollUpButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // scrollUpButton.classList.remove('.scroll-up.border');
  });
});