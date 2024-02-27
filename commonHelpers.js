import{r as h,l as b}from"./assets/api-9c56638a.js";import"./assets/vendor-8dea2054.js";const r=document.querySelector(".cart-list"),k=document.querySelector(".cart-empty-container"),d=document.querySelector(".pagination-list");h(".shoppinglist-title","Shopping List");function u(t){r.innerHTML="";const e=t.map(o=>`<li class="cart-item">
      <img
        class="cart-item-img"
        src="${o.book_image}"
        alt="book image"
        width="100"
        height="142"
      />
      <div class="cart-item-content">
        <div class="cart-item-content-top">
          <div class="cart-item-content-top-left">
            <h3 class="cart-item-title">${o.title}</h3>
            <p class="cart-item-category">${o.list_name}</p>
          </div>
          <button data-id="${o._id}" class="cart-item-del-button">
            <svg class="cart-item-del-button-icon" width="12" height="12">
              <use href="../img/symbol-defs.svg#icon-delete-shoppinglist-tab" />
            </svg>
          </button>
        </div>
        <div class="cart-item-content-middle">
          <p class="cart-item-content-desc">
            ${o.description}
          </p>
          <div class="cart-item-content-bottom">
            <p class="cart-item-author">${o.author}</p>
            <div class="cart-items-links">
              <a
                class="cart-items-link"
                target="_blank"
                href="${o.amazon_buy_link}"
              >
                <svg class="cart-item-amazon" width="32" height="11">
                  <use href="../img/symbol-defs.svg#icon-amazon" />
                </svg>
              </a>
              <a
                class="cart-items-link"
                target="_blank"
                href="${o.apple_buy_link}"
              >
                <svg class="cart-items-apple" width="16" height="16">
                  <use href="../img/symbol-defs.svg#icon-applebook" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>`).join("");r.insertAdjacentHTML("beforeend",e)}let s={books:[],currentPage:0,nextPage:0,prevPage:0,totalBooks:0,totalPages:0,booksPerPage:0,buttonsPerPage:0,totalButtonsGroups:0,pagesOnLastGroup:0};function v(t){d.removeEventListener("click",m),r.removeEventListener("click",g);const e=b.getAllBooks();r.innerHTML="",d.innerHTML="",t.totalBooks=e.length,t.booksPerPage=y(),t.totalPages=w(t.totalBooks,t.booksPerPage),t.books=S(e,t.booksPerPage,t.totalPages),t.buttonsPerPage=B(),t.totalButtonsGroups=Math.ceil(t.totalPages/t.buttonsPerPage),t.pagesOnLastGroup=t.totalPages%t.totalButtonsGroups,t.totalBooks>0?(t.totalPages===1&&u(t.books[0]),t.totalPages>1&&(u(t.books[t.currentPage]),L(t,d),p(t.currentPage),d.addEventListener("click",m)),r.addEventListener("click",g)):k.classList.remove("is-hidden")}function L(t,e){if(e.innerHTML="",t.totalPages>1){e.insertAdjacentHTML("beforeend",`<button class="pagination-buttons-first"><<</button>
      <button class="pagination-buttons-prev"><</button>
      <button class="pagination-buttons-next">></button>
      <button class="pagination-buttons-last">>></button>`),document.querySelector(".pagination-buttons-prev").insertAdjacentHTML("afterend",'<ul class="pagination-buttons-numbers"></ul>');const a=document.querySelector(".pagination-buttons-numbers");parseInt(t.currentPage)/parseInt(t.buttonsPerPage);for(let i=0;i<t.totalPages;i++)a.insertAdjacentHTML("beforeend",`<li><button data-page="${i}">${i+1}</button></li>`)}}function m(t){const e=t.target.closest("button");if(e){const o=e.dataset.page;o&&(u(s.books[o]),p(o),s.currentPage=o)}}function g(t){if(t.target.closest(".cart-item-del-button")!==null){const e=t.target.closest(".cart-item-del-button").dataset.id;b.removeBookFromFavorites(e),parseInt(s.currentPage)===parseInt(s.totalPages)-1&&s.books[s.currentPage].length===1&&s.currentPage>=1&&(s.currentPage-=1),v(s)}}function P(){return window.innerWidth<767}function y(){return P()?4:3}function B(){return P()?2:3}function w(t,e){return Math.ceil(t/e)}function p(t){const e=document.querySelector(".active");e==null||e.classList.remove("active"),document.querySelector(`[data-page="${t}"]`).classList.add("active")}function S(t,e,o){let a=[];for(let i=0;i<o;i++)a[i]=t.splice(0,e);return a}v(s);const f=document.querySelector(".slider-line"),c=document.querySelector(".slider-button-scrolldown"),l=document.querySelector(".slider-button-scrollup");let n=0;c.addEventListener("click",async()=>{n+=150,n>170&&(n=0),f.style.bottom=n+"px",n===150&&(c.classList.remove("scrolldown-open"),c.classList.add("scrolldown-hidden"),l.classList.remove("scrolldown-hidden"),l.classList.add("scrolldown-open"))});l.addEventListener("click",async()=>{n+=150,n>170&&(n=0),f.style.bottom=n+"px",n===0&&(l.classList.remove("scrolldown-open"),l.classList.add("scrolldown-hidden"),c.classList.remove("scrolldown-hidden"),c.classList.add("scrolldown-open"))});
//# sourceMappingURL=commonHelpers.js.map
