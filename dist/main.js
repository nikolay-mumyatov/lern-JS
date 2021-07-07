(()=>{"use strict";(function(e){const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),l=document.querySelector("#timer-seconds"),r=function(){const e=setTimeout(r,1e3);let n=function(){let e=(new Date("15 july 2021").getTime()-(new Date).getTime())/1e3,t=String(Math.floor(e%60)),o=String(Math.floor(e/60%60)),l=String(Math.floor(e/60/60));return l.length<2&&(l=l.padStart(2,"0")),o.length<2&&(o=o.padStart(2,"0")),t.length<2&&(t=t.padStart(2,"0")),{timeRamaining:e,hours:l,minutes:o,seconds:t}}();t.textContent=n.hours,o.textContent=n.minutes,l.textContent=n.seconds,n.timeRamaining<0&&(clearInterval(e),t.textContent="00",o.textContent="00",l.textContent="00")};setTimeout(r,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=document.querySelectorAll(".menu__link"),l=document.querySelector(".close-btn"),r=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",r),l.addEventListener("click",(e=>{e.preventDefault(),r()})),o.forEach((e=>{e.addEventListener("click",r)}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-close"),l=document.querySelector(".popup-content");t.forEach((t=>{t.addEventListener("click",(()=>{if(e.style.display="block",window.innerWidth>768){let e,t=0;const o=()=>{e=requestAnimationFrame(o),t<50?(l.style.opacity=2*t+"%",t++):cancelAnimationFrame(e)};e=requestAnimationFrame(o)}}))})),o.addEventListener("click",(()=>{e.style.display="none"}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let l=e.target;l=l.closest(".service-header-tab"),l&&t.forEach(((e,r)=>{e===l&&(e=>{for(let l=0;l<o.length;l++)e===l?(t[l].classList.add("active"),o[l].classList.remove("d-none")):(t[l].classList.remove("active"),o[l].classList.add("d-none"))})(r)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-dots");e.forEach(((e,o)=>{let l=document.createElement("li");l.classList.add("dot"),0===o&&l.classList.add("dot-active"),t.appendChild(l)}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelectorAll(".dot"),o=document.querySelector(".portfolio-content");let l,r=0;const n=(e,t,o)=>{e[t].classList.remove(o)},c=(e,t,o)=>{e[t].classList.add(o)},a=()=>{n(e,r,"portfolio-item-active"),n(t,r,"dot-active"),r++,r>=e.length&&(r=0),c(e,r,"portfolio-item-active"),c(t,r,"dot-active")},u=(e=3e3)=>{l=setInterval(a,e)};o.addEventListener("click",(o=>{o.preventDefault();let l=o.target;l.matches(".portfolio-btn, .dot")&&(n(e,r,"portfolio-item-active"),n(t,r,"dot-active"),l.matches("#arrow-right")?r++:l.matches("#arrow-left")?r--:l.matches(".dot")&&t.forEach(((e,t)=>{e===l&&(r=t)})),r>=e.length&&(r=0),r<0&&(r=e.length-1),c(e,r,"portfolio-item-active"),c(t,r,"dot-active"))})),o.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(l)})),o.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(3e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),l=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),n=document.querySelector(".calc-count"),c=document.getElementById("total");t.addEventListener("change",(t=>{const a=t.target;(a.matches("select")||a.matches("input"))&&(()=>{let t=0,a=1,u=1;const i=o.options[o.selectedIndex].value,s=+l.value;console.log(s),n.value>1&&(a+=(n.value-1)/10),r.value&&r.value<5?u*=2:r.value&&r.value<10&&(u*=1.5),i&&s?t=e*i*s*a*u:(t=0,n.value="",l.value="",r.value=""),c.textContent=Math.ceil(t)})()}))})(),document.querySelector(".team").querySelectorAll(".command__photo").forEach((e=>{let t=e.getAttribute("src");e.hasAttribute("data-img")&&(e.addEventListener("mouseenter",(t=>{e.src=t.target.dataset.img})),e.addEventListener("mouseleave",(o=>{e.src=t})))})),(()=>{const e=document.querySelectorAll(".down-scroll");for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))})(),document.querySelectorAll(".number").forEach((e=>{e.addEventListener("blur",(()=>{e.value=e.value.replace(/\D/g,""),e.value=e.value.trim(),e.value=e.value.replace(/^-+|-+$/g,"")}))})),document.querySelectorAll(".input-text").forEach((e=>{e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^а-яА-ёЁ -]/g,""),e.value=e.value.trim(),e.value=e.value.replace(/-{2,}/g,"-"),e.value=e.value.replace(/[ ]{2,}/g," "),e.value=e.value.replace(/^-+|-+$/g,""),e.classList.contains("bio")&&(e.value=e.value.replace(/( |^)[а-яё]/g,(function(e){return e.toUpperCase()})))}))})),document.querySelectorAll(".form-name").forEach((e=>{e.addEventListener("blur",(()=>{(e.value.length<2||e.value.length>50)&&(e.value="")}))})),document.querySelectorAll(".input-email").forEach((e=>{e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^a-zA@\-_.!~*']/g,""),e.value=e.value.trim(),e.value=e.value.replace(/^-+|-+$/g,"")}))})),document.querySelectorAll(".input-phone").forEach((e=>{e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^1-9()0/-/+]/g,""),e.value=e.value.trim(),e.value=e.value.replace(/^-+|-+$/g,"")}))})),(()=>{const e=document.querySelector(".popup"),t=document.createElement("div");t.style.cssText="font-size: 2rem;",document.querySelectorAll(".form-ajax").forEach((o=>{o.addEventListener("submit",(l=>{l.preventDefault(),o.appendChild(t),t.style.color="#ffffff";const r=new FormData(o);let n={};r.forEach(((e,t)=>{n[t]=e})),t.textContent="Идет загрузка...",(e=>fetch("../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(n).then((o=>{if(200!==o.status)throw new Error(o);setTimeout((function(){t.textContent=""}),3e3),t.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){e.style.display="none"}),3e3)})).catch((e=>t.textContent="Ошибка отправки!")).finally(void document.querySelectorAll("input").forEach((e=>{e.value=""})))}))}))})()})();