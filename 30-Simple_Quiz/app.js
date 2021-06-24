import data from "./data_quiz.js";
console.log(data);
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.querySelector(".btn");

let quiz_index = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  decheckedAnswers();
  const { question, a, b, c, d, correct } = data[quiz_index];
  questionEl.textContent = question;
  a_text.textContent = a;
  b_text.textContent = b;
  c_text.textContent = c;
  d_text.textContent = d;
}

function decheckedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function checkAnswer() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked == true) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = checkAnswer();

  if (answer == data[quiz_index].correct) {
    score++;
  }
  quiz_index++;
  if (quiz_index < data.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = ` <h3>Your score is ${score} out of ${data.length} questions</h3>
      <button onclick="location.reload()" id="submit" class="btn">
        Reload
      </button>`;
  }
});
