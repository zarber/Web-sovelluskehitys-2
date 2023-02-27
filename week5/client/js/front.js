'use strict';
const API_URL = 'http://localhost:4000/api'; // change url when uploading to server

const displayWorkouts = (workouts) => {
  workouts.forEach((workout) => {
    console.log(workout.title);
    console.log(workout.load);
    console.log(workout.load);
  });
};

// AJAX call
const getWorkouts = async () => {
  try {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    };

    const response = await fetch(API_URL + '/workouts', fetchOptions);
    const workouts = await response.json();
    // console.log(workouts);
    displayWorkouts(workouts);
  } catch (e) {
    console.log(e.message);
  }
};
getWorkouts();