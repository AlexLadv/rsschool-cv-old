const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('.nav__link').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

const swiper = new Swiper('.swiper', {
 
  slidesPerView: 'auto',
  spaceBetween: 60,
  loop: true,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});