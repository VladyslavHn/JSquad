const themeSwitch = document.querySelector('.theme-switch-input');
const body = document.querySelector('body');

// Функція для зміни теми та збереження її в локальному сховищі
function toggleTheme() {
    if (themeSwitch.checked === false) {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Перевірка, яка тема встановлена за замовчуванням
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    themeSwitch.checked = true;
    toggleTheme();
} else {
    themeSwitch.checked = false;
}

// Додавання події для перемикання теми
themeSwitch.addEventListener('change', toggleTheme);

// відкриття та закриття мобільного меню

const menuOpenButton = document.querySelector('.menu-open-btn');
const menuCloseButton = document.querySelector('.menu-close-btn');
const mobMenu = document.querySelector('.mob-menu');

menuOpenButton.addEventListener('click', () => {
  mobMenu.classList.add('is-open');
  menuOpenButton.classList.remove('is-open')
  menuOpenButton.classList.add('hidden');
  menuCloseButton.classList.remove('hidden');

  // Перевірка, чи посиланням перейшли на сторінку списку покупок
  const isShoppingListPage = window.location.pathname === '/card.html';
  
  // Додавання класу 'btn-active' до другого посилання, якщо ми на сторінці списку покупок
  if (isShoppingListPage) {
    document.querySelector('.mob-menu-calor').classList.add('btn-active');
  } else {
    document.querySelector('.mob-menu-link').classList.add('btn-active');
  }
});

// Закриття меню при кліку на кнопку закриття
menuCloseButton.addEventListener('click', () => {
  mobMenu.classList.remove('is-open');
  menuOpenButton.classList.remove('hidden');
  menuCloseButton.classList.add('hidden');
});


// варіант 1

// Функція, яка видаляє клас 'btn-active' з усіх елементів меню, окрім клікнутого
// function handleMenuLinkClick(event, menuSelector, menuLinkSelector) {
//   if (event.target.classList.contains(menuLinkSelector)) {
//     event.preventDefault();
    
//     const menu = document.querySelector(menuSelector);
//     const menuLinks = menu.querySelectorAll('.' + menuLinkSelector);

//     menuLinks.forEach(link => {
//       if (link !== event.target) {
//         link.classList.remove('btn-active');
//       }
//     });

//     event.target.classList.add('btn-active');

//     const path = event.target.getAttribute('href');
//     window.location.pathname = path;
//   }
// }

// document.querySelector('.header-menu').addEventListener('click', function(event) {
//   handleMenuLinkClick(event, '.header-menu', 'header-menu-link');
// });

// document.querySelector('.mob-list').addEventListener('click', function(event) {
//   handleMenuLinkClick(event, '.mob-list', 'mob-menu-link');
// });



// варіант 2

// document.addEventListener('DOMContentLoaded', function() {
//   const home = document.querySelector('.header-menu-home');
//   const shoppingList = document.querySelector('.header-menu-shopping');

//   shoppingList.addEventListener('click', onShopping);

//   function onShopping() {
//       home.classList.remove('btn-active');
//       shoppingList.classList.add('btn-active');
//     }

//   home.addEventListener('click', onHome);

//   function onHome() {
//       shoppingList.classList.remove('btn-active');
//       home.classList.add('btn-active');
//   }
// });



// варіант 3

document.addEventListener('DOMContentLoaded', function() {
  const home = document.querySelector('.header-menu-home');
  const shoppingList = document.querySelector('.header-menu-shopping');

  function handleShoppingClick() {
    home.classList.toggle('btn-active');
    shoppingList.classList.toggle('btn-active');
    if (window.location.pathname === '/') {
      window.location.pathname = '/card.html';
    } else {
      window.location.pathname = '/';
    }
  }

  shoppingList.addEventListener('click', handleShoppingClick);

  function handleHomeClick() {
    shoppingList.classList.toggle('btn-active');
    home.classList.toggle('btn-active');
    if (window.location.pathname === '/card.html') {
      window.location.pathname = '/';
    } else {
      window.location.pathname = '/card.html';
    }
  }

  home.addEventListener('click', handleHomeClick);
});
