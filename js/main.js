import openMenu from './nav.js';
import launchCloseModal from './launch-close-modal.js';
import checkInputFocusOut from './modal.js';
import checkOnSubmit from './onsubmit.js';
import { BURGERBTN, MODALBTN, CLOSE, FORM, FIRSTNAME, LASTNAME, EMAIL, BIRTHDATE, QUANTITY } from './const.js';


//Add Events Listeners
var arrayFocusOut = [FIRSTNAME.input, LASTNAME.input, EMAIL.input, BIRTHDATE.input];
for(var i = 0; i < arrayFocusOut.length; i++) {
    arrayFocusOut[i].addEventListener('focusout', checkInputFocusOut);
}

QUANTITY.input.addEventListener('keyup', checkInputFocusOut);

FORM.addEventListener('submit', function(event) {
    event.preventDefault();
    checkOnSubmit();
});

BURGERBTN.addEventListener('click', openMenu);
MODALBTN.addEventListener('click', launchCloseModal);
CLOSE.addEventListener('click', launchCloseModal);
