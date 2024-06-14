import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
import 'animate.css';
import WOW from 'wow.js';

window.$ = window.jQuery = require('jquery');
import { rem } from '../utils/constants';

import popup from '../utils/popup';
import form from '../utils/form';

export const modules = {};
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    mainBannerAnim();
  } catch {}
  try {
    wowAnim();
  } catch {}
  try {
    footerDropdown();
  } catch {}
  try {
    if (window.innerWidth > 768) {
      helpWithAnim();
    } else {
      helpWithAnimMob();
    }
  } catch {}
});

function mainBannerAnim() {
  const section = document.querySelector('.main-banner'),
    title = document.querySelector('.main-banner__title span'),
    bg = document.querySelector('.main-banner__img-bg'),
    photo = document.querySelector('.main-banner__img-photo'),
    btnBox = document.querySelector('.main-banner__btn-box'),
    category = document.querySelector('.main-banner__category'),
    goal = document.querySelector('.main-banner__goal-box'),
    grade = document.querySelector('.main-banner__grade-box');

  const tl = gsap.timeline();

  tl.from(bg, {
    duration: 1,
    ease: 'power2.inOut',
    y: '+=100%'
    // keyframes: {
    //   '0%': { scale: '0', opacity: 0 },
    //   [centerAnim]: { scale: '1.05', opacity: 1 },
    //   '100%': { scale: '1' }
    // }
  })
    .from(title, {
      duration: 1,
      ease: 'power2.inOut',
      y: '+=100%',
      delay: 0.5
    })
    .from(
      photo,
      {
        duration: 1,
        ease: 'power2.inOut',
        y: '+=100%',
        delay: 0.5
      },
      '-=1.5'
    )
    .from(
      btnBox,
      {
        duration: 1,
        ease: 'power2.inOut',
        opacity: 0,
        delay: 0.5
      },
      '-=1.5'
    )
    .from(
      category,
      {
        duration: 1,
        ease: 'power2.inOut',
        opacity: 0,
        delay: 0.5
      },
      '-=1.5'
    )
    .from(
      goal,
      {
        duration: 1,
        ease: 'power2.inOut',
        y: '+=150%',
        delay: 0.5
      },
      '-=1.5'
    )
    .from(
      grade,
      {
        duration: 1,
        ease: 'power2.inOut',
        y: '+=150%',
        delay: 0.5
      },
      '-=1.5'
    );
}

function wowAnim() {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 200,
    mobile: true,
    live: true
  });
  wow.init();
}

function helpWithAnim() {
  const section = document.querySelector('.help-with'),
    items = document.querySelectorAll('.help-with__item'),
    title = document.querySelectorAll('.help-with__title'),
    duration = 0.5;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'middle 500px',
      end: 'bottom bottom'
    }
  });

  tl.from(title, {
    duration: 0.8,
    ease: 'power2.inOut',
    y: '-=200%',
    delay: '1'
  })
    .fromTo(
      items[9],
      {
        opacity: 0,
        y: '-500%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '0', rotate: '-10deg' }
    )
    .fromTo(
      items[8],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '0', rotate: '13deg' },
      `-=${duration}`
    )
    .fromTo(
      items[7],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '0', rotate: '-8deg' },
      `-=${duration}`
    )
    .fromTo(
      items[6],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '65%', rotate: '-9deg' }
    )
    .fromTo(
      items[5],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '70%', rotate: '-12deg' },
      `-=${duration}`
    )
    .fromTo(
      items[4],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '40%', rotate: '-9deg' },
      `-=${duration}`
    )
    .fromTo(
      items[3],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '60%', rotate: '8deg' },
      `-=${duration}`
    )
    .fromTo(
      items[2],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, x: '15%', y: '110%', rotate: '12deg' }
    )
    .fromTo(
      items[1],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '140%', rotate: '-11deg' },
      `-=${duration}`
    )
    .fromTo(
      items[0],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '120%', rotate: '5deg' },
      `-=${duration}`
    )
    .to(items, {
      y: '0',
      rotate: '0deg',
      x: '0'
    });
}

function helpWithAnimMob() {
  const section = document.querySelector('.help-with'),
    items = document.querySelectorAll('.help-with__item'),
    title = document.querySelectorAll('.help-with__title'),
    duration = 0.8;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'middle 500px',
      end: 'bottom bottom'
    }
  });

  tl.from(title, {
    duration: duration,
    ease: 'power2.inOut',
    y: '-=200%',
    delay: '1'
  })
    .fromTo(
      items[6],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '0%', rotate: '5deg' }
    )
    .fromTo(
      items[5],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '35%', rotate: '-6deg' },
      `-=0.7`
    )
    .fromTo(
      items[4],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '85%', x: '25%', rotate: '-13deg' },

      `-=0.6`
    )
    .fromTo(
      items[3],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '110%', x: '-10%', rotate: '-7deg' },
      `-=0.6`
    )
    .fromTo(
      items[2],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, x: '10%', y: '120%', rotate: '8deg' },
      `-=0.6`
    )
    .fromTo(
      items[1],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, x: '25%', y: '165%', rotate: '-8deg' },
      `-=0.6`
    )
    .fromTo(
      items[0],
      {
        opacity: 0,
        y: '-600%',
        rotate: '0deg'
      },
      { opacity: 1, duration: duration, y: '205%', rotate: '-8deg' },
      `-=0.6`
    )
    .to(items, {
      y: '0',
      rotate: '0deg',
      x: '0'
    });
}

function footerDropdown() {
  const titles = document.querySelectorAll('.footer-content__nav-list-title-box');

  titles.forEach((title) => {
    title.addEventListener('click', () => {
      $(title).parent().find('.footer-content__nav-list-wrapper').slideToggle();
      $(title).toggleClass('isActive');
    });
  });
}


//открытие модалки скрочной помощи для страницы каталога с психологами
// function openModalHelp() {
//   if (document.querySelector('.main')) {
//     modules.popup.open('#popup__help');
//   }
// }
