import{b as n}from"./assets/api-8e5eceb4.js";import"./assets/vendor-0cb09735.js";const d={key:"books",books:[],getAllBooks:function(){return localStorage.getItem(this.key)===null?[]:JSON.parse(localStorage.getItem(this.key))},isBookExsist:function(e){return localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key)),this.books.findIndex(s=>s._id===e)!==-1},addBookToFavorites:function(e){localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key)),this.isBookExsist(e._id)?console.log("Oops, this book already in shopping list"):(this.books.push(e),localStorage.setItem(this.key,JSON.stringify(this.books)))},removeBookFromFavorites:function(e){localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key));const o=this.books.findIndex(s=>s._id===e);this.books.splice(this.books.indexOf(o),1),localStorage.setItem(this.key,JSON.stringify(this.books))}},k=async()=>{const e=document.querySelector(".bestsellers-list");try{const s=(await n.getBestSellers()).map(({books:l,list_name:t})=>`<li class="bestsellers-item">
             <h2 class="bestsellers-category-title">${t}</h2>
                <ul class="bestsellers-books-list"> 
                    ${l.map(({book_image:a,title:i,author:r})=>`<li class="bestsellers-books-item">
                            <img class="bestsellers-books-img" src='${a}' alt="" />
                            <h3 class="bestsellers-book-title">${i}</h3>
                            <p class="bestsellers-book-author">${r}</p>
                        </li>`).join(`
`)}
                </ul>
                <button class="bestsellers-btn" type="button">See more</button>
            </li>`).join(`
`);e.insertAdjacentHTML("beforeend",s)}catch(o){console.error("Error fetching best sellers:",o)}};k();function y(e,o){const s=document.querySelector(".bestsellers-list"),l=document.querySelector(".bestsellers-title");l.textContent=o;const t=e.map(({author:a,book_image:i,title:r})=>`<li class="book-category-item">
  <div class="book-category-card">
    <img class="book-category-image" src="${i}" alt="Book cover" width="180" />
    <div class="book-category-text">
      <h3 class = "book-title">
      ${r}</h3>
      <p class = "author-name"> ${a}</p>
    </div>
  </div>
</li>`).join("");s.innerHTML=t}const g={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function p(e){return e.map(s=>`<li class='sidebar-category-item' data-source="${s.list_name}">${s.list_name}</li>`).join("")}(async()=>{try{const e=await n.getCategoryList(),o=p(e);g.categoryList.insertAdjacentHTML("beforeend",o)}catch(e){console.log(e)}})();g.allCategory.addEventListener("click",async()=>{try{const e=await n.getBestSellers();k(e)}catch(e){console.log(e)}});g.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const o=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(l=>{l.classList.remove("category-active")}),e.target.classList.add("category-active");try{const l=await n.getSelectedCategory(o);y(l)}catch(l){console.log(l)}}});const h="643282b2e85766588626a114",m=async e=>{const o=document.querySelector(".modal-wrapper"),s=document.querySelector(".modal-icons-list"),l=document.querySelector(".modal-window");try{const t=await n.getBookDescription(e);o.innerHTML="",s.innerHTML="";const a=`
      <img class="modal-img-book" src="${t.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${t.title}</p></li>
      <li><p class="modal-description-list-subtitle">${t.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${t.description}
        </p>
      </li>
      </ul>`;o.insertAdjacentHTML("beforeend",a),console.log(a);const i=`<li class="modal-icons-wrapper-1">
        <a class="modal-icon" href="${t.buy_links[0].url}">amazon</a>
      </li>
      <li class="modal-icons-wrapper-2">
        <a class="modal-icon" href="${t.buy_links[1].url}">apple</a>
      </li>`;s.insertAdjacentHTML("beforeend",i);let r=document.querySelector(".modal-btn-add");const b={_id:t._id,title:t.title,author:t.author,list_name:t.list_name,book_image:t.book_image,description:t.description,amazon_buy_link:t.buy_links[0].url,apple_buy_link:t.buy_links[1].url};if(console.log(t._id),d.isBookExsist(t._id)){let c=function(){d.removeBookFromFavorites(t._id),r.textContent="add to shopping list",r.classList.remove("modal-btn-remove"),r.removeEventListener("click",c),m(t._id)};r.textContent="remove from the shopping list";const u=`<p class="modal-text-congratulations">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".
    </p>`;l.insertAdjacentHTML("beforeend",u),r.addEventListener("click",c)}else{let c=function(){d.addBookToFavorites(b),r.textContent="remove from the shopping list",r.classList.add("modal-btn-remove"),r.removeEventListener("click",c),m(t._id)};r.textContent="add to shopping list",r.addEventListener("click",c),document.querySelector(".modal-text-congratulations").remove()}console.log(i)}catch(t){console.log("Error fetching modal:",t)}};m(h);const S=document.querySelector(".backdrop"),f=document.querySelector(".modal-close");f.addEventListener("click",()=>{S.classList.remove("is-open")});
//# sourceMappingURL=commonHelpers2.js.map
