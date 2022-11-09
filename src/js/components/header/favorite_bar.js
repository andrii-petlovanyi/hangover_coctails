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

// SWITCHER
var themeSwitch = document.getElementById('themeSwitch');
if (themeSwitch) {
  initTheme();

  themeSwitch.addEventListener('change', function (event) {
    resetTheme();
  });

  function initTheme() {
    var darkThemeSelected =
      localStorage.getItem('themeSwitch') !== null &&
      localStorage.getItem('themeSwitch') === 'dark';

    themeSwitch.checked = darkThemeSelected;

    darkThemeSelected
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme');
  }

  function resetTheme() {
    if (themeSwitch.checked) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('themeSwitch');
    }
  }
}
