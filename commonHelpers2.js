import{b as i,l as d}from"./assets/api-5f30bd1a.js";import"./assets/vendor-0cb09735.js";const b=async()=>{const t=document.querySelector(".bestsellers-list");try{const a=(await i.getBestSellers()).map(({books:r,list_name:e})=>`<li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${e}</h2>
                <ul class="bestsellers-books-list"> 
                    ${r.map(({book_image:l,title:c,author:o})=>`<li class="bestsellers-books-item">
                            <img class="bestsellers-books-img" src='${l}' alt="" />
                            <h3 class="bestsellers-book-title">${c}</h3>
                            <p class="bestsellers-book-author">${o}</p>
                        </li>`).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button">See more</button>
            </li>`).join(`
`);t.insertAdjacentHTML("beforeend",a)}catch(s){console.error("Error fetching best sellers:",s)}};b();function p(t,s){const a=document.querySelector(".bestsellers-list"),r=document.querySelector(".bestsellers-title");r.textContent=s;const e=t.map(({author:l,book_image:c,title:o})=>`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${c}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${o}</h3>
      <p class = "author-name"> ${l}</p>
    </div>
  </div>
</li>`).join("");a.innerHTML=e}const u={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function k(t){return t.map(a=>`<li class='sidebar-category-item' data-source="${a.list_name}">${a.list_name}</li>`).join("")}(async()=>{try{const t=await i.getCategoryList(),s=k(t);u.categoryList.insertAdjacentHTML("beforeend",s)}catch(t){console.log(t)}})();u.allCategory.addEventListener("click",async()=>{try{b(".bestsellers-container","Best Sellers")}catch(t){console.log(t)}});u.categoryList.addEventListener("click",async t=>{if(t.target.classList.contains("sidebar-category-item")){const s=t.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(r=>{r.classList.remove("category-active")}),t.target.classList.add("category-active");try{if(!t.target.classList.contains("all-category")){const r=await i.getSelectedCategory(s);p(r,s)}}catch(r){console.log(r)}}});const h="643282b2e85766588626a114",m=async t=>{const s=document.querySelector(".modal-wrapper"),a=document.querySelector(".modal-icons-list"),r=document.querySelector(".modal-window");try{const e=await i.getBookDescription(t);s.innerHTML="",a.innerHTML="";const l=`
      <img class="modal-img-book" src="${e.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${e.title}</p></li>
      <li><p class="modal-description-list-subtitle">${e.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${e.description}
        </p>
      </li>
      </ul>`;s.insertAdjacentHTML("beforeend",l),console.log(l);const c=`<li class="modal-icons-wrapper-1">
        <a class="modal-icon" href="${e.buy_links[0].url}">amazon</a>
      </li>
      <li class="modal-icons-wrapper-2">
        <a class="modal-icon" href="${e.buy_links[1].url}">apple</a>
      </li>`;a.insertAdjacentHTML("beforeend",c);let o=document.querySelector(".modal-btn-add");const y={_id:e._id,title:e.title,author:e.author,list_name:e.list_name,book_image:e.book_image,description:e.description,amazon_buy_link:e.buy_links[0].url,apple_buy_link:e.buy_links[1].url};if(console.log(e._id),d.isBookExsist(e._id)){let n=function(){d.removeBookFromFavorites(e._id),o.textContent="add to shopping list",o.classList.remove("modal-btn-remove"),o.removeEventListener("click",n),m(e._id)};o.textContent="remove from the shopping list";const g=`<p class="modal-text-congratulations">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".
    </p>`;r.insertAdjacentHTML("beforeend",g),o.addEventListener("click",n)}else{let n=function(){d.addBookToFavorites(y),o.textContent="remove from the shopping list",o.classList.add("modal-btn-remove"),o.removeEventListener("click",n),m(e._id)};o.textContent="add to shopping list",o.addEventListener("click",n),document.querySelector(".modal-text-congratulations").remove()}console.log(c)}catch(e){console.log("Error fetching modal:",e)}};m(h);const v=document.querySelector(".backdrop"),L=document.querySelector(".modal-close");L.addEventListener("click",()=>{v.classList.remove("is-open")});
//# sourceMappingURL=commonHelpers2.js.map
