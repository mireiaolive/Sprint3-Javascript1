// Exercise 6
function validate() {
    var error = 0;

    // Get the input fields
    const fName = document.getElementById("fName");
    const fEmail = document.getElementById("fEmail");
    const fAddress = document.getElementById("fAddress");
    const fLastN = document.getElementById("fLastN");
    const fPassword = document.getElementById("fPassword");
    const fPhone = document.getElementById("fPhone");

    // Regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^\d+$/;
    const onlyLetters = /^[a-zA-Z]+$/;

    //Creat a class to style valid or invalid with boostrap
    function valid(field) {
        field.classList.remove("is-invalid");
        field.classList.add("is-valid");
    }

    function invalid(field) {
        field.classList.remove("is-valid");
        field.classList.add("is-invalid");
        //Alert error
        error++;
    }

    //El nom i cognoms han de contenir només lletres.
    if (onlyLetters.test(fName.value)) {
        valid(fName);
    } else {
        invalid(fName);
    }

    //El telèfon ha de contenir només números.
    if (phoneRegex.test(fPhone.value)) {
        valid(fPhone);
    } else {
        invalid(fPhone);
    }

    //La contrasenya ha d'incloure números i lletres.
    if (passwordRegex.test(fPassword.value)) {
        valid(fPassword);
    } else {
        invalid(fPassword);
    }

    //The email must have email format
    if (emailRegex.test(fEmail.value)) {
        valid(fEmail);
    } else {
        invalid(fEmail);
    }

    //Error
    if (error > 0) {
        alert("Error");
    } else {
        alert("OK");
    }
}

//avoid a page reload
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    validate();
});
