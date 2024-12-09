function countdown() {
  let now = new Date();   //Output: Mon Dec 09 2024 07:25:34 GMT+0100 (Central European Standard Time)
  let eventDate = new Date(2024, 11, 31); // Month is 0-based in JavaScript

  let currentTime = now.getTime(); // Output: 1733725428600
  let eventTime = eventDate.getTime(); //Output: 1735599600000

  let remainingTime = eventTime - currentTime;

  let seconds = Math.floor(remainingTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  setTimeout(countdown, 1000);
}
countdown();
