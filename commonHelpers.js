import{r as B,l as d,u as m,a as L,b as y}from"./assets/api-3e679e4f.js";import"./assets/vendor-8dea2054.js";const S="/JSquad/assets/symbol-defs-9ef8a4c2.svg",r=document.querySelector(".cart-list"),$=document.querySelector(".cart-empty-container"),s=document.querySelector(".pagination-list"),w=document.querySelector(".cart-buttons-container");B(".shoppinglist-title","Shopping List");function a(t){r.innerHTML="";const o=t.map(e=>`<li class="cart-item">
      <img
        class="cart-item-img"
        src="${e.book_image}"
        alt="book image"
        width="100"
        height="142"
      />
      <div class="cart-item-content">
        <div class="cart-item-content-top">
          <div class="cart-item-content-top-left">
            <h3 class="cart-item-title">${e.title}</h3>
            <p class="cart-item-category">${e.list_name}</p>
          </div>
          <button data-id="${e._id}" class="cart-item-del-button">
            <svg class="cart-item-del-button-icon" width="12" height="12">

              <use href="${S}#icon-delete-shoppinglist-tab" />
            </svg>
          </button>
        </div>
        <div class="cart-item-content-middle">
          <p class="cart-item-content-desc">
            ${e.description}
          </p>
          <div class="cart-item-content-bottom">
            <p class="cart-item-author">${e.author}</p>
            <div class="cart-items-links">
              <a
                class="cart-items-link"
                target="_blank"
                href="${e.amazon_buy_link}"
              >
                <img
                  class="cart-items-amazon"
                  src="${L}"
                  alt="shopping cart empty"
                  height="11"
                  width="32"
                />
              </a>
              <a
                class="cart-items-link"
                target="_blank"
                href="${e.apple_buy_link}"
              >
                <img
                  class="cart-items-apple"

                  src="${y}"
                  alt="shopping cart empty"
                  height="16"
                  width="16"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>`).join("");r.insertAdjacentHTML("beforeend",o)}let n={books:[],currentPage:0,nextPage:0,prevPage:0,totalBooks:0,totalPages:0,booksPerPage:0,buttonsPerPage:0,totalButtonsGroups:0,pagesOnLastGroup:0};function g(t){s.removeEventListener("click",l),r.removeEventListener("click",u);const o=d.getAllBooks();if(r.innerHTML="",s.innerHTML="",t.totalBooks=o.length,t.booksPerPage=T(),t.totalPages=q(t.totalBooks,t.booksPerPage),t.books=C(o,t.booksPerPage,t.totalPages),t.buttonsPerPage=_(),t.totalButtonsGroups=Math.ceil(t.totalPages/t.buttonsPerPage),t.pagesOnLastGroup=t.totalPages%t.totalButtonsGroups,t.totalBooks>0){if(t.totalPages===1&&a(t.books[0]),t.totalPages>1){a(t.books[t.currentPage]),M(t,s),h(t.currentPage);const e=document.querySelector(".active");P(e),s.addEventListener("click",l)}r.addEventListener("click",u)}else $.classList.remove("is-hidden")}function M(t,o){if(o.innerHTML="",t.totalPages>1)for(let e=0;e<t.totalPages;e++)o.insertAdjacentHTML("beforeend",`<li><button data-page="${e}">${e+1}</button></li>`)}function l(t){const o=t.target.closest("button");if(o){const e=o.dataset.page;e&&(a(n.books[e]),h(e),n.currentPage=e,P(o))}}function P(t){const o=t.getBoundingClientRect(),e=w.getBoundingClientRect(),c=s.getBoundingClientRect(),i=e.width/2,b=o.width/2,f=o.left,v=c.left,k=parseInt(i)-parseInt(f)-parseInt(b)+parseInt(v);s.style.translate=`${k}px 0`}function u(t){if(t.target.closest(".cart-item-del-button")!==null){const o=t.target.closest(".cart-item-del-button").dataset.id;d.removeBookFromFavorites(o),m(),parseInt(n.currentPage)===parseInt(n.totalPages)-1&&n.books[n.currentPage].length===1&&n.currentPage>=1&&(n.currentPage-=1),g(n)}}function p(){return window.innerWidth<767}function T(){return p()?4:3}function _(){return p()?2:3}function q(t,o){return Math.ceil(t/o)}function h(t){const o=document.querySelector(".active");o==null||o.classList.remove("active"),document.querySelector(`[data-page="${t}"]`).classList.add("active")}function C(t,o,e){let c=[];for(let i=0;i<e;i++)c[i]=t.splice(0,o);return c}g(n);m();
//# sourceMappingURL=commonHelpers.js.map
