import { getCoctById } from './../../api';
import sprite from '../../../images/svg/sprite.svg';

export const FAV_COCKTAIL = 'favourites_coctails';

// Local Storage
export async function btnAddFav(id, type) {
  try {
    const { data } = await getCoctById(id);
    const { strDrink, strDrinkThumb, idDrink } = data.drinks[0];
    const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
    const drinkArr = {
      strDrink,
      strDrinkThumb,
      idDrink,
    };
    for (let i = 0; i < actArr.length; i++) {
      if (actArr[i].idDrink === idDrink) {
        actArr.splice(i, 1);
        localStorage.setItem(FAV_COCKTAIL, JSON.stringify(actArr));
        if (!type) {
          addBtnCard(idDrink);
        } else {
          addBtnModal(idDrink);
        }
        return;
      }
    }
    actArr.push(drinkArr);
    localStorage.setItem(FAV_COCKTAIL, JSON.stringify(actArr));

    if (!type) {
      removeBtnCard(idDrink);
    } else {
      removeBtnModal(idDrink);
    }
  } catch (error) {
    console.log(error);
  }
}
export function removeBtnCard(id) {
  document.querySelector(`button[data-favid="${id}"]`).innerHTML = `Remove
          <svg class="heart-icon" width="18" height="18">
            <use href="${sprite}#icon-heart_full"></use>
          </svg>`;
}
export function addBtnCard(id) {
  document.querySelector(`button[data-favid="${id}"]`).innerHTML = `Add to
          <svg class="heart-icon" width="18" height="18">
            <use href="${sprite}#icon-Heart"></use>
          </svg>`;
}

export function removeBtnModal() {
  document.querySelector('.modal__button--favorite').textContent =
    'Remove from favorite';
}
export function addBtnModal() {
  document.querySelector('.modal__button--favorite').textContent =
    'Add to favorite';
}
