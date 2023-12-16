const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    
  },

});


