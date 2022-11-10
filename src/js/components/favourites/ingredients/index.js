import { FAV_INGREDIENTS } from './fav_ingredients';
import sprite from '../../../../images/svg/sprite.svg';
import { notFound } from '../../error';
import { themeSwitcher } from '../../switcher/switcher';
import { searchIngrByName } from '../../modal/modalIngr';
import {
  refIngrList,
  refFormSearch,
  refHeaderJSMenu,
  refHeaderFavLink,
  refHeaderFavBar,
  refHeaderMenuOpen,
  refHeaderMenuClose,
  refHeaderMobMenu,
} from '../../refs';
import { errorListFavCocktail } from '../../../templates';

const actArr = JSON.parse(localStorage.getItem(FAV_INGREDIENTS)) || [];
refFormSearch.addEventListener('submit', searchCockt);
refIngrList.addEventListener('click', chooseBtnIngr);

//header

refHeaderJSMenu.addEventListener('mouseleave', () => {
  refHeaderFavBar.classList.remove('active');
});

refHeaderFavLink.addEventListener('mouseenter', () => {
  refHeaderFavBar.classList.add('active');
});

refHeaderMenuOpen.addEventListener('click', () => {
  refHeaderMobMenu.classList.toggle('open');
  document.body.classList.toggle('overflow');
});

refHeaderMenuClose.addEventListener('click', () => {
  refHeaderMobMenu.classList.toggle('open');
  document.body.classList.toggle('overflow');
});

// header

themeSwitcher();

function chooseBtnIngr(e) {
  if (e.target.tagName !== 'BUTTON') return;
  if (e.target.dataset.name) {
    searchIngrByName(e.target.dataset.name);
  }
  if (e.target.dataset.fav) {
    deleteFavIngrFromLS(e.target.dataset.fav);
    e.target.parentNode.parentNode.remove();
  }
}

if (actArr.length) {
  renderMarkup(actArr);
} else {
  renderErrorMarkup();
}

function renderMarkup(data = []) {
  const mark = data
    .map(({ strIngredient, strType }) => {
      return `<li class="ingredients-card">
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
    })
    .join('');
  refIngrList.innerHTML = mark;
}

function renderErrorMarkup() {
  refIngrList.innerHTML = errorListFavCocktail;
}

function deleteFavIngrFromLS(id) {
  const actArr = JSON.parse(localStorage.getItem(FAV_INGREDIENTS)) || [];
  for (let i = 0; i < actArr.length; i++) {
    if (actArr[i].strIngredient === id) {
      actArr.splice(i, 1);
      localStorage.setItem(FAV_INGREDIENTS, JSON.stringify(actArr));
      checkAfterDelIngr();
      return;
    }
  }
}

function searchCockt(e) {
  e.preventDefault();
  const searchQ = e.currentTarget.finder.value.trim();
  if (!searchQ) return;
  const result = actArr.filter(el =>
    el.strIngredient.toLowerCase().includes(searchQ.toLowerCase())
  );

  if (!result.length) return (refIngrList.innerHTML = notFound);
  renderMarkup(result);
}

function checkAfterDelIngr() {
  const actArr = JSON.parse(localStorage.getItem(FAV_INGREDIENTS)) || [];
  if (!actArr.length) return renderErrorMarkup();
}
