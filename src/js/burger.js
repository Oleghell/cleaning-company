export function burger() {
  let header_burger = document.querySelector(".menu__icon");
  let header_menu = document.querySelector(".menu__body");
  let body = document.querySelector('body');
  header_burger.addEventListener("click", function () {
    header_burger.classList.toggle("active");
    header_menu.classList.toggle("active");
    body.classList.toggle('lock')
  });
}
burger();
