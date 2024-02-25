import{l as n}from"./assets/api-b14a6e97.js";import"./assets/vendor-0cb09735.js";function l(e,s){const t=document.querySelector(e),i=s.split(" "),c=i[i.length-1];i.pop(),s=i.join(" "),t.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${s} <span class="page-title-highlight">${c}</span></h1>`)}const a=document.querySelector(".cart-list"),o=document.querySelector(".cart-empty");l(".container","Shopping List");function r(e){console.log(e),a.innerHTML="";const s=e.map(t=>`<li class="cart-item data-id="${t._id}">
      <img
        class="cart-item-img"
        src="${t.book_image}"
        alt="book image"
        width="100"
        height="142"
      />
      <div class="cart-item-content">
        <div class="cart-item-content-top">
          <div class="cart-item-content-top-left">
            <h3 class="cart-item-title">${t.title}</h3>
            <p class="cart-item-category">${t.list_name}</p>
          </div>
          <button class="cart-item-del-button">
            <svg class="cart-item-del-button-icon" width="12" height="12">
              <use href="../img/symbol-defs.svg#icon-delete-shoppinglist-tab" />
            </svg>
          </button>
        </div>
        <div class="cart-item-content-middle">
          <p class="cart-item-content-desc">
            ${t.description}
          </p>
          <div class="cart-item-content-bottom">
            <p class="cart-item-author">${t.author}</p>
            <div class="cart-items-links">
              <a
                class="cart-items-link"
                target="_blank"
                href="${t.amazon_buy_link}"
              >
                <svg class="cart-item-amazon" width="32" height="11">
                  <use href="../img/symbol-defs.svg#icon-amazon" />
                </svg>
              </a>
              <a
                class="cart-items-link"
                target="_blank"
                href="${t.apple_buy_link}"
              >
                <svg class="cart-items-apple" width="16" height="16">
                  <use href="../img/symbol-defs.svg#icon-applebook" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>`).join("");a.insertAdjacentHTML("beforeend",s)}function m(){const e=n.getAllBooks();e.legth===0?o.classList.remove("is-hidden"):r(e)}m();
//# sourceMappingURL=commonHelpers.js.map
