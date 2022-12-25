import Swiper, {
  Keyboard,
  Navigation,
  Pagination,
  EffectFade,
  EffectCoverflow,
  Autoplay,
} from "swiper";

//!hero-swiper
Swiper.use([Navigation, Pagination, Keyboard, EffectFade]);
const heroSwiper = new Swiper(".hero-swiper", {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  speed: 700,
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

//!products-swiper
Swiper.use([Navigation, Pagination, Keyboard]);
const productsSwiper = new Swiper(".products-swiper", {
  //slidesPerView: 2.5,
  allowTouchMove: true,
  slidesPerView: "auto",
  spaceBetween: 0,
  speed: 1000,
  initialSlide: 1,
  centeredSlides: true,

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

//!insta-swiper
Swiper.use([Navigation, Pagination, Keyboard, EffectCoverflow]);
const instaSwiper = new Swiper(".insta-swiper", {
  slidesPerView: "auto",
  effect: "coverflow",
  slidesPerGroup: 1,
  slidesOffsetBefore: 0,
  speed: 1000,
  centeredSlides: true,
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".insta-next",
    prevEl: ".insta-prev",
  },
  breakpoints: {
    0: {
      coverflowEffect: {
        rotate: 0,
        stretch: -50,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 0.85,
      },
    },
    1200: {
      coverflowEffect: {
        rotate: 0,
        stretch: -70,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 0.85,
      },
    },
  },
});

//!new-products swiper
Swiper.use([Navigation, Pagination, Keyboard]);
const newProductsSwiper = new Swiper(".new-products-swiper", {
  speed: 700,
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
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: "auto",
      loop: false,
    },
  },
});

//!catalog swiper
const catalogSliders = document.querySelectorAll(".catalog-swiper");
catalogSliders.forEach((slider) => {
  Swiper.use([Navigation, Pagination, Keyboard]);
  const catalogSliders = new Swiper(slider, {
    slidesPerView: "auto",
    speed: 700,
    loop: false,

    navigation: {
      nextEl: slider.previousElementSibling.querySelector(".catalog-next"),
      prevEl: slider.previousElementSibling.querySelector(".catalog-prev"),
    },
  });

  const slides = slider.querySelectorAll(".catalog-slide");
  if (slides.length <= 3) {
    slider.previousElementSibling.querySelector(".slider-btns").remove();
  }

  if (slides.length == 2) {
    slides.forEach((item) => {
      item.style.width = "50%";
    });
  }

  if (slides.length == 1) {
    slides.forEach((item) => {
      item.style.width = "94%";
    });
  }
});

//!menu swiper
Swiper.use([Navigation, Pagination, Keyboard]);
const menuSliders = new Swiper(".menu", {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  centeredSlides: false,
  speed: 700,
  loop: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
