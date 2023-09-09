export function scrollUp() {
  let scroll_up = document.querySelector(".scrollUp");
  let header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    const headerHeight = header.offsetHeight;
    scroll_up.classList.toggle('_active', window.scrollY>headerHeight)
  });
  scroll_up.addEventListener("click", function () {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  });
}
scrollUp();
