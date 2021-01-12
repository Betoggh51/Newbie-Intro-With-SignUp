let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.getElementById('form');

form.addEventListener('submit', () => {
    if(firstName.value === '' || firstName.value == null){
        let firstNameWrongIcon = document.getElementById('first-name-error-icon');
        let firstNameErrorMessage = document.getElementById('first-name-error-message');

        firstNameWrongIcon.style.display = 'initial';
        firstNameErrorMessage.style.display = 'initial';
    }

    if(lastName.value === '' || lastName.value == null){
        let lastNameWrongIcon = document.getElementById('last-name-error-icon');
        let lastNameErrorMessage = document.getElementById('last-name-error-message');

        lastNameWrongIcon.style.display = 'initial';
        lastNameErrorMessage.style.display = 'initial';
    }

    if(email.value === '' || email.value == null){
        let emailWrongIcon = document.getElementById('email-error-icon');
        let emailErrorMessage = document.getElementById('emailerror-message');

        emailWrongIcon.style.display = 'initial';
        emailErrorMessage.style.display = 'initial';
    }

    if(password.value === '' || password.value == null){
        let passwordWrongIcon = document.getElementById('password-error-icon');
        let passwordErrorMessage = document.getElementById('password-error-message');

        passwordWrongIcon.style.display = 'initial';
        passwordErrorMessage.style.display = 'initial';
    }

    
})