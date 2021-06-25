const searchInput = document.querySelector(".search");
const result = document.querySelector(".result-container");

searchInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  let temp = e.currentTarget.value;
  if (e.key == "Enter") {
    if (!temp) {
      alerting("Please enter value");
    } else {
      findUser(temp);
    }
  }
});

function alerting(text) {
  result.innerHTML = `<h3 class="alert" >${text}</h3>`;
  result.classList.add("show");
  setTimeout(() => {
    result.classList.remove("show");
    result.innerHTML = ``;
  }, 1000);
}

async function findUser(name) {
  const resp = await fetch("https://api.github.com/users/" + name);
  if (!resp.ok) {
    alerting("User is not found");

    searchInput.value = "";
  } else {
    const data = await resp.json();
    showData(data);
    console.log(data);
  }
}

function showData(data) {
  const {
    name,
    avatar_url,
    bio,
    followers,
    following,
    public_repos,
    repos_url,
  } = data;

  result.innerHTML = `
   <div class="image">
          <img src="${avatar_url}" alt="girl" />
        </div>
        <div class="info">
          <h4 class="name">${name}</h4>
          <p class="description">
           ${bio}
          </p>
          <div class="social">
            <p><span class="followers">${followers}</span> followers</p>
            <p><span class="following">${following}</span> following</p>
            <p><span class="repos-number">${public_repos}</span>repos</p>
          </div>
          <div class="repos">
           
          </div>
        </div>`;
  const repos = result.querySelector(".repos");
  getRepos(repos_url, repos);
  result.classList.add("show");
  searchInput.value = "";
}

async function getRepos(repos_url, repos) {
  const resp = await fetch(repos_url);
  const data = await resp.json();
  repos.innerHTML = data
    .map((item, index) => {
      if (index < 5) {
        return `<p class="repo">${item.name}</p>`;
      }
    })
    .join("");
}
