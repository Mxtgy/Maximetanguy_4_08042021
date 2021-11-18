import { closeModal, launchModal } from './launch-close-modal.js';
// DOM Elements
const modalBtn = document.querySelector('.btn.signup');
const close = document.querySelector('.close');
// const formData = document.querySelectorAll(".formData");

modalBtn.addEventListener('click', launchModal);
close.addEventListener('click', closeModal);
