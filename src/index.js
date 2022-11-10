import { getListCard, cardBtnListenr } from './js/components/main';
import {
  lettersListRef,
  chooseLetter,
} from './js/components/hero/search-Letters';
import {
  formSubmitRef,
  refCocktailList,
  onSubmitForm,
} from './js/components/header/inputform';
//

getListCard();

//
refCocktailList.addEventListener('click', cardBtnListenr);

lettersListRef.addEventListener(`click`, chooseLetter);
formSubmitRef.addEventListener('submit', onSubmitForm);

// import { initTheme, resetTheme } from './js/components/switcher/switcher';
// let themeSwitch = document.getElementById('themeSwitch');
// if (themeSwitch) {
//   initTheme();

//   themeSwitch.addEventListener('change', function (event) {
//     resetTheme();
//   });
// }
