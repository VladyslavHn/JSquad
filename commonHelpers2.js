import{b as i,l as g,r as b,a as p}from"./assets/api-4a9df01b.js";import"./assets/vendor-0cb09735.js";const u=async e=>{const o=document.querySelector(".modal-wrapper"),r=document.querySelector(".modal-icons-list"),a=document.querySelector(".modal-window");try{const t=await i.getBookDescription(e);o.innerHTML="",r.innerHTML="";const d=`
      <img class="modal-img-book" src="${t.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${t.title}</p></li>
      <li><p class="modal-description-list-subtitle">${t.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${t.description}
        </p>
      </li>
      </ul>`;o.insertAdjacentHTML("beforeend",d);const c=`<li class="modal-icons-wrapper-1">
        <a class="modal-icon" href="${t.buy_links[0].url}"><img class='modal-icon' src="../img/amazon.png" alt="" width='62' height='19' 
       /></a>
      </li>
      <li class="modal-icons-wrapper-2">
        <a class="modal-icon" href="${t.buy_links[1].url}"><img class='modal-icon' src="../img/applebook.png" alt="" width='33' height='32'
       /></a>
      </li>`;r.insertAdjacentHTML("beforeend",c);let s=document.querySelector(".modal-btn-add");const m={_id:t._id,title:t.title,author:t.author,list_name:t.list_name,book_image:t.book_image,description:t.description,amazon_buy_link:t.buy_links[0].url,apple_buy_link:t.buy_links[1].url};if(g.isBookExsist(t._id)){let n=function(){g.removeBookFromFavorites(t._id),s.textContent="add to shopping list",s.classList.remove("modal-btn-remove"),s.removeEventListener("click",n),u(t._id)};s.textContent="remove from the shopping list";const l=`<p class="modal-text-congratulations">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".
    </p>`;a.insertAdjacentHTML("beforeend",l),s.addEventListener("click",n)}else{let n=function(){g.addBookToFavorites(m),s.textContent="remove from the shopping list",s.classList.add("modal-btn-remove"),s.removeEventListener("click",n),u(t._id)};s.textContent="add to shopping list",s.addEventListener("click",n);const l=document.querySelector(".modal-text-congratulations");l!==null&&l.remove()}}catch(t){console.log("Error fetching modal:",t)}},k=document.querySelector(".backdrop"),S=document.querySelector(".modal-close"),L=document.querySelector("body");S.addEventListener("click",()=>{k.classList.remove("is-open"),L.classList.remove("no-scroll")});function h(){k.classList.add("is-open"),L.classList.add("no-scroll")}function f(e,o){const r=document.querySelector(".bestsellers-container");r.innerHTML="",b(".bestsellers-container",o),r.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const a=document.querySelector(".book-category-list"),t=e.map(({author:d,book_image:c,title:s,_id:m})=>p({author:d,book_image:c,title:s,_id:m})).join("");a.innerHTML=t,a.addEventListener("click",w)}async function w(e){if(e.target.nodeName==="IMG"||e.target.nodeName==="H3"||e.target.nodeName==="P"){let o=e.target.closest(".book-category-item").dataset.id;u(o),h()}}async function B(){try{const e=await i.getBestSellers();v(e)}catch(e){console.error("Error fetching best sellers:",e)}}function v(e){const o=document.querySelector(".bestsellers-container");o.innerHTML="",b(".bestsellers-container","Best Sellers Books"),o.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const r=document.querySelector(".bestsellers-list"),a=e.map(({books:d,list_name:c})=>`<li class="bestsellers-item">
              <h2 class="bestsellers-category-title">${c}</h2>
              <ul class="bestsellers-books-list"> 
                ${d.map(({title:s,author:m,book_image:l,_id:n})=>p({title:s,author:m,book_image:l,_id:n})).join(`
`)}
              </ul>
              <button class="bestsellers-btn" type="button" data-category="${c}">See more</button>
            </li>`).join(`
`);r.insertAdjacentHTML("beforeend",a);const t=document.querySelector(".bestsellers-list");t.addEventListener("click",C),t.addEventListener("click",_)}async function _(e){if(e.preventDefault(),e.target.nodeName==="IMG"||e.target.nodeName==="H3"||e.target.nodeName==="P"){let o=e.target.closest(".book-category-item").dataset.id;u(o),h()}}async function C(e){if(e.target.nodeName!=="BUTTON")return;let o=e.target.dataset.category;const r=await i.getSelectedCategory(o);f(r,o)}const y={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function T(e){return e.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const e=await i.getCategoryList(),o=T(e);y.categoryList.insertAdjacentHTML("beforeend",o)}catch(e){console.log(e)}})();y.allCategory.addEventListener("click",async e=>{try{const o=await i.getBestSellers();v(o)}catch(o){console.log(o)}});y.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const o=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(a=>{a.classList.remove("category-active")}),e.target.classList.add("category-active");try{if(!e.target.classList.contains("all-category")){const a=await i.getSelectedCategory(o);f(a,o)}}catch(a){console.log(a)}}});B();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".scroll-up");e.classList.remove("show"),window.addEventListener("scroll",function(){window.scrollY>650?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=commonHelpers2.js.map
