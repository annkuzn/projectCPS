import Swiper from "./swiper-bundle.js";

let inintialWindowWidth = window.innerWidth;

function reportWindowSize() {
  let currentWindowWidth = window.innerWidth;
  if(inintialWindowWidth !== currentWindowWidth) {
    setTimeout("window.location.reload()")
}
}

  if (window.matchMedia("(max-width: 767px)").matches) {
        let swiper = new Swiper('.swiper-container', {
          slidesPerView: 'auto',
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        })   
  } 

window.onresize = reportWindowSize;

