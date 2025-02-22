import openMenu from './nav.js';
import launchCloseModal from './utils/launch-close-modal.js';
import checkInputFocusOut from './check-form-errors.js';
import checkOnSubmit from './validate-form.js';
import { BURGERBTN, MODALBTN, CLOSE, FORM, FIRSTNAME, LASTNAME, EMAIL, BIRTHDATE, QUANTITY } from './utils/const.js';


//Add Events Listeners for the form error check on focus out
var arrayFocusOut = [FIRSTNAME.input, LASTNAME.input, EMAIL.input, BIRTHDATE.input, QUANTITY.input];
for(var i = 0; i < arrayFocusOut.length; i++) {
    arrayFocusOut[i].addEventListener('focusout', checkInputFocusOut);
}

//Add Event Listener for the form error on the quantity check on keyup
QUANTITY.input.addEventListener('keyup', checkInputFocusOut);

//Add Event Listener on the submit of the form
FORM.addEventListener('submit', function(event) {
    event.preventDefault();
    checkOnSubmit();
});

//Add Event Listern for the launch and close modal, and for the menu burger button.
BURGERBTN.addEventListener('click', openMenu);
MODALBTN.addEventListener('click', launchCloseModal);
CLOSE.addEventListener('click', launchCloseModal);
