import{r as k,l as d}from"./assets/api-d01f2ce1.js";import"./assets/vendor-8dea2054.js";const r=document.querySelector(".cart-list"),B=document.querySelector(".cart-empty-container"),s=document.querySelector(".pagination-list"),L=document.querySelector(".cart-buttons-container");k(".shoppinglist-title","Shopping List");function a(t){r.innerHTML="";const n=t.map(e=>`<li class="cart-item">
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
              <use href="/img/symbol-defs.svg#icon-delete-shoppinglist-tab" />
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
                  src="/img/amazon-n.png"
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
                  src="/img/apple-n.png"
                  alt="shopping cart empty"
                  height="16"
                  width="16"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>`).join("");r.insertAdjacentHTML("beforeend",n)}let o={books:[],currentPage:0,nextPage:0,prevPage:0,totalBooks:0,totalPages:0,booksPerPage:0,buttonsPerPage:0,totalButtonsGroups:0,pagesOnLastGroup:0};function g(t){s.removeEventListener("click",l),r.removeEventListener("click",u);const n=d.getAllBooks();if(r.innerHTML="",s.innerHTML="",t.totalBooks=n.length,t.booksPerPage=S(),t.totalPages=$(t.totalBooks,t.booksPerPage),t.books=M(n,t.booksPerPage,t.totalPages),t.buttonsPerPage=w(),t.totalButtonsGroups=Math.ceil(t.totalPages/t.buttonsPerPage),t.pagesOnLastGroup=t.totalPages%t.totalButtonsGroups,t.totalBooks>0){if(t.totalPages===1&&a(t.books[0]),t.totalPages>1){a(t.books[t.currentPage]),y(t,s),p(t.currentPage);const e=document.querySelector(".active");m(e),s.addEventListener("click",l)}r.addEventListener("click",u)}else B.classList.remove("is-hidden")}function y(t,n){if(n.innerHTML="",t.totalPages>1)for(let e=0;e<t.totalPages;e++)n.insertAdjacentHTML("beforeend",`<li><button data-page="${e}">${e+1}</button></li>`)}function l(t){const n=t.target.closest("button");if(n){const e=n.dataset.page;e&&(a(o.books[e]),p(e),o.currentPage=e,m(n))}}function m(t){const n=t.getBoundingClientRect(),e=L.getBoundingClientRect(),c=s.getBoundingClientRect(),i=e.width/2,h=n.width/2,v=n.left,b=c.left,f=parseInt(i)-parseInt(v)-parseInt(h)+parseInt(b);s.style.translate=`${f}px 0`}function u(t){if(t.target.closest(".cart-item-del-button")!==null){const n=t.target.closest(".cart-item-del-button").dataset.id;d.removeBookFromFavorites(n),parseInt(o.currentPage)===parseInt(o.totalPages)-1&&o.books[o.currentPage].length===1&&o.currentPage>=1&&(o.currentPage-=1),g(o)}}function P(){return window.innerWidth<767}function S(){return P()?4:3}function w(){return P()?2:3}function $(t,n){return Math.ceil(t/n)}function p(t){const n=document.querySelector(".active");n==null||n.classList.remove("active"),document.querySelector(`[data-page="${t}"]`).classList.add("active")}function M(t,n,e){let c=[];for(let i=0;i<e;i++)c[i]=t.splice(0,n);return c}g(o);
//# sourceMappingURL=commonHelpers.js.map
