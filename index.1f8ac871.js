function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequiredd77;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequiredd77=i),i.register("kyEFX",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.1f8ac871.js","7kCeP":"sprite.86d7718d.svg","91ZaO":"errorMobile1x.dfec4fcb.png","lJpI1":"errorMobile2x.4bc37850.png","90pxE":"errorTablet1x.60620f44.png","b9U6I":"errorTablet2x.671bd30d.png","l4hkW":"errorDesctop1x.60620f44.png","7FSI1":"errorDesctop2x.671bd30d.png","1Mf1J":"f_coctail.cee12afd.js"}'));var a,c=i("4ISRr"),s=i("aEubW");a=new URL(i("kyEFX").resolve("91ZaO"),import.meta.url).toString();var l;l=new URL(i("kyEFX").resolve("lJpI1"),import.meta.url).toString();var d;d=new URL(i("kyEFX").resolve("90pxE"),import.meta.url).toString();var u;u=new URL(i("kyEFX").resolve("b9U6I"),import.meta.url).toString();var f;f=new URL(i("kyEFX").resolve("l4hkW"),import.meta.url).toString();var m;m=new URL(i("kyEFX").resolve("7FSI1"),import.meta.url).toString();const _=`<div class="container search-coctail__error">\n<p class="search-coctail__title">Sorry, we didn't find any cocktail for you</p>\n\n<picture>\n    <source\n      srcset="\n      ${t(a)}  1x,\n      ${t(l)}  2x\n      "\n      media="(max-width: 767.98px)"\n    />\n    <source\n      srcset="\n      ${t(d)}    1x,\n      ${t(u)} 2x\n      "\n      media="(max-width: 1279px)"\n    />\n    <source\n      srcset="\n      ${t(f)}    1x,\n      ${t(m)} 2x\n      "\n      media="(min-width: 1280px)"\n    />\n    <img\n      class="coctail__error-img"\n      src="./images/noCoctails/errorMobile1x.png"\n      alt="couple in restaurant"\n    />\n  </picture>\n</div>`;var p;p=new URL(i("kyEFX").resolve("7kCeP"),import.meta.url).toString();const v=document.querySelector(".hero__list");(0,c.getListCard)();document.querySelector(".coctails-list").addEventListener("click",c.cardBtnListenr),v.addEventListener("click",(function(e){if(!e.target.classList.contains("hero__item"))return;const r=e.target,n=r.closest(".hero__item");!function(){const e=document.querySelector(".letter__is-active");e&&e.classList.remove("letter__is-active")}(),n.classList.add("letter__is-active");const o=r.textContent;document.querySelector(".hero__js-letter").innerHTML=o,async function(e){try{const{data:n}=await(0,s.getCoctByFirstLet)(e);if(!n.drinks)return r=_,document.querySelector(".main-title").textContent="",void(document.querySelector(".coctails-list").innerHTML=r);!function(e=[]){const r=JSON.parse(localStorage.getItem("favourites_coctails"))||[],n=e.map((({strDrink:e,strDrinkThumb:n,idDrink:o})=>{const i=r.find((e=>e.idDrink===o));return`<li class="coctail-card">\n        <img class="img" src=${n} alt=${e}/img>\n        <h3 class="coctail-card__name">${e}</h3>\n        <div class="coctail-card__options">\n          <button class="button-learn_more" data-id=${o} data-type="learn">Learn more</button>\n          ${i?` <button class="button-add_to" data-favid=${o} data-add="add">\n            Remove\n            <svg class="heart-icon" width="18" height="18">\n              <use href="${t(p)}#icon-heart_full"></use>\n            </svg>\n          </button>`:` <button class="button-add_to" data-favid=${o} data-add="add">\n            Add to\n            <svg class="heart-icon" width="18" height="18">\n              <use href="${t(p)}#icon-Heart"></use>\n            </svg>\n          </button>`}\n        </div>\n      </li>`})).join("");document.querySelector(".main-title").textContent="Searching results",document.querySelector(".coctails-list").innerHTML=n}(n.drinks)}catch(e){}var r}(o)})),formSubmitRef.addEventListener("submit",onSubmitForm);
//# sourceMappingURL=index.1f8ac871.js.map
