import{l as c}from"./assets/api-12d4008f.js";import"./assets/vendor-0cb09735.js";function r(s,e){const t=document.querySelector(s),i=e.split(" "),o=i[i.length-1];i.pop(),e=i.join(" "),t.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${e} <span class="page-title-highlight">${o}</span></h1>`)}const a=document.querySelector(".cart-list"),l=document.querySelector(".cart-empty");r(".container","Shopping List");function m(s){a.innerHTML="";const e=s.map(t=>`<li class="cart-item">
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
          <button data-id="${t._id}" class="cart-item-del-button">
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
    </li>`).join("");a.insertAdjacentHTML("beforeend",e)}function n(){const s=c.getAllBooks();if(s.length===0)l.classList.remove("is-hidden");else{let e=function(t){const i=t.target.closest(".cart-item-del-button").dataset.id;c.removeBookFromFavorites(i),a.removeEventListener("click",e),n()};m(s),a.addEventListener("click",e)}}n();
//# sourceMappingURL=commonHelpers.js.map
