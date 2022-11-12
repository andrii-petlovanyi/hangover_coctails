import { getListCard, cardBtnListenr } from './js/components/main';
import { headerInit } from './js/components/header';
import {
  lettersListRef,
  chooseLetter,
} from './js/components/hero/search-Letters';
import { onSubmitForm } from './js/components/header/inputform';
import { refFormSearch, refCocktailList } from './js/components/refs';
import { themeSwitcher } from './js/components/switcher/switcher';
//

headerInit();
getListCard();
themeSwitcher();

//

refCocktailList.addEventListener('click', cardBtnListenr);
lettersListRef.addEventListener(`click`, chooseLetter);
refFormSearch.addEventListener('submit', onSubmitForm);
