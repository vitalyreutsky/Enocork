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
        stretch: -30,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 0.85,
      },
    },
    600: {
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
      loop: true,
    },

    1200: {
      slidesPerView: "auto",
      loop: true,
    },
  },
});

//!catalog swiper
const catalogSliders = document.querySelectorAll(".catalog-swiper");
catalogSliders.forEach((slider) => {
  Swiper.use([Navigation, Pagination, Keyboard]);
  const catalogSliders = new Swiper(slider, {
    speed: 700,
    loop: false,
    slidesPerGroup: 1,
    slidesPerView: "auto",

    navigation: {
      nextEl: slider.previousElementSibling.querySelector(".catalog-next"),
      prevEl: slider.previousElementSibling.querySelector(".catalog-prev"),
    },
  });

  const slides = slider.querySelectorAll(".catalog-slide");

  if (slides.length <= 3) {
    slider.previousElementSibling
      .querySelector(".slider-btns")
      .classList.add("hide-swiper-btns");
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

  if (window.innerWidth < 600) {
    slides.forEach((item) => {
      item.style.width = "89%";
    });

    if (slides.length > 1) {
      slider.previousElementSibling
        .querySelector(".slider-btns")
        .classList.remove("hide-swiper-btns");
    }
  }
});

//!menu swiper
Swiper.use([Navigation, Pagination, Keyboard]);
const menuSliders = new Swiper(".menu", {
  slidesPerView: "auto",
  centeredSlides: false,
  speed: 700,
  loop: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
