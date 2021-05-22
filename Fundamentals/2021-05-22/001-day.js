var today = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var day = days[today.getMonth()];
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
console.log(`Today is : ${day}`);
console.log(`The time is : ${hour}:${minutes}:${seconds}`);
