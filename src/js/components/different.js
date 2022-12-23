function setZindex(e) {
  if (e.type === "mouseover") {
    document.querySelector(".header").style.zIndex = 0;
  } else if (e.type === "mouseout") {
    document.querySelector(".header").style.zIndex = 5;
  }
}

const breadcrumbs = document.querySelector(".breadcrumbs");
if (breadcrumbs) {
  breadcrumbs.addEventListener("mouseover", setZindex);
  breadcrumbs.addEventListener("mouseout", setZindex);
}

//Устанавливаем label для продукта
const labels = document.querySelectorAll(".product-label");

labels.forEach((label) => {
  const labelStroke = label.querySelector(".product-label__stroke");
  const labelSpan = label.querySelector("span");

  if (
    labelSpan.textContent == "Скидка" ||
    labelSpan.textContent == "Discount"
  ) {
    labelStroke.classList.add("product-label-border--red");
    labelSpan.classList.add("product-label-bg--red");
  } else if (
    labelSpan.textContent == "Акция" ||
    labelSpan.textContent == "Аction"
  ) {
    labelStroke.classList.add("product-label-border--green");
    labelSpan.classList.add("product-label-bg--green");
  } else if (
    labelSpan.textContent == "Хит продаж" ||
    labelSpan.textContent == "Bestseller"
  ) {
    labelStroke.classList.add("product-label-border--blue");
    labelSpan.classList.add("product-label-bg--blue");
  } else {
    label.remove();
  }
});
