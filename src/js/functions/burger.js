import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

(function () {
  const burger = document?.querySelector("[data-burger]");
  const navMenu = document.querySelector(".nav");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");
  const headerFilter = document.querySelector(".header");

  burger?.addEventListener("click", (e) => {
    headerFilter.classList.toggle("dis-offset");
    burger?.classList.toggle("burger--active");
    menu?.classList.toggle("menu--active");
    headerFilter?.classList.toggle("hide-backdrop-filter");

    if (menu?.classList.contains("menu--active")) {
      navMenu.classList.add("mob-menu--show");
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");

      disableScroll();
    } else {
      navMenu.classList.remove("mob-menu--show");
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      //headerFilter.style.paddingRight = "0x";
      enableScroll();
    }
  });

  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    enableScroll();
  });

  menuItems?.forEach((el) => {
    el.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");
      navMenu.classList.remove("mob-menu--show");
      headerFilter?.classList.remove("hide-backdrop-filter");
      enableScroll();
    });
  });
})();

//!accordion
if (window.innerWidth < 1200) {
  (function () {
    const menuItem = document?.querySelectorAll(".menu__item");
    const accordionMenu = document.querySelector(".accordion");
    const closeAccordion = document.querySelector(".accordion__close");
    const accordionLinks = document.querySelectorAll(".accordion__header");

    menuItem.forEach((item) => {
      accordionLinks.forEach((link) => {
        const visuallySpanMenu = item.querySelector("span").textContent;
        const visuallySpanAccordion = link.querySelector("span").textContent;
        const accordionBody = link.nextElementSibling;
        const accordionItem = link.parentElement;

        item?.addEventListener("click", () => {
          disableScroll();

          accordionMenu.classList.add("accordion--active");

          if (visuallySpanMenu == visuallySpanAccordion) {
            link.classList.add("accordion-header--active");
            accordionBody.classList.add("accordion-body--active");
            accordionBody.parentElement.classList.add("accordion-item--active");

            if (accordionItem.previousElementSibling) {
              accordionItem.previousElementSibling
                .querySelector(".accordion__header")
                .classList.add("accordion-item-prev--active");
            }
          } else {
            link.classList.remove("accordion-header--active");
            accordionBody.classList.remove("accordion-body--active");
            accordionBody.parentElement.classList.remove(
              "accordion-item--active"
            );
            accordionBody.parentElement.classList.remove(
              "accordion-item-prev--active"
            );
          }
        });

        link.addEventListener("click", () => {
          document
            .querySelector(".accordion-header--active")
            .classList?.remove("accordion-header--active");
          link.classList?.remove("accordion-header--active");
          link.classList?.toggle("accordion-header--active");

          document
            .querySelector(".accordion-body--active")
            .classList?.remove("accordion-body--active");
          accordionBody.classList?.remove("accordion-body--active");
          accordionBody.classList?.toggle("accordion-body--active");

          document
            .querySelector(".accordion-item--active")
            .classList?.remove("accordion-item--active");
          accordionBody.parentElement.classList?.remove(
            "accordion-item--active"
          );
          accordionBody.parentElement.classList?.toggle(
            "accordion-item--active"
          );

          if (accordionItem.previousElementSibling) {
            document
              .querySelector(".accordion-item-prev--active")
              .classList?.remove("accordion-item-prev--active");
            accordionItem.previousElementSibling
              .querySelector(".accordion__header")
              .classList?.remove("accordion-item-prev--active");
            accordionItem.previousElementSibling
              .querySelector(".accordion__header")
              .classList?.toggle("accordion-item-prev--active");
          }
        });

        //закрываем menu accordion
        closeAccordion.addEventListener("click", () => {
          accordionMenu?.classList.remove("accordion--active");
          enableScroll();
        });
      });
    });
  })();
}
