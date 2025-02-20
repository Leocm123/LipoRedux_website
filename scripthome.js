var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var appendNumber = 4;
  var prependNumber = 1;
  document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    });
  document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
      );
    });
  document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
      );
    });
  document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      ]);
    });

    //==================================================

    document.addEventListener("DOMContentLoaded", function() {
      const brazil = document.getElementById("brazil");
      const uk = document.getElementById("uk");
      var ukAtiva = 1;
  
      function mudarLinguagem() {
          console.log("função chamada");
          if (ukAtiva == 1) {
              uk.style.display = 'none';
              brazil.style.display = 'flex';
              ukAtiva = 0;
          } else {
              uk.style.display = 'flex';
              brazil.style.display = 'none';
              ukAtiva = 1;
          }
      }
  
      brazil.addEventListener("click", mudarLinguagem);
      uk.addEventListener("click", mudarLinguagem);
  });
  