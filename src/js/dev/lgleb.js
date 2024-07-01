import Swiper from 'swiper';
import WOW from 'wow.js';

import { rem } from '../utils/constants';

import 'animate.css';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();
  wowAnim();

  document.querySelector('.accordion') && accordion();
  document.querySelector('.mission') && missionLineAnimate();
  document.querySelector('.psychologist-info') && window.screen.width > 768 && psychoologistInfoOrder();
  document.querySelector('.psychologist-info') && window.screen.width <= 768 && psychoologistInfoAccordion();
  document.querySelector('.articles__tabs') && articlesTabs();
  document.querySelector('.reviews') && reviewAccordion();
});

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

const psychoologistInfoOrder = () => {
  const section = document.querySelector('.psychologist-info__container'),
    block = section.querySelector('.psychologist-info__right');

  window.addEventListener('scroll', () => {
    const top = section.getBoundingClientRect().top,
      bottom = section.getBoundingClientRect().bottom - block.scrollHeight - rem(4);

    if (top <= 50 && bottom >= 0) {
      block.style.position = 'fixed';
      block.style.top = '5rem';
      block.style.right = '15.8rem';
      block.style.bottom = 'auto';
    } else if (top <= 50 && bottom <= 0) {
      block.style.position = 'absolute';
      block.style.top = 'auto';
      block.style.right = '0rem';
      block.style.bottom = '0';
    } else if (top >= 50) {
      block.style.position = 'static';
    }
  });
};

const psychoologistInfoAccordion = () => {
  const block = document.querySelector('.psychologist-info__left'),
    showBtn = document.querySelector('.psychologist-info__show'),
    hideBtn = document.querySelector('.psychologist-info__hide');

  const blockInitHeight =
    block.querySelector('.psychologist-info__title').scrollHeight +
    rem(30) +
    document.querySelector('.psychologist-info__text > p').scrollHeight;

  block.style.maxHeight = `${blockInitHeight}px`;

  showBtn.addEventListener('click', () => {
    block.style.maxHeight = `${block.scrollHeight}px`;
    showBtn.style.display = 'none';
    hideBtn.style.display = 'inline';
  });

  hideBtn.addEventListener('click', () => {
    block.style.maxHeight = `${blockInitHeight}px`;
    showBtn.style.display = 'inline';
    hideBtn.style.display = 'none';
  });
};

const reviewAccordion = () => {
  const items = document.querySelectorAll('.reviews__item');

  items.forEach((item) => {
    const textWrapper = item.querySelector('.reviews__item-text'),
      textContainer = item.querySelector('.reviews__item-text')?.children[0],
      textContent = item.querySelector('.reviews__item-text')?.children[0].textContent,
      toggleBtn = item.querySelector('.reviews__item-text')?.children[1],
      textInitialHeight = textWrapper?.clientHeight,
      textScrollHeight = textWrapper?.scrollHeight;

    if (!textWrapper || !toggleBtn) {
      return;
    }

    let abbriveatedText = textContent.slice(0, 501) + '...';

    textContainer.textContent = abbriveatedText;

    toggleBtn.addEventListener('click', () => {
      item.classList.toggle('active');

      if (item.classList.contains('active')) {
        textWrapper.style.maxHeight = `${textScrollHeight + rem(window.screen.width > 768 ? 4 : 15)}px`;
        textContainer.textContent = textContent;
        toggleBtn.textContent = 'свернуть';
      } else {
        textWrapper.style.maxHeight = `${textInitialHeight}px`;
        toggleBtn.textContent = 'читать дальше';

        setTimeout(() => {
          textContainer.textContent = abbriveatedText;
        }, 490);
      }
    });
  });
};

const articlesTabs = () => {
  const tabsContainer = document.querySelector('.articles__tabs'),
    tabs = document.querySelectorAll('.articles__tab');

  tabsContainer.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('articles__tab')) {
      tabs.forEach((tab) => tab.classList.remove('active'));

      target.classList.add('active');
    }
  });
};

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

  const helpSlider = new Swiper('.help__box', {
    allowTouchMove: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: rem(2),

    grid: {
      fill: 'row',
      rows: 1
    },

    breakpoints: {
      768: {
        allowTouchMove: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: rem(3.2),

        grid: {
          fill: 'row',
          rows: 2
        }
      }
    },

    navigation: {
      prevEl: '.help-swiper-prev',
      nextEl: '.help-swiper-next'
    }
  });
};
