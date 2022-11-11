import { getCoctById } from '../../api';
import { cardBtnListenr } from '../main';
import { FAV_COCKTAIL, btnAddFav } from '../favourites/fav_cocktails';
import { onClickIngr } from './modalIngr';
import sprite from '../../../images/svg/sprite.svg';

export let ingrList = [];
export let ingrNameList = [];
let refFav = '';

export async function searchCoctById(id, addFav) {
  try {
    refFav = addFav;
    const { data } = await getCoctById(id);
    collectIngr(data.drinks);
    renderMarkup(...data.drinks, ingrList);
    setTimeout(modalDelay, 30);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function collectIngr(newArr = []) {
  for (let i = 1; i <= 15; i++) {
    if (newArr[0][`strIngredient` + i] === null) return;
    ingrNameList.push(newArr[0][`strIngredient` + i]);

    if (newArr[0]['strMeasure' + i] === null) {
      return ingrList.push(newArr[0][`strIngredient` + i]);
    }

    ingrList.push(
      newArr[0][`strIngredient` + i] + ' ' + newArr[0][`strMeasure` + i]
    );
  }
}

export function renderMarkup(data, ingredients) {
  const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
  const { strDrink, strDrinkThumb, strInstructions, idDrink } = data;
  const isFav = actArr.find(item => item.strDrink === strDrink);
  const btn = isFav ? 'Remove from favorite' : 'Add to favorite';
  const markup = `
<div class="backdrop is__hidden">
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
             `<li class="ingredients__items" data-name="${ingrNameList[ind]}">✶ ${ingr}</li>`
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

export function closeModal() {
  modalDelay();
  document
    .querySelector('.modal__close')
    .removeEventListener('click', closeModal);
  document.querySelector('.modal').removeEventListener('click', cardBtnListenr);
  setTimeout(removeModalMark, 400);
  ingrList = [];
  ingrNameList = [];
}

function modalDelay() {
  document.querySelector('.backdrop').classList.toggle('is__hidden');
}

function removeModalMark() {
  document.querySelector('.backdrop').remove();
}

export async function modalBtnListener(e) {
  if (e.target.dataset.add)
    return await btnAddFav(e.target.dataset.favid, 'modal', refFav);
}
