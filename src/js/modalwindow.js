// Рендер информации в модалку
import backendAPI from './Services/api';
import localStorageBooks from '../js/localstorage';

const backdrop = document.querySelector('.backdrop');
const modalWrapper = document.querySelector('.modal-wrapper');
const links = document.querySelector('.modal-icons-list');
// const modalWindow = document.querySelector('.modal-window');
const body = document.querySelector('body');
const btnAddRemove = document.querySelector('.modal-btn-add');
const bookAddMsg = document.querySelector('.modal-text-congratulations');
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

async function renderModal(bookId) {
  try {
    console.log(bookId);
    const modalData = await backendAPI.getBookDescription(bookId);
    modalWrapper.innerHTML = '';
    links.innerHTML = '';

    const markupBook = markupBooks(modalData);
    // console.log(markupBook);
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
  } else {
    btnAddRemove.textContent = 'add to shopping list';
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
