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
import { themeSwitcher } from './js/components/switcher/switcher';
//

getListCard();
themeSwitcher();

//

refCocktailList.addEventListener('click', cardBtnListenr);

lettersListRef.addEventListener(`click`, chooseLetter);
formSubmitRef.addEventListener('submit', onSubmitForm);
