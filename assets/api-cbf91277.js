import{a as l}from"./vendor-8dea2054.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function v(e,t){const n=document.querySelector(e),s=t.split(" "),o=s[s.length-1];s.pop(),t=s.join(" "),n.insertAdjacentHTML("afterbegin",`<h1 class="page-title">${t} <span class="page-title-highlight">${o}</span></h1>`)}function w({title:e,author:t,book_image:n,_id:s}){return`<li class="book-category-item" data-id="${s}">
    <div class = "img-cover">
      <img class="book-category-image" src="${n}" alt="Book cover" width="335"  /> 
      <p class="overlay-text">quick view</p>
      </div>
        <div class="book-category-text">
      <h3 class = "book-title">
      ${e}</h3>
      <p class = "author-name"> ${t}</p>
    </div>
 </li>`}const I={key:"books",books:[],getAllBooks:function(){return localStorage.getItem(this.key)===null?[]:JSON.parse(localStorage.getItem(this.key))},isBookExsist:function(e){return localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key)),this.books.findIndex(n=>n._id===e)!==-1},addBookToFavorites:function(e){localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key)),this.isBookExsist(e._id)?console.log("Oops, this book already in shopping list"):(this.books.push(e),localStorage.setItem(this.key,JSON.stringify(this.books)))},removeBookFromFavorites:function(e){localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key));const t=this.books.findIndex(n=>n._id===e);this.books.splice(t,1),localStorage.setItem(this.key,JSON.stringify(this.books))}};document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".header-menu-home"),t=document.querySelector(".header-menu-shopping");function n(){const s=window.location.pathname;e.classList.toggle("btn-active",s==="/index.html"||s==="/"),t.classList.toggle("btn-active",s.includes("card.html"))}n(),e.addEventListener("click",function(s){s.preventDefault(),window.location.href="./index.html"}),t.addEventListener("click",function(s){s.preventDefault(),window.location.href="./card.html"})});const h=document.querySelector(".theme-switch-input"),u=document.querySelector("body");function y(){h.checked===!1?(u.classList.add("light-theme"),u.classList.remove("dark-theme"),localStorage.setItem("theme","light")):(u.classList.remove("light-theme"),u.classList.add("dark-theme"),localStorage.setItem("theme","dark"))}const L=localStorage.getItem("theme");L==="dark"?(h.checked=!0,y()):h.checked=!1;h.addEventListener("change",y);const m=document.querySelector(".menu-open-btn"),g=document.querySelector(".menu-close-btn"),k=document.querySelector(".mob-menu");m.addEventListener("click",()=>{k.classList.add("is-open"),m.classList.remove("is-open"),m.classList.add("hidden"),g.classList.remove("hidden")});g.addEventListener("click",()=>{k.classList.remove("is-open"),m.classList.remove("hidden"),g.classList.add("hidden")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mob-menu-home"),t=document.querySelector(".mob-menu-calor"),n=document.querySelector(".header-menu-home"),s=document.querySelector(".header-menu-shopping"),o=window.location.pathname.includes("/card.html"),c=document.querySelector(".mob-list > li:last-child > a"),i=document.querySelector(".header-menu > li:last-child > a");console.log(o);let p=c.getAttribute("href").includes("/card.html"),f=i.getAttribute("href").includes("/card.html");console.log(p),console.log(f),p===o||f===o?(t.classList.add("open-list"),s.classList.add("open-list"),console.log(!0)):(e.classList.add("open-home"),n.classList.add("open-home"),console.log(!1))});const b=document.querySelector(".slider-line"),a=document.querySelector(".slider-button-scrolldown"),d=document.querySelector(".slider-button-scrollup");let r=0;a.addEventListener("click",async()=>{r+=150,r>170&&(r=0),b.style.bottom=r+"px",r===150&&(a.classList.remove("scrolldown-open"),a.classList.add("scrolldown-hidden"),d.classList.remove("scrolldown-hidden"),d.classList.add("scrolldown-open"))});d.addEventListener("click",async()=>{r+=150,r>170&&(r=0),b.style.bottom=r+"px",r===0&&(d.classList.remove("scrolldown-open"),d.classList.add("scrolldown-hidden"),a.classList.remove("scrolldown-hidden"),a.classList.add("scrolldown-open"))});l.defaults.baseURL="https://books-backend.p.goit.global/books";const q={getCategoryList:async function(){try{return(await l.get("/category-list")).data}catch(e){console.log(e)}},getBestSellers:async function(){try{return(await l.get("/top-books")).data}catch(e){console.log(e)}},getSelectedCategory:async function(e){try{return(await l.get(`/category?category=${e}`)).data}catch(t){console.log(t)}},getBookDescription:async function(e){try{return(await l.get(`/${e}`)).data}catch(t){console.log(t)}}};export{w as a,q as b,I as l,v as r};
//# sourceMappingURL=api-cbf91277.js.map