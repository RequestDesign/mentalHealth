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
 
});

