import{b as d,l as k,r as b,a as v}from"./assets/api-c40134a0.js";import"./assets/vendor-8dea2054.js";const S=document.querySelector(".backdrop"),L=document.querySelector(".modal-wrapper"),f=document.querySelector(".modal-icons-list"),B=document.querySelector("body"),i=document.querySelector(".modal-btn-add"),m=document.querySelector(".congrats"),w=document.querySelector(".modal-close"),n={_id:"",title:"",author:"",list_name:"",book_image:"",description:"",amazon_buy_link:"",apple_buy_link:""};async function E(e){try{L.innerHTML="",f.innerHTML="";const t=await d.getBookDescription(e),o=j(t);L.insertAdjacentHTML("beforeend",o);const r=$(t);f.insertAdjacentHTML("beforeend",r),n._id=t._id,n.title=t.title,n.author=t.author,n.list_name=t.list_name,n.book_image=t.book_image,n.description=t.description,n.amazon_buy_link=t.buy_links[0].url,n.apple_buy_link=t.buy_links[1].url,p(i,e),i.addEventListener("click",T),w.addEventListener("click",_)}catch(t){console.log("Error fetching modal:",t)}}function C(e){S.classList.add("is-open"),B.classList.add("no-scroll"),E(e)}function j(e){return`
      <img class="modal-img-book" src="${e.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${e.title}</p></li>
      <li><p class="modal-description-list-subtitle">${e.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${e.description}
        </p>
      </li>
      </ul>`}function $(e){return`<li>
        <a class="modal-icon amazon" href="${e.buy_links[0].url}"><img class='modal-icon' src="./img/amazon.png" alt="" width='62' height='19' 
       /></a>
      </li>
      <li>
        <a class="modal-icon" href="${e.buy_links[1].url}"><img class='modal-icon' src="./img/applebook.png" alt="" width='33' height='32'
       /></a>
      </li>`}function p(e,t){k.isBookExsist(t)?(e.textContent="remove from the shopping list",e.classList.add("modal-btn-remove"),m.classList.add("modal-text-congratulations")):(e.textContent="add to shopping list",e.classList.remove("modal-btn-remove"),m.classList.remove("modal-text-congratulations"))}function T(e){i.textContent==="add to shopping list"?(x(n),p(i,n._id)):(A(n),p(i,n._id))}function _(){S.classList.remove("is-open"),B.classList.remove("no-scroll"),w.removeEventListener("click",_),i.removeEventListener("click",T)}function x(e){k.addBookToFavorites(e),m.textContent='Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'}function A(e){k.removeBookFromFavorites(e),m.textContent=""}function q(e,t){if(u(),e.length===0)try{const o=document.querySelector(".bestsellers-container");o.innerHTML="",b(".bestsellers-container",t),o.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const r=document.querySelector(".book-category-list"),s='<p class = "category-text-empty">Sorry, no books were found for the given category</p>';r.innerHTML=s}catch{console.log("Error fetching modal:",error)}finally{c()}else try{const o=document.querySelector(".bestsellers-container");o.innerHTML="",b(".bestsellers-container",t),o.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const r=document.querySelector(".book-category-list"),s=e.map(({author:l,book_image:a,title:g,_id:y})=>v({author:l,book_image:a,title:g,_id:y})).join("");r.innerHTML=s,r.addEventListener("click",I)}catch{console.log("Error fetching modal:",error)}finally{c()}}async function I(e){if(e.target.nodeName==="IMG"||e.target.nodeName==="H3"||e.target.nodeName==="P"){let t=e.target.closest(".book-category-item").dataset.id;C(t)}}async function N(){try{u();const e=await d.getBestSellers();M(e),c()}catch(e){console.error("Error fetching best sellers:",e)}}function M(e){const t=document.querySelector(".bestsellers-container");t.innerHTML="",b(".bestsellers-container","Best Sellers Books"),t.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const o=document.querySelector(".bestsellers-list"),r=e.map(({books:s,list_name:l})=>`<li class="bestsellers-item">
      <h2 class="bestsellers-category-title">${l}</h2>
      <ul class="bestsellers-books-list">${s.map(({title:a,author:g,book_image:y,_id:H})=>s.length===0?'<p class="category-empty">Sorry, no books were found for the given category!</p>':v({title:a,author:g,book_image:y,_id:H})).join(`
`)}
        </ul>
        <button class="bestsellers-btn" type="button" data-category="${l}">See more</button>
      </li>`).join(`
`);o.insertAdjacentHTML("beforeend",r),o.addEventListener("click",z),o.addEventListener("click",P)}async function P(e){if(e.preventDefault(),e.target.nodeName==="IMG"||e.target.nodeName==="H3"||e.target.nodeName==="P"){let t=e.target.closest(".book-category-item").dataset.id;C(t)}}async function z(e){try{if(e.target.nodeName!=="BUTTON")return;let t=e.target.dataset.category;const o=document.querySelector(".sidebar-category-item"),r=document.querySelectorAll(".sidebar-category-item");window.scrollTo({top:0,behavior:"smooth"});const s=document.querySelector(".bestsellers-container");s.innerHTML="",u();const l=await d.getSelectedCategory(t);q(l,t),c(),r.forEach(a=>{a.dataset.source===t&&(o.classList.remove("category-active"),a.classList.add("category-active"),a.scrollIntoView({behavior:"instant",block:"center",inline:"nearest"}))}),window.scrollTo({top:0,behavior:"smooth"})}catch(t){console.log("Error fetching modal:",t)}}const h={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function D(e){return e.sort((o,r)=>o.list_name.localeCompare(r.list_name)),e.map(o=>`<li class='sidebar-category-item' data-source="${o.list_name}">${o.list_name}</li>`).join("")}(async()=>{try{const e=document.querySelector(".bestsellers-container");e.innerHTML="",u();const t=await d.getCategoryList(),o=D(t);h.categoryList.insertAdjacentHTML("beforeend",o),c()}catch(e){console.log(e)}})();h.allCategory.addEventListener("click",async e=>{try{const t=document.querySelector(".bestsellers-container");t.innerHTML="",u();const o=await d.getBestSellers();M(o),c()}catch(t){console.log(t)}});h.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(s=>{s.classList.remove("category-active")}),e.target.classList.add("category-active"),window.scrollTo({top:0,behavior:"smooth"});const r=document.querySelector(".bestsellers-container");r.innerHTML="",u();try{if(!e.target.classList.contains("all-category")){const s=await d.getSelectedCategory(t);q(s,t),c()}}catch(s){console.log(s)}}});N();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".scroll-up");e.classList.remove("show"),window.addEventListener("scroll",function(){window.scrollY>650?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});function u(){document.querySelector(".loader-container").classList.remove("is-hidden-loader")}function c(){document.querySelector(".loader-container").classList.add("is-hidden-loader")}
//# sourceMappingURL=commonHelpers2.js.map
