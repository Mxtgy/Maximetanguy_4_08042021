import openMenu from './nav.js';
import launchCloseModal from './utils/launch-close-modal.js';
import checkInputFocusOut from './check-form-errors.js';
import checkOnSubmit from './validate-form.js';
import { BURGERBTN, MODALBTN, CLOSE, FORM, FIRSTNAME, LASTNAME, EMAIL, BIRTHDATE, QUANTITY } from './utils/const.js';


//Add Events Listeners
var arrayFocusOut = [FIRSTNAME.input, LASTNAME.input, EMAIL.input, BIRTHDATE.input, QUANTITY.input];
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
