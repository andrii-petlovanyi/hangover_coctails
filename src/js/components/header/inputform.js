import { renderMarkup } from '../main';
import { getCoctByName } from '../../api';
import { notFound } from '../error';
import { initPagination } from '../pagination';
import Notiflix from 'notiflix';

export const formSubmitRef = document.querySelector('.header__input');
export const submitBtnRef = document.querySelector('.input__btn');
export const refCocktailList = document.querySelector('.js-main-coct');

let searchQuery = '';

export async function onSubmitForm(e) {
  e.preventDefault();
  searchQuery = e.currentTarget.finder.value.trim();
  if (!searchQuery) {
    Notiflix.Notify.failure('Sorry, please enter the name of the cocktail.');
    return;
  }
  const { data } = await getCoctByName(searchQuery);
  if (!data.drinks) return (refCocktailList.innerHTML = notFound);
  // renderMarkup(data.drinks);
  initPagination(data.drinks, renderMarkup);
}
