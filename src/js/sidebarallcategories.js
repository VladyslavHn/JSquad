import backendAPI from './Services/api';
import { renderBestBooks } from './bestsellers';
import { renderCategoryPage } from './categorypage';

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
 | Слухачі на all-category та на categoryList
 |============================
*/

categorySelectors.allCategory.addEventListener('click', async () => {
  try {
    const bestSellersData = await backendAPI.getBestSellers();
    renderBestBooks(bestSellersData);
  } catch (error) {
    console.log(error);
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

    try {
      const categoryData = await backendAPI.getSelectedCategory(category);
      renderCategoryPage(categoryData);
    } catch (error) {
      console.log(error);
    }
  }
});
