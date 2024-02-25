import{r as p,b as k,a as d,l as u}from"./assets/api-f8d4a1ba.js";import"./assets/vendor-0cb09735.js";function b(t){const o=document.querySelector(".bestsellers-container");o.innerHTML="",p(".bestsellers-container","Best Sellers Books"),o.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const r=document.querySelector(".bestsellers-list"),a=t.map(({books:e,list_name:l})=>`
            <li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${l}</h2>
                <ul class="bestsellers-books-list"> 
                    ${e.map(({book_image:c,title:s,author:n})=>k({book_image:c,title:s,author:n})).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button data-category="${l}">See more</button>
            </li>`).join(`
`);r.insertAdjacentHTML("beforeend",a)}async function h(){try{const t=await d.getBestSellers();return b(t)}catch(t){console.error("Error fetching best sellers:",t)}}h();function L(t,o){const r=document.querySelector(".bestsellers-container");r.innerHTML="";const a='<h1 class = "bestsellers-title"></h1> <ul class = "book-category-list"></ul>';r.innerHTML=a;const e=document.querySelector(".book-category-list"),l=document.querySelector(".bestsellers-title");l.textContent=o;const c=t.map(({author:s,book_image:n,title:m})=>`<li class="book-category-item">
        <div class="book-category-card">
          <img class="book-category-image" src="${n}" alt="Book cover" width="180" />
          <div class="book-category-text">
            <h3 class = "book-title">
            ${m}</h3>
            <p class = "author-name"> ${s}</p>
          </div>
        </div>
      </li>`).join("");e.innerHTML=c}const y={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function v(t){return t.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const t=await d.getCategoryList(),o=v(t);y.categoryList.insertAdjacentHTML("beforeend",o)}catch(t){console.log(t)}})();y.allCategory.addEventListener("click",async t=>{try{const o=await d.getBestSellers();b(o)}catch(o){console.log(o)}});y.categoryList.addEventListener("click",async t=>{if(t.target.classList.contains("sidebar-category-item")){const o=t.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(a=>{a.classList.remove("category-active")}),t.target.classList.add("category-active");try{if(!t.target.classList.contains("all-category")){const a=await d.getSelectedCategory(o);L(a,o)}}catch(a){console.log(a)}}});const f="643282b2e85766588626a114",g=async t=>{const o=document.querySelector(".modal-wrapper"),r=document.querySelector(".modal-icons-list"),a=document.querySelector(".modal-window");try{const e=await d.getBookDescription(t);o.innerHTML="",r.innerHTML="";const l=`
      <img class="modal-img-book" src="${e.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${e.title}</p></li>
      <li><p class="modal-description-list-subtitle">${e.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${e.description}
        </p>
      </li>
      </ul>`;o.insertAdjacentHTML("beforeend",l),console.log(l);const c=`<li class="modal-icons-wrapper-1">
        <a class="modal-icon" href="${e.buy_links[0].url}">amazon</a>
      </li>
      <li class="modal-icons-wrapper-2">
        <a class="modal-icon" href="${e.buy_links[1].url}">apple</a>
      </li>`;r.insertAdjacentHTML("beforeend",c);let s=document.querySelector(".modal-btn-add");const n={_id:e._id,title:e.title,author:e.author,list_name:e.list_name,book_image:e.book_image,description:e.description,amazon_buy_link:e.buy_links[0].url,apple_buy_link:e.buy_links[1].url};if(console.log(e._id),u.isBookExsist(e._id)){let i=function(){u.removeBookFromFavorites(e._id),s.textContent="add to shopping list",s.classList.remove("modal-btn-remove"),s.removeEventListener("click",i),g(e._id)};s.textContent="remove from the shopping list";const m=`<p class="modal-text-congratulations">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".
    </p>`;a.insertAdjacentHTML("beforeend",m),s.addEventListener("click",i)}else{let i=function(){u.addBookToFavorites(n),s.textContent="remove from the shopping list",s.classList.add("modal-btn-remove"),s.removeEventListener("click",i),g(e._id)};s.textContent="add to shopping list",s.addEventListener("click",i),document.querySelector(".modal-text-congratulations").remove()}console.log(c)}catch(e){console.log("Error fetching modal:",e)}};g(f);const S=document.querySelector(".backdrop"),_=document.querySelector(".modal-close");_.addEventListener("click",()=>{S.classList.remove("is-open")});
//# sourceMappingURL=commonHelpers2.js.map
