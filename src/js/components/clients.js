//function marquee() {
//  const elems = document.querySelectorAll("[data-marquee]");
//  if (!elems) return;

//  elems.forEach((el) => {
//    const innerEls = el.querySelectorAll("li");
//    if (!innerEls) return;
//    const containerWidth = el.offsetWidth;
//    const speed =
//      Boolean(el.getAttribute("data-marquee")) &&
//      !isNaN(+el.getAttribute("data-marquee"))
//        ? el.getAttribute("data-marquee") * 1000
//        : "10000";
//    let i = 0;
//    let width = 0;
//    while (i < 1) {
//      innerEls.forEach((item) => {
//        width += item.offsetWidth;
//        el.querySelector("li").parentNode.appendChild(item.cloneNode(true));
//      });
//      if (width >= window.innerWidth) {
//        i++;
//      }
//    }

//    let start = performance.now();
//    let progress;
//    let translateX;

//    requestAnimationFrame(function step(now) {
//      progress = (now - start) / (speed === 0 ? "10000" : speed);

//      if (progress > 1) {
//        progress %= 1;
//        start = now;
//      }

//      translateX = containerWidth * progress;

//      el.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
//      requestAnimationFrame(step);
//    });
//  });
//}

//marquee();
