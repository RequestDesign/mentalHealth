import Swiper from 'swiper';
import WOW from 'wow.js';

import { rem } from '../utils/constants';

import 'animate.css';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();
  wowAnim();

  document.querySelector('.accordion') && accordion();
  document.querySelector('.mission') && missionLineAnimate();
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

const wowAnim = () => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 150,
    mobile: true,
    live: true
  });
  wow.init();
};

const accordion = () => {
  const items = document.querySelectorAll('.accordion__item');

  items.forEach((item) => {
    const itemBody = item.querySelector('.accordion__item-body--wrapper'),
      itemBodyInitialHeight = itemBody.scrollHeight,
      itemBodyPadding = window.screen.width > 768 ? rem(4) : rem(9),
      btn = item.querySelector('.accordion__item-switch');

    itemBody.style.maxHeight = `0px`;

    btn.addEventListener('click', () => {
      item.classList.toggle('active');

      item.classList.contains('active')
        ? (itemBody.style.maxHeight = `${itemBodyInitialHeight + itemBodyPadding}px`)
        : (itemBody.style.maxHeight = `0px`);
    });
  });
};

const missionLineAnimate = () => {
  const line = document.querySelector('.mission__line');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('active');
        }, 500);
      } else {
        entry.target.classList.remove('active');
      }
    });
  });

  observer.observe(line);
};
