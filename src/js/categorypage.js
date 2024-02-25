import backendAPI from './Services/api';
import { renderTitle, bookTemplate } from './Services/helpers';

export function renderCategoryPage(books, category) {
  const pageContainer = document.querySelector('.bestsellers-container');
  pageContainer.innerHTML = '';
  renderTitle('.bestsellers-container', category);
  pageContainer.insertAdjacentHTML(
    'beforeend',
    '<ul class = "book-category-list"></ul>'
  );
  const categoryPage = document.querySelector('.book-category-list');
  const markup = books
    .map(({ author, book_image, title }) => {
      return bookTemplate({ author, book_image, title });
    })
    .join('');

  categoryPage.innerHTML = markup;
}

// btn.addEventListener('click', async () => {
//   const result = await backenadAPI.getSelectedCategory(
//    category
//   );
//   renderCategoryPage(result, category);
// });
