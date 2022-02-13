import { MODALBG } from './const.js';

//If MODALBG contains the class 'Open' we remove it to close the modal.
//Else we add open to open the modal.
export default function launchCloseModal() {
  MODALBG.classList.toggle('open');
}