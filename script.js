document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.header__menu-btn');
    const nav = document.querySelector('.header__bottom');
    const closeBtn = document.querySelector('.menu-close');
  
    // Открытие/закрытие меню по клику на бургер-меню
    menuBtn.addEventListener('click', function (e) {
      nav.classList.toggle('active');
      e.stopPropagation();
    });
  
    // Закрытие меню по клику на крестик
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        nav.classList.remove('active');
      });
    }
  
    // Закрытие меню при клике вне его области
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('active') && 
          !nav.contains(e.target) && 
          !menuBtn.contains(e.target)) {
        nav.classList.remove('active');
      }
    });
  });
  