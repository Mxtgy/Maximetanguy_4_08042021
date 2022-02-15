import { REGEX, CHECKBOXLIST } from './const.js';

/*
This function display error by turning the data-visible of the parent element to true.
By doing that the CSS will show the error message.
*/
function displayError(elem) {
    elem.dataset.visible = true;
}

/*
This function hide/remove the error on the parent element.
*/
function removeError(elem){
    elem.dataset.visible = false;
}


/*
We remove the error if there is one, then we check if the value entered is undefined or shorter than 2 character.
If so, an error will be displayed, else return true.
*/
function checkName(elem, string) {
    removeError(elem);
    if(string === "" || string.length < 2) {
        displayError(elem);
        return false;
    }
    return true;
}

/*
We remove the error if there is one, then we test the value with the regex. If the test doesn't return true then an error will be displayed.
Else return true.
*/
function checkEmail(elem, string) {
    removeError(elem);
    var regexMail = REGEX.regexMail;
    if(!regexMail.test(string)) {
        displayError(elem);

        return false;
    }

    return true;
}

/*
We remove the error if there is one, then we split the value entered and we test the regex.
If it returns true we transform the string splitted into integers and set a new date with it.
If the months and the days entered are the same as the new days and months set we can check if the year is in the correct time frame.
And then return true. Else return an error.
*/
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


/*
We remove the error if there is one, then check if the value entered is an integer or not.
If not, return an error.
If yes, we display the next input but if the number is zero then we don't. Then return true.
*/
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


/*
We remove the error if there is one. If the field is invisible we return true.
Else we check that at least one box is checked. If not we fire an error.
*/
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

/*
We remove the error if there is one. Then we check if the mandatory checkbox is checked.
If not we fire an error. Else we return true.
*/
function checkBoxvalue(parent, elem) {
    removeError(parent);
    if(elem.checked == 1) {
        return true;
    }
    displayError(parent);

    return false;
}


export { checkName, checkEmail, checkBirthdate, checkQuantity, checkBoxList, checkBoxvalue };