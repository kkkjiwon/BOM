window.onload = function () {
  //상단 스크롤 기능
  const header = document.querySelector(".header");
  const mbt = document.querySelector(".mbt");
  const gnbBg = document.getElementById("gnb_bg");
  let scy = 0;

  window.addEventListener("scroll", function () {
    scy = this.document.documentElement.scrollTop;
    if (scy > 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
  // s_visual
  var swiper = new Swiper(".sw-vistual", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
  var swiper = new Swiper(".sw-program", {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      1400: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
};
