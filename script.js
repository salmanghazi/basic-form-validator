const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (username.value === '') alert('Username is required');
  else if (email.value === '') alert('Email is required');
  else if (password.value === '') alert('Password is required');
  else if (confirmPassword.value === '') alert('Renter the password to confirm');

  
})
