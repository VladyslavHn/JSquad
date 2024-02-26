import{r as k,l as b}from"./assets/api-29202e23.js";import"./assets/vendor-db25513e.js";(function(){const s=document.querySelector(".cart-list");document.querySelector(".cart-empty-container");const c=document.querySelector(".pagination-list");k(".shoppinglist-title","Shopping List");function a(t){s.innerHTML="";const e=t.map(n=>`<li class="cart-item">
      <img
        class="cart-item-img"
        src="${n.book_image}"
        alt="book image"
        width="100"
        height="142"
      />
      <div class="cart-item-content">
        <div class="cart-item-content-top">
          <div class="cart-item-content-top-left">
            <h3 class="cart-item-title">${n.title}</h3>
            <p class="cart-item-category">${n.list_name}</p>
          </div>
          <button data-id="${n._id}" class="cart-item-del-button">
            <svg class="cart-item-del-button-icon" width="12" height="12">
              <use href="../img/symbol-defs.svg#icon-delete-shoppinglist-tab" />
            </svg>
          </button>
        </div>
        <div class="cart-item-content-middle">
          <p class="cart-item-content-desc">
            ${n.description}
          </p>
          <div class="cart-item-content-bottom">
            <p class="cart-item-author">${n.author}</p>
            <div class="cart-items-links">
              <a
                class="cart-items-link"
                target="_blank"
                href="${n.amazon_buy_link}"
              >
                <svg class="cart-item-amazon" width="32" height="11">
                  <use href="../img/symbol-defs.svg#icon-amazon" />
                </svg>
              </a>
              <a
                class="cart-items-link"
                target="_blank"
                href="${n.apple_buy_link}"
              >
                <svg class="cart-items-apple" width="16" height="16">
                  <use href="../img/symbol-defs.svg#icon-applebook" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>`).join("");s.insertAdjacentHTML("beforeend",e)}let o={books:[],currentPage:1,nextPage:0,prevPage:0,totalBooks:0,totalPages:0,booksPerPage:0};function l(t){P();try{c.removeEventListener("click",u),s.removeEventListener("click",d);const e=b.getAllBooks();console.log(s),s.innerHTML="",c.innerHTML="",t.totalBooks=e.length,t.booksPerPage=v(),t.totalPages=p(t.totalBooks,t.booksPerPage),t.books=f(e,t.booksPerPage,t.totalPages),console.log(t),t.totalPages===1&&a(t.books[0]),t.totalPages>1&&(a(t.books[t.currentPage-1]),h(t.totalPages,c),g(t.currentPage),c.addEventListener("click",u)),s.addEventListener("click",d)}catch{console.log("Error")}finally{L()}}function u(t){const e=t.target.closest("button");if(e){const n=e.dataset.page;n&&(a(o.books[n-1]),g(n),o.currentPage=n,console.log("premuto pulsante: ",o))}}function d(t){if(t.target.closest(".cart-item-del-button")!==null){const e=t.target.closest(".cart-item-del-button").dataset.id;b.removeBookFromFavorites(e),console.log("dentro listener: ",o.books[o.currentPage-1]),console.log("current page: ",o.currentPage),console.log("totale page:",o.totalPages),console.log(o.books[o.currentPage-1].length),parseInt(o.currentPage)===o.totalPages&&o.books[o.currentPage-1].length===1&&(console.log("eliminato ultimo libro della pagina "),o.currentPage-=1,console.log(o.currentPage)),l(o)}}function v(){return window.innerWidth<767?4:3}function p(t,e){return Math.ceil(t/e)}function h(t,e){if(e.innerHTML="",t>1){e.insertAdjacentHTML("beforeend",`<button class="pagination-buttons-first"><<</button>
      <button class="pagination-buttons-prev"><</button>
      <button class="pagination-buttons-next">></button>
      <button class="pagination-buttons-last">>></button>`),document.querySelector(".pagination-buttons-prev").insertAdjacentHTML("afterend",'<ul class="pagination-buttons-numbers"></ul>');const r=document.querySelector(".pagination-buttons-numbers");for(let i=0;i<t;i++){const m=i+1;r.insertAdjacentHTML("beforeend",`<li><button data-page="${m}">${m}</button></li>`)}}}function g(t){console.log("make active button with page ",t);const e=document.querySelector(".active");e==null||e.classList.remove("active"),document.querySelector(`[data-page="${t}"]`).classList.add("active")}function f(t,e,n){let r=[];for(let i=0;i<n;i++)r[i]=t.splice(0,e);return r}l(o)})();function P(){document.querySelector(".loader-container").classList.remove("is-hidden")}function L(){const s=document.querySelector(".loader-container");setTimeout(()=>s.classList.add("is-hidden"),600)}
//# sourceMappingURL=commonHelpers.js.map
