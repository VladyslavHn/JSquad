// Рендер информации в модалку
import backendAPI from './Services/api';
import localStorageBooks from '../js/localstorage';

const backdrop = document.querySelector('.backdrop');
const modalWrapper = document.querySelector('.modal-wrapper');
const links = document.querySelector('.modal-icons-list');
// const modalWindow = document.querySelector('.modal-window');
const body = document.querySelector('body');
const btnAddRemove = document.querySelector('.modal-btn-add');
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
    links.innerHTML = '';
    //loader
    const modalData = await backendAPI.getBookDescription(bookId);
    //hide loader

    const markupBook = markupBooks(modalData);
    modalWrapper.insertAdjacentHTML('beforeend', markupBook);

    const murkupLinks = renderLinks(modalData);
    links.insertAdjacentHTML('beforeend', murkupLinks);

    book._id = modalData._id;
    book.title = modalData.title;
    book.author = modalData.author;
    book.list_name = modalData.list_name;
    book.book_image = modalData.book_image;
    book.description = modalData.description;
    book.amazon_buy_link = modalData.buy_links[0].url;
    book.apple_buy_link = modalData.buy_links[1].url;

    manageButton(btnAddRemove, bookId);

    btnAddRemove.addEventListener('click', buttonClickHandler);
    closeModalButton.addEventListener('click', closeButtonHandler);

    // ==============Додав два слухачі на дії===================
    document.addEventListener('keydown', keydownHandler);
    backdrop.addEventListener('click', clickOutsideHandler);
    // =========================================================
    // const btnClose = document.querySelector('.modal-close');
    // btnClose.addEventListener('click', closeButtonHandler);
  } catch (error) {
    console.log('Error fetching modal:', error);
  }
}
// renderModal(bookId);
/////////////////////////////////////////////////////////////////////////////////

// Закрывание окна
/////////////////////////////////////////////////////////////////////////////////
//Открытие окна
export function showModal(id) {
  backdrop.classList.add('is-open');
  body.classList.add('no-scroll');
  renderModal(id);
}
// showModal();

/////////////////////////////////////////////////////////////////////////////////

function markupBooks(modalData) {
  return `
      <img class="modal-img-book" src="${modalData.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${modalData.title}</p></li>
      <li><p class="modal-description-list-subtitle">${modalData.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${modalData.description}
        </p>
      </li>
      </ul>`;
}

function renderLinks(modalData) {
  return `<li>
        <a class="modal-icon amazon" href="${modalData.buy_links[0].url}"><img class='modal-icon' src="./img/amazon.png" alt="" width='62' height='19' 
       /></a>
      </li>
      <li>
        <a class="modal-icon" href="${modalData.buy_links[1].url}"><img class='modal-icon' src="./img/applebook.png" alt="" width='33' height='32'
       /></a>
      </li>`;
}

function manageButton(btnAddRemove, bookId) {
  if (localStorageBooks.isBookExsist(bookId)) {
    btnAddRemove.textContent = 'remove from the shopping list';
    btnAddRemove.classList.add('modal-btn-remove');
    bookAddMsg.classList.add('modal-text-congratulations');
  } else {
    btnAddRemove.textContent = 'add to shopping list';
    btnAddRemove.classList.remove('modal-btn-remove');
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

function closeModal() {
  backdrop.classList.remove('is-open');
  body.classList.remove('no-scroll');

  // ============Прибрав слухачів дії================
  document.removeEventListener('keydown', keydownHandler);
  backdrop.removeEventListener('click', clickOutsideHandler);
  // ================================================
  closeModalButton.removeEventListener('click', closeModal);
  btnAddRemove.removeEventListener('click', buttonClickHandler);
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

function closeButtonHandler() {
  backdrop.classList.remove('is-open');
  body.classList.remove('no-scroll');
  closeModalButton.removeEventListener('click', closeButtonHandler);
  btnAddRemove.removeEventListener('click', buttonClickHandler);
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
