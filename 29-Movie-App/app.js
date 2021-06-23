const main = document.querySelector(".main");
const search = document.querySelector(".search");
let movie = "harry";
fetchMovie(movie);
search.addEventListener("keyup", (e) => {
  const title = e.target.value;

  fetchMovie(title);
});

async function fetchMovie(movie) {
  const resp = await fetch(
    `http://www.omdbapi.com/?s=${movie}&apikey=ebb5d959`
  );
  const data = await resp.json();
  console.log(data);
  const movieData = data.Search;
  main.innerHTML = movieData
    .map((movie) => {
      const { Poster, Year, Title } = movie;
      return ` <div class="container">
        <div class="image">
          <img src="${Poster}" alt="img5" />
        </div>
        <div class="info">
          <h4 class="title">${Title}</h4>
          <p class="rating">${Year}</p>
        </div>
        <div class="review">
          <p class="review-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            accusamus dolorum tenetur. Autem iusto laborum eveniet excepturi
            odit doloremque ab inventore architecto nihil maiores quaerat
            eligendi recusandae quo asperiores atque similique accusamus sit
            laudantium et pariatur quam magni libero, odio quod! Accusamus
          </p>
        </div>
      </div> `;
    })
    .join("");
}
