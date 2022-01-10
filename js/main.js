import { closeModal, launchModal } from './launch-close-modal.js';
import openMenu from './nav.js';

// DOM Elements
const burgerBtn = document.querySelector('.main-navbar .icon');
const modalBtn = document.querySelector('.btn.signup');
const close = document.querySelector('.close');

// const formData = document.querySelectorAll(".formData");

burgerBtn.addEventListener('click', openMenu);
modalBtn.addEventListener('click', launchModal);
close.addEventListener('click', closeModal);
