const submitBtn = document.querySelector(".submitBtn");
const alertList = document.querySelector(".alert");
const submitTxt = document.querySelector(".submitTxt");
function trying() {
  alertList.classList.add("error");
  alertList.textContent = `Please enter Value`;
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!submitTxt.value) {
    alerting("error", "Please enter value");
  } else {
    alerting("success", "Item added to the List ");
  }
});

function alerting(text1, text2) {
  alertList.classList.add(text1);
  alertList.textContent = text2;

  setTimeout(() => {
    alertList.classList.remove(text1);
    submitTxt.value = null;
  }, 1000);
}
