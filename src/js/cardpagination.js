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
  cartList.insertAdjacentHTML(
    'beforeend',
    `<li><button class="pagination-buttons-first"><<<</button></li>
    <li><button class="pagination-buttons-prev"><</button></li>
    <li><button class="pagination-buttons-next">></button></li>
    <li><button class="pagination-buttons-last">>>></button></li>`
  );
  //first page
  //previous page
  //1 - 2 - 3 pages
  //...
  //next page
  //last page
  for (let i = 0; i < totalPages; i++) {
    console.log(`page ${i + 1}`);
  }
}
