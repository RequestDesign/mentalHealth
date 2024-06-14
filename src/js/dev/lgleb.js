import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();
});

const Swipers = () => {
  const activitesSlider = new Swiper('.activites__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    autoHeight: true,

    breakpoints: {
      786: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 33,
        autoHeight: false
      }
    },

    navigation: {
      prevEl: '.activites__swiper-left-btn',
      nextEl: '.activites__swiper-right-btn'
    }
  });
};
