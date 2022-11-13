import { headerInit } from '../header';
import { FAV_COCKTAIL } from './fav_cocktails';
import sprite from '../../../images/svg/sprite.svg';
import { notFound } from '../error';
import { themeSwitcher } from '../switcher/switcher';
import { searchCoctById } from '../modal';
import { errorListFavCocktail } from '../../templates';
import { initPagination } from '../pagination';
import { refFormSearch, refCocktList, refFormSearch } from '../refs';
import placeholder from '../../../images/placeholder.gif';
import 'lazysizes';

const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
refFormSearch.addEventListener('submit', searchCockt);
refCocktList.addEventListener('click', deleteCard);

headerInit();
themeSwitcher();

if (actArr.length) {
  initPagination(actArr, renderMarkupList);
} else {
  renderErrorMarkup();
}

async function deleteCard(e) {
  if (e.target.tagName !== 'BUTTON') return;
  if (e.target.dataset.favid) {
    deleteFavFromLS(e.target.dataset.favid);
    e.target.parentNode.parentNode.remove();
    reRenderCards();
    return;
  }
  if (e.target.dataset.type)
    await searchCoctById(e.target.dataset.id, e.target.nextElementSibling);
}

export function renderMarkupList(data = []) {
  const mark = data
    .map(({ strDrink, strDrinkThumb, idDrink }) => {
      return `<li class="coctail-card">
      <img class="img lazyload" src="${placeholder}" data-srcset=${strDrinkThumb} alt=${strDrink}/img>
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
  refCocktList.innerHTML = errorListFavCocktail;
}

function deleteFavFromLS(id) {
  const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
  for (let i = 0; i < actArr.length; i++) {
    if (actArr[i].idDrink === id) {
      actArr.splice(i, 1);
      localStorage.setItem(FAV_COCKTAIL, JSON.stringify(actArr));
      checkAfterDelCockt();
      return;
    }
  }
}

export function reRenderCards() {
  newArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
  initPagination(newArr, renderMarkupList);
}

function searchCockt(e) {
  e.preventDefault();
  const searchQ = e.currentTarget.finder.value.trim();
  if (!searchQ) return;
  const result = actArr.filter(el =>
    el.strDrink.toLowerCase().includes(searchQ.toLowerCase())
  );
  refFormSearch.reset();

  if (!result.length) return (refCocktList.innerHTML = notFound);
  renderMarkupList(result);
}

function checkAfterDelCockt() {
  const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
  if (!actArr.length) return renderErrorMarkup();
}
