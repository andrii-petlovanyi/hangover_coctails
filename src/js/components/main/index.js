import { getRandCoctList } from '../../api';
import { FAV_COCKTAIL, btnAddFav } from '../favourites/fav_cocktails';
import { searchCoctById } from '../modal';
import sprite from '../../../images/svg/sprite.svg';

export async function getListCard() {
  try {
    const { data } = await getRandCoctList();
    const cocktailsList = lengthCocktailList(data.drinks);
    renderMarkup(cocktailsList);
  } catch (error) {
    console.log(error);
  }
}
function lengthCocktailList(arr = []) {
  if (document.body.clientWidth <= 767) {
    return arr.splice(0, 3);
  } else if (
    document.body.clientWidth > 768 &&
    document.body.clientWidth < 1279
  ) {
    return arr.splice(0, 6);
  } else if (document.body.clientWidth > 1280) {
    console.log(document.body.clientWidth);
    return arr.splice(0, 9);
  }
}
export function renderMarkup(data = []) {
  const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
  const mark = data
    .map(({ strDrink, strDrinkThumb, idDrink }) => {
      const isFav = actArr.find(item => item.idDrink === idDrink);
      const btn = isFav
        ? ` <button class="button-add_to" data-favid=${idDrink} data-add="add">
          Remove
          <svg class="heart-icon" width="18" height="18">
            <use href="${sprite}#icon-heart_full"></use>
          </svg>
        </button>`
        : ` <button class="button-add_to" data-favid=${idDrink} data-add="add">
          Add to
          <svg class="heart-icon" width="18" height="18">
            <use href="${sprite}#icon-Heart"></use>
          </svg>
        </button>`;
      return `<li class="coctail-card">
      <img class="img" src=${strDrinkThumb} alt=${strDrink}/img>
      <h3 class="coctail-card__name">${strDrink}</h3>
      <div class="coctail-card__options">
        <button class="button-learn_more" data-id=${idDrink} data-type="learn">Learn more</button>
        ${btn}
      </div>
    </li>`;
    })
    .join('');
  document
    .querySelector('.coctails-list')
    .insertAdjacentHTML('beforeend', mark);
}

export function cardBtnListenr(e) {
  if (e.target.dataset.type) searchCoctById(e.target.dataset.id);
  if (e.target.dataset.add) btnAddFav(e.target.dataset.favid);
}
