(()=>{"use strict";(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay");document.querySelector("form"),document.body.addEventListener("click",(l=>{let o=l.target;(o.matches(".callback-btn")||o.matches(".button-services")||o.matches(".absolute"))&&(e.style.display="block",t.style.display="block")}))})(),document.body.addEventListener("click",(e=>{let t=e.target;(t.matches(".modal-overlay")||t.matches(".cross"))&&(document.querySelector(".modal-callback").style.display="none",document.querySelector(".modal-overlay").style.display="none")})),(()=>{const e=document.querySelector(".up-scroll");window.addEventListener("scroll",(function(t){window.pageYOffset>=520?(e.style.visibility="visible",e.style.opacity="1"):(e.style.visibility="hidden",e.style.opacity="0")}))})(),(()=>{const e=document.querySelectorAll(".scroll");for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".accordeon-element"),l=document.querySelectorAll(".accordeon-element-content");e.addEventListener("click",(e=>{let o=e.target;o=o.closest(".accordeon-element"),o&&t.forEach(((e,c)=>{e===o&&(e=>{for(let o=0;o<l.length;o++)e===o?(t[o].classList.add("active"),l[o].classList.remove("hidden-content")):(t[o].classList.remove("active"),l[o].classList.add("hidden-content"))})(c)}))}))})(),(()=>{const e=document.querySelectorAll(".item");let t,l=0;const o=()=>{e[l].classList.remove("slider-item-active"),l++,l>=e.length&&(l=0),e[l].classList.add("slider-item-active")};((e=3e3)=>{t=setInterval(o,e)})(3e3)})(),(()=>{const e=document.querySelector(".services-carousel"),t=document.querySelectorAll(".carousel-item"),l=document.querySelector(".arrow-right"),o=document.querySelector(".arrow-left");let c=15,n=1,r=0,a=5;window.addEventListener("resize",(()=>{document.documentElement.clientWidth<=767&&(c=16,a=6)})),l.addEventListener("click",(()=>{r=c*n,n++,n===a?(r=Math.max(r,-c*(t.length-n)),e.style.transform=`translateX(-${r}%)`,n=0):(r=Math.max(r,-c*(t.length-n)),e.style.transform=`translateX(-${r}%)`)})),o.addEventListener("click",(()=>{r+=c*n,r=Math.min(r,0),e.style.transform=`translateX(${r}%)`,n=1}))})(),document.querySelectorAll(".form-name").forEach((e=>{e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^а-яА-ёЁ -]/g,""),e.value=e.value.trim(),e.value=e.value.replace(/-{2,}/g,"-"),e.value=e.value.replace(/[ ]{2,}/g," "),e.value=e.value.replace(/^-+|-+$/g,""),e.classList.contains("bio")&&(e.value=e.value.replace(/( |^)[а-яё]/g,(function(e){return e.toUpperCase()})))}))})),document.querySelectorAll(".input-phone").forEach((e=>{e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^1-9()0/+]/g,""),e.value=e.value.trim()}))})),(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),l=document.createElement("div");l.style.cssText="font-size: 16px";const o=document.querySelector("#form-callback");o.addEventListener("submit",(c=>{c.preventDefault(),o.appendChild(l),l.style.color="#000000";const n=new FormData(o);let r={};n.forEach(((e,t)=>{r[t]=e})),l.textContent="Идет загрузка...",(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(r).then((o=>{if(200!==o.status)throw new Error(o);setTimeout((function(){l.textContent=""}),3e3),l.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){e.style.display="none",t.style.display="none"}),3e3)})).catch((e=>l.textContent="Ошибка! Письмо не отправлено.")).finally(void document.querySelectorAll("input").forEach((e=>{e.value=""})))}))})()})();