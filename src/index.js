import { getListCard } from './js/components/main';
import { searchCoctById } from './js/components/modal';
import { btnAddFav } from './js/components/favourites/fav_cocktails';
//

getListCard();

//
const refCocktailList = document.querySelector('.coctails-list');
refCocktailList.addEventListener('click', btnLearnMore);
function btnLearnMore(e) {
  if (e.target.dataset.type) searchCoctById(e.target.dataset.id);
  if (e.target.dataset.add) btnAddFav(e.target.dataset.favid);
}
