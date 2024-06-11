import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
import 'animate.css';
import WOW from 'wow.js';

window.$ = window.jQuery = require('jquery');
import { rem } from '../utils/constants';

import popup from '../utils/popup';
import form from '../utils/form';
import burgerMenu from '../components/burger';
import mainNews from '../components/main-news';
import description from '../components/description';
import productBanner from '../components/product-banner';
import advantages from '../components/advantages';
import currentVacancies from '../components/current-vacancies';
import newsDetArticle from '../components/news-det-article';
import certificates from '../components/certificates';

import { headerScroll, headerDropdown, subMenu } from '../components/header';
import { scroll } from '../utils/scroll';
import { whereBuy } from '../components/where_buy';

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
    headerScroll();
  } catch {}
  try {
    headerDropdown();
  } catch {}
  try {
    burgerMenu();
  } catch {}
  try {
    subMenu();
  } catch {}
  try {
    scroll();
  } catch {}
  try {
    whereBuy();
  } catch {}
  try {
    mainNews();
  } catch {}
  try {
    description();
  } catch {}
  try {
    productBanner();
  } catch {}
  try {
    advantages();
  } catch {}
  try {
    currentVacancies();
  } catch {}
  try {
    newsDetArticle();
  } catch {}
  try {
    certificates();
  } catch {}
});

