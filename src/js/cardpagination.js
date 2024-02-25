import { renderShoppingList } from './shoppinglist';

export function createCartPagination(books, cartList) {
  let currentPage = 1;
  const totalBooks = books.length;
  const booksPerPage = getBooksPerPage();
  const totalPages = getTotalPages(totalBooks, booksPerPage);
  console.log('HELLO');
  let pagesBook = createBooksListsPerPage(books, booksPerPage, totalPages);
  // console.log(pagesBook);
  renderShoppingList(pagesBook[0]);
  if (totalPages > 0) {
    renderPaginationButtons(totalPages, cartList, pagesBook);
  }
}

function getBooksPerPage() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 767) {
    return 3;
  } else {
    return 4;
  }
}

function getTotalPages(totalBooks, booksPerPage) {
  return Math.ceil(totalBooks / booksPerPage);
}

function renderPaginationButtons(totalPages, cartList, books) {
  cartList.innerHTML = '';
  if (totalPages > 1) {
    cartList.insertAdjacentHTML(
      'beforeend',
      `<button class="pagination-buttons-first"><<</button>
      <button class="pagination-buttons-prev"><</button>
      <button class="pagination-buttons-next">></button>
      <button class="pagination-buttons-last">>></button>`
    );

    const prevButton = document.querySelector('.pagination-buttons-prev');
    // console.log(prevButton);
    prevButton.insertAdjacentHTML(
      'afterend',
      '<ul class="pagination-buttons-numbers"></ul>'
    );

    const numbersButtonsList = document.querySelector(
      '.pagination-buttons-numbers'
    );

    for (let i = 0; i < totalPages; i++) {
      const pageNumber = i + 1;
      numbersButtonsList.insertAdjacentHTML(
        'beforeend',
        `<li><button data-page="${pageNumber}">${pageNumber}</button></li>`
      );
    }

    //select buttons

    // if first-time on page, make first button active
    const currentButton = document.querySelector('.active');
    if (currentButton === null) {
      makeActiveButton(1);
    }
    cartList.addEventListener('click', e => {
      if (e.target.closest('button')) {
        if (e.target.closest('button').dataset.page) {
          console.log(e.target.closest('button').dataset.page);
          let newCurrentPage = e.target.closest('button').dataset.page;
          const currentButton = document.querySelector('.active');
          if (currentButton !== null) {
            currentButton.classList.remove('active');
          }

          renderShoppingList(books[newCurrentPage - 1]);
          makeActiveButton(newCurrentPage);
        }
        if (
          e.target
            .closest('button')
            .classList.contains('pagination-buttons-prev')
        ) {
          const currentButton = document.querySelector('.active');
          if (currentButton !== null) {
            const currentPage = currentButton.dataset.page;
            console.log('pressed button prev, current page: ', currentPage);
            if (currentPage > 1) {
              renderShoppingList(books[currentPage - 2]);
              currentButton.classList.remove('active');
              console.log('prev', currentButton, books);
              makeActiveButton(parseInt(currentPage) - 1);
            }
          }
        }
        if (
          e.target
            .closest('button')
            .classList.contains('pagination-buttons-next')
        ) {
          const currentButton = document.querySelector('.active');
          if (currentButton !== null) {
            const currentPage = currentButton.dataset.page;
            console.log(currentPage);
            if (currentPage < books.length) {
              console.log('pressed button next, current page: ', currentPage);
              renderShoppingList(books[currentPage]);
              currentButton.classList.remove('active');
              console.log('next', currentButton, books);
              makeActiveButton(parseInt(currentPage) + 1);
            }
          }
        }
      }
      // console.log(currentButton);
    });
    // console.log(numbersButtonsList);
  }
}

function buttonsActions(e) {}

function makeActiveButton(currentPage) {
  console.log('make active button with page ' + currentPage);
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
