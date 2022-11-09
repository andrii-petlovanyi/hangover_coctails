document.querySelector('.hero__svg').addEventListener('click', changeHeroMenu);

document
  .querySelector('.hero__select')
  .addEventListener('mouseleave', changeHeroMenu);

function changeHeroMenu() {
  document.querySelector('.hero__list').classList.toggle('active');
  document.querySelector(`.hero`).classList.toggle(`active`);
}
