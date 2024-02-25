import { renderShoppingList } from './shoppinglist';

export function createCartPagination(books, cartList) {
  const totalBooks = books.length;
  const booksPerPage = getBooksPerPage();
  console.log(totalBooks);
  console.log(booksPerPage);
  renderShoppingList(books);
  renderPaginationButtons(totalBooks, cartList);
  console.log(getTotalPages(totalBooks, booksPerPage));
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

function renderPaginationButtons(totalPages, cartList) {
  if (totalPages > 1) {
    cartList.insertAdjacentHTML(
      'beforeend',
      `<button class="pagination-buttons-first"><<</button>
    <button class="pagination-buttons-prev"><</button>
    <button class="pagination-buttons-next">></button>
    <button class="pagination-buttons-last">>></button>`
    );

    const prevButton = document.querySelector('.pagination-buttons-prev');
    console.log(prevButton);
    prevButton.insertAdjacentHTML(
      'afterend',
      '<ul class="pagination-buttons-numbers"></ul>'
    );

    const numbersButtonsList = document.querySelector(
      '.pagination-buttons-numbers'
    );

    console.log(numbersButtonsList);
    for (let i = 0; i < totalPages; i++) {
      console.log(`page ${i + 1}`);
      const pageNumber = i + 1;
      numbersButtonsList.insertAdjacentHTML(
        'beforeend',
        `<li><button>${pageNumber}</button></li>`
      );
    }
  }
}
