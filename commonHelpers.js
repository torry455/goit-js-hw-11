import{s as b,i as l}from"./assets/vendor-8ce50246.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),n=document.querySelector(".form-input"),m=document.querySelector(".gallery"),s=document.createElement("div");s.classList.add("loader");const L=new b("li a",{captionsData:"alt",captionClass:"img-caption",captionDelay:250});u.addEventListener("submit",v);function v(c){c.preventDefault(),m.innerHTML="",u.after(s);const o=n.value,a="41929636-e94244ac3daa63b74aaebcf18",i=new URLSearchParams({key:`${a}`,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});fetch(`https://pixabay.com/api/?${i}`).then(e=>{if(e.ok)return e.json();throw new Error(e.status)}).then(({hits:e})=>{e.length||l.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:bixOctagonSvg});const t=e.map(({webformatURL:r,largeImageURL:h,tags:p,likes:d,views:f,comments:g,downloads:y})=>`<li class="gallery-item">
            <a class="item-link" href="${h}">
                <img
                    src="${r}"
                    alt="${p}"
                    width="360"
                    height="200"
                />
            </a>
            <ul class="mini-list">
                <li class="mini-header">
                    <h3>Likes</h3>
                    <p>${d}</p>
                </li>
                <li class="mini-header">
                    <h3>Views</h3>
                    <p>${f}</p>
                </li>
                <li class="mini-header">
                    <h3>Comments</h3>
                    <p>${g}</p>
                </li>
                <li class="mini-header">
                    <h3>Downloads</h3>
                    <p>${y}</p>
                </li>
            </ul>
            </li>`).join("");s.remove(),m.insertAdjacentHTML("beforeend",t),n.value="",L.refresh()}).catch(e=>{s.remove(),l.show({message:`${e}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"}),n.value=""})}
//# sourceMappingURL=commonHelpers.js.map
