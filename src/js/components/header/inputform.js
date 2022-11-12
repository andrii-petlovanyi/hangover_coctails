import { renderMarkup } from '../main';
import { getCoctByName } from '../../api';
import { refFormSearch, refCocktailList, refInputFormSearch } from '../refs';
import { closeMobileMenu } from '.';
import { notFound } from '../error';
import { initPagination, container } from '../pagination';
import { removeActiveLetterClass } from '../hero/search-Letters';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '280px',
  height: '50px',
  position: 'right-top',
  distance: '',
  opacity: 1,
  borderRadius: '10px',
  rtl: false,
  timeout: 3000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: false,
  pauseOnHover: true,
  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  fontFamily: 'Quicksand',
  fontSize: '16px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'fade',
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic',
  fontAwesomeIconSize: '34px',
  success: {
    background: '#32c682',
    textColor: '#fff',
    childClassName: 'notiflix-notify-success',
    notiflixIconColor: 'rgba(255,255,255,0.9)',
    fontAwesomeClassName: 'fas fa-check-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(50,198,130,0.2)',
  },
  warning: {
    background: '#fe7031',
    textColor: '#fff',
    childClassName: 'notiflix-notify-failure',
    notiflixIconColor: 'rgba(255,255,255,0.6)',
    fontAwesomeClassName: 'fas fa-times-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(255,85,73,0.2)',
  },
});

let searchQuery = '';

export async function onSubmitForm(e) {
  e.preventDefault();
  removeActiveLetterClass();
  searchQuery = e.currentTarget.finder.value.trim();
  if (!searchQuery) {
    Notiflix.Notify.warning('Sorry, please enter the name of the cocktail.');
    return;
  }
  checkCloseModalAfterSearch();
  const { data } = await getCoctByName(searchQuery);
  if (!data.drinks) {
    container.innerHTML = '';
    document.querySelector('.main-title').textContent = '';
    refCocktailList.innerHTML = notFound;
    return;
  }
  document.querySelector('.main-title').textContent = 'Searching results';
  initPagination(data.drinks, renderMarkup);
  refFormSearch.reset();
}

function checkCloseModalAfterSearch() {
  const width = document.body.clientWidth;
  if (width > 767) return;
  closeMobileMenu();
  refFormSearch.reset();
  refInputFormSearch.blur();
}
