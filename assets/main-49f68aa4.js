import{a}from"./vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();a.defaults.baseURL="https://books-backend.p.goit.global/books";const i={getCategoryList:async function(){try{return(await a.get("/category-list")).data}catch(e){console.log(e)}},getBestSellers:async function(){try{return(await a.get("/top-books")).data}catch(e){console.log(e)}},getSelectedCategory:async function(e){try{return(await a.get(`/category?category=${e}`)).data}catch(o){console.log(o)}},getBookDescription:async function(e){try{return(await a.get(`/${e}`)).data}catch(o){console.log(o)}}},l=document.querySelector(".categories-books-list"),u=async()=>{try{const o=(await i.getBestSellers()).map(({books:s,list_name:n})=>`<li class="categories-item">${n}
                <ul class="categories-books-list"> 
                    ${s.map(({book_image:t,title:r,author:c})=>`<li class="categories-item">
                            <img class="categories-img" src='${t}' alt="" />
                            <h3 class="categories-book-title">${r}</h3>
                            <p class="categories-book-author">${c}</p>
                        </li>`).join(`
`)}
                </ul>
                <button class="categories-btn" type="button">See more</button>
            </li>`).join(`
`);l.insertAdjacentHTML("beforeend",o)}catch(e){console.error("Error fetching best sellers:",e)}};u();const g={categoryContainer:document.querySelector(".category-container"),categoryList:document.querySelector(".category-list"),categoryItem:document.querySelector(".category-item"),allCategory:document.querySelector(".all-category")};function y(e){return e.map(s=>`<li class='category-item'>${s.list_name}</li>`).join("")}(async()=>{try{const e=await i.getCategoryList(),o=y(e);g.categoryList.insertAdjacentHTML("beforeend",o)}catch(e){console.log(e)}})();
//# sourceMappingURL=main-49f68aa4.js.map
