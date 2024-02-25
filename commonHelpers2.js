import{r as p,b as d,l as u}from"./assets/api-c30e7f4e.js";import"./assets/vendor-0cb09735.js";function k({book_image:t,title:o,author:s}){return`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${t}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${o}</h3>
      <p class = "author-name"> ${s}</p>
    </div>
  </div>
</li>`}const h=document.querySelector(".bestsellers-container");function b(t){p(".bestsellers-container","Best Sellers Books");const o=t.map(({books:s,list_name:r})=>`<li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${r}</h2>
                <ul class="bestsellers-books-list"> 
                    ${s.map(({book_image:e,title:c,author:l})=>k({book_image:e,title:c,author:l})).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button data-category="${r}">See more</button>
            </li>`).join(`
`);h.insertAdjacentHTML("beforeend",o)}async function v(){try{const t=await d.getBestSellers();return b(t)}catch(t){console.error("Error fetching best sellers:",t)}}v();function L(t,o){const s=document.querySelector(".bestsellers-container");s.innerHTML="";const r='<h1 class = "bestsellers-title"></h1> <ul class = "book-category-list"></ul>';s.innerHTML=r;const e=document.querySelector(".book-category-list"),c=document.querySelector(".bestsellers-title");c.textContent=o;const l=t.map(({author:a,book_image:m,title:i})=>`<li class="book-category-item">
        <div class="book-category-card">
          <img class="book-category-image" src="${m}" alt="Book cover" width="180" />
          <div class="book-category-text">
            <h3 class = "book-title">
            ${i}</h3>
            <p class = "author-name"> ${a}</p>
          </div>
        </div>
      </li>`).join("");e.innerHTML=l}const y={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function f(t){return t.map(s=>`<li class='sidebar-category-item' data-source="${s.list_name}">${s.list_name}</li>`).join("")}(async()=>{try{const t=await d.getCategoryList(),o=f(t);y.categoryList.insertAdjacentHTML("beforeend",o)}catch(t){console.log(t)}})();y.allCategory.addEventListener("click",async()=>{try{b(".bestsellers-container","Best Sellers")}catch(t){console.log(t)}});y.categoryList.addEventListener("click",async t=>{if(t.target.classList.contains("sidebar-category-item")){const o=t.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(r=>{r.classList.remove("category-active")}),t.target.classList.add("category-active");try{if(!t.target.classList.contains("all-category")){const r=await d.getSelectedCategory(o);L(r,o)}}catch(r){console.log(r)}}});const S="643282b2e85766588626a114",g=async t=>{const o=document.querySelector(".modal-wrapper"),s=document.querySelector(".modal-icons-list"),r=document.querySelector(".modal-window");try{const e=await d.getBookDescription(t);o.innerHTML="",s.innerHTML="";const c=`
      <img class="modal-img-book" src="${e.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${e.title}</p></li>
      <li><p class="modal-description-list-subtitle">${e.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${e.description}
        </p>
      </li>
      </ul>`;o.insertAdjacentHTML("beforeend",c),console.log(c);const l=`<li class="modal-icons-wrapper-1">
        <a class="modal-icon" href="${e.buy_links[0].url}">amazon</a>
      </li>
      <li class="modal-icons-wrapper-2">
        <a class="modal-icon" href="${e.buy_links[1].url}">apple</a>
      </li>`;s.insertAdjacentHTML("beforeend",l);let a=document.querySelector(".modal-btn-add");const m={_id:e._id,title:e.title,author:e.author,list_name:e.list_name,book_image:e.book_image,description:e.description,amazon_buy_link:e.buy_links[0].url,apple_buy_link:e.buy_links[1].url};if(console.log(e._id),u.isBookExsist(e._id)){let n=function(){u.removeBookFromFavorites(e._id),a.textContent="add to shopping list",a.classList.remove("modal-btn-remove"),a.removeEventListener("click",n),g(e._id)};a.textContent="remove from the shopping list";const i=`<p class="modal-text-congratulations">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".
    </p>`;r.insertAdjacentHTML("beforeend",i),a.addEventListener("click",n)}else{let n=function(){u.addBookToFavorites(m),a.textContent="remove from the shopping list",a.classList.add("modal-btn-remove"),a.removeEventListener("click",n),g(e._id)};a.textContent="add to shopping list",a.addEventListener("click",n),document.querySelector(".modal-text-congratulations").remove()}console.log(l)}catch(e){console.log("Error fetching modal:",e)}};g(S);const _=document.querySelector(".backdrop"),B=document.querySelector(".modal-close");B.addEventListener("click",()=>{_.classList.remove("is-open")});
//# sourceMappingURL=commonHelpers2.js.map
