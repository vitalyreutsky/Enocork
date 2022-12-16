// устанавливаем настройки для bottles
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
observerBottles.observe(document.querySelector(".products"));

// устанавливаем настройки для bottles
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
observerPartners.observe(document.querySelector(".partners"));
