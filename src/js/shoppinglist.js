import { renderTitle } from '../js/Services/helpers';
import localStorageBooks from '../js/localstorage';

const shoppingList = document.querySelector('.cart-list');
const cartEmptyMsg = document.querySelector('.cart-empty-container');
const paginationList = document.querySelector('.pagination-list');
const buttonsContainer = document.querySelector('.cart-buttons-container');

renderTitle('.shoppinglist-title', 'Shopping List');
function renderShoppingList(books) {
  shoppingList.innerHTML = '';
  const hmtlBookList = books
    .map(book => {
      return `<li class="cart-item">
      <img
        class="cart-item-img"
        src="${book.book_image}"
        alt="book image"
        width="100"
        height="142"
      />
      <div class="cart-item-content">
        <div class="cart-item-content-top">
          <div class="cart-item-content-top-left">
            <h3 class="cart-item-title">${book.title}</h3>
            <p class="cart-item-category">${book.list_name}</p>
          </div>
          <button data-id="${book._id}" class="cart-item-del-button">
            <svg class="cart-item-del-button-icon" width="12" height="12">
              <use href="/img/symbol-defs.svg#icon-delete-shoppinglist-tab" />
            </svg>
          </button>
        </div>
        <div class="cart-item-content-middle">
          <p class="cart-item-content-desc">
            ${book.description}
          </p>
          <div class="cart-item-content-bottom">
            <p class="cart-item-author">${book.author}</p>
            <div class="cart-items-links">
              <a
                class="cart-items-link"
                target="_blank"
                href="${book.amazon_buy_link}"
              >
                <img
                  class="cart-items-amazon"
                  src="/img/amazon-n.png"
                  alt="shopping cart empty"
                  height="11"
                  width="32"
                />
              </a>
              <a
                class="cart-items-link"
                target="_blank"
                href="${book.apple_buy_link}"
              >
                <img
                  class="cart-items-apple"
                  src="/img/apple-n.png"
                  alt="shopping cart empty"
                  height="16"
                  width="16"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>`;
    })
    .join('');
  shoppingList.insertAdjacentHTML('beforeend', hmtlBookList);
}

let pageData = {
  books: [],
  currentPage: 0,
  nextPage: 0,
  prevPage: 0,
  totalBooks: 0,
  totalPages: 0,
  booksPerPage: 0,
  buttonsPerPage: 0,
  totalButtonsGroups: 0,
  pagesOnLastGroup: 0,
};

function renderShoppingListPage(pageData) {
  paginationList.removeEventListener('click', buttonClickHandler);
  shoppingList.removeEventListener('click', removeBookFromList);
  const books = localStorageBooks.getAllBooks();
  shoppingList.innerHTML = '';
  paginationList.innerHTML = '';
  pageData.totalBooks = books.length;
  pageData.booksPerPage = getBooksPerPage();
  pageData.totalPages = getTotalPages(
    pageData.totalBooks,
    pageData.booksPerPage
  );
  pageData.books = createBooksListsPerPage(
    books,
    pageData.booksPerPage,
    pageData.totalPages
  );
  pageData.buttonsPerPage = getButtonsPerPage();
  pageData.totalButtonsGroups = Math.ceil(
    pageData.totalPages / pageData.buttonsPerPage
  );

  pageData.pagesOnLastGroup = pageData.totalPages % pageData.totalButtonsGroups;

  if (pageData.totalBooks > 0) {
    if (pageData.totalPages === 1) {
      renderShoppingList(pageData.books[0]);
    }

    if (pageData.totalPages > 1) {
      renderShoppingList(pageData.books[pageData.currentPage]);
      renderPaginationButtons(pageData, paginationList);
      makeActiveButton(pageData.currentPage);
      const currentButton = document.querySelector('.active');
      moveButtonToCenter(currentButton);
      paginationList.addEventListener('click', buttonClickHandler);
    }
    shoppingList.addEventListener('click', removeBookFromList);
  } else {
    cartEmptyMsg.classList.remove('is-hidden');
  }
}

function renderPaginationButtons(pageData, paginationList) {
  paginationList.innerHTML = '';

  if (pageData.totalPages > 1) {
    for (let i = 0; i < pageData.totalPages; i++) {
      paginationList.insertAdjacentHTML(
        'beforeend',
        `<li><button data-page="${i}">${i + 1}</button></li>`
      );
    }
  }
}

function buttonClickHandler(e) {
  const clickedElement = e.target.closest('button');
  if (clickedElement) {
    const pageButton = clickedElement.dataset.page;
    if (pageButton) {
      renderShoppingList(pageData.books[pageButton]);
      makeActiveButton(pageButton);
      pageData.currentPage = pageButton;
      moveButtonToCenter(clickedElement);
    }
  }
}

function moveButtonToCenter(clickedElement) {
  const buttonSize = clickedElement.getBoundingClientRect();
  const containerSize = buttonsContainer.getBoundingClientRect();
  const sliderSize = paginationList.getBoundingClientRect();

  const centerOfContainer = containerSize.width / 2;
  const centerOfButton = buttonSize.width / 2;
  const buttonPosition = buttonSize.left;
  const sliderPosition = sliderSize.left;

  const moveTo =
    parseInt(centerOfContainer) -
    parseInt(buttonPosition) -
    parseInt(centerOfButton) +
    parseInt(sliderPosition);
  paginationList.style.translate = `${moveTo}px 0`;
}

function removeBookFromList(e) {
  if (e.target.closest('.cart-item-del-button') !== null) {
    const bookId = e.target.closest('.cart-item-del-button').dataset.id;
    localStorageBooks.removeBookFromFavorites(bookId);
    if (
      parseInt(pageData.currentPage) === parseInt(pageData.totalPages) - 1 &&
      pageData.books[pageData.currentPage].length === 1
    ) {
      if (pageData.currentPage >= 1) {
        pageData.currentPage -= 1;
      }
    }
    renderShoppingListPage(pageData);
  }
}

function isMobile() {
  const windowWidth = window.innerWidth;
  return windowWidth < 767;
}

function getBooksPerPage() {
  return isMobile() ? 4 : 3;
}

function getButtonsPerPage() {
  return isMobile() ? 2 : 3;
}

function getTotalPages(totalBooks, booksPerPage) {
  return Math.ceil(totalBooks / booksPerPage);
}

function makeActiveButton(currentPage) {
  const currentButton = document.querySelector('.active');
  currentButton?.classList.remove('active');
  const activeButton = document.querySelector(`[data-page="${currentPage}"]`);
  activeButton.classList.add('active');
}

function createBooksListsPerPage(books, booksPerPage, totalPages) {
  let booksPages = [];
  for (let i = 0; i < totalPages; i++) {
    booksPages[i] = books.splice(0, booksPerPage);
  }
  return booksPages;
}

// for (let i = 0; i < 60; i++) {
//   const book = {
//     _id: `${i}`,
//     title: `${i}`,
//     author: 'Michelle Zauner',
//     list_name: 'Paperback Nonfiction',
//     book_image:
//       'https://storage.googleapis.com/du-prd/books/images/9780525657743.jpg',
//     description:
//       'The daughter of a Korean mother and Jewish American father, and leader of the indie rock project Japanese Breakfast, describes creating her own identity after losing her mother to cancer.',
//     amazon_buy_link: 'https://www.amazon.com/dp/0593379853?tag=NYTBSREV-20',
//     apple_buy_link: 'https://goto.applebooks.apple/9781984896391?at=10lIEQ',
//   };

//   localStorageBooks.addBookToFavorites(book);
// }

renderShoppingListPage(pageData);
