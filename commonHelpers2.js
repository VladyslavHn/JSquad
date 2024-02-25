import{b as d,l as u}from"./assets/api-12d4008f.js";import"./assets/vendor-0cb09735.js";const y=async()=>{const t=document.querySelector(".bestsellers-list");try{const r=(await d.getBestSellers()).map(({books:a,list_name:e})=>`<li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${e}</h2>
                <ul class="bestsellers-books-list"> 
                    ${a.map(({book_image:l,title:c,author:o})=>`<li class="bestsellers-books-item">
                            <img class="bestsellers-books-img" src='${l}' alt="" />
                            <h3 class="bestsellers-book-title">${c}</h3>
                            <p class="bestsellers-book-author">${o}</p>
                        </li>`).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button">See more</button>
            </li>`).join(`
`);t.insertAdjacentHTML("beforeend",r)}catch(s){console.error("Error fetching best sellers:",s)}};y();function p(t,s){const r=document.querySelector(".bestsellers-container");r.innerHTML="";const a='<h1 class = "bestsellers-title"></h1> <ul class = "book-category-list"></ul>';r.innerHTML=a;const e=document.querySelector(".book-category-list"),l=document.querySelector(".bestsellers-title");l.textContent=s;const c=t.map(({author:o,book_image:m,title:i})=>`<li class="book-category-item">
        <div class="book-category-card">
          <img class="book-category-image" src="${m}" alt="Book cover" width="180" />
          <div class="book-category-text">
            <h3 class = "book-title">
            ${i}</h3>
            <p class = "author-name"> ${o}</p>
          </div>
        </div>
      </li>`).join("");e.innerHTML=c}const b={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function k(t){return t.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const t=await d.getCategoryList(),s=k(t);b.categoryList.insertAdjacentHTML("beforeend",s)}catch(t){console.log(t)}})();b.allCategory.addEventListener("click",async()=>{try{y(".bestsellers-container","Best Sellers")}catch(t){console.log(t)}});b.categoryList.addEventListener("click",async t=>{if(t.target.classList.contains("sidebar-category-item")){const s=t.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(a=>{a.classList.remove("category-active")}),t.target.classList.add("category-active");try{if(!t.target.classList.contains("all-category")){const a=await d.getSelectedCategory(s);p(a,s)}}catch(a){console.log(a)}}});const h="643282b2e85766588626a114",g=async t=>{const s=document.querySelector(".modal-wrapper"),r=document.querySelector(".modal-icons-list"),a=document.querySelector(".modal-window");try{const e=await d.getBookDescription(t);s.innerHTML="",r.innerHTML="";const l=`
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
      </li>`;r.insertAdjacentHTML("beforeend",c);let o=document.querySelector(".modal-btn-add");const m={_id:e._id,title:e.title,author:e.author,list_name:e.list_name,book_image:e.book_image,description:e.description,amazon_buy_link:e.buy_links[0].url,apple_buy_link:e.buy_links[1].url};if(console.log(e._id),u.isBookExsist(e._id)){let n=function(){u.removeBookFromFavorites(e._id),o.textContent="add to shopping list",o.classList.remove("modal-btn-remove"),o.removeEventListener("click",n),g(e._id)};o.textContent="remove from the shopping list";const i=`<p class="modal-text-congratulations">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".
    </p>`;a.insertAdjacentHTML("beforeend",i),o.addEventListener("click",n)}else{let n=function(){u.addBookToFavorites(m),o.textContent="remove from the shopping list",o.classList.add("modal-btn-remove"),o.removeEventListener("click",n),g(e._id)};o.textContent="add to shopping list",o.addEventListener("click",n),document.querySelector(".modal-text-congratulations").remove()}console.log(c)}catch(e){console.log("Error fetching modal:",e)}};g(h);const L=document.querySelector(".backdrop"),v=document.querySelector(".modal-close");v.addEventListener("click",()=>{L.classList.remove("is-open")});
//# sourceMappingURL=commonHelpers2.js.map
