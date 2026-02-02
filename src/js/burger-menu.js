document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.about-us-nav');
  const links = nav.querySelectorAll('a');

  function openMenu() {
    nav.classList.add('open');
    burger.classList.add('active');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Закрити меню');
    // Заборона скролу body
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('open');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Відкрити меню');
    // Відновлення скролу
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', function () {
    if (nav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Закривати меню при кліку на посилання (дуже зручно на мобілках)
  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Закривати меню по Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
    }
  });

  // Закривати меню при кліку поза ним (опціонально)
  nav.addEventListener('click', function (e) {
    if (e.target === nav) { // якщо клік по фону overlay
      closeMenu();
    }
  });
});