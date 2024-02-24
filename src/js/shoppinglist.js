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
      return `<li class="cart-item data-id="${book._id}">
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
          <button class="cart-item-del-button">
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

function renderShoppingListPage() {
  const books = localStorageBooks.getAllBooks();
  if (books.legth === 0) {
    cartEmptyMsg.classList.remove('is-hidden');
  } else {
    renderShoppingList(books);
  }
}

// const book = {
//   _id: '643282b1e85766588626a016',
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
