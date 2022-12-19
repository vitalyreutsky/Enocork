import Swiper, {
  Keyboard,
  Navigation,
  Pagination,
  EffectFade,
  EffectCoverflow,
} from "swiper";

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

//insta-swiper
Swiper.use([Navigation, Pagination, Keyboard, EffectCoverflow]);
const instaSwiper = new Swiper(".insta-swiper", {
  slidesPerView: 5,
  effect: "coverflow",
  slidesPerGroup: 1,
  slidesOffsetBefore: 0,
  speed: 1000,
  centeredSlides: true,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -120,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    scale: 0.8,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".insta-next",
    prevEl: ".insta-prev",
  },
});

//new-products swiper
Swiper.use([Navigation, Pagination, Keyboard]);
const newProductsSwiper = new Swiper(".new-products-swiper", {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  speed: 700,
  loop: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".new-products-next",
    prevEl: ".new-products-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
});
