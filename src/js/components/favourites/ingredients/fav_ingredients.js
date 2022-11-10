import { getIngrByName } from '../../../api';

export const FAV_INGREDIENTS = 'favourites_ingredients';

export async function addBtnFavIngr(name) {
  try {
    const { data } = await getIngrByName(name);
    const { strIngredient, strDescription, strAlcohol, strABV, strType } =
      data.ingredients[0];
    const actArr = JSON.parse(localStorage.getItem(FAV_INGREDIENTS)) || [];
    const refModIngr = document.querySelector('.js-mod-ingr-add');
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
        addBtnModal(refModIngr);
        return;
      }
    }
    removeBtnModal(refModIngr);
    actArr.push(ingrArr);
    localStorage.setItem(FAV_INGREDIENTS, JSON.stringify(actArr));
    console.log(data.ingredients[0]);
  } catch (error) {
    console.log(error);
  }
}

export function removeBtnModal(refModIngr) {
  refModIngr.textContent = 'Remove from favorite';
}
export function addBtnModal(refModIngr) {
  refModIngr.textContent = 'Add to favorite';
}
