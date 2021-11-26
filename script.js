const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
