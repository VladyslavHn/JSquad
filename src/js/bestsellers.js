import { hideLoader } from '../main';
import backendAPI from './Services/api';
import { bookTemplate, renderTitle } from './Services/helpers';
import { renderCategoryPage } from './categorypage';
import { showModal } from './modalwindow';
import { showLoader } from '../main';

// ==================================================================================
// Функція для відображення Best Sellers Books
// ==============================================================================

export async function topPageBestsellersBooks() {
  try {
    showLoader();
    const bestSellersData = await backendAPI.getBestSellers();
    renderBestBooks(bestSellersData);
    hideLoader();
  } catch (error) {
    console.error('Error fetching best sellers:', error);
  }
}

// ==================================================================================================
// Рендер сторінки Best Sellers Books
// ======================================================================================================

export function renderBestBooks(bestBooks) {
  const bestBooksContainer = document.querySelector('.bestsellers-container');
  bestBooksContainer.innerHTML = '';
  renderTitle('.bestsellers-container', 'Best Sellers Books');
  bestBooksContainer.insertAdjacentHTML(
    'beforeend',
    `<ul class="bestsellers-list"></ul>`
  );

  const bestBooksList = document.querySelector('.bestsellers-list');

  const markup = bestBooks
    .map(({ books, list_name }) => {
      return `<li class="bestsellers-item">
      <h2 class="bestsellers-category-title">${list_name}</h2>
      <ul class="bestsellers-books-list">${books
        .map(({ title, author, book_image, _id }) => {
          if (books.length === 0) {
            return `<p class="category-empty">Sorry, no books were found for the given category!</p>`;
          } else {
            return bookTemplate({ title, author, book_image, _id });
          }
        })
        .join('\n')}
        </ul>
        <button class="bestsellers-btn" type="button" data-category="${list_name}">See more</button>
      </li>`;
    })
    .join('\n');

  bestBooksList.insertAdjacentHTML('beforeend', markup);

  bestBooksList.addEventListener('click', onButtonClick);
  bestBooksList.addEventListener('click', onImageClick);
}

// =======================================================================
// Слухач для модального вікна
// =======================================================================

async function onImageClick(e) {
  e.preventDefault();

  if (
    e.target.nodeName === 'IMG' ||
    e.target.nodeName === 'H3' ||
    e.target.nodeName === 'P'
  ) {
    let bookId = e.target.closest('.book-category-item').dataset.id;
    showModal(bookId);
  }
}

// ========================================================================
// Слухач на кнопку See more
// ========================================================================

async function onButtonClick(e) {
  try {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    let category = e.target.dataset.category;
    const allCategoryItem = document.querySelector('.sidebar-category-item');
    const sidebarCategoryList = document.querySelectorAll(
      '.sidebar-category-item'
    );

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const categoryBooksContainer = document.querySelector(
      '.bestsellers-container'
    );
    categoryBooksContainer.innerHTML = '';

    showLoader();
    const openCategory = await backendAPI.getSelectedCategory(category);
    renderCategoryPage(openCategory, category);
    hideLoader();

    sidebarCategoryList.forEach(el => {
      if (el.dataset.source === category) {
        allCategoryItem.classList.remove('category-active');
        el.classList.add('category-active');
        el.scrollIntoView({
          behavior: 'instant',
          block: 'center',
          inline: 'nearest',
        });
      }
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log('Error fetching modal:', error);
  }
}
