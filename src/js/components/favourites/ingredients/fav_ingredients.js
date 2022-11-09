import { getIngrByName } from '../../../api';

export const FAV_INGREDIENTS = 'favourites_ingredients';

export async function addBtnFavIngr(name) {
  try {
    const { data } = await getIngrByName(name);
    const { strIngredient, strDescription, strAlcohol, strABV, strType } =
      data.ingredients[0];
    const actArr = JSON.parse(localStorage.getItem(FAV_INGREDIENTS)) || [];
    const ingrArr = {
      strIngredient,
      strDescription,
      strAlcohol,
      strABV,
      strType,
    };

    for (let i = 0; i < actArr.length; i++) {
      if (actArr[i].strIngredient === strIngredient) {
        actArr.splice(i, 1);
        localStorage.setItem(FAV_INGREDIENTS, JSON.stringify(actArr));

        return;
      }
    }

    actArr.push(ingrArr);
    localStorage.setItem(FAV_INGREDIENTS, JSON.stringify(actArr));
    console.log(data.ingredients[0]);
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
