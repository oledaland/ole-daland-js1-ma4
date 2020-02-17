// Task 3
const url = "https://api.rawg.io/api/games/4200";
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    createGamesDetails(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function createGamesDetails(json) {
  const h1 = document.querySelector("h1");
  const image = document.querySelector(".image");
  const desc = document.querySelector(".description");
  h1.innerHTML = json.name;
  image.style.backgroundImage = `url("${json.background_image}")`;
  desc.innerHTML = json.description;
}
