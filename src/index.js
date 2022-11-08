import { getListCard, cardBtnListenr } from './js/components/main';
import { searchCoctById } from './js/components/modal';
import { btnAddFav } from './js/components/favourites/fav_cocktails';
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
