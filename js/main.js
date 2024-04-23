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
  // s_program
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

  // 글자 모션
  var observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.5 }
  );

  var mentorSection = document.querySelector(".s_Mentor_des");
  observer.observe(mentorSection);

  var letterSection = document.querySelector(".s_letter_right");
  observer.observe(letterSection);
};


$(document).ready(function () {
  $(".main-menu").mouseenter(function () {
    $(".sub-menu li , .navbt").stop().slideDown();
  });
  $(".main-menu").mouseleave(function () {
    $(".sub-menu li , .navbt").stop().slideUp();
  });
  $(".menu > a").click(function (event) {
    event.preventDefault(); // 기본 이벤트 방지

    let submenu = $(this).next(".hide");
    submenu.slideToggle(); // 부드럽게 슬라이드 업 또는 다운

    // 화살표 회전 토글
    $(this).find('.material-symbols-outlined').toggleClass('active');
  });
});