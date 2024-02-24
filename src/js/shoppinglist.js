import { renderTitle } from '../js/Services/helpers';
import localStorageBooks from '../js/localstorage';

const shoppingList = document.querySelector('.cart-list');
const cartEmptyMsg = document.querySelector('.cart-empty');

renderTitle('.container', 'Shopping List');

function renderShoppingList(books) {
  console.log(books);
  shoppingList.innerHTML = '';
  const hmtlBookList = books
    .map(book => {
      return `<li>${book.title}</li>`;
    })
    .join('');
  shoppingList.insertAdjacentHTML('beforeend', hmtlBookList);
}

function renderShoppingListPage() {
  const books = localStorageBooks.getAllBooks();
  if (books.legth === 0) {
    cartEmptyMsg.classList.remove('is-hidden');
  } else {
    renderShoppingList(books);
  }
}

// const book = {
//   _id: '643282b1e85766588626a0ae',
//   title: "A GOOD GIRL'S GUIDE TO MURDER",
//   author: 'Holly Jackson',
//   list_name: 'Series Books',
//   book_image:
//     'https://storage.googleapis.com/du-prd/books/images/9780593379851.jpg',
//   description: 'Pippa Fitz-Amobi solves murderous crimes.',
//   amazon_buy_link: 'https://www.amazon.com/dp/0593379853?tag=NYTBSREV-20',
//   apple_buy_link: 'https://goto.applebooks.apple/9781984896391?at=10lIEQ',
// };

// localStorageBooks.addBookToFavorites(book);

renderShoppingListPage();
