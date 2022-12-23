//работа с menu
const catalogMenu = document.querySelector(".menu");
const catalogMenuItems = document.querySelectorAll(".menu__item");

if (catalogMenu) {
  document.addEventListener("click", (e) => {
    const catalogMenu = document.querySelector(".menu__list");
    const catalogMenuLink = catalogMenu.querySelectorAll(".menu__link");

    catalogMenuLink.forEach((link) => {
      const subMenu = link.nextElementSibling;

      if (subMenu.classList.contains("sub-menu--active")) {
        const subMenuItems = subMenu.querySelectorAll(".sub-menu__item");
        subMenuItems.forEach((subMenuItem) => {
          if (
            e.target !== link &&
            e.target !== link.parentElement &&
            e.target !== catalogMenu &&
            e.target !== catalogMenu.parentElement &&
            e.target !== link.nextElementSibling &&
            e.target !== subMenu.querySelector(".sub-menu__list") &&
            e.target !== subMenuItem &&
            e.target !== subMenuItem.querySelector(".sub-menu__link")
          ) {
            if (link.classList.contains("menu-link--active")) {
              link.classList.remove("menu-link--active");
              link.nextElementSibling.classList.remove("sub-menu--active");
            }
          }
        });
      }
    });
  });

  catalogMenuItems.forEach((item) => {
    const subMenu = item.querySelector(".sub-menu");
    const menuLink = item.querySelector(".menu__link");
    if (subMenu.classList.contains("sub-menu--active")) {
      subMenu.classList.remove("sub-menu--active");
      menuLink.classList.remove("menu-link--active");
    }

    item.addEventListener("click", (e) => {
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
}
