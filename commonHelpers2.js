import{r as b,b as p,a as i,l as g}from"./assets/api-d462885f.js";import"./assets/vendor-0cb09735.js";function k(e,o){const r=document.querySelector(".bestsellers-container");r.innerHTML="",b(".bestsellers-container",o),r.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const a=document.querySelector(".book-category-list"),t=e.map(({author:c,book_image:n,title:s,_id:d})=>p({author:c,book_image:n,title:s,_id:d})).join("");a.innerHTML=t}const f="643282b2e85766588626a114",m=async e=>{const o=document.querySelector(".modal-wrapper"),r=document.querySelector(".modal-icons-list"),a=document.querySelector(".modal-window");try{const t=await i.getBookDescription(e);o.innerHTML="",r.innerHTML="";const c=`
      <img class="modal-img-book" src="${t.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${t.title}</p></li>
      <li><p class="modal-description-list-subtitle">${t.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${t.description}
        </p>
      </li>
      </ul>`;o.insertAdjacentHTML("beforeend",c),console.log(c);const n=`<li class="modal-icons-wrapper-1">
        <a class="modal-icon" href="${t.buy_links[0].url}">amazon</a>
      </li>
      <li class="modal-icons-wrapper-2">
        <a class="modal-icon" href="${t.buy_links[1].url}">apple</a>
      </li>`;r.insertAdjacentHTML("beforeend",n);let s=document.querySelector(".modal-btn-add");const d={_id:t._id,title:t.title,author:t.author,list_name:t.list_name,book_image:t.book_image,description:t.description,amazon_buy_link:t.buy_links[0].url,apple_buy_link:t.buy_links[1].url};if(console.log(t._id),g.isBookExsist(t._id)){let l=function(){g.removeBookFromFavorites(t._id),s.textContent="add to shopping list",s.classList.remove("modal-btn-remove"),s.removeEventListener("click",l),m(t._id)};s.textContent="remove from the shopping list";const u=`<p class="modal-text-congratulations">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".
    </p>`;a.insertAdjacentHTML("beforeend",u),s.addEventListener("click",l)}else{let l=function(){g.addBookToFavorites(d),s.textContent="remove from the shopping list",s.classList.add("modal-btn-remove"),s.removeEventListener("click",l),m(t._id)};s.textContent="add to shopping list",s.addEventListener("click",l),document.querySelector(".modal-text-congratulations").remove()}console.log(n)}catch(t){console.log("Error fetching modal:",t)}};m(f);const h=document.querySelector(".backdrop"),v=document.querySelector(".modal-close");v.addEventListener("click",()=>{h.classList.remove("is-open")});function L(e){const o=document.querySelector(".bestsellers-container");o.innerHTML="",b(".bestsellers-container","Best Sellers Books"),o.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const r=document.querySelector(".bestsellers-list"),a=e.map(({books:c,list_name:n})=>`
            <li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${n}</h2>
                <ul class="bestsellers-books-list"> 
                    ${c.map(({title:s,author:d,book_image:u,_id:l})=>p({title:s,author:d,book_image:u,_id:l})).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button" data-category="${n}">See more</button>
            </li>`).join(`
`);r.insertAdjacentHTML("beforeend",a);const t=document.querySelector(".bestsellers-list");t.addEventListener("click",_),t.addEventListener("click",S)}async function S(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;let o=e.target.dataset.book;console.log(o),m(o)}async function _(e){if(e.target.nodeName!=="BUTTON")return;let o=e.target.dataset.category;const r=await i.getSelectedCategory(o);k(r,o)}async function B(){try{const e=await i.getBestSellers();L(e)}catch(e){console.error("Error fetching best sellers:",e)}}B();const y={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function T(e){return e.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const e=await i.getCategoryList(),o=T(e);y.categoryList.insertAdjacentHTML("beforeend",o)}catch(e){console.log(e)}})();y.allCategory.addEventListener("click",async e=>{try{const o=await i.getBestSellers();L(o)}catch(o){console.log(o)}});y.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const o=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(a=>{a.classList.remove("category-active")}),e.target.classList.add("category-active");try{if(!e.target.classList.contains("all-category")){const a=await i.getSelectedCategory(o);k(a,o)}}catch(a){console.log(a)}}});
//# sourceMappingURL=commonHelpers2.js.map
