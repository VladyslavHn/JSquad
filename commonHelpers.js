import{r as l,l as a}from"./assets/api-b32898b7.js";import"./assets/vendor-0cb09735.js";function d(e,n){const t=e.length,o=u();console.log(t),console.log(o),h(e),m(t,n),console.log(g(t,o))}function u(){return window.innerWidth<767?3:4}function g(e,n){return Math.ceil(e/n)}function m(e,n){if(e>1){n.insertAdjacentHTML("beforeend",`<button class="pagination-buttons-first"><<</button>
    <button class="pagination-buttons-prev"><</button>
    <button class="pagination-buttons-next">></button>
    <button class="pagination-buttons-last">>></button>`);const t=document.querySelector(".pagination-buttons-prev");console.log(t),t.insertAdjacentHTML("afterend",'<ul class="pagination-buttons-numbers"></ul>');const o=document.querySelector(".pagination-buttons-numbers");console.log(o);for(let i=0;i<e;i++){console.log(`page ${i+1}`);const r=i+1;o.insertAdjacentHTML("beforeend",`<li><button>${r}</button></li>`)}}}const s=document.querySelector(".cart-list"),p=document.querySelector(".cart-empty"),b=document.querySelector(".pagination-list");l(".cart","Shopping List");function h(e){s.innerHTML="";const n=e.map(t=>`<li class="cart-item">
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
    </li>`).join("");s.insertAdjacentHTML("beforeend",n)}function c(){const e=a.getAllBooks();if(e.length===0)p.classList.remove("is-hidden");else{let n=function(t){const o=t.target.closest(".cart-item-del-button").dataset.id;a.removeBookFromFavorites(o),s.removeEventListener("click",n),c()};d(e,b),s.addEventListener("click",n)}}c();
//# sourceMappingURL=commonHelpers.js.map
