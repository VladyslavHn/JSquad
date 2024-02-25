// Рендер информации в модалку
import backendAPI from './Services/api';
import localStorageBooks from '../js/localstorage';
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
    const murkupLinks = `<li class="modal-icons-wrapper-1">
        <a class="modal-icon" href="${modalData.buy_links[0].url}"><img class='modal-icon' src="../img/amazon.png" alt="" width='62' height='19' 
       /></a>
      </li>
      <li class="modal-icons-wrapper-2">
        <a class="modal-icon" href="${modalData.buy_links[1].url}"><img class='modal-icon' src="../img/applebook.png" alt="" width='33' height='32'
       /></a>
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
      if (congratsRemove !== null) {
        congratsRemove.remove();
      }
      function add() {
        localStorageBooks.addBookToFavorites(book);
        btnAdd.textContent = 'remove from the shopping list';
        btnAdd.classList.add('modal-btn-remove');
        btnAdd.removeEventListener('click', add);

        renderModal(modalData._id);
      }
    }
  } catch (error) {
    console.log('Error fetching modal:', error);
  }
};
// renderModal(bookId);
/////////////////////////////////////////////////////////////////////////////////

// Закрывание окна
const backdrop = document.querySelector('.backdrop');
const btnClose = document.querySelector('.modal-close');
const body = document.querySelector('body');

btnClose.addEventListener('click', () => {
  backdrop.classList.remove('is-open');
  body.classList.remove('no-scroll');
});
/////////////////////////////////////////////////////////////////////////////////
//Открытие окна
export function showModal() {
  backdrop.classList.add('is-open');
  body.classList.add('no-scroll');
}
showModal();

/////////////////////////////////////////////////////////////////////////////////
