import{b as o}from"./assets/api-2433ba94.js";import"./assets/vendor-0cb09735.js";const g=async()=>{const e=document.querySelector(".bestsellers-list");try{const r=(await o.getBestSellers()).map(({books:s,list_name:a})=>`<li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${a}</h2>
                <ul class="bestsellers-books-list"> 
                    ${s.map(({book_image:c,title:l,author:i})=>`<li class="bestsellers-books-item">
                            <img class="bestsellers-books-img" src='${c}' alt="" />
                            <h3 class="bestsellers-book-title">${l}</h3>
                            <p class="bestsellers-book-author">${i}</p>
                        </li>`).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button">See more</button>
            </li>`).join(`
`);e.insertAdjacentHTML("beforeend",r)}catch(t){console.error("Error fetching best sellers:",t)}};g();function y(e,t){const r=document.querySelector(".bestsellers-list"),s=document.querySelector(".bestsellers-title");s.textContent=t;const a=e.map(({author:c,book_image:l,title:i})=>`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${l}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${i}</h3>
      <p class = "author-name"> ${c}</p>
    </div>
  </div>
</li>`).join("");r.innerHTML=a}const n={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function b(e){return e.map(r=>`<li class='sidebar-category-item' data-source="${r.list_name}">${r.list_name}</li>`).join("")}(async()=>{try{const e=await o.getCategoryList(),t=b(e);n.categoryList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();n.allCategory.addEventListener("click",async()=>{try{const e=await o.getBestSellers();g(e)}catch(e){console.log(e)}});n.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(s=>{s.classList.remove("category-active")}),e.target.classList.add("category-active");try{const s=await o.getSelectedCategory(t);y(s)}catch(s){console.log(s)}}});
//# sourceMappingURL=commonHelpers2.js.map
