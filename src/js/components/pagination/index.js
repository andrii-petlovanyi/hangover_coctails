let drinks = [];
let page = 1;
let renderCards;
export const container = document.querySelector('.js-pagination');

const perPage = getPerPage();

export function initPagination(data, render) {
  resetPag();
  drinks = data;
  renderCards = render;
  renderCardsWithPagination(container, drinks, perPage, page);
  container.addEventListener('click', initHandlerPagination);
}

function initHandlerPagination(e) {
  if (e.target.tagName !== 'BUTTON') return;

  const action = e.target.dataset.action;

  if (action === 'back') {
    page -= 1;
    renderCardsWithPagination(container, drinks, perPage, page);
    return;
  }

  if (action === 'forward') {
    page += 1;
    renderCardsWithPagination(container, drinks, perPage, page);
    return;
  }

  page = Number(e.target.textContent);
  renderCardsWithPagination(container, drinks, perPage, page);
}
//

export function transformDataToPages(perPage, cards) {
  const length = Math.ceil(cards.length / perPage);

  const pages = {};

  for (let i = 0; i < length; i++) {
    pages[i + 1] = cards.slice(i * perPage, i * perPage + perPage);
  }

  return pages;
}

export function getPerPage() {
  const width = document.body.clientWidth;

  if (width < 768) return 3;
  if (width < 1280) return 6;

  return 9;
}

export function renderCardsWithPagination(
  container,
  cards,
  perPage,
  currentPage = 1
) {
  if (cards.length <= perPage) {
    // renderCards(container, cards);
    container.innerHTML = '';
    renderCards(cards);
  } else {
    const pages = transformDataToPages(perPage, cards);
    //   renderCards(container, pages[currentPage]);
    renderCards(pages[currentPage]);
    renderPaginationButtons(currentPage, Object.keys(pages).length);
  }
}

function renderPaginationButtons(current, length) {
  let markup = '';

  const fistPage = '<button class="pag__btn">1</button>';
  const beforePage = `<button class="pag__btn">${current - 1}</button>`;
  const afterPage = `<button class="pag__btn">${current + 1}</button>`;
  const lastPage = `<button class="pag__btn">${length}</button>`;
  const delimiter = '<span class="pag__delimiter">...</span>';

  markup += `<button class="pag__btn pag__back" data-action="back" ${
    current === 1 ? 'disabled' : ''
  }></button>`;

  if (current > 2) markup += fistPage;
  if (current > 3) markup += delimiter;

  if (current > 1) markup += beforePage;

  markup += `<button class="pag__btn pag__btn--active">${current}</button>`;

  if (current < length) markup += afterPage;

  if (current < length - 2) markup += delimiter;
  if (current < length - 1) markup += lastPage;

  markup += `<button class="pag__btn pag__forward" data-action="forward" ${
    current === length ? 'disabled' : ''
  }></button>`;

  container.innerHTML = markup;
}

function resetPag() {
  drinks = [];
  page = 1;
  renderCards = '';
}
