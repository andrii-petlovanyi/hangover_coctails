import { getCoctById } from './../../api';
import sprite from '../../../images/svg/sprite.svg';

export const FAV_COCKTAIL = 'favourites_coctails';

// Local Storage
export async function btnAddFav(id) {
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
        console.log(JSON.parse(localStorage.getItem(FAV_COCKTAIL)));
        test(idDrink);
        return;
      }
    }
    actArr.push(drinkArr);
    localStorage.setItem(FAV_COCKTAIL, JSON.stringify(actArr));
    addBtn(idDrink);
  } catch (error) {}
}
export function addBtn(id) {
  document.querySelector(`button[data-favid="${id}"]`).innerHTML = `Remove
          <svg class="heart-icon" width="18" height="18">
            <use href="${sprite}#icon-Heart"></use>
          </svg>`;
}
export function test(id) {
  document.querySelector(`button[data-favid="${id}"]`).innerHTML = `Add to
          <svg class="heart-icon" width="18" height="18">
            <use href="${sprite}#icon-Heart"></use>
          </svg>`;
}
