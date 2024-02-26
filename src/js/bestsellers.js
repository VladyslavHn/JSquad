import backendAPI from "./Services/api";
import { bookTemplate, renderTitle } from "./Services/helpers";
import { renderCategoryPage } from "./categorypage";
import { renderModal, showModal } from "./modalwindow";

// ==================================================================================
// Функція для відображення Best Sellers Books
// ==============================================================================

export async function topPageBestsellersBooks() {
  try {
    const bestSellersData = await backendAPI.getBestSellers();
    renderBestBooks(bestSellersData);
  } catch (error) {
    console.error("Error fetching best sellers:", error);
  }
}

// ==================================================================================================
// Рендер сторінки
// ======================================================================================================

export function renderBestBooks(bestBooks) {
  const bestBooksContainer = document.querySelector('.bestsellers-container');
  bestBooksContainer.innerHTML = '';
  renderTitle('.bestsellers-container', 'Best Sellers Books');
  bestBooksContainer.insertAdjacentHTML('beforeend', `<ul class="bestsellers-list"></ul>`);
  const bestBooksList = document.querySelector('.bestsellers-list');
  
  const markup = bestBooks.map(({ books, list_name }) => {
    return `<li class="bestsellers-item">
              <h2 class="bestsellers-category-title">${list_name}</h2>
              <ul class="bestsellers-books-list"> 
                ${books.map(({ title, author, book_image, _id }) => {return bookTemplate({ title, author, book_image, _id })
                  }).join('\n')}
              </ul>
              <button class="bestsellers-btn" type="button" data-category="${list_name}">See more</button>
            </li>`;        
        }).join('\n');

  bestBooksList.insertAdjacentHTML('beforeend', markup);

  const bestsellersList = document.querySelector('.bestsellers-list');
  bestsellersList.addEventListener('click', onButtonClick);
  bestsellersList.addEventListener('click', onImageClick);  
}

// =======================================================================
// Слухач для модалки
// =======================================================================

async function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName === 'IMG' ||
    e.target.nodeName === 'H3' ||
    e.target.nodeName === 'P') {
     let bookId = e.target.closest('.book-category-item').dataset.id;
    renderModal(bookId);
    showModal();
  }
}

// ========================================================================
// Слухач на кнопку
// ======================================================================== 

async function onButtonClick(e) {
  
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  
  let category = e.target.dataset.category;
  const openCategory = await backendAPI.getSelectedCategory(category);
  renderCategoryPage(openCategory, category);
};

