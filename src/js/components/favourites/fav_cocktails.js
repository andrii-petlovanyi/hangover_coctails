import { getCoctById } from './../../api';
import sprite from '../../../images/svg/sprite.svg';
import { refCocktList } from '../refs';
import { favCardBtnRemove, favCardBtnAdd } from '../../templates';

export const FAV_COCKTAIL = 'favourites_coctails';

export async function btnAddFav(id, type, refFav) {
  try {
    const { data } = await getCoctById(id);
    const { strDrink, strDrinkThumb, idDrink } = data.drinks[0];
    const refBtnFavModal = document.querySelector('.modal__button--favorite');
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
          addBtnModal(refBtnFavModal);
          checkRemoveCardFav(idDrink);
          refFav.innerHTML = favCardBtnAdd;
        }
        return;
      }
    }
    actArr.push(drinkArr);
    localStorage.setItem(FAV_COCKTAIL, JSON.stringify(actArr));

    if (!type) {
      removeBtnCard(idDrink);
    } else {
      removeBtnModal(refBtnFavModal);
      checkAddAgainCardFav(drinkArr);
      refFav.innerHTML = favCardBtnRemove;
    }
  } catch (error) {
    console.log(error);
  }
}
export function removeBtnCard(id) {
  document.querySelector(`button[data-favid="${id}"]`).innerHTML =
    favCardBtnRemove;
}
export function addBtnCard(id) {
  document.querySelector(`button[data-favid="${id}"]`).innerHTML =
    favCardBtnAdd;
}

export function removeBtnModal(refBtnFavModal) {
  refBtnFavModal.textContent = 'Remove from favorite';
}
export function addBtnModal(refBtnFavModal) {
  refBtnFavModal.textContent = 'Add to favorite';
}

function checkRemoveCardFav(id) {
  const isFavPage = document.querySelector('.f-coctails') ? true : false;
  if (isFavPage) {
    document
      .querySelector(`button[data-favid="${id}"]`)
      .parentElement.parentElement.remove();
  }
}

function checkAddAgainCardFav(data) {
  const isFavPage = document.querySelector('.f-coctails') ? true : false;
  if (isFavPage) {
    const { strDrink, strDrinkThumb, idDrink } = data;
    const mark = `<li class="coctail-card">
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
    refCocktList.insertAdjacentHTML('beforeend', mark);
  }
}
