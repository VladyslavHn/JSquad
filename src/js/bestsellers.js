import backendAPI from "./Services/api";
import { renderTitle } from "./Services/helpers";

// ===================================================================
// Екземпляр книжки
// =================================================================

function bookTemplate({ book_image, title, author }) {
return `<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${book_image}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${title}</h3>
      <p class = "author-name"> ${author}</p>
    </div>
  </div>
</li>`
}

// ==================================================================================================
// Рендер сторінки
// ======================================================================================================
const bestBooksList = document.querySelector('.bestsellers-container');

export function renderBestBooks(bestBooks) {
 renderTitle('.bestsellers-container','Best Sellers Books');
    const markup = bestBooks.map(({ books, list_name }) => {
            return `<li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${list_name}</h2>
                <ul class="bestsellers-books-list"> 
                    ${books.map(({ book_image, title, author }) => {return bookTemplate({ book_image, title, author })
                        }).join('\n')}
                </ul>
                <button class="bestsellers-btn" type="button data-category="${list_name}">See more</button>
            </li>`;        
        }).join('\n');
        
        bestBooksList.insertAdjacentHTML('beforeend', markup);
}
// ==================================================================================
// Тестовий код
// ==============================================================================
export async function testBestsellersBooks() {
    try {
        const bestSellersData = await backendAPI.getBestSellers();
        return renderBestBooks(bestSellersData);
    } catch (error) {
        console.error("Error fetching best sellers:", error);
    }
}
testBestsellersBooks();
// ========================================================================
// Слухач на кнопку
// ========================================================================
// const bestsellersBtn = document.querySelector('.bestsellers-btn');
//     console.log(bestsellersBtn);
//     const categoryTitle = document.querySelector('.bestsellers-category-title');
//     console.log(categoryTitle);
//     const container = document.querySelector('.bestsellers-container');

//     bestsellersBtn.addEventListener('click', async (e) => {
//         const category = categoryTitle.textContent;
//         console.log(category);

//         const result = await backendAPI.getSelectedCategory(category);
//         console.log(result);
//         // if(category === ) {

//         // }
//         container.innerHTML = '';
//         renderCategoryPage(result, category);
//     });

// =======================================================================
// Слухач для модалки
// =======================================================================
// const bestsellersList = document.querySelector('.bestsellers-list');

// bestsellersList.addEventListener('click', async (e) => {
//      e.preventDefault();

//      if (e.target.nodeName !== 'IMG') {
//     return;
//     }
//     // викликаємо модальне вікно
// });

// =========================================================================

// const handleSeeMoreClick = async (e) => {
//     const category = e.target.getAttribute('data-category');

//     const openCategory = await backendAPI.getSelectedCategory(category);


//     const markupCategory = openCategory.map(({ books, list_name }) => {
//       return `<li class="bestsellers-item">
//         <h2 class="bestsellers-category-title">${list_name}</h2>
//         <ul class="bestsellers-books-list"> 
//           ${books.map(({ book_image, title, author }) => {
//             return `<li class="bestsellers-books-item">
//                       <img class="bestsellers-books-img" src='${book_image}' alt="" />
//                       <h3 class="bestsellers-book-title">${title}</h3>
//                       <p class="bestsellers-book-author">${author}</p>
//                     </li>`;
//           }).join('\n')}
//         </ul>
//         <button class="bestsellers-btn" type="button" data-category="${list_name}">See more</button>
//       </li>`;
//     }).join('\n');


//     document.querySelector('.bestsellers-list').insertAdjacentHTML('beforeend', markupCategory);
// };

// ========================================================================
