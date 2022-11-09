import { FAV_COCKTAIL } from './fav_cocktails';
import sprite from '../../../images/svg/sprite.svg';
import { searchCoctById } from '../modal';

const refCocktList = document.querySelector('.js-add_f-coctail');
const actArr = JSON.parse(localStorage.getItem(FAV_COCKTAIL)) || [];
refCocktList.addEventListener('click', deleteCard);

if (actArr.length) {
  renderMarkup(actArr);
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

function renderMarkup(data = []) {
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

// function cardBtnListenr(e) {
//   if (e.target.dataset.type) searchCoctById(e.target.dataset.id);
// }

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
