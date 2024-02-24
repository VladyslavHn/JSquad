import{b as r}from"./assets/api-3310354d.js";import"./assets/vendor-0cb09735.js";const i=async()=>{const e=document.querySelector(".best-books");try{const s=(await r.getBestSellers()).map(({books:o,list_name:l})=>`<li class="bestsellers-item">${l}
                <ul class="bestsellers-books-list"> 
                    ${o.map(({book_image:c,title:a,author:n})=>`<li class="bestsellers-books-item">
                            <img class="bestsellers-books-img" src='${c}' alt="" />
                            <h3 class="bestsellers-book-title">${a}</h3>
                            <p class="bestsellers-book-author">${n}</p>
                        </li>`).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button">See more</button>
            </li>`).join(`
`);e.insertAdjacentHTML("beforeend",s)}catch(t){console.error("Error fetching best sellers:",t)}};i();const b={categoryContainer:document.querySelector(".category-container"),categoryList:document.querySelector(".category-list"),categoryItem:document.querySelector(".category-item"),allCategory:document.querySelector(".all-category")};function u(e){return e.map(s=>`<li class='category-item'>${s.list_name}</li>`).join("")}(async()=>{try{const e=await r.getCategoryList(),t=u(e);b.categoryList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();
//# sourceMappingURL=commonHelpers2.js.map
