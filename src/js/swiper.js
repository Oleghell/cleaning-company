// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    320:{
      slidesPerView: 1,
    },
    420: {
      slidesPerView: 2,
    },
    730: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
