import { FORM, CONFIRMATIONFORM, FIRSTNAME, LASTNAME, EMAIL, BIRTHDATE, QUANTITY, CHECKBOXLIST, CHECKBOXCONDITION } from './const.js';
import { checkName, checkEmail, checkBirthdate, checkQuantity, checkBoxList, checkBoxvalue } from './modal.js';

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
    }
    
}

export default checkOnSubmit;