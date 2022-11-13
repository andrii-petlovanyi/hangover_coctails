import { getCoctByFirstLet } from '../../api';
import { notFound } from '../error';
import sprite from '../../../images/svg/sprite.svg';
import { initPagination, container } from '../pagination';
import { refLetterSeList } from '../refs';

const FAV_COCKTAIL = 'favourites_coctails';
export const lettersListRef = refLetterSeList;

export function chooseLetter(evt) {
  const isLetter = evt.target.classList.contains(`hero__item`);
  if (!isLetter) {
    return;
  }
  const activeLetter = evt.target;
  const parentRef = activeLetter.closest(`.hero__item`);
  removeActiveLetterClass();
  addActiveLetterClass(parentRef);

  const choosedLetter = activeLetter.textContent;
  const spanEl = document.querySelector(`.hero__js-letter`);
  spanEl.innerHTML = choosedLetter;

  addMarkup(choosedLetter);
}
async function addMarkup(letter) {
  try {
    const { data } = await getCoctByFirstLet(letter);
    if (!data.drinks) {
      container.innerHTML = '';
      return renderError(notFound);
    }
    initPagination(data.drinks, renderMarkup);
  } catch (error) {}
}

export function removeActiveLetterClass() {
  const currentActiveLetter = document.querySelector(`.letter__is-active`);

  if (currentActiveLetter) {
    currentActiveLetter.classList.remove(`letter__is-active`);
  }
}
function addActiveLetterClass(letter) {
  letter.classList.add(`letter__is-active`);
}

function renderMarkup(data = []) {
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
  document.querySelector('.main-title').textContent = 'Searching results';
  document.querySelector(`.js-main-coct`).innerHTML = mark;
}

function renderError(markup) {
  document.querySelector('.main-title').textContent = '';
  document.querySelector(`.js-main-coct`).innerHTML = markup;
}
