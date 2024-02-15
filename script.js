document.addEventListener("DOMContentLoaded", function () {
  var mySwiper;

  function initSwiper() {
    mySwiper = new Swiper('.swiper_mySwiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.btn_go',
        prevEl: '.btn_back',
      },
    });
  }

  function destroySwiper() {
    if (mySwiper) {
      mySwiper.destroy();
    }
  }

  function checkMediaQuery() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      destroySwiper(); 
      mySwiper = new Swiper('.swiper_mySwiper', {
        slidesPerView: 2, 
        spaceBetween: 20,
        navigation: {
          nextEl: '.btn_go',
          prevEl: '.btn_back',
        },
      });
    } else {
      destroySwiper();
      initSwiper(); 
    }
  }

  checkMediaQuery();

  window.addEventListener('resize', checkMediaQuery);

  document.querySelector('.btn_back').addEventListener('click', function () {
    mySwiper.slidePrev();
  });

  document.querySelector('.btn_go').addEventListener('click', function () {
    mySwiper.slideNext();
  });
});
document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper('.swiperr_mySwiper', {
        slidesPerView: 1.8,
        spaceBetween: 20,
    });
});

document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper('.swiperrr_mySwiper', {
    slidesPerView: 2,
      spaceBetween: 20,
  });
});

let prevScrollpos = window.pageYOffset;

let headerDiv = document.querySelector("header");

window.onscroll = function () {
    let body = document.body;
    let scrolled = false;
    let currentScrollPos = window.pageYOffset;

    if (body.scrollTop > 200 || document.documentElement.scrollTop > 150) {
        if (!scrolled) {
            if (prevScrollpos <= currentScrollPos) {
                headerDiv.style.transform = 'translateY(-100%)';
            } else {
                headerDiv.style.transform = 'translateY(0%)';
            }
            scrolled = true; 
        }
    }
 
    prevScrollpos = currentScrollPos;
}