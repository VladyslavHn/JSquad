export function createCartPagination(books) {
  const totalBooks = books.length;
  const cardsPerPage = getElementsPerPage();
  console.log(totalBooks);
  console.log(cardsPerPage);
}

function getElementsPerPage() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 767) {
    return 3;
  } else {
    return 4;
  }
}
