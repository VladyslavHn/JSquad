import{r as b,b as p,a as c,l as u}from"./assets/api-58f6c376.js";import"./assets/vendor-0cb09735.js";function k(e,o){const r=document.querySelector(".bestsellers-container");r.innerHTML="",b(".bestsellers-container",o),r.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const a=document.querySelector(".book-category-list"),t=e.map(({author:l,book_image:n,title:s,_id:i})=>p({author:l,book_image:n,title:s,_id:i})).join("");a.innerHTML=t}function L(e){const o=document.querySelector(".bestsellers-container");o.innerHTML="",b(".bestsellers-container","Best Sellers Books"),o.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const r=document.querySelector(".bestsellers-list"),a=e.map(({books:l,list_name:n})=>`
            <li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${n}</h2>
                <ul class="bestsellers-books-list"> 
                    ${l.map(({book_image:s,title:i,author:m})=>p({book_image:s,title:i,author:m})).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button" data-category="${n}">See more</button>
            </li>`).join(`
`);r.insertAdjacentHTML("beforeend",a),document.querySelector(".bestsellers-list").addEventListener("click",h)}async function h(e){if(e.target.nodeName!=="BUTTON")return;let o=e.target.dataset.category;const r=await c.getSelectedCategory(o);k(r,o)}async function f(){try{const e=await c.getBestSellers();L(e)}catch(e){console.error("Error fetching best sellers:",e)}}f();const y={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function v(e){return e.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const e=await c.getCategoryList(),o=v(e);y.categoryList.insertAdjacentHTML("beforeend",o)}catch(e){console.log(e)}})();y.allCategory.addEventListener("click",async e=>{try{const o=await c.getBestSellers();L(o)}catch(o){console.log(o)}});y.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const o=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(a=>{a.classList.remove("category-active")}),e.target.classList.add("category-active");try{if(!e.target.classList.contains("all-category")){const a=await c.getSelectedCategory(o);k(a,o)}}catch(a){console.log(a)}}});const S="643282b2e85766588626a114",g=async e=>{const o=document.querySelector(".modal-wrapper"),r=document.querySelector(".modal-icons-list"),a=document.querySelector(".modal-window");try{const t=await c.getBookDescription(e);o.innerHTML="",r.innerHTML="";const l=`
      <img class="modal-img-book" src="${t.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${t.title}</p></li>
      <li><p class="modal-description-list-subtitle">${t.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${t.description}
        </p>
      </li>
      </ul>`;o.insertAdjacentHTML("beforeend",l),console.log(l);const n=`<li class="modal-icons-wrapper-1">
        <a class="modal-icon" href="${t.buy_links[0].url}">amazon</a>
      </li>
      <li class="modal-icons-wrapper-2">
        <a class="modal-icon" href="${t.buy_links[1].url}">apple</a>
      </li>`;r.insertAdjacentHTML("beforeend",n);let s=document.querySelector(".modal-btn-add");const i={_id:t._id,title:t.title,author:t.author,list_name:t.list_name,book_image:t.book_image,description:t.description,amazon_buy_link:t.buy_links[0].url,apple_buy_link:t.buy_links[1].url};if(console.log(t._id),u.isBookExsist(t._id)){let d=function(){u.removeBookFromFavorites(t._id),s.textContent="add to shopping list",s.classList.remove("modal-btn-remove"),s.removeEventListener("click",d),g(t._id)};s.textContent="remove from the shopping list";const m=`<p class="modal-text-congratulations">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".
    </p>`;a.insertAdjacentHTML("beforeend",m),s.addEventListener("click",d)}else{let d=function(){u.addBookToFavorites(i),s.textContent="remove from the shopping list",s.classList.add("modal-btn-remove"),s.removeEventListener("click",d),g(t._id)};s.textContent="add to shopping list",s.addEventListener("click",d),document.querySelector(".modal-text-congratulations").remove()}console.log(n)}catch(t){console.log("Error fetching modal:",t)}};g(S);const B=document.querySelector(".backdrop"),_=document.querySelector(".modal-close");_.addEventListener("click",()=>{B.classList.remove("is-open")});
//# sourceMappingURL=commonHelpers2.js.map
