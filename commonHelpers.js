import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function r(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}function a(){const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");if(!t||!e)return;let n=null;t.addEventListener("click",()=>{o(),n=c(),t.disabled=!0}),e.addEventListener("click",()=>{d(n),t.disabled=!1})}function c(){return setInterval(o,1e3)}function o(){document.body.style.backgroundColor=r()}function d(t){clearInterval(t)}a();
//# sourceMappingURL=commonHelpers.js.map
