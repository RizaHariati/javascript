const today = new Date();
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const dayToday = days[today.getDay()];

const subtitle = document.querySelector(".subtitle");

subtitle.innerHTML = `Launching is scheduled on <br />
            <span>${today} 11:30am</span>`;
