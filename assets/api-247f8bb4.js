import{a as c}from"./vendor-8dea2054.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();function k(e,t){const s=document.querySelector(e),i=t.split(" "),o=i[i.length-1];i.pop(),t=i.join(" "),s.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${o}</span></h1>`)}function y({title:e,author:t,book_image:s,_id:i}){return`<li class="book-category-item" data-id="${i}">
    <div class = "img-cover">
      <img class="book-category-image" src="${s}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
 </li>`}const b={key:"books",books:[],getAllBooks:function(){return localStorage.getItem(this.key)===null?[]:JSON.parse(localStorage.getItem(this.key))},isBookExsist:function(e){return localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key)),this.books.findIndex(s=>s._id===e)!==-1},addBookToFavorites:function(e){localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key)),this.isBookExsist(e._id)?console.log("Oops, this book already in shopping list"):(this.books.push(e),localStorage.setItem(this.key,JSON.stringify(this.books)))},removeBookFromFavorites:function(e){localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key));const t=this.books.findIndex(s=>s._id===e);this.books.splice(t,1),localStorage.setItem(this.key,JSON.stringify(this.books))}};function m(e,t,s){if(e.target.classList.contains(s)){e.preventDefault(),document.querySelector(t).querySelectorAll("."+s).forEach(r=>{r!==e.target&&r.classList.remove("exception")}),e.target.classList.add("exception");const n=e.target.getAttribute("href");window.location.pathname=n}}document.querySelector(".header-menu").addEventListener("click",function(e){m(e,".header-menu","header-menu-link")});document.querySelector(".mob-list").addEventListener("click",function(e){m(e,".mob-list","mob-menu-link")});const d=document.querySelector(".theme-switch-input"),a=document.querySelector("body");function h(){d.checked===!1?(a.classList.add("light-theme"),a.classList.remove("dark-theme"),localStorage.setItem("theme","light")):(a.classList.remove("light-theme"),a.classList.add("dark-theme"),localStorage.setItem("theme","dark"))}const f=localStorage.getItem("theme");f==="dark"?(d.checked=!0,h()):d.checked=!1;d.addEventListener("change",h);const l=document.querySelector(".menu-open-btn"),u=document.querySelector(".menu-close-btn"),g=document.querySelector(".mob-menu");l.addEventListener("click",()=>{g.classList.add("is-open"),l.classList.remove("is-open"),l.classList.add("hidden"),u.classList.remove("hidden")});u.addEventListener("click",()=>{g.classList.remove("is-open"),l.classList.remove("hidden"),u.classList.add("hidden")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".header-menu-home"),t=document.querySelector(".header-menu-shopping");t.addEventListener("click",s);function s(){t.classList.contains("btn-active")||(e.classList.remove("btn-active"),t.classList.add("btn-active"))}e.addEventListener("click",i);function i(){e.classList.contains("btn-active")||(t.classList.remove("btn-active"),e.classList.add("btn-active"))}});c.defaults.baseURL="https://books-backend.p.goit.global/books";const L={getCategoryList:async function(){try{return(await c.get("/category-list")).data}catch(e){console.log(e)}},getBestSellers:async function(){try{return(await c.get("/top-books")).data}catch(e){console.log(e)}},getSelectedCategory:async function(e){try{return(await c.get(`/category?category=${e}`)).data}catch(t){console.log(t)}},getBookDescription:async function(e){try{return(await c.get(`/${e}`)).data}catch(t){console.log(t)}}};export{y as a,L as b,b as l,k as r};
//# sourceMappingURL=api-247f8bb4.js.map
