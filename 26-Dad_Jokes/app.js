const jokes = document.getElementById("text");
const jokeBtn = document.querySelector(".btn");

jokeBtn.addEventListener("click", generateJoke);

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((resp) => resp.json())
//     .then((data) => {
//       jokes.innerHTML = data.joke;
//     });
// }

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const resp = await fetch("https://icanhazdadjoke.com", config);
  const data = await resp.json();
  jokes.innerHTML = data.joke;
}
