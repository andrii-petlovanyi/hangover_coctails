import sprite from '../../../images/svg/sprite.svg';
import { getIngrByName } from '../../api';
import {
  addBtnFavIngr,
  FAV_INGREDIENTS,
} from '../favourites/ingredients/fav_ingredients';

export async function onClickIngr(e) {
  const searchQ = e.target.dataset.name;
  await searchIngrByName(searchQ);
}

export async function searchIngrByName(name) {
  const { data } = await getIngrByName(name);
  renderMarkup(data.ingredients[0]);
}

function renderMarkup(data) {
  const actArr = JSON.parse(localStorage.getItem(FAV_INGREDIENTS)) || [];
  const { strIngredient, strDescription, strAlcohol, strABV, strType } = data;
  const isFav = actArr.find(item => item.strIngredient === strIngredient);
  const btn = isFav ? 'Remove from favorite' : 'Add to favorite';
  const markup = `<div class="backdrop--ingredient" >
  <div class="modal--ingredient">
    <button type="button" aria-label="Close button" class="modal__close js_modal-ingr">
      <svg class="modal__icon" width="24" height="24">
        <use href="${sprite}#icon-close-burger"></use>
      </svg>
    </button>
    <h2 class="ingredient">${strIngredient}</h2>
    <h3 class="ingredient__sort">${strType ? strType : 'no info'}</h3>
    <div class="line"></div>
    <p class="ingredient__description">
      ${
        strDescription
          ? strDescription
          : 'sorry, but we not information about this ingredient...'
      }
    </p>
    <ul class="ingredient__list">
      <li class="ingredient__items">✶ Alcohol: ${strAlcohol}</li>
      <li class="ingredient__items">✶ Alcohol by volume: ${
        strABV ? strABV + ' %' : 'no information'
      }</li>
    </ul>
    <button
      type="button"
      class="button js-mod-ingr-add modal__button--favorite--ingredients"
      aria-label="${btn}" data-name="${strIngredient}"
    >
      ${btn}
    </button>
  </div>
</div>`;
  document.body.insertAdjacentHTML('beforeend', markup);
  document
    .querySelector('.js_modal-ingr')
    .addEventListener('click', closeModalIngr);
  document
    .querySelector('.js-mod-ingr-add')
    .addEventListener('click', addToFavIngr);
}

function closeModalIngr() {
  document
    .querySelector('.js_modal-ingr')
    .removeEventListener('click', closeModalIngr);
  document
    .querySelector('.js-mod-ingr-add')
    .removeEventListener('click', addToFavIngr);
  document.querySelector('.backdrop--ingredient').remove();
}

async function addToFavIngr(e) {
  return await addBtnFavIngr(e.target.dataset.name);
}
