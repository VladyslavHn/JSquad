import { hideLoader, showLoader } from '../main';
import backendAPI from './Services/api';
import { renderBestBooks } from './bestsellers';
import { renderCategoryPage } from './categorypage';
// import { notification } from './Services/helpers';

const categorySelectors = {
  categoryContainer: document.querySelector('.sidebar-category-container'),
  categoryList: document.querySelector('.sidebar-category-list'),
  allCategory: document.querySelector('.all-category'),
};

/**
 |============================
 | Розмітка списку категорій
 |============================
*/

function categoryMarkup(data) {
  const result = data
    .map(
      item =>
        `<li class='sidebar-category-item' data-source="${item.list_name}">${item.list_name}</li>`
    )
    .join('');
  return result;
}

(async () => {
  try {
    const categoryData = await backendAPI.getCategoryList();
    const markup = categoryMarkup(categoryData);
    categorySelectors.categoryList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
})();

/**
 |============================
 | Слухачі подій
 |============================
*/

categorySelectors.allCategory.addEventListener('click', async event => {
  showLoader();
  try {
    const bestBooksData = await backendAPI.getBestSellers();
    renderBestBooks(bestBooksData);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
});

categorySelectors.categoryList.addEventListener('click', async event => {
  if (event.target.classList.contains('sidebar-category-item')) {
    const category = event.target.dataset.source;

    const categoryItems = document.querySelectorAll('.sidebar-category-item');
    categoryItems.forEach(item => {
      item.classList.remove('category-active');
    });

    event.target.classList.add('category-active');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    try {
      if (!event.target.classList.contains('all-category')) {
        const categoryData = await backendAPI.getSelectedCategory(category);
        // if (categoryData.length === 0) {
        //   notification(
        //     `Sorry! There are no books available in the category "${category}".`
        //   );
        // } else {
        //   renderCategoryPage(categoryData, category);
        // }
        renderCategoryPage(categoryData, category);
      }
    } catch (error) {
      console.log(error);
    }
  }
});
