var listaFilmes = [];

listaFilmes.push([
  "https://www.themoviedb.org/t/p/original/7mRD6D7t4Mq6A7O1FSj7wWypxQd.jpg",
  "https://www.imdb.com/title/tt0071615/"
]);
listaFilmes.push([
  "https://www.themoviedb.org/t/p/original/wAPQMH2TBBIcoGPQ7hf2jE0zL1l.jpg",
  "https://m.imdb.com/title/tt0067866/"
]);
listaFilmes.push([
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sF4nk70J0FGBHlf0WTPWx7LS37l.jpg",
  "https://www.imdb.com/title/tt0098253/"
]);

document.write(`
  <h2>70's favorite psychedelic movies</h2>
`);

document.write(`
  <h4>Paste the .jpg url of your favorite movie cover and a link for the trailer to add the list below.</h4>
  <form onsubmit="newMovie()">
    <input type="url" id="urlJpg" placeholder="http://example.jpg" required>
    <input type="url" id="urlTrailer" placeholder="http://www.youtube.com">
    <input type="submit" id="add" value="Add">
  </form>
`);

var count = 0;
while (count < listaFilmes.length) {
  document.write(
    `<a target="_blank" href=${listaFilmes[count][1]}><img src=${listaFilmes[count][0]} class="cover"></a>`
  );
  count++;
}

var movieList = [];
var tagImg = document.getElementsByClassName("cover");
Object.values(tagImg).forEach((src) => movieList.push(src.getAttribute("src")));
// console.log(movieList);

document.write("<br>");

function newMovie() {
  let cover = document.querySelector("#urlJpg").value;
  let trailer = document.querySelector("#urlTrailer").value;
  if (!movieList.includes(cover)) {
    document.querySelector(
      "body"
    ).innerHTML += `<a target="_blank" href=${trailer}><img src=${cover} class="cover"></a>`;
    movieList.push(cover);
  } else {
    alert("This movie is already on the list!");
  }
  event.preventDefault();
}
