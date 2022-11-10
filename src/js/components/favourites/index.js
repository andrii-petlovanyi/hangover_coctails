import { FAV_COCKTAIL } from './fav_cocktails';
import sprite from '../../../images/svg/sprite.svg';
import { notFound } from '../error';
import { initTheme, resetTheme } from '../switcher/switcher';
// import * as modal from '../modal';

const refCocktList = document.querySelector('.js-add_f-coctail');
const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
const refForm = document.querySelector('.header__input');
refForm.addEventListener('submit', searchCockt);
refCocktList.addEventListener('click', deleteCard);

if (actArr.length) {
  renderMarkupList(actArr);
} else {
  renderErrorMarkup();
}

let themeSwitch = document.getElementById('themeSwitch');
if (themeSwitch) {
  initTheme();

  themeSwitch.addEventListener('change', function (event) {
    resetTheme();
  });
}

async function deleteCard(e) {
  if (e.target.tagName !== 'BUTTON') return;
  if (e.target.dataset.favid) {
    deleteFavFromLS(e.target.dataset.favid);
    e.target.parentNode.parentNode.remove();
    return;
  }
  // if (e.target.dataset.type) await modal.searchCoctById(e.target.dataset.id);
}

function renderMarkupList(data = []) {
  const mark = data
    .map(({ strDrink, strDrinkThumb, idDrink }) => {
      return `<li class="coctail-card">
      <img class="img" src=${strDrinkThumb} alt=${strDrink}/img>
      <h3 class="coctail-card__name">${strDrink}</h3>
      <div class="coctail-card__options">
        <button class="button-learn_more" data-id=${idDrink} data-type="learn">Learn more</button>
        <button class="button-add_to" data-favid=${idDrink} data-add="add">
          Remove
          <svg class="heart-icon" width="18" height="18">
            <use href="${sprite}#icon-heart_full"></use>
          </svg>
        </button>
      </div>
    </li>`;
    })
    .join('');
  refCocktList.innerHTML = mark;
}

function renderErrorMarkup() {
  const mark = `<li class="f-coctails__item">
              You haven't added any favorite cocktails yet
            </li>`;
  refCocktList.innerHTML = mark;
}

function deleteFavFromLS(id) {
  const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
  for (let i = 0; i < actArr.length; i++) {
    if (actArr[i].idDrink === id) {
      actArr.splice(i, 1);
      localStorage.setItem(FAV_COCKTAIL, JSON.stringify(actArr));
      return;
    }
  }
}

function searchCockt(e) {
  e.preventDefault();
  const searchQ = e.currentTarget.finder.value.trim();
  if (!searchQ) return;
  console.log(actArr);
  const result = actArr.filter(el =>
    el.strDrink.toLowerCase().includes(searchQ.toLowerCase())
  );

  if (!result.length) return (refCocktList.innerHTML = notFound);
  renderMarkupList(result);
}
