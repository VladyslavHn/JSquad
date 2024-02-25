import{b as i,l as g,r as b,a as p}from"./assets/api-b32898b7.js";import"./assets/vendor-0cb09735.js";const u=async e=>{const t=document.querySelector(".modal-wrapper"),r=document.querySelector(".modal-icons-list"),a=document.querySelector(".modal-window");try{const o=await i.getBookDescription(e);t.innerHTML="",r.innerHTML="";const d=`
      <img class="modal-img-book" src="${o.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${o.title}</p></li>
      <li><p class="modal-description-list-subtitle">${o.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${o.description}
        </p>
      </li>
      </ul>`;t.insertAdjacentHTML("beforeend",d);const l=`<li class="modal-icons-wrapper-1">
        <a class="modal-icon" href="${o.buy_links[0].url}"><img class='modal-icon' src="../img/amazon.png" alt="" width='62' height='19' 
       /></a>
      </li>
      <li class="modal-icons-wrapper-2">
        <a class="modal-icon" href="${o.buy_links[1].url}"><img class='modal-icon' src="../img/applebook.png" alt="" width='33' height='32'
       /></a>
      </li>`;r.insertAdjacentHTML("beforeend",l);let s=document.querySelector(".modal-btn-add");const m={_id:o._id,title:o.title,author:o.author,list_name:o.list_name,book_image:o.book_image,description:o.description,amazon_buy_link:o.buy_links[0].url,apple_buy_link:o.buy_links[1].url};if(g.isBookExsist(o._id)){let n=function(){g.removeBookFromFavorites(o._id),s.textContent="add to shopping list",s.classList.remove("modal-btn-remove"),s.removeEventListener("click",n),u(o._id)};s.textContent="remove from the shopping list";const c=`<p class="modal-text-congratulations">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".
    </p>`;a.insertAdjacentHTML("beforeend",c),s.addEventListener("click",n)}else{let n=function(){g.addBookToFavorites(m),s.textContent="remove from the shopping list",s.classList.add("modal-btn-remove"),s.removeEventListener("click",n),u(o._id)};s.textContent="add to shopping list",s.addEventListener("click",n);const c=document.querySelector(".modal-text-congratulations");c!==null&&c.remove()}}catch(o){console.log("Error fetching modal:",o)}},k=document.querySelector(".backdrop"),v=document.querySelector(".modal-close"),L=document.querySelector("body");v.addEventListener("click",()=>{k.classList.remove("is-open"),L.classList.remove("no-scroll")});function S(){k.classList.add("is-open"),L.classList.add("no-scroll")}function h(e,t){const r=document.querySelector(".bestsellers-container");r.innerHTML="",b(".bestsellers-container",t),r.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const a=document.querySelector(".book-category-list"),o=e.map(({author:d,book_image:l,title:s,_id:m})=>p({author:d,book_image:l,title:s,_id:m})).join("");a.innerHTML=o,a.addEventListener("click",B)}async function B(e){if(e.target.nodeName==="IMG"||e.target.nodeName==="H3"||e.target.nodeName==="P"){let t=e.target.closest(".book-category-item").dataset.id;u(t),S()}}async function _(){try{const e=await i.getBestSellers();f(e)}catch(e){console.error("Error fetching best sellers:",e)}}function f(e){const t=document.querySelector(".bestsellers-container");t.innerHTML="",b(".bestsellers-container","Best Sellers Books"),t.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const r=document.querySelector(".bestsellers-list"),a=e.map(({books:d,list_name:l})=>`<li class="bestsellers-item">
              <h2 class="bestsellers-category-title">${l}</h2>
              <ul class="bestsellers-books-list"> 
                ${d.map(({title:s,author:m,book_image:c,_id:n})=>p({title:s,author:m,book_image:c,_id:n})).join(`
`)}
              </ul>
              <button class="bestsellers-btn" type="button" data-category="${l}">See more</button>
            </li>`).join(`
`);r.insertAdjacentHTML("beforeend",a);const o=document.querySelector(".bestsellers-list");o.addEventListener("click",T),o.addEventListener("click",C)}async function C(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;let t=e.target.dataset.book;console.log(t),u(t)}async function T(e){if(e.target.nodeName!=="BUTTON")return;let t=e.target.dataset.category;const r=await i.getSelectedCategory(t);h(r,t)}const y={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function q(e){return e.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const e=await i.getCategoryList(),t=q(e);y.categoryList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();y.allCategory.addEventListener("click",async e=>{try{const t=await i.getBestSellers();f(t)}catch(t){console.log(t)}});y.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(a=>{a.classList.remove("category-active")}),e.target.classList.add("category-active");try{if(!e.target.classList.contains("all-category")){const a=await i.getSelectedCategory(t);h(a,t)}}catch(a){console.log(a)}}});_();
//# sourceMappingURL=commonHelpers2.js.map
