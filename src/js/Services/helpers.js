export function renderTitle(containerClass, title) {
  const container = document.querySelector(containerClass);
  const words = title.split(' ');
  const lastWord = words[words.length - 1];
  words.pop();
  title = words.join(' ');
  container.insertAdjacentHTML(
    'afterbegin',
    `<h1 class="page-title">${title} <span class="page-title-highlight">${lastWord}</span></h1>`
  );
}

export function bookTemplate({ title, author, book_image }) {
  return `<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${book_image}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${title}</h3>
      <p class = "author-name"> ${author}</p>
    </div>
  </div>
</li>`;
}
