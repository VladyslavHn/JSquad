import{a as c}from"./vendor-0cb09735.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();c.defaults.baseURL="https://books-backend.p.goit.global/books";const i={getCategoryList:async function(){try{return(await c.get("/category-list")).data}catch(t){console.log(t)}},getBestSellers:async function(){try{return(await c.get("/top-books")).data}catch(t){console.log(t)}},getSelectedCategory:async function(t){try{return(await c.get(`/category?category=${t}`)).data}catch(r){console.log(r)}},getBookDescription:async function(t){try{return(await c.get(`/${t}`)).data}catch(r){console.log(r)}}},l=document.querySelector(".categories-books-list"),u=async()=>{try{const r=(await i.getBestSellers()).map(({books:a,list_name:n})=>`<li class="categories-item">${n}
                <ul class="categories-books-list"> 
                    ${a.map(({book_image:e,title:o,author:s})=>`<li class="categories-item">
                            <img class="categories-img" src='${e}' alt="" />
                            <h3 class="categories-book-title">${o}</h3>
                            <p class="categories-book-author">${s}</p>
                        </li>`).join(`
`)}
                </ul>
                <button class="categories-btn" type="button">See more</button>
            </li>`).join(`
`);l.insertAdjacentHTML("beforeend",r)}catch(t){console.error("Error fetching best sellers:",t)}};u();
//# sourceMappingURL=main-7108814b.js.map
