import { FAV_COCKTAIL } from './fav_cocktails';
import sprite from '../../../images/svg/sprite.svg';
import { cardBtnListenr } from '../main';

const refCocktailList = document.querySelector('.coctails-list');
const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
refCocktailList.addEventListener('click', cardBtnListenr);

if (actArr.length) {
  renderMarkup(actArr);
} else {
  renderErrorMarkup();
}

function renderMarkup(data = []) {
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
  document.querySelector('.js-add_f-coctail').innerHTML = mark;
}

function renderErrorMarkup() {
  const mark = `<li class="f-coctails__item">
              You haven't added any favorite cocktails yet
            </li>`;
  document.querySelector('.js-add_f-coctail').innerHTML = mark;
}
