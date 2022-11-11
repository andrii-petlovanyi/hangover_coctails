
document.querySelector('.js-menu').addEventListener('mouseleave', () => {
  document.querySelector('.favorite__bar').classList.remove('active');
});

document.querySelector('.favorite__link').addEventListener('mouseenter', () => {
  document.querySelector('.favorite__bar').classList.add('active');
});

document.querySelector('.menu__icon').addEventListener('click', () => {
  document.querySelector('.mobile__menu').classList.toggle('open');
  document.querySelector('.switcher').classList.toggle('open');
  document.querySelector('.header__input').classList.toggle('open');
  document.querySelector('.nav__desktop').classList.toggle('open');
  document.body.classList.toggle('overflow');
});

document.querySelector('.menu__close').addEventListener('click', () => {
  document.querySelector('.mobile__menu').classList.toggle('open');
  document.querySelector('.switcher').classList.toggle('open');
  document.querySelector('.header__input').classList.toggle('open');
  document.querySelector('.nav__desktop').classList.toggle('open');
  document.body.classList.toggle('overflow');
});
