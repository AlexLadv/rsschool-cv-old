
(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const navItems = document.querySelectorAll('.nav__item');

  burger?.addEventListener('click', (e) => {
  burger?.classList.toggle('burger--active');
  menu?.classList.toggle('menu--active');

  if (menu?.classList.contains('menu--active')) {
    burger?.setAttribute('aria-expanded', 'true');
    burger?.setAttribute('aria-label', 'Закрыть меню');
  } else {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
  }
  });

  navItems?.forEach(el => {
  el.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
  });
  });
})();
