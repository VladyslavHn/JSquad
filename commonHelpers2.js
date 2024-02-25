import{r as y,b as p,a as i,l as m}from"./assets/api-0c3b6221.js";import"./assets/vendor-0cb09735.js";function k(t){const o=document.querySelector(".bestsellers-container");o.innerHTML="",y(".bestsellers-container","Best Sellers Books"),o.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const r=document.querySelector(".bestsellers-list"),a=t.map(({books:e,list_name:n})=>`
            <li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${n}</h2>
                <ul class="bestsellers-books-list"> 
                    ${e.map(({book_image:l,title:s,author:d})=>p({book_image:l,title:s,author:d})).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button data-category="${n}">See more</button>
            </li>`).join(`
`);r.insertAdjacentHTML("beforeend",a)}async function L(){try{const t=await i.getBestSellers();return k(t)}catch(t){console.error("Error fetching best sellers:",t)}}L();function h(t,o){const r=document.querySelector(".bestsellers-container");r.innerHTML="",y(".bestsellers-container",o),r.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const a=document.querySelector(".book-category-list"),e=t.map(({author:n,book_image:l,title:s})=>p({author:n,book_image:l,title:s})).join("");a.innerHTML=e}const g={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function f(t){return t.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const t=await i.getCategoryList(),o=f(t);g.categoryList.insertAdjacentHTML("beforeend",o)}catch(t){console.log(t)}})();g.allCategory.addEventListener("click",async t=>{try{const o=await i.getBestSellers();k(o)}catch(o){console.log(o)}});g.categoryList.addEventListener("click",async t=>{if(t.target.classList.contains("sidebar-category-item")){const o=t.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(a=>{a.classList.remove("category-active")}),t.target.classList.add("category-active");try{if(!t.target.classList.contains("all-category")){const a=await i.getSelectedCategory(o);h(a,o)}}catch(a){console.log(a)}}});const v="643282b2e85766588626a114",u=async t=>{const o=document.querySelector(".modal-wrapper"),r=document.querySelector(".modal-icons-list"),a=document.querySelector(".modal-window");try{const e=await i.getBookDescription(t);o.innerHTML="",r.innerHTML="";const n=`
      <img class="modal-img-book" src="${e.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${e.title}</p></li>
      <li><p class="modal-description-list-subtitle">${e.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${e.description}
        </p>
      </li>
      </ul>`;o.insertAdjacentHTML("beforeend",n),console.log(n);const l=`<li class="modal-icons-wrapper-1">
        <a class="modal-icon" href="${e.buy_links[0].url}">amazon</a>
      </li>
      <li class="modal-icons-wrapper-2">
        <a class="modal-icon" href="${e.buy_links[1].url}">apple</a>
      </li>`;r.insertAdjacentHTML("beforeend",l);let s=document.querySelector(".modal-btn-add");const d={_id:e._id,title:e.title,author:e.author,list_name:e.list_name,book_image:e.book_image,description:e.description,amazon_buy_link:e.buy_links[0].url,apple_buy_link:e.buy_links[1].url};if(console.log(e._id),m.isBookExsist(e._id)){let c=function(){m.removeBookFromFavorites(e._id),s.textContent="add to shopping list",s.classList.remove("modal-btn-remove"),s.removeEventListener("click",c),u(e._id)};s.textContent="remove from the shopping list";const b=`<p class="modal-text-congratulations">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".
    </p>`;a.insertAdjacentHTML("beforeend",b),s.addEventListener("click",c)}else{let c=function(){m.addBookToFavorites(d),s.textContent="remove from the shopping list",s.classList.add("modal-btn-remove"),s.removeEventListener("click",c),u(e._id)};s.textContent="add to shopping list",s.addEventListener("click",c),document.querySelector(".modal-text-congratulations").remove()}console.log(l)}catch(e){console.log("Error fetching modal:",e)}};u(v);const S=document.querySelector(".backdrop"),_=document.querySelector(".modal-close");_.addEventListener("click",()=>{S.classList.remove("is-open")});
//# sourceMappingURL=commonHelpers2.js.map
