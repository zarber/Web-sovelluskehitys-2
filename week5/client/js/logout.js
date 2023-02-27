'use strict';
const url = 'http://localhost:4000/api'; // change url when uploading to server

const logout = document.querySelector('#logout');
logout.addEventListener('click', () => {
  try {
    // remove token
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    console.log('You have logged out');
    location.href = 'login.html';
  } catch (e) {
    console.log(e.message);
  }
});