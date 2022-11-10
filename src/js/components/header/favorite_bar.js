document.querySelector('.favorite__link').addEventListener('click', () => {
  document.querySelector('.favorite__bar').classList.toggle('active');
});

document.querySelector('.favorite__link').addEventListener('mouseover', () => {
  document.querySelector('.favorite__bar').classList.toggle('active');
});

document.querySelector('.menu__icon').addEventListener('click', () => {
  document.querySelector('.mobile__menu').classList.toggle('open');
  document.body.classList.toggle('overflow');
});

document.querySelector('.menu__close').addEventListener('click', () => {
  document.querySelector('.mobile__menu').classList.toggle('open');
  document.body.classList.toggle('overflow');
});
