import Swiper, { Keyboard, Navigation, Pagination, EffectFade } from "swiper";

//door-swiper
Swiper.use([Navigation, Pagination, Keyboard, EffectFade]);
const heroSwiper = new Swiper(".hero-swiper", {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  speed: 1000,
  loop: true,
  effect: "fade",
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
});
