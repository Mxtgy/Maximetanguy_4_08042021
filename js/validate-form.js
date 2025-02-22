import { FORM, CONFIRMATIONFORM, FIRSTNAME, LASTNAME, EMAIL, BIRTHDATE, QUANTITY, CHECKBOXLIST, CHECKBOXCONDITION } from './utils/const.js';
import { checkName, checkEmail, checkBirthdate, checkQuantity, checkBoxList, checkBoxvalue } from './utils/form.js';

/*
We check here if there is no error before submitting the form.
Specific functions are called with the inputs values and if all return true we can send the data and display the message.
*/
function checkOnSubmit() {
    var checkname = checkName(FIRSTNAME.parent, FIRSTNAME.input.value);
    var checklast = checkName(LASTNAME.parent, LASTNAME.input.value);
    var checkmail = checkEmail(EMAIL.parent, EMAIL.input.value);
    var checkbirthdate = checkBirthdate(BIRTHDATE.parent, BIRTHDATE.input.value);
    var checkquantity = checkQuantity(QUANTITY.parent, QUANTITY.input.value);
    var checkboxlist = checkBoxList(CHECKBOXLIST.parent, CHECKBOXLIST.input);
    var checkboxvalue = checkBoxvalue(CHECKBOXCONDITION.parent, CHECKBOXCONDITION.elem);
    if(checkname && checklast && checkmail && checkbirthdate && checkquantity && checkboxvalue && checkboxlist) {
        FORM.style.display = "none";
        CONFIRMATIONFORM.style.display = "block";
        //FORM.submit();
    }
    
}

export default checkOnSubmit;