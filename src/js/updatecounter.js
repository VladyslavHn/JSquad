import localStorageBooks from './localstorage';

const bookCounter = document.querySelectorAll('.header-book-counter');

export function updateBooksCounter() {
  // console.log('я тут');
  const booksInStorage = localStorageBooks.getAllBooks().length;
  if (booksInStorage === 0) {
    bookCounter.forEach(bc => {
      bc.style.display = 'none';
    });
  } else {
    bookCounter.forEach(bc => {
      bc.style.display = 'flex';
      bc.textContent = booksInStorage;
    });
  }
}
