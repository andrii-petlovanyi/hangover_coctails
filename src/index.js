import { getListCard, cardBtnListenr } from './js/components/main';
import {
  lettersListRef,
  chooseLetter,
} from './js/components/hero/search-Letters';
//

getListCard();

//
const refCocktailList = document.querySelector('.coctails-list');
refCocktailList.addEventListener('click', cardBtnListenr);

lettersListRef.addEventListener(`click`, chooseLetter);

// SWITCHER
var themeSwitch = document.getElementById('themeSwitch');
if (themeSwitch) {
  initTheme();

  themeSwitch.addEventListener('change', function (event) {
    resetTheme();
  });

  function initTheme() {
    var darkThemeSelected =
      localStorage.getItem('themeSwitch') !== null &&
      localStorage.getItem('themeSwitch') === 'dark';

    themeSwitch.checked = darkThemeSelected;

    if (darkThemeSelected) {
      document
        .querySelector('.hero__search')
        .setAttribute('data-theme', 'dark-text');
      document
        .querySelector('.main-title')
        .setAttribute('data-theme', 'dark-text');
    } else {
      document
        .querySelector('.hero__search')
        .removeAttribute('data-theme', 'dark-text');
      document
        .querySelector('.main-title')
        .removeAttribute('data-theme', 'dark-text');
    }

    darkThemeSelected
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme');
  }

  function resetTheme() {
    if (themeSwitch.checked) {
      document.body.setAttribute('data-theme', 'dark');
      document
        .querySelector('.hero__search')
        .setAttribute('data-theme', 'dark-text');
      document
        .querySelector('.main-title')
        .setAttribute('data-theme', 'dark-text');

      localStorage.setItem('themeSwitch', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      document
        .querySelector('.hero__search')
        .removeAttribute('data-theme', 'dark-text');
      document
        .querySelector('.main-title')
        .removeAttribute('data-theme', 'dark-text');

      localStorage.removeItem('themeSwitch');
    }
  }
}
