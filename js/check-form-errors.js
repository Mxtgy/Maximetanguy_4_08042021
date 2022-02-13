import { checkName, checkEmail, checkBirthdate, checkQuantity, checkBoxvalue } from './utils/form.js';

//This function checks the data of some input on focus out by calling specifics functions.
function checkInputFocusOut() {
    
    var valueElem = this.value;
    var idElem = this.id;
    var elemParent = document.querySelector(".formData." + idElem);
    switch (idElem) {
        case "first":
        case "last":
            checkName(elemParent, valueElem);
            break;
        case "email":
            checkEmail(elemParent, valueElem);
            break;
        case "birthdate":
            checkBirthdate(elemParent, valueElem);
            break;
        case "quantity":
            checkQuantity(elemParent, valueElem);
            break;
        case "conditionOblg":
            checkBoxvalue(elemParent, valueElem);
            break;
    }
}
export default checkInputFocusOut;
