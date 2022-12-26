const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2');

function displaySuccess(inputField) {
  const formControl = inputField.parentElement;
  formControl.className = 'form-control success';
}

function displayError(inputField, message) {
  const formControl = inputField.parentElement;
  formControl.className = 'form-control error';
  const smallTag = formControl.querySelector('small');
  smallTag.innerText = message;
}

function isEmailValid(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkFieldLength(inputField, minLength) {
  if (inputField.value.length < minLength) {
    displayError(inputField, `${getFieldName(inputField)} should be at least ${minLength} character long`);
  }
}

function passwordsMatch(password1, password2) {
  if (password1.value !== password2.value) {
    displayError(password2, `Passwords dont match`);
  }
}

function validateRequiredFields(fieldsArray) {
  fieldsArray.forEach(inputField => {
    if (inputField.value.trim() === '') {
      displayError(inputField, `${getFieldName(inputField)} is required`);
    } else {
      displaySuccess(inputField);
    }

    if (inputField.id === 'email' && !isEmailValid(inputField.value)) {
      displayError(inputField, `${getFieldName(inputField)} is invalid`);
    }
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateRequiredFields([username, email, password, confirmPassword]);
  checkFieldLength(username, 3);
  checkFieldLength(password, 6);
  passwordsMatch(password, confirmPassword);
});
