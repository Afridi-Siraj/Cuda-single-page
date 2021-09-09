const icon = document.querySelector(".navigation__toggle");
const menu = document.querySelectorAll(".navigation__menu");
icon.addEventListener("click", function () {
  menu.forEach((el, i, _) => {
    el.classList.toggle("nav-menu-visible");
  });
});

// ==================== sticky nav =================== //
const nav = document.querySelector(".navigation");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const stickynav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickynav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// window.addEventListener("scroll", function () {
//   if (window.scrollY > navHeight) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });
