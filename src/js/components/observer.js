const bottlesIcon2 = document.querySelector(".bottle2");
const bottlesIcon3 = document.querySelector(".bottle3");
const bottlesIcon4 = document.querySelector(".bottle4");

// устанавливаем настройки
const options = {
  // родитель целевого элемента - область просмотра
  root: null,
  // отступ снизу
  rootMargin: "0px",
  // процент пересечения - половина изображения
  threshold: 0.1,
};
// создаем наблюдатель
const observer = new IntersectionObserver((entries, observer) => {
  // для каждой записи-целевого элемента
  entries.forEach((entry) => {
    // если элемент является наблюдаемым
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
}, options);
// выбираем обьект слежения по классу
observer.observe(document.querySelector(".products"));
