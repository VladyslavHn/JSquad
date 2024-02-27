// Функція, яка видаляє клас 'exception' з усіх елементів меню, окрім клікнутого
function handleMenuLinkClick(event, menuSelector, menuLinkSelector) {
  if (event.target.classList.contains(menuLinkSelector)) {
    event.preventDefault();
    
    const menu = document.querySelector(menuSelector);
    const menuLinks = menu.querySelectorAll('.' + menuLinkSelector);

    menuLinks.forEach(link => {
      if (link !== event.target) {
        link.classList.remove('exception');
      }
    });

    event.target.classList.add('exception');

    const path = event.target.getAttribute('href');
    window.location.pathname = path;
  }
}

document.querySelector('.header-menu').addEventListener('click', function(event) {
  handleMenuLinkClick(event, '.header-menu', 'header-menu-link');
});

document.querySelector('.mob-list').addEventListener('click', function(event) {
  handleMenuLinkClick(event, '.mob-list', 'mob-menu-link');
});


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

// Відкриття меню при кліку на кнопку відкриття
menuOpenButton.addEventListener('click', () => {
  mobMenu.classList.add('is-open');
  menuOpenButton.classList.remove('is-open')
  menuOpenButton.classList.add('hidden');
  menuCloseButton.classList.remove('hidden');
});

// Закриття меню при кліку на кнопку закриття
menuCloseButton.addEventListener('click', () => {
  mobMenu.classList.remove('is-open');
  menuOpenButton.classList.remove('hidden');
  menuCloseButton.classList.add('hidden');
});



document.addEventListener('DOMContentLoaded', function() {
  const home = document.querySelector('.header-menu-home');
  const shoppingList = document.querySelector('.header-menu-shopping');

  shoppingList.addEventListener('click', onShopping);

  function onShopping() {
    if (!shoppingList.classList.contains('btn-active')) {
      home.classList.remove('btn-active');
      shoppingList.classList.add('btn-active');
    }
  }

  home.addEventListener('click', onHome);

  function onHome() {
    if (!home.classList.contains('btn-active')) {
      shoppingList.classList.remove('btn-active');
      home.classList.add('btn-active');
    }
  }
});


