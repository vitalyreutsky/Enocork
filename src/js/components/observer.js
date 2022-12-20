//! устанавливаем настройки для bottles
const sectionBottles = document.querySelector(".products");
if (sectionBottles) {
  const optionsBottles = {
    // родитель целевого элемента - область просмотра
    root: null,
    // отступ снизу
    rootMargin: "0px",
    // процент пересечения - половина изображения
    threshold: 0.1,
  };
  // создаем наблюдатель
  const observerBottles = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach((entry) => {
      // если элемент является наблюдаемым
      const bottlesIcon2 = document.querySelector(".bottle2");
      const bottlesIcon3 = document.querySelector(".bottle3");
      const bottlesIcon4 = document.querySelector(".bottle4");
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        bottlesIcon2.classList.add("bottle-animation2");
        bottlesIcon3.classList.add("bottle-animation3");
        bottlesIcon4.classList.add("bottle-animation4");
      } else {
        bottlesIcon2.classList.remove("bottle-animation2");
        bottlesIcon3.classList.remove("bottle-animation3");
        bottlesIcon4.classList.remove("bottle-animation4");
      }
    });
  }, optionsBottles);
  // выбираем обьект слежения по классу
  observerBottles.observe(sectionBottles);
}

//! устанавливаем настройки для partners
const sectionPartners = document.querySelector(".partners");
if (sectionPartners) {
  const optionsPartners = {
    // родитель целевого элемента - область просмотра
    root: null,
    // отступ снизу
    rootMargin: "0px",
    // процент пересечения - половина изображения
    threshold: 0.1,
  };
  // создаем наблюдатель
  const observerPartners = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach((entry) => {
      // если элемент является наблюдаемым
      const cork = document.querySelector(".partners-block__red-image");
      const barrel = document.querySelector(
        ".partners-block__animation-image svg"
      );
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        cork.classList.add("cork-animation");
        barrel.classList.add("barrel-animation");
      } else {
        cork.classList.remove("cork-animation");
        barrel.classList.remove("barrel-animation");
      }
    });
  }, optionsPartners);
  // выбираем обьект слежения по классу
  observerPartners.observe(sectionPartners);
}

//! устанавливаем настройки для секции feedback
const sectionFeedback = document.querySelector(".feedback");
if (sectionFeedback) {
  const optionsFeedback = {
    // родитель целевого элемента - область просмотра
    root: null,
    // отступ снизу
    rootMargin: "0px",
    // процент пересечения - половина изображения
    threshold: 0.1,
  };
  // создаем наблюдатель
  const observerFeedback = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach((entry) => {
      // если элемент является наблюдаемым
      const decorBarrel1 = document.querySelector(".barrel-decor1");
      const decorBarrel2 = document.querySelector(".barrel-decor2");
      const decorBarrelShadow = document.querySelectorAll(
        ".barrel-decor__shadow"
      );
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        decorBarrel1.classList.add("animation-decor-barrel1");
        decorBarrel2.classList.add("animation-decor-barrel2");
      } else {
        decorBarrel1.classList.remove("animation-decor-barrel1");
        decorBarrel2.classList.remove("animation-decor-barrel2");
      }

      if (decorBarrel2.classList.contains("animation-decor-barrel2")) {
        decorBarrelShadow.forEach((item) => {
          item.style.opacity = 0;
        });
      } else {
        decorBarrelShadow.forEach((item) => {
          item.style.opacity = 1;
        });
      }
    });
  }, optionsFeedback);
  // выбираем обьект слежения по классу
  observerFeedback.observe(sectionFeedback);
}
