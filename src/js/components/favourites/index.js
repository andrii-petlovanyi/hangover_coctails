import { FAV_COCKTAIL, btnAddFav } from './fav_cocktails';
import sprite from '../../../images/svg/sprite.svg';
import { onClickIngr } from '../modal/modalIngr';
// import { renderMarkup, collectIngr } from '../modal/index';

const refCocktList = document.querySelector('.js-add_f-coctail');
const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
refCocktList.addEventListener('click', deleteCard);

///
let ingredientsList = [];
let ingredientsNameList = [];
async function searchCoctById(id) {
  try {
    const { data } = await getCoctById(id);
    collectIngredients(data.drinks);
    renderMarkupModal(...data.drinks, ingredientsList);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function collectIngredients(newArr = []) {
  for (let i = 1; i <= 15; i++) {
    if (newArr[0][`strIngredient` + i] === null) return;
    ingredientsNameList.push(newArr[0][`strIngredient` + i]);

    if (newArr[0]['strMeasure' + i] === null) {
      return ingredientsList.push(newArr[0][`strIngredient` + i]);
    }

    ingredientsList.push(
      newArr[0][`strIngredient` + i] + ' ' + newArr[0][`strMeasure` + i]
    );
  }
}

function renderMarkupModal(data, ingredients) {
  const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
  const { strDrink, strDrinkThumb, strInstructions, idDrink } = data;
  const isFav = actArr.find(item => item.strDrink === strDrink);
  const btn = isFav ? 'Remove from favorite' : 'Add to favorite';
  const markup = `
<div class="backdrop">
  <div class="modal">
    <button type="button" aria-label="Close button" class="modal__close" >
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
         .map(
           (ingr, ind) =>
             `<li class="ingredients__items" data-name="${ingredientsNameList[ind]}">✶ ${ingr}</li>`
         )
         .join('')}
    </ul>
    <button
      type="button"
      class="button modal__button--favorite"
      aria-label="${btn}"
      data-add="add" data-favid=${idDrink}
    >
      ${btn}
    </button>
  </div>
</div>`;
  document.body.insertAdjacentHTML('beforeend', markup);
  document.querySelector('.modal__close').addEventListener('click', closeModal);
  document.querySelector('.modal').addEventListener('click', modalBtnListener);
  document
    .querySelector('.ingredients__list')
    .addEventListener('click', onClickIngr);
}

export function closeModal(e) {
  document
    .querySelector('.modal__close')
    .removeEventListener('click', closeModal);
  document.querySelector('.modal').removeEventListener('click', cardBtnListenr);
  document.querySelector('.backdrop').remove();
  ingrList = [];
  ingrNameList = [];
}

export function modalBtnListener(e) {
  if (e.target.dataset.add) return btnAddFav(e.target.dataset.favid, 'modal');
}

///

if (actArr.length) {
  renderMarkupList(actArr);
} else {
  renderErrorMarkup();
}

function deleteCard(e) {
  if (e.target.tagName !== 'BUTTON') return;
  if (e.target.dataset.favid) {
    deleteFavFromLS(e.target.dataset.favid);
    e.target.parentNode.parentNode.remove();
    return;
  }
  if (e.target.dataset.type) return searchCoctById(e.target.dataset.id);
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
