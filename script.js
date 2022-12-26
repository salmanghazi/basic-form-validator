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

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (username.value === '') {
    displayError(username, 'Username is required');
  } else {
    displaySuccess(username);
  }


  if (email.value === '') {
    displayError(email, 'Email is required');
  } else if (!isEmailValid(email.value)) {
    displayError(email, 'Email is invalid');
  } else {
    displaySuccess(email);
  }


  if (password.value === '') {
    displayError(password, 'Password is required');
  } else {
    displaySuccess(password);
  }


  if (confirmPassword.value === '') {
    displayError(confirmPassword, 'Please confirm password');
  } else {
    displaySuccess(confirmPassword);
  }
});
