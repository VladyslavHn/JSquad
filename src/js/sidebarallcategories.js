import backendAPI from './Services/api';

const categorySelectors = {
  categoryContainer: document.querySelector('.category-container'),
  categoryList: document.querySelector('.category-list'),
  categoryItem: document.querySelector('.category-item'),
  allCategory: document.querySelector('.all-category'),
};

function categoryMarkup(data) {
  const result = data
    .map(item => `<li class='category-item'>${item.list_name}</li>`)
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
