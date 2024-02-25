import{r as o,l as a}from"./assets/api-c4115792.js";import"./assets/vendor-0cb09735.js";const s=document.querySelector(".cart-list"),r=document.querySelector(".cart-empty");o(".container","Shopping List");function l(e){s.innerHTML="";const i=e.map(t=>`<li class="cart-item">
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
    </li>`).join("");s.insertAdjacentHTML("beforeend",i)}function c(){const e=a.getAllBooks();if(e.length===0)r.classList.remove("is-hidden");else{let i=function(t){const n=t.target.closest(".cart-item-del-button").dataset.id;a.removeBookFromFavorites(n),s.removeEventListener("click",i),c()};l(e),s.addEventListener("click",i)}}c();
//# sourceMappingURL=commonHelpers.js.map
