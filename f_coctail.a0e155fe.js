!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequiredd77;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequiredd77=a),a("iE7OH").register(JSON.parse('{"dlfMs":"f_coctail.a0e155fe.js","JQ8i3":"sprite.3f5ac9d6.svg","eeNKI":"placeholder.7c12bf5f.gif","kBqre":"f_ingredients.de08dfce.js","5NH4n":"index.51df2f7d.js"}'));var i,o=a("e3qpK"),s=a("gyjzY");i=a("aNJCr").getBundleURL("dlfMs")+a("iE7OH").resolve("JQ8i3");var l,d=a("g4tMw"),c=a("fmC3e"),f=a("i3SOf"),u=a("5M7hj"),g=a("1dj5Q"),_=a("lnx82");l=a("aNJCr").getBundleURL("dlfMs")+a("iE7OH").resolve("eeNKI"),a("3fu6U");const p=JSON.parse(localStorage.getItem(s.FAV_COCKTAIL))||[];function v(t=[]){const n=t.map((({strDrink:t,strDrinkThumb:n,idDrink:r})=>`<li class="coctail-card">\n      <img class="img lazyload" src="${e(l)}" data-srcset=${n} alt=${t}/img>\n      <h3 class="coctail-card__name">${t}</h3>\n      <div class="coctail-card__options">\n        <button class="button-learn_more" data-id=${r} data-type="learn">Learn more</button>\n        <button class="button-add_to" data-favid=${r} data-add="add">\n          Remove\n          <svg class="heart-icon" width="18" height="18">\n            <use href="${e(i)}#icon-heart_full"></use>\n          </svg>\n        </button>\n      </div>\n    </li>`)).join("");_.refCocktList.innerHTML=n}function h(){_.refCocktList.innerHTML=u.errorListFavCocktail}function m(){if(!(JSON.parse(localStorage.getItem(s.FAV_COCKTAIL))||[]).length)return h()}_.refFormSearch.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.finder.value.trim();if(!t)return;const n=p.filter((e=>e.strDrink.toLowerCase().includes(t.toLowerCase())));if(_.refFormSearch.reset(),!n.length)return _.refCocktList.innerHTML=d.notFound;v(n)})),_.refCocktList.addEventListener("click",(async function(e){if("BUTTON"!==e.target.tagName)return;if(e.target.dataset.favid)return function(e){const t=JSON.parse(localStorage.getItem(s.FAV_COCKTAIL))||[];for(let n=0;n<t.length;n++)if(t[n].idDrink===e)return t.splice(n,1),localStorage.setItem(s.FAV_COCKTAIL,JSON.stringify(t)),void m()}(e.target.dataset.favid),e.target.parentNode.parentNode.remove(),void function(){const e=JSON.parse(localStorage.getItem(s.FAV_COCKTAIL))||[];if(!e.length)return _.refCocktList.innerHTML=u.errorListFavCocktail;(0,g.initPagination)(e,v)}();e.target.dataset.type&&await(0,f.searchCoctById)(e.target.dataset.id,e.target.nextElementSibling)})),(0,o.headerInit)(),(0,c.themeSwitcher)(),p.length?(0,g.initPagination)(p,v):h()}();
//# sourceMappingURL=f_coctail.a0e155fe.js.map