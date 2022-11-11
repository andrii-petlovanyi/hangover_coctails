import { getCoctById } from './../../api';
import { favCardBtnRemove, favCardBtnAdd } from '../../templates';

export const FAV_COCKTAIL = 'favourites_coctails';

// Local Storage
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
  const refFav = document.querySelector('.f-coctails');
  const isFavPage = refFav ? true : false;
  if (isFavPage) {
    document
      .querySelector(`button[data-favid="${id}"]`)
      .parentElement.parentElement.remove();
  }
}
