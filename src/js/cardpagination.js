import { renderShoppingList } from './shoppinglist';

export function createCartPagination(books, cartList) {
  const totalBooks = books.length;
  const booksPerPage = getBooksPerPage();
  const totalPages = getTotalPages(totalBooks, booksPerPage);
  console.log(totalBooks);
  console.log(booksPerPage);
  console.log(totalPages);
  const pagesBook = createBooksListsPerPage(books, booksPerPage, totalPages);
  console.log(pagesBook);
  renderShoppingList(pagesBook[0]);
  renderPaginationButtons(totalPages, cartList, pagesBook);
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

    // if first on page, make first page button active
    const currentButton = document.querySelector('.active');
    if (currentButton === null) {
      makeActiveButton(1);
    }

    numbersButtonsList.addEventListener('click', e => {
      if (e.target.closest('button')) {
        console.log(e.target.closest('button').dataset.page);
        let newCurrentPage = e.target.closest('button').dataset.page;
        const currentButton = document.querySelector('.active');
        if (currentButton !== null) {
          currentButton.classList.remove('active');
        }
        console.log(books);
        renderShoppingList(books[newCurrentPage - 1]);
        makeActiveButton(newCurrentPage);
      }
      // console.log(currentButton);
    });
    // console.log(numbersButtonsList);
  }
}

function makeActiveButton(currentPage) {
  const activeButton = document.querySelector(`[data-page="${currentPage}"]`);
  activeButton.classList.add('active');
}

function createBooksListsPerPage(books, booksPerPage, totalPages) {
  // console.log(books);
  let i = 0;
  let booksPages = [];
  let startPos = i;
  // let endPos = booksPerPage;
  for (i = 0; i < totalPages; i++) {
    booksPages[i] = books.splice(0, booksPerPage);
    // console.log(booksPages[i]);
  }
  return booksPages;
}
