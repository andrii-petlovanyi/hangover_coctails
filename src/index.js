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
import {
  refHeaderJSMenu,
  refHeaderFavLink,
  refHeaderFavBar,
  refHeaderMenuOpen,
  refHeaderMenuClose,
  refHeaderMobMenu,
  refHeaderSwitcher,
} from './js/components/refs';
import { themeSwitcher } from './js/components/switcher/switcher';
//

getListCard();
themeSwitcher();

//

refCocktailList.addEventListener('click', cardBtnListenr);

lettersListRef.addEventListener(`click`, chooseLetter);
formSubmitRef.addEventListener('submit', onSubmitForm);

refHeaderJSMenu.addEventListener('mouseleave', () => {
  refHeaderFavBar.classList.remove('active');
});

refHeaderFavLink.addEventListener('mouseenter', () => {
  refHeaderFavBar.classList.add('active');
});

refHeaderMenuOpen.addEventListener('click', () => {
  refHeaderMobMenu.classList.toggle('open');
  refHeaderSwitcher.classList.toggle('open');
  document.querySelector('.input').classList.toggle('open');
  document.querySelector('.header__nav').classList.toggle('open');
  document.body.classList.toggle('overflow');
});

refHeaderMenuClose.addEventListener('click', () => {
  refHeaderMobMenu.classList.toggle('open');
  document.querySelector('.input').classList.toggle('open');
  document.querySelector('.header__nav').classList.toggle('open');
  refHeaderSwitcher.classList.toggle('open');
  document.body.classList.toggle('overflow');
});
