import{r as w,l as v}from"./assets/api-cc0a6b59.js";import"./assets/vendor-8dea2054.js";const r=document.querySelector(".cart-list"),S=document.querySelector(".cart-empty-container"),i=document.querySelector(".pagination-list"),$=document.querySelector(".cart-buttons-container");w(".shoppinglist-title","Shopping List");function u(t){r.innerHTML="";const o=t.map(e=>`<li class="cart-item">
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
              <use href="../img/symbol-defs.svg#icon-delete-shoppinglist-tab" />
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
                <svg class="cart-item-amazon" width="32" height="11">
                  <use href="../img/symbol-defs.svg#icon-amazon" />
                </svg>
              </a>
              <a
                class="cart-items-link"
                target="_blank"
                href="${e.apple_buy_link}"
              >
                <svg class="cart-items-apple" width="16" height="16">
                  <use href="../img/symbol-defs.svg#icon-applebook" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>`).join("");r.insertAdjacentHTML("beforeend",o)}let n={books:[],currentPage:0,nextPage:0,prevPage:0,totalBooks:0,totalPages:0,booksPerPage:0,buttonsPerPage:0,totalButtonsGroups:0,pagesOnLastGroup:0};function P(t){i.removeEventListener("click",m),r.removeEventListener("click",g);const o=v.getAllBooks();if(r.innerHTML="",i.innerHTML="",t.totalBooks=o.length,t.booksPerPage=M(),t.totalPages=_(t.totalBooks,t.booksPerPage),t.books=E(o,t.booksPerPage,t.totalPages),t.buttonsPerPage=T(),t.totalButtonsGroups=Math.ceil(t.totalPages/t.buttonsPerPage),t.pagesOnLastGroup=t.totalPages%t.totalButtonsGroups,t.totalBooks>0){if(t.totalPages===1&&u(t.books[0]),t.totalPages>1){u(t.books[t.currentPage]),q(t,i),h(t.currentPage);const e=document.querySelector(".active");f(e),i.addEventListener("click",m)}r.addEventListener("click",g)}else S.classList.remove("is-hidden")}function q(t,o){if(o.innerHTML="",t.totalPages>1)for(let e=0;e<t.totalPages;e++)o.insertAdjacentHTML("beforeend",`<li><button data-page="${e}">${e+1}</button></li>`)}function m(t){const o=t.target.closest("button");if(o){const e=o.dataset.page;e&&(u(n.books[e]),h(e),n.currentPage=e,f(o))}}function f(t){const o=t.getBoundingClientRect(),e=$.getBoundingClientRect(),d=i.getBoundingClientRect(),c=e.width/2,k=o.width/2,L=o.left,B=d.left,y=parseInt(c)-parseInt(L)-parseInt(k)+parseInt(B);i.style.translate=`${y}px 0`}function g(t){if(t.target.closest(".cart-item-del-button")!==null){const o=t.target.closest(".cart-item-del-button").dataset.id;v.removeBookFromFavorites(o),parseInt(n.currentPage)===parseInt(n.totalPages)-1&&n.books[n.currentPage].length===1&&n.currentPage>=1&&(n.currentPage-=1),P(n)}}function b(){return window.innerWidth<767}function M(){return b()?4:3}function T(){return b()?2:3}function _(t,o){return Math.ceil(t/o)}function h(t){const o=document.querySelector(".active");o==null||o.classList.remove("active"),document.querySelector(`[data-page="${t}"]`).classList.add("active")}function E(t,o,e){let d=[];for(let c=0;c<e;c++)d[c]=t.splice(0,o);return d}P(n);const p=document.querySelector(".slider-line"),l=document.querySelector(".slider-button-scrolldown"),a=document.querySelector(".slider-button-scrollup");let s=0;l.addEventListener("click",async()=>{s+=150,s>170&&(s=0),p.style.bottom=s+"px",s===150&&(l.classList.remove("scrolldown-open"),l.classList.add("scrolldown-hidden"),a.classList.remove("scrolldown-hidden"),a.classList.add("scrolldown-open"))});a.addEventListener("click",async()=>{s+=150,s>170&&(s=0),p.style.bottom=s+"px",s===0&&(a.classList.remove("scrolldown-open"),a.classList.add("scrolldown-hidden"),l.classList.remove("scrolldown-hidden"),l.classList.add("scrolldown-open"))});
//# sourceMappingURL=commonHelpers.js.map
