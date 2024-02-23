import backendAPI from './Services/api';

function renderCategoryPage(books, category) {
  const categoryPage = document.querySelector('.bestsellers-list');
  const categoryTitle = document.querySelector('.bestsellers-title');
  categoryTitle.textContent(category);
  const markup = books
    .map(
      ({ author, book_image, title }) => `<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${book_image}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${title}</h3>
      <p class = "author-name"> ${author}</p>
    </div>
  </div>
</li>;`
    )
    .join('');

  categoryPage.insertAdjacentHTML('beforeend', markup);
}

// btn.addEventListener('click', async () => {
//   const result = await backenadAPI.getSelectedCategory(
//    category
//   );
//   renderCategoryPage(result, category);
// });
