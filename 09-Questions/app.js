const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.classList.remove("show");
  const btn = question.querySelector(".far");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show");
      }
      question.classList.toggle("show");
      if (btn.classList.contains("fa-plus-square")) {
        btn.classList.remove("fa-plus-square");
        btn.classList.add("fa-minus-square");
      } else {
        btn.classList.remove("fa-minus-square");
        btn.classList.add("fa-plus-square");
      }
    });
  });
});

// const toggleBtn = [...document.querySelectorAll(".far")];

// toggleBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (btn.classList.contains("fa-plus-square")) {
//       btn.classList.remove("fa-plus-square");
//       btn.classList.add("fa-minus-square");
//     } else {
//       btn.classList.remove("fa-minus-square");
//       btn.classList.add("fa-plus-square");
//     }
//     const ask = btn.parentElement.parentElement.nextElementSibling;
//     ask.classList.toggle("show");
//     console.log(ask.parentElement);
//   });
// });
