import { REGEX, CHECKBOXLIST } from './const.js';

function displayError(elem) {
    elem.dataset.visible = true;
}

function removeError(elem){
    elem.dataset.visible = false;
}

function checkName(elem, string) {
    removeError(elem);
    if(string === "" || string.length < 2) {
        displayError(elem);
        return false;
    }
    return true;
}

function checkEmail(elem, string) {
    removeError(elem);
    var regexMail = REGEX.regexMail;
    if(!regexMail.test(string)) {
        displayError(elem);

        return false;
    }

    return true;
}

function checkBirthdate(elem, string) {
    removeError(elem);
    var dateArray = string.split("-");
    if(REGEX.regexBirth.test(string)) {
        var yearEntered = parseInt(dateArray[0]);
        var monthEntered = parseInt(dateArray[1]) - 1;
        var dayEntered = parseInt(dateArray[2]);
        var dateTest = new Date();
        dateTest.setFullYear(yearEntered, monthEntered, dayEntered);
        var monthToTest = dateTest.getMonth();
        var dayToTest = dateTest.getDate();
        if(monthToTest == monthEntered && dayToTest == dayEntered) {
            if(yearEntered > 1919 && yearEntered < 2018) {
                return true;
            }
        }
    }
    displayError(elem);

    return false;
}

function checkQuantity(elem, value) {
    removeError(elem);
    var isNumber = Number.isInteger(parseInt(value));
    if(!isNumber) {
        displayError(elem);

        return false;
    }

    var invisibleCheckboxField = document.querySelector('.formData.invisible');
    if(invisibleCheckboxField) {
        invisibleCheckboxField.classList.remove('invisible');
    }
    if(isNumber && value === '0') {
        CHECKBOXLIST.parent.classList.add('invisible');
    }

    return true;

}

function checkBoxList(parent, elems){
    removeError(parent);
    if(parent.classList.contains('invisible')) {
        return true;
    }
    for(var j = 0; j < elems.length; j++) {
        if(elems[j].checked == 1) {
            return true;
        }
    }

    displayError(parent);

    return false;
}

function checkBoxvalue(parent, elem) {
    removeError(parent);
    if(elem.checked == 1) {
        return true;
    }
    displayError(parent);

    return false;
}


export { checkName, checkEmail, checkBirthdate, checkQuantity, checkBoxList, checkBoxvalue };