function setZindex(e) {
  if (e.type === "mouseover") {
    document.querySelector(".header").style.zIndex = 0;
  } else if (e.type === "mouseout") {
    document.querySelector(".header").style.zIndex = 5;
  }
}

const breadcrumbs = document.querySelector(".breadcrumbs--category");
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

//!меняем z-index у шапки при наведении
const catalogMenu = document.querySelector(".menu__list");

function addClassFade(e) {
  if (e.type === "mouseover") {
    document.querySelector(".header").style.zIndex = 0;
  } else if (e.type === "mouseout") {
    document.querySelector(".header").style.zIndex = 5;
  }
}

if (catalogMenu) {
  catalogMenu.addEventListener("mouseover", addClassFade);
  catalogMenu.addEventListener("mouseout", addClassFade);
}

//!show hide
const btnInstruction = document.querySelector(".information-hide");
const blockInstruction = document.querySelectorAll(".info-product");

blockInstruction.forEach((block) => {
  if (block.classList.contains("product-instruction")) {
    btnInstruction.addEventListener("click", () => {
      block.classList.toggle("show-instruction");
      btnInstruction
        .querySelector(".information-hide__btn")
        .classList.toggle("btnInstructionRotate");

      btnInstruction.querySelector(".information-hide__text").innerHTML =
        btnInstruction.querySelector(".information-hide__text").innerHTML ===
        "Показать"
          ? (btnInstruction.querySelector(".information-hide__text").innerHTML =
              "Скрыть")
          : (btnInstruction.querySelector(".information-hide__text").innerHTML =
              "Показать");
    });
  }
});

//!кнопка back без перезагрузки
const breadcrumbsBack = document.querySelector(".breadcrumbs__link-back");
if (breadcrumbsBack) {
  breadcrumbsBack.addEventListener("click", () => {
    window.history.back();
  });
}

//показать больше
const showMore = document.querySelector(".show-more");
const productsLength = document.querySelectorAll(".new-products__item").length;

if (showMore) {
  const showMoreText = showMore.querySelector("span");
  showMore.addEventListener("click", () => {
    showMoreText.textContent =
      showMoreText.textContent === "Показать еще"
        ? (showMoreText.textContent = "Скрыть")
        : (showMoreText.textContent = "Показать еще");

    const arr = Array.from(
      document.querySelector(".subcategory-products__wrapper").children
    );

    const visItems = arr.slice(0);

    visItems.forEach((el) => {
      el.classList.toggle("is-visible");
    });
  });

  if (productsLength <= 10) {
    showMore.remove();
  }
}
