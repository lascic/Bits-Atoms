var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var emailShortError = document.getElementById('emailShortError');
var passwordShortError = document.getElementById('passwordShortError');

email.addEventListener('textInput', checkEmail);
password.addEventListener('textInput', checkPassword);

function checkOverall() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        emailShortError.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        passwordShortError.style.display = "block";
        password.focus();
        return false;
    }

}
function checkEmail() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        emailShortError.style.display = "none";
        return true;
    }
}
function checkPassword() {
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        passwordShortError.style.display = "none";
        return true;
    }
}

