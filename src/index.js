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
