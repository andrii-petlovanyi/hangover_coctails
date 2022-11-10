// SWITCHER
export const refSwitcher = document.querySelector('.themeSwitch');
export function themeSwitcher() {
  if (refSwitcher) {
    initTheme();

    refSwitcher.addEventListener('change', function () {
      resetTheme();
    });
  }
}

export function initTheme() {
  var darkThemeSelected =
    localStorage.getItem('themeSwitch') !== null &&
    localStorage.getItem('themeSwitch') === 'dark';

  refSwitcher.checked = darkThemeSelected;

  darkThemeSelected
    ? document.body.setAttribute('data-theme', 'dark')
    : document.body.removeAttribute('data-theme');
}

export function resetTheme() {
  if (refSwitcher.checked) {
    document.body.setAttribute('data-theme', 'dark');

    localStorage.setItem('themeSwitch', 'dark');
  } else {
    document.body.removeAttribute('data-theme');

    localStorage.removeItem('themeSwitch');
  }
}
