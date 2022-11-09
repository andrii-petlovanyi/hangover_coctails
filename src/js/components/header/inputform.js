import { renderMarkup } from '../main';
import { getCoctByName } from '.../api';
import Notiflix from 'notiflix';

const formSubmitRef= document.querySelector(".header__input")
const submitBtnRef = document.querySelector('.input__btn');

let searchQuery = '';

async function onSubmitForm(e) {
  e.preventDefault();
       searchQuery = e.currentTarget.finder.value.trim();
  if (!searchQuery) {
    Notiflix.Notify.warning(
      'Sorry, please enter the name of the cocktail.'
    );
           return;
  }
    const {data} = await getCoctByName(searchQuery)
  refCocktailList.innerHTML = '';
  renderMarkup(data.drinks);
  
}