function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequiredd77;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequiredd77=a),a("kyEFX").register(JSON.parse('{"74G8i":"f_ingredients.f94845f3.js","7kCeP":"sprite.3f5ac9d6.svg","1T7VL":"f_ingredients.8e2beff8.js"}'));var s,i=a("jCADl");s=new URL(a("kyEFX").resolve("7kCeP"),import.meta.url).toString();var o=a("gDQKf"),d=a("lmZ5B"),l=a("1dMoQ"),c=a("5zOW8"),f=a("gSRkr");const g=JSON.parse(localStorage.getItem(i.FAV_INGREDIENTS))||[];function u(t=[]){const r=t.map((({strIngredient:t,strType:r})=>`<li class="ingredients-card">\n          <h3 class="ingredients__name">${t}</h3>\n          <h5 class="ingredients__type">${r||"no info"}</h5>\n          <div class="ingredients-card__options">\n            <button class="button-learn_more" data-name="${t}">Learn more</button>\n            <button class="button-remove" data-fav="${t}">\n              Remove\n              <svg class="heart-icon" width="18" height="18">\n                <use href="${e(s)}#icon-heart_full" ></use>\n              </svg>\n            </button>\n          </div>\n        </li>`)).join("");c.refIngrList.innerHTML=r}function v(){c.refIngrList.innerHTML=f.errorListFavCocktail}function p(){if(!(JSON.parse(localStorage.getItem(i.FAV_INGREDIENTS))||[]).length)return v()}c.refFormSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.finder.value.trim();if(!t)return;const r=g.filter((e=>e.strIngredient.toLowerCase().includes(t.toLowerCase())));if(!r.length)return c.refIngrList.innerHTML=o.notFound;u(r)})),c.refIngrList.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;e.target.dataset.name&&(0,l.searchIngrByName)(e.target.dataset.name);e.target.dataset.fav&&(!function(e){const t=JSON.parse(localStorage.getItem(i.FAV_INGREDIENTS))||[];for(let r=0;r<t.length;r++)if(t[r].strIngredient===e)return t.splice(r,1),localStorage.setItem(i.FAV_INGREDIENTS,JSON.stringify(t)),void p()}(e.target.dataset.fav),e.target.parentNode.parentNode.remove())})),c.refHeaderJSMenu.addEventListener("mouseleave",(()=>{c.refHeaderFavBar.classList.remove("active")})),c.refHeaderFavLink.addEventListener("mouseenter",(()=>{c.refHeaderFavBar.classList.add("active")})),c.refHeaderMenuOpen.addEventListener("click",(()=>{c.refHeaderMobMenu.classList.toggle("open"),c.refHeaderSwitcher.classList.toggle("open"),document.body.classList.toggle("overflow")})),c.refHeaderMenuClose.addEventListener("click",(()=>{c.refHeaderMobMenu.classList.toggle("open"),c.refHeaderSwitcher.classList.toggle("open"),document.body.classList.toggle("overflow")})),(0,d.themeSwitcher)(),g.length?u(g):v();
//# sourceMappingURL=f_ingredients.f94845f3.js.map
