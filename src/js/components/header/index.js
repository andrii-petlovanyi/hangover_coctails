import * as refs from '../refs/index';

export function headerInit() {
  refs.refHeaderJSMenu.addEventListener('mouseleave', () => {
    refs.refHeaderFavBar.classList.remove('active');
  });

  refs.refHeaderFavLink.addEventListener('mouseenter', () => {
    refs.refHeaderFavBar.classList.add('active');
  });

  refs.refHeaderMenuOpen.addEventListener('click', () => {
    refs.refHeaderMobMenu.classList.toggle('open');
    refs.refHeaderSwitcher.classList.toggle('open');
    document.querySelector('.input').classList.toggle('open');
    document.querySelector('.header__nav').classList.toggle('open');
    document.body.classList.toggle('overflow');
  });

  refs.refHeaderMenuClose.addEventListener('click', closeMobileMenu);
}

export function closeMobileMenu() {
  refs.refHeaderMobMenu.classList.toggle('open');
  document.querySelector('.input').classList.toggle('open');
  document.querySelector('.header__nav').classList.toggle('open');
  refs.refHeaderSwitcher.classList.toggle('open');
  document.body.classList.toggle('overflow');
}
