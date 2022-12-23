// Определение ширины экрана
import { isMobile, isTablet, isDesktop } from "../functions/check-viewport";
if (isDesktop()) {
  document.body.classList.add("mouse");

  const catalogMenuList = document.querySelector(".menu__list");
  const catalogMenuItems = document.querySelectorAll(".menu__item");

  catalogMenuItems.forEach((item) => {
    const subMenu = item.querySelector(".sub-menu");
    const menuLink = item.querySelector(".menu__link");
    if (subMenu.classList.contains("sub-menu--active")) {
      subMenu.classList.remove("sub-menu--active");
      menuLink.classList.remove("menu-link--active");
    }

    item.addEventListener("click", () => {
      document
        .querySelector(".menu-link--active")
        ?.classList?.remove("menu-link--active");
      menuLink.classList.toggle("menu-link--active");

      document
        .querySelector(".sub-menu--active")
        ?.classList?.remove("sub-menu--active");
      subMenu.classList.toggle("sub-menu--active");
    });
  });
} else if (isTablet) {
  document.body.classList.add("touch");
}

//const catalogMenuList = document.querySelector(".menu__list");
//const catalogMenuItems = document.querySelectorAll(".menu__item");

//catalogMenuList.addEventListener("click", (e) => {
//  const target = e.target;

//  if (target.classList.contains("menu__link")) {
//    const subMenu = target.nextElementSibling;
//    closeMenu();
//    subMenu.classList.add("sub-menu--active");
//  }
//});
