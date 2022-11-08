import { getCoctById } from '../../api';
import { FAV_COCKTAIL } from '../favourites/fav_cocktails';
import sprite from '../../../images/svg/sprite.svg';

let ingrList = [];

export async function searchCoctById(id) {
  try {
    const { data } = await getCoctById(id);
    collectIngr(data.drinks);
    renderMarkup(...data.drinks, ingrList);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function collectIngr(newArr) {
  for (let i = 1; i <= 15; i++) {
    if (newArr[0][`strIngredient` + i] === null) return;

    if (newArr[0]['strMeasure' + i] === null) {
      return ingrList.push(newArr[0][`strIngredient` + i]);
    }

    ingrList.push(
      newArr[0][`strIngredient` + i] + ' ' + newArr[0][`strMeasure` + i]
    );
  }
}

function renderMarkup(data, ingredients) {
  const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
  const { strDrink, strDrinkThumb, strInstructions } = data;
  const isFav = actArr.find(item => item.strDrink === strDrink);
  const btn = isFav ? 'Remove from favorite' : 'Add to favorite';
  const markup = `
<div class="backdrop">
  <div class="modal">
    <button type="button" aria-label="Close button" class="modal__close">
      <svg class="modal__icon" width="24" height="24">
        <use href="${sprite}#icon-close-burger"></use>
      </svg>
    </button>
    <h2 class="coctail">${strDrink}</h2>
    <h3 class="coctail__instruction">INSTRUCTIONS:</h3>
    <p class="coctail__description">${strInstructions}
    </p>
    <img class="coctail__img" src=${strDrinkThumb} alt=${strDrink} />
    <h4 class="ingredients">INGREDIENTS</h4>
    <p class="ingredients__denominator">Per coctail</p>
    <ul class="ingredients__list">
       ${ingredients
         .map(ingr => `<li class="ingredients__items">✶ ${ingr}</li>`)
         .join('')}
    </ul>
    <button
      type="button"
      class="button modal__button--favorite"
      aria-label="${btn}"
    >
      ${btn}
    </button>
  </div>
</div>`;
  document.body.insertAdjacentHTML('beforeend', markup);
  document.querySelector('.modal__close').addEventListener('click', closeModal);
}

function closeModal(e) {
  document
    .querySelector('.modal__close')
    .removeEventListener('click', closeModal);
  document.querySelector('.backdrop').remove();
  ingrList = [];
}
