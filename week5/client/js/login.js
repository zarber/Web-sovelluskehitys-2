'use strict';
const API_URL = 'http://localhost:4000/api'; // change url when uploading to server

const loginForm = document.querySelector('#login-form');

// login
loginForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(loginForm);
  console.log(JSON.stringify(data));

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(API_URL + '/user/login', fetchOptions);

  const json = await response.json();
  console.log('login response', json);
  if (!json.email) {
    alert(json.message);
  } else {
    // save token
    sessionStorage.setItem('token', json.token);
    sessionStorage.setItem('email', json.email);
    location.href = 'front.html';
  }
});