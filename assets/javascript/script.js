let selectEl = document.querySelector('#genre-dropdown');

const options = {
 method: 'GET',
 headers: {
  accept: 'application/json',
  Authorization:
   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWI2MjE0NTkyMzU0NDY1NDI1M2NiZDJiNjcyMzJkMSIsInN1YiI6IjY1MTYzMzQ2MDQ5OWYyMDBlMWM2YzI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VutccpyWV3ymu8yUveQ_zwGPo6wRaYhYWtdU-qG35YU',
 },
};

//move fetch to be added with action
fetch(
 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
 options
)
 .then((response) => response.json())

 .then(function (data) {
  renderCards(data.results);
 })
 .catch((err) => console.error(err));

fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
 .then((response) => response.json())
 .then((response) => {
  // let selectEl = document.querySelector('#genre-dropdown');
  // let dropdown = document.querySelector('.dropdown-content');

  for (let i = 0; i < response.genres.length; i++) {
   var a = document.createElement('option');
   a.textContent = response.genres[i].name;
   a.value = response.genres[i].id;
   selectEl.append(a);
  }
  initializeElems();
 })
 .catch((err) => console.error(err));

const initializeElems = function () {
 var elems = document.querySelectorAll('select');
 var instances = M.FormSelect.init(elems, options);
};

function handleOptionChange(e) {
 fetch(
  `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&with_genres=${e.target.value}&language=en-US&page=1`,
  options
 )
  .then((response) => response.json())
  .then((data) => {
   renderCards(data.results);
  });
}

document.addEventListener('DOMContentLoaded', initializeElems);

selectEl.addEventListener('change', handleOptionChange);

function renderCards(movies) {
 var html = '';
 for (var i = 0; i < movies.length; i++) {
  html =
   html +
   `
    <div id="full-card" class="m6 l3">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="https://image.tmdb.org/t/p/original/${movies[i].poster_path}"></img>
            </div>
            <div class="card-content">
                <span id="card-title" class="card-title activator white-text">${movies[i].title}
            </div>
            
            <div class="card-reveal">
                <span class="card-title white-text">${movies[i].title}<i
                        class="material-icons right">close</i></span>
                <p class="card-text"> ${movies[i].overview}</p>
                <div class="col s6 m6 l6">Rating: ${movies[i].vote_average}</div>
                <div class="col s6 m6 l6">${movies[i].release_date}</div>
            </div>
        </div>
    </div>
    `;
 }
 var container = document.querySelector('.movie-container');
 container.innerHTML = html;
}

async function fetchDrinks(e) {
 document.querySelector('.modal-content').textContent = '';
 initializeElemsTwo();
 const url = 'https://the-cocktail-db.p.rapidapi.com/random.php';
 const optionDrinks = {
  method: 'GET',
  headers: {
   'X-RapidAPI-Key': '03e6675150mshb55d6627ac47647p1e052cjsn54e5025a4931',
   'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
  },
 };

 try {
  const response = await fetch(url, optionDrinks);
  const result = await response.json();
  const drinkData = result.drinks[0];

  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = `
        <div id="drink-container" class="container">
            <h5>${drinkData.strDrink}</h5>
            <img src="${drinkData.strDrinkThumb}" alt="${
   drinkData.strDrink
  }" class="drink-image">
            <p class="drink-text"> <b> Glass:</b> ${drinkData.strGlass}</p>
            <p class="drink-text"> <b> Ingredients:</b> ${
             drinkData.strIngredient1 ? drinkData.strIngredient1 + ', ' : ''
            }${
   drinkData.strIngredient2 ? drinkData.strIngredient2 + ', ' : ''
  }${drinkData.strIngredient3 ? drinkData.strIngredient3 + ', ' : ''}${
   drinkData.strIngredient4 ? drinkData.strIngredient4 + ', ' : ''
  }${drinkData.strIngredient5 ? drinkData.strIngredient5 + ', ' : ''}</p>
            <p class="drink-text"> <b> Instructions:</b> ${
             drinkData.strInstructions
            }</p>
        </div>
        `;
 } catch (error) {
  console.error(error);
 }
}

const initializeElemsTwo = function () {
 var elements = document.querySelectorAll('.modal');
 var instances = M.Modal.init(elements, options);
};
document.addEventListener('DOMContentLoaded', initializeElemsTwo);

document.querySelector('#drink').addEventListener('click', fetchDrinks);

document.addEventListener('DOMContentLoaded', () => {
 // Check if the 'visits' key exists in localStorage
 if (localStorage.getItem('visits')) {
  // If the key exists, increment the value and update the localStorage
  let visits = parseInt(localStorage.getItem('visits'));
  visits++;
  localStorage.setItem('visits', visits);
 } else {
  // If the key doesn't exist, set it to 1
  localStorage.setItem('visits', 1);
 }

 // Retrieve the visit count from localStorage and display it in the footer
 const visitCount = localStorage.getItem('visits');
 document.getElementById('visit-count').textContent = visitCount;
});
