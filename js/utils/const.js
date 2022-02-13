//DOM Elements


//MENU
export const BURGERBTN = document.querySelector('.main-navbar .icon');
export const NAVHEADER = document.querySelector('#myTopnav');

//MODAL LAUNCH/CLOSE
export const MODALBTN = document.querySelector('.btn.signup');
export const CLOSE = document.querySelector('.close');
export const MODALBG = document.querySelector('.bground');


//FORM
export const FORM = document.querySelector('form');
export const CONFIRMATIONFORM = document.querySelector('.form-confirmation');

//REGEX
export const REGEX = {
    regexMail: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    regexBirth: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
}

//INPUTS
export const FIRSTNAME = {
    parent: document.querySelector('.formData.first'),
    input: document.querySelector('#first')
}
export const LASTNAME = {
    parent: document.querySelector('.formData.last'),
    input: document.querySelector('#last')
}
export const EMAIL = {
    parent: document.querySelector('.formData.email'),
    input: document.querySelector('#email')
}
export const BIRTHDATE = {
    parent: document.querySelector('.formData.birthdate'),
    input: document.querySelector('#birthdate')
}
export const QUANTITY = {
    parent: document.querySelector('.formData.quantity'),
    input: document.querySelector('#quantity')
}
export const CHECKBOXLIST = {
    parent: document.querySelector('.formData.checklist'),
    input: document.querySelectorAll('.formData.checklist .checkbox-input')
}
export const CHECKBOXCONDITION = {
    parent: document.querySelector('.formData.conditionoblg'),
    elem: document.querySelector('#conditionoblg')
}