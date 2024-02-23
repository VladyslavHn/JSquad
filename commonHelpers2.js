import{b as r}from"./assets/api-579944da.js";import"./assets/vendor-0cb09735.js";const n=document.querySelector(".categories-books-list"),i=async()=>{try{const t=(await r.getBestSellers()).map(({books:o,list_name:s})=>`<li class="categories-item">${s}
                <ul class="categories-books-list"> 
                    ${o.map(({book_image:c,title:a,author:l})=>`<li class="categories-item">
                            <img class="categories-img" src='${c}' alt="" />
                            <h3 class="categories-book-title">${a}</h3>
                            <p class="categories-book-author">${l}</p>
                        </li>`).join(`
`)}
                </ul>
                <button class="categories-btn" type="button">See more</button>
            </li>`).join(`
`);n.insertAdjacentHTML("beforeend",t)}catch(e){console.error("Error fetching best sellers:",e)}};i();const g={categoryContainer:document.querySelector(".category-container"),categoryList:document.querySelector(".category-list"),categoryItem:document.querySelector(".category-item"),allCategory:document.querySelector(".all-category")};function u(e){return e.map(o=>`<li class='category-item'>${o.list_name}</li>`).join("")}(async()=>{try{const e=await r.getCategoryList(),t=u(e);g.categoryList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})();
//# sourceMappingURL=commonHelpers2.js.map
