import { getIngrByName } from '../../../api';
import sprite from '../../../../images/svg/sprite.svg';
import { refIngrList } from '../../refs';

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
        checkRemoveCardFav(strIngredient);
        return;
      }
    }
    removeBtnModal(refModIngr);
    actArr.push(ingrArr);
    localStorage.setItem(FAV_INGREDIENTS, JSON.stringify(actArr));
    checkAddAgainCardFav(ingrArr);
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

function checkRemoveCardFav(name) {
  const isFavPage = document.querySelector('.f_ingredients') ? true : false;
  if (isFavPage) {
    document
      .querySelector(`button[data-fav="${name}"]`)
      .parentElement.parentElement.remove();
  }
}

function checkAddAgainCardFav(data) {
  const isFavPage = document.querySelector('.f_ingredients') ? true : false;
  if (isFavPage) {
    const { strIngredient, strType } = data;
    const mark = `<li class="ingredients-card">
          <h3 class="ingredients__name">${strIngredient}</h3>
          <h5 class="ingredients__type">${strType ? strType : 'no info'}</h5>
          <div class="ingredients-card__options">
            <button class="button-learn_more" data-name="${strIngredient}">Learn more</button>
            <button class="button-remove" data-fav="${strIngredient}">
              Remove
              <svg class="heart-icon" width="18" height="18">
                <use href="${sprite}#icon-heart_full" ></use>
              </svg>
            </button>
          </div>
        </li>`;
    refIngrList.insertAdjacentHTML('beforeend', mark);
  }
}
