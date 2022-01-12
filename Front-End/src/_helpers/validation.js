export function isNumericValue(n, length) {
    if(!n) return false; 
    if(n.length === 0) return false;
    if(n.length > length) return false;
    if(isNaN(n)) return false;
    return true; 
}

export function isEmail(email) {
    if(!email) return false;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validRegex)) return true; 
    return false;
}

export function isPassword(password) {
    if(!password) return false;
    if (password.match(/[a-z]/g) && password.match(
        /[A-Z]/g) && password.match(
        /[0-9]/g) && password.match(
        /[^a-zA-Z\d]/g) && password.length >= 8) return true;
    else return false;
}