document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper('.swiper_mySwiper', {
      slidesPerView: 4, 
      spaceBetween: 20,
      navigation: {
        nextEl: '.btn_go',
        prevEl: '.btn_back',
      },
    });
  
   
    document.querySelector('.btn_back').addEventListener('click', function () {
      mySwiper.slidePrev(1);
    });
  
    document.querySelector('.btn_go').addEventListener('click', function () {
      mySwiper.slideNext(1); 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper('.swiperr_mySwiper', {
        slidesPerView: 1.8,
        spaceBetween: 20,
    });
});