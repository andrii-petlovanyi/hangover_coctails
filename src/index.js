import { getRandCoctList, getCoctById } from './js/api';
import sprite from './images/svg/sprite.svg';
async function getListCard() {
  try {
    const { data } = await getRandCoctList();
    const cocktailsList = lengthCocktailList(data.drinks);
    renderMarkup(cocktailsList);
  } catch (error) {}
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

function renderMarkup(data = []) {
  const mark = data
    .map(
      ({ strDrink, strDrinkThumb, idDrink }) => `<li class="coctail-card">
      <img class="img" src=${strDrinkThumb} alt=${strDrink}/img>
      <h3 class="coctail-card__name">${strDrink}</h3>
      <div class="coctail-card__options">
        <button class="button-learn_more" data-id=${idDrink} data-type="learn">Learn more</button>
        <button class="button-add_to" data-id=${idDrink} data-add="add">
          Add to
          <svg class="heart-icon" width="18" height="18">
            <use href="${sprite}#icon-Heart"></use>
          </svg>
        </button>
      </div>
    </li>`
    )
    .join('');
  document
    .querySelector('.coctails-list')
    .insertAdjacentHTML('beforeend', mark);
}

getListCard();

