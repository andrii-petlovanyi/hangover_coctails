function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequiredd77;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequiredd77=r),r("kyEFX").register(JSON.parse('{"cm6eq":"f_coctail.90123a07.js","7kCeP":"sprite.86d7718d.svg","jBXHn":"f_coctail.3f758090.js","1Mf1J":"f_coctail.4c22c21b.js"}'));var i,o=r("87vAp");i=new URL(r("kyEFX").resolve("7kCeP"),import.meta.url).toString();var c=r("gDQKf"),d=r("lmZ5B"),l=r("bNzKi");const s=document.querySelector(".js-add_f-coctail"),f=JSON.parse(localStorage.getItem(o.FAV_COCKTAIL))||[];function u(t=[]){const n=t.map((({strDrink:t,strDrinkThumb:n,idDrink:a})=>`<li class="coctail-card">\n      <img class="img" src=${n} alt=${t}/img>\n      <h3 class="coctail-card__name">${t}</h3>\n      <div class="coctail-card__options">\n        <button class="button-learn_more" data-id=${a} data-type="learn">Learn more</button>\n        <button class="button-add_to" data-favid=${a} data-add="add">\n          Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="${e(i)}#icon-heart_full"></use>\n          </svg>\n        </button>\n      </div>\n    </li>`)).join("");s.innerHTML=n}document.querySelector(".header__input").addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.finder.value.trim();if(!t)return;console.log(f);const n=f.filter((e=>e.strDrink.toLowerCase().includes(t.toLowerCase())));if(!n.length)return s.innerHTML=c.notFound;u(n)})),s.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;if(e.target.dataset.favid)return function(e){const t=JSON.parse(localStorage.getItem(o.FAV_COCKTAIL))||[];for(let n=0;n<t.length;n++)if(t[n].idDrink===e)return t.splice(n,1),void localStorage.setItem(o.FAV_COCKTAIL,JSON.stringify(t))}(e.target.dataset.favid),void e.target.parentNode.parentNode.remove();e.target.dataset.type&&await(0,l.searchCoctById)(e.target.dataset.id)})),(0,d.themeSwitcher)(),f.length?u(f):s.innerHTML='<li class="f-coctails__item">\n              You haven\'t added any favorite cocktails yet\n            </li>';
//# sourceMappingURL=f_coctail.90123a07.js.map
