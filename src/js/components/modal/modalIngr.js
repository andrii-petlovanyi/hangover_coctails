import sprite from '../../../images/svg/sprite.svg';
import { getIngrByName } from '../../api';

export async function onClickIngr(e) {
  const searchQ = e.target.dataset.name;
  await searchIngrByName(searchQ);
}

export async function searchIngrByName(name) {
  const { data } = await getIngrByName(name);
  console.log(data.ingredients);
  renderMarkup(data.ingredients[0]);
}

function renderMarkup(data) {
  const { strIngredient, strDescription, strAlcohol, strABV, strType } = data;
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
        strABV ? strABV : 'no information'
      }</li>
    </ul>
    <button
      type="button"
      class="button modal__button--favorite--ingredients"
      aria-label="Add to favorite"
    >
      Add to favorite
    </button>

    <!-- <button
      type="button"
      class="button modal__button--remove"
      aria-label="Remove from favorite"
    >
      Remove from favorite
    </button> -->
  </div>
</div>`;
  document.querySelector('.backdrop').insertAdjacentHTML('beforeend', markup);
  document
    .querySelector('.js_modal-ingr')
    .addEventListener('click', closeModalIngr);
}

function closeModalIngr() {
  document
    .querySelector('.js_modal-ingr')
    .removeEventListener('click', closeModalIngr);
  document.querySelector('.backdrop--ingredient').remove();
}
