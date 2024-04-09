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
      mbt.classList.add("active");
    } else {
      header.classList.remove("active");
      mbt.classList.remove("active");
    }
  });
  // 반응형 (1024px) 햄버거바가 생겼을때
  const navMb = document.querySelector(".nav-mb");
  const htmlRoot = document.querySelector("html");
  mbt.addEventListener("click", function () {
    const state = this.classList.contains("ani");
    if (state) {
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.remove("ani");
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.remove("active");
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.remove("active");
      gnbBg.classList.remove("active");

      // // 스크롤이 되었다면
      if (scy > 0) {
        header.classList.add("active");
        mbt.classList.add("active");
      }else{
        header.classList.remove("active");
        mbt.classList.remove("active");
      }
    } else {
      // 햄버거 버튼을  눌렀을때 x가 바뀌는 코드
      this.classList.add("ani");
      // 모바일에 메뉴가 나타나는 코드
      navMb.classList.add("active");
      // 스크롤이 안생기게 하는 코드
      htmlRoot.classList.add("active");
      gnbBg.classList.add("active");
    }
  });
};
