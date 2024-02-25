import{a as i}from"./vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const p={key:"books",books:[],getAllBooks:function(){return localStorage.getItem(this.key)===null?[]:JSON.parse(localStorage.getItem(this.key))},isBookExsist:function(e){return localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key)),this.books.findIndex(r=>r._id===e)!==-1},addBookToFavorites:function(e){localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key)),this.isBookExsist(e._id)?console.log("Oops, this book already in shopping list"):(this.books.push(e),localStorage.setItem(this.key,JSON.stringify(this.books)))},removeBookFromFavorites:function(e){localStorage.getItem(this.key)===null?this.books=[]:this.books=JSON.parse(localStorage.getItem(this.key));const o=this.books.findIndex(r=>r._id===e);this.books.splice(o,1),localStorage.setItem(this.key,JSON.stringify(this.books))}},l=document.querySelector(".theme-switch-input"),c=document.querySelector("body");function h(){l.checked===!1?(c.classList.add("light-theme"),c.classList.remove("dark-theme"),localStorage.setItem("theme","light")):(c.classList.remove("light-theme"),c.classList.add("dark-theme"),localStorage.setItem("theme","dark"))}const f=localStorage.getItem("theme");f==="dark"?(l.checked=!0,h()):l.checked=!1;l.addEventListener("change",h);const u=document.querySelector(".header-menu");u.addEventListener("click",function(e){e.target.matches(".header-menu-link")&&(u.querySelectorAll(".header-menu-link").forEach(r=>{r.classList.remove("exception")}),e.target.classList.add("exception"))});const m=document.querySelector(".slider-line"),y=document.querySelector(".slider-button-scroll"),g=document.querySelector(".slider-button-arrow");let n=0;y.addEventListener("click",async()=>{n+=150,n>170&&(n=0),m.style.bottom=n+"px",n===150?g.setAttribute("href","./img/symbol-defs.svg#icon-Vector-up1-1"):g.setAttribute("href","./img/symbol-defs.svg#icon-Vector-down1-1")});i.defaults.baseURL="https://books-backend.p.goit.global/books";const b={getCategoryList:async function(){try{return(await i.get("/category-list")).data}catch(e){console.log(e)}},getBestSellers:async function(){try{return(await i.get("/top-books")).data}catch(e){console.log(e)}},getSelectedCategory:async function(e){try{return(await i.get(`/category?category=${e}`)).data}catch(o){console.log(o)}},getBookDescription:async function(e){try{return(await i.get(`/${e}`)).data}catch(o){console.log(o)}}};export{b,p as l};
//# sourceMappingURL=api-c3364f5a.js.map
