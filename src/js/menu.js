const init = () => {
  const menuButtonEl = document.querySelector('.navbar__menu-button');
  const menuCloseButtonEl = document.querySelector('.navbar__close-button');
  const menuEl = document.querySelector('.navbar__links-list-container');

  function openMenu() {
    menuEl.style.left = 0;
    menuEl.style.opacity = 1;
  }

  function closeMenu() {
    menuEl.style.left = '-100%';
    menuEl.style.opacity = 0;
  }

  menuButtonEl.addEventListener('click', openMenu);
  menuCloseButtonEl.addEventListener('click', closeMenu);
};

export default {
  init,
};