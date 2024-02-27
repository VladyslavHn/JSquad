import { hideLoader, showLoader } from '../card';
import { renderTitle } from '../js/Services/helpers';
import localStorageBooks from '../js/localstorage';

const shoppingList = document.querySelector('.cart-list');
const cartEmptyMsg = document.querySelector('.cart-empty-container');
const paginationList = document.querySelector('.pagination-list');

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
              <use href="../img/symbol-defs.svg#icon-delete-shoppinglist-tab" />
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
                <svg class="cart-item-amazon" width="32" height="11">
                  <use href="../img/symbol-defs.svg#icon-amazon" />
                </svg>
              </a>
              <a
                class="cart-items-link"
                target="_blank"
                href="${book.apple_buy_link}"
              >
                <svg class="cart-items-apple" width="16" height="16">
                  <use href="../img/symbol-defs.svg#icon-applebook" />
                </svg>
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

  // console.log(pageData);
  if (pageData.totalBooks > 0) {
    if (pageData.totalPages === 1) {
      renderShoppingList(pageData.books[0]);
    }

    if (pageData.totalPages > 1) {
      renderShoppingList(pageData.books[pageData.currentPage]);
      renderPaginationButtons(pageData, paginationList);
      makeActiveButton(pageData.currentPage);
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
    paginationList.insertAdjacentHTML(
      'beforeend',
      `<button class="pagination-buttons-first"><<</button>
      <button class="pagination-buttons-prev"><</button>
      <button class="pagination-buttons-next">></button>
      <button class="pagination-buttons-last">>></button>`
    );

    const prevButton = document.querySelector('.pagination-buttons-prev');
    prevButton.insertAdjacentHTML(
      'afterend',
      '<ul class="pagination-buttons-numbers"></ul>'
    );

    const numbersButtonsList = document.querySelector(
      '.pagination-buttons-numbers'
    );

    const currentGroup =
      parseInt(pageData.currentPage) / parseInt(pageData.buttonsPerPage);
    // console.log(currentGroup);
    // const totalGroups = Math.ceil(
    //   pageData.totalPages / pageData.buttonsPerGroup
    // );

    // const bookOnLastPage =
    //   parseInt(pageData.totalBooks) % parseInt(pageData.buttonsPerGroup);

    // let lastButtonOfGroup = 0;
    // lastButtonOfGroup =
    //   parseInt(pageData.currentPage) + parseInt(pageData.buttonsPerGroup);
    // const lastGroup = totalGroups - 1;
    // if (lastGroup === currentGroup) {
    //   console.log(lastButtonOfGroup);
    //   console.log('last group');
    // } else {
    //   console.log('non last group');
    // }

    // // console.log('current group ', currentGroup, 'total groups', totalGroups);
    // //parseInt(pageData.currentPage)
    // //lastButtonOfGroup
    for (let i = 0; i < pageData.totalPages; i++) {
      numbersButtonsList.insertAdjacentHTML(
        'beforeend',
        `<li><button data-page="${i}">${i + 1}</button></li>`
      );
    }

    // const firstPageOfNextGroup =
    //   Math.ceil(pageData.currentPage / pageData.buttonsPerGroup) +
    //   pageData.buttonsPerGroup;
    // if (totalGroups > 0) {
    //   // console.log(totalGroups);
    //   numbersButtonsList.insertAdjacentHTML(
    //     'beforeend',
    //     `<li><button data-group="${firstPageOfNextGroup}">...</button></li>`
    //   );
    // }
  }
}

function buttonClickHandler(e) {
  const clickedElement = e.target.closest('button');
  if (clickedElement) {
    const pageButton = clickedElement.dataset.page;
    // const groupButton = clickedElement.dataset.group;
    if (pageButton) {
      renderShoppingList(pageData.books[pageButton]);
      makeActiveButton(pageButton);
      pageData.currentPage = pageButton;
    }
    // if (groupButton) {
    //   pageData.currentPage = groupButton;
    //   console.log('primo pulsante dovrebbe diventare: ', pageData.currentPage);
    //   renderPaginationButtons(pageData, paginationList);
    //   renderShoppingList(pageData.books[groupButton]);
    //   makeActiveButton(groupButton);
    // }
  }
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

//   1      2     3
//  1 2    3 4   4 5          5
//
//
//

// function buttonsHandler(e) {
//   if (e.target.closest('button')) {
//     if (e.target.closest('button').dataset.page) {
//       console.log(e.target.closest('button').dataset.page);
//       let newCurrentPage = e.target.closest('button').dataset.page;
//       let currentButton = document.querySelector('.active');
//       if (currentButton !== null) {
//         currentButton.classList.remove('active');
//       }
//       makeActiveButton(newCurrentPage);
//       currentButton = document.querySelector('.active');
//       console.log(currentButton);
//       renderShoppingList(pagesBook[newCurrentPage - 1]);
//     }
//     // if (
//     //   e.target
//     //     .closest('button')
//     //     .classList.contains('pagination-buttons-prev')
//     // ) {
//     //   const currentButton = document.querySelector('.active');
//     //   if (currentButton !== null) {
//     //     const currentPage = currentButton.dataset.page;
//     //     console.log('pressed button prev, current page: ', currentPage);
//     //     if (currentPage > 1) {
//     //       renderShoppingList(books[currentPage - 2]);
//     //       currentButton.classList.remove('active');
//     //       console.log('prev', currentButton, books);
//     //       makeActiveButton(parseInt(currentPage) - 1);
//     //     }
//     //   }
//     // }
//     // if (
//     //   e.target
//     //     .closest('button')
//     //     .classList.contains('pagination-buttons-next')
//     // ) {
//     //   const currentButton = document.querySelector('.active');
//     //   if (currentButton !== null) {
//     //     const currentPage = currentButton.dataset.page;
//     //     console.log(currentPage);
//     //     if (currentPage < books.length) {
//     //       console.log('pressed button next, current page: ', currentPage);
//     //       renderShoppingList(books[currentPage]);
//     //       currentButton.classList.remove('active');
//     //       console.log('next', currentButton, books);
//     //       makeActiveButton(parseInt(currentPage) + 1);
//     //     }
//     //   }
//     // }
//   }
// }

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

// for (let i = 0; i < 20; i++) {
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
