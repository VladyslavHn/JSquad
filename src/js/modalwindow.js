// import backendAPI from './Services/api';
// backendAPI.getBookDescription;

// const renderModal = async () => {
//   const backdrop = document.querySelector('.modal-description-list');
//   try {
//     const modalData = await backendAPI.getBookDescription(
//       '643282b1e85766588626a0dc'
//     );
//     console.log(modalData);
//     const markup = modalData
//       .map(({ book_image, title, author, description }) => {
//         return `
//         <li><img class="modal-img-book" src="${book_image}" alt="book" /></li>
//       <li><p class="modal-description-list-title">${title}</p></li>
//       <li><p class="modal-description-list-subtitle">${author}</p></li>
//       <li>
//         <p class="modal-description-list-text">
//           ${description}
//         </p>
//       </li>`;
//       })
//       .join('\n');
//     backdrop.insertAdjacentHTML('beforeend', markup);
//   } catch (error) {
//     console.log('Error fetching modal:', error);
//   }
// };
// renderModal();
// Рендер информации в модалку
import backendAPI from './Services/api';
import localStorageBooks from '../js/localstorage';
const bookId = '643282b2e85766588626a114';
export const renderModal = async bookId => {
  const backdrop = document.querySelector('.modal-wrapper');
  const links = document.querySelector('.modal-icons-list');
  const modalWindow = document.querySelector('.modal-window');

  try {
    const modalData = await backendAPI.getBookDescription(bookId);
    backdrop.innerHTML = '';
    links.innerHTML = '';
    const markupBooks = `
      <img class="modal-img-book" src="${modalData.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${modalData.title}</p></li>
      <li><p class="modal-description-list-subtitle">${modalData.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${modalData.description}
        </p>
      </li>
      </ul>`;
    backdrop.insertAdjacentHTML('beforeend', markupBooks);
    console.log(markupBooks);
    const murkupLinks = `<li class="modal-icons-wrapper-1">
        <a class="modal-icon" href="${modalData.buy_links[0].url}">amazon</a>
      </li>
      <li class="modal-icons-wrapper-2">
        <a class="modal-icon" href="${modalData.buy_links[1].url}">apple</a>
      </li>`;
    links.insertAdjacentHTML('beforeend', murkupLinks);
    // Добавление в локал сторедж, смена кнопок и текста
    let btnAdd = document.querySelector('.modal-btn-add');
    const book = {
      _id: modalData._id,
      title: modalData.title,
      author: modalData.author,
      list_name: modalData.list_name,
      book_image: modalData.book_image,
      description: modalData.description,
      amazon_buy_link: modalData.buy_links[0].url,
      apple_buy_link: modalData.buy_links[1].url,
    };
    console.log(modalData._id);
    if (localStorageBooks.isBookExsist(modalData._id)) {
      btnAdd.textContent = 'remove from the shopping list';
      const congrats = `<p class="modal-text-congratulations">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".
    </p>`;
      modalWindow.insertAdjacentHTML('beforeend', congrats);
      btnAdd.addEventListener('click', remove);
      function remove() {
        localStorageBooks.removeBookFromFavorites(modalData._id);
        btnAdd.textContent = 'add to shopping list';
        btnAdd.classList.remove('modal-btn-remove');
        btnAdd.removeEventListener('click', remove);
        renderModal(modalData._id);
      }
    } else {
      btnAdd.textContent = 'add to shopping list';
      btnAdd.addEventListener('click', add);
      const congratsRemove = document.querySelector(
        '.modal-text-congratulations'
      );
      congratsRemove.remove();
      function add() {
        localStorageBooks.addBookToFavorites(book);
        btnAdd.textContent = 'remove from the shopping list';
        btnAdd.classList.add('modal-btn-remove');
        btnAdd.removeEventListener('click', add);

        renderModal(modalData._id);
      }
    }

    console.log(murkupLinks);
  } catch (error) {
    console.log('Error fetching modal:', error);
  }
};
renderModal(bookId);

/////////////////////////////////////////////////////////////////////////////////
// Закрывание окна
const backdrop = document.querySelector('.backdrop');
const btnClose = document.querySelector('.modal-close');

btnClose.addEventListener('click', () => {
  backdrop.classList.remove('is-open');
});
/////////////////////////////////////////////////////////////////////////////////

// function showModal() {
//   backdrop.classList.add('.is-open');
// }

// showModal();
