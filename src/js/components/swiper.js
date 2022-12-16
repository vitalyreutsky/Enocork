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
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
});

//products-swiper

const swiperBtnPrev = document.querySelector(".products-prev");
const swiperBtnNext = document.querySelector(".products-next");

Swiper.use([Navigation, Pagination, Keyboard]);
const productsSwiper = new Swiper(".products-swiper", {
  //slidesPerView: 2.5,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 0,
  allowTouchMove: true,
  centeredSlides: true,
  speed: 1000,
  initialSlide: 1,

  loop: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".products-next",
    prevEl: ".products-prev",
  },
});

productsSwiper.on("slideChange", function () {
  if (productsSwiper.activeIndex == 0) {
    productsSwiper.slideTo(1);
  }
});
