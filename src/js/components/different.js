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
