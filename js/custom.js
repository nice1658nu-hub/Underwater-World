(function ($) {
  "use strict";

  // NAVBAR
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // HERO SLIDES WITH VEGAS EFFECT
  $(function () {
    $('.hero-slides').vegas({
      slides: [
        { src: 'images/slides/sincere-laugh-showing-picture-smartphone-casual-meeting-with-best-friends-restaurant-terrace.jpg' },
        { src: 'images/happy-waitress-giving-coffee-customers-while-serving-them-coffee-shop.jpg' },
        { src: 'images/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpg' }
      ],
      timer: false,
      transition: 'fade', // เอฟเฟกต์การเปลี่ยนภาพ
      animation: 'kenburns',
      delay: 4000 // หน่วงเวลาเปลี่ยนภาพ (มิลลิวินาที)
    });
  });

  // CUSTOM SMOOTH SCROLL
  $('.smoothscroll').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 60;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 600); // ปรับความเร็วของการเลื่อน
    }
  });

  // TOOLTIP INIT
  $('[data-bs-toggle="tooltip"]').tooltip();

})(window.jQuery);

// เอฟเฟกต์ Fade-in เมื่อเลื่อนหน้า
document.addEventListener("scroll", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  const windowHeight = window.innerHeight;

  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// ANIMATION ON BUTTON CLICK
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function () {
    btn.classList.add("button-clicked");
    setTimeout(() => btn.classList.remove("button-clicked"), 300);
  });
});
