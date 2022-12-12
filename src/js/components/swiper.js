import Swiper, { Keyboard, Navigation, Pagination, EffectFade } from "swiper";

//hero-swiper
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

//products-swiper
Swiper.use([Navigation, Pagination, Keyboard]);
const productsSwiper = new Swiper(".products-swiper", {
  slidesPerView: 3.7,
  slidesPerGroup: 1,
  spaceBetween: 10,
  autoHeight: false,
  centeredSlides: true,
  speed: 1000,

  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
});
