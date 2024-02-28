// Рендер информации в модалку
import { showLoader, hideLoader } from '../main';
import backendAPI from './Services/api';
import localStorageBooks from '../js/localstorage';
import amazon from '../img/amazon-n.png';
import apple from '../img/apple-n.png';

const backdrop = document.querySelector('.backdrop');
const modalWrapper = document.querySelector('.modal-wrapper');
const body = document.querySelector('body');
const btnAddRemove = document.querySelector('.modal-btn-addremove');
const bookAddMsg = document.querySelector('.congrats');
const closeModalButton = document.querySelector('.modal-close');

const book = {
  _id: '',
  title: '',
  author: '',
  list_name: '',
  book_image: '',
  description: '',
  amazon_buy_link: '',
  apple_buy_link: '',
};

export async function renderModal(bookId) {
  try {
    modalWrapper.innerHTML = '';
    bookAddMsg.innerHTML = '';
    const modalData = await backendAPI.getBookDescription(bookId);
    book._id = modalData._id;
    book.title = modalData.title;
    book.author = modalData.author;
    book.list_name = modalData.list_name;
    book.book_image = modalData.book_image;
    book.description = modalData.description;
    book.amazon_buy_link = modalData.buy_links[0].url;
    book.apple_buy_link = modalData.buy_links[1].url;

    const markupBook = markupBooks(modalData);
    modalWrapper.insertAdjacentHTML('beforeend', markupBook);

    manageButton(btnAddRemove, bookId);

    btnAddRemove.addEventListener('click', buttonClickHandler);
    closeModalButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', keydownHandler);
    backdrop.addEventListener('click', clickOutsideHandler);
  } catch (error) {
    console.log('Error fetching modal:', error);
  }
}

export function showModal(id) {
  backdrop.classList.add('is-open');
  body.classList.add('no-scroll');
  renderModal(id);
}

function markupBooks(modalData) {
  return `
      <img class="modal-img-book" src="${modalData.book_image}" alt="book" />
        
      <div class="modal-book-container-right">
        <div class="modal-book-container">
          <div class="modal-book-info">
            <h3 class="modal-description-title">${modalData.title}</h3>
            <p class="modal-description-author">${modalData.author}</p>
          </div>
          <p class="modal-book-description">${modalData.description}</p>
          <ul class="modal-icons-list">
          <li>
            <a class="modal-book-link" href="${modalData.buy_links[0].url}" target="_blank"><img class='modal-link-icon-amazon' src="${amazon}" alt="" width='62' height='19' 
            /></a>
          </li>
          <li>
            <a class="modal-book-link" href="${modalData.buy_links[1].url}" target="_blank"><img class='modal-link-icon-apple' src="${apple}" alt="" width='33' height='32'
            /></a>
          </li>
          </ul>
        </div>
      </div>`;
}

function manageButton(btnAddRemove, bookId) {
  if (localStorageBooks.isBookExsist(bookId)) {
    btnAddRemove.textContent = 'remove from the shopping list';
    // btnAddRemove.classList.add('modal-btn-remove');
    bookAddMsg.classList.add('modal-text-congratulations');
  } else {
    btnAddRemove.textContent = 'add to shopping list';
    // btnAddRemove.classList.remove('modal-btn-remove');
    bookAddMsg.classList.remove('modal-text-congratulations');
  }
}
function buttonClickHandler(e) {
  if (btnAddRemove.textContent === 'add to shopping list') {
    addBook(book);
    manageButton(btnAddRemove, book._id);
  } else {
    removeBook(book);
    manageButton(btnAddRemove, book._id);
  }
  // btnAddRemove.removeEventListener('click', buttonClickHandler);
}

// ============Додав функції дії=====================
function keydownHandler(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}
function clickOutsideHandler(event) {
  if (event.target === backdrop) {
    closeModal();
  }
}
// ==================================================

function closeModal() {
  backdrop.classList.remove('is-open');
  body.classList.remove('no-scroll');
  closeModalButton.removeEventListener('click', closeModal);
  btnAddRemove.removeEventListener('click', buttonClickHandler);
  document.removeEventListener('keydown', keydownHandler);
  backdrop.removeEventListener('click', clickOutsideHandler);
}

function addBook(book) {
  localStorageBooks.addBookToFavorites(book);
  bookAddMsg.textContent =
    'Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
}

function removeBook(bookId) {
  localStorageBooks.removeBookFromFavorites(bookId);
  bookAddMsg.textContent = '';
}
