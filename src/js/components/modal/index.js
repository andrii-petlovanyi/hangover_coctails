import { getCoctById } from '../../api';
import sprite from '../../../images/svg/sprite.svg';

const ingrList = [];

export async function searchCoctById() {
  try {
    const { data } = await getCoctById('11007');
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
  const { strDrink, strDrinkThumb, strInstructions } = data;
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
  document.body.innerHTML = markup;
}
