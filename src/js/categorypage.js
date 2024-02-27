import { hideLoader, showLoader } from '../main';
import backendAPI from './Services/api';
import { renderTitle, bookTemplate } from './Services/helpers';
import { renderModal, showModal } from './modalwindow';

export function renderCategoryPage(books, category) {
  
  try {
    const pageContainer = document.querySelector('.bestsellers-container');
    pageContainer.innerHTML = '';
    renderTitle('.bestsellers-container', category);
    pageContainer.insertAdjacentHTML(
      'beforeend',
      '<ul class = "book-category-list"></ul>'
    );
    const categoryPage = document.querySelector('.book-category-list');
    const markup = books
      .map(({ author, book_image, title, _id }) => {
        return bookTemplate({ author, book_image, title, _id });
      })
      .join('');

    categoryPage.innerHTML = markup;
    categoryPage.addEventListener('click', onClickBook);
  } catch {
    console.log('Error fetching modal:', error);
  }
}

async function onClickBook(e) {
  if (
    e.target.nodeName === 'IMG' ||
    e.target.nodeName === 'H3' ||
    e.target.nodeName === 'P'
  ) {
    let bookId = e.target.closest('.book-category-item').dataset.id;
    renderModal(bookId);
    showModal();
  }
}
// btn.addEventListener('click', async () => {
//   const result = await backenadAPI.getSelectedCategory(
//    category
//   );
//   renderCategoryPage(result, category);
// });
