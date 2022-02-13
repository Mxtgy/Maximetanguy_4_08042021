import { NAVHEADER } from './utils/const.js';

//If NAVHEADER contains the class 'burgerOpened' we remove it to close the menu.
//Else we add it to open the menu.
function openMenu() {

  NAVHEADER.classList.toggle('burgerOpened');

}

export default openMenu;
