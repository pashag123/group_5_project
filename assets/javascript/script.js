// fetch('www.thecocktaildb.com/api/json/v1/1/random.php')
// .then(function(response) {
//     return response.json()
// })
// .then(function(data) {
// console.log(data)
// })

// var 

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWI2MjE0NTkyMzU0NDY1NDI1M2NiZDJiNjcyMzJkMSIsInN1YiI6IjY1MTYzMzQ2MDQ5OWYyMDBlMWM2YzI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VutccpyWV3ymu8yUveQ_zwGPo6wRaYhYWtdU-qG35YU'
    }
};

//move fetch to be added with action
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
   
    .then(function (data) {
        console.log(data)
        renderCards(data.results)
    })
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        for (let i = 0; i < response.genres.length; i++) {
            console.log(response.genres[i]);
            var a = document.createElement("option");
            a.textContent = response.genres[i].name;
            a.value = response.genres[i].id;
            console.log(a)
        }
    })
    .catch(err => console.error(err));

// genre data to list items, use for loop
// create new li element, append child to ul #dropdown1
// object, array, object(id, name)   -take name and id both
console.log();


// for (let j=1; j < response.length; j++) {
//     var a = response[j].j("name");
//     console.log(a);
// }



document.createElement("li")
var genreBtn = document.getElementById("dropdown1");
genreBtn.appendChild("li").textContent = 







    document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
    var instance = M.Dropdown.getInstance(elems);
    //instance.open();
    //instance.close();
    //instance.destroy();
});


function renderCards(movies) {
    var html = ""
    for (var i = 0; i < movies.length; i++) {
        html = html + `
    <div id="full-card" class="col s12 m6 l3">
    <div class="card">
        <div class="card-image">
            <div>
                <img src="https://image.tmdb.org/t/p/original/${movies[i].poster_path}">
            </div>
            
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i
                    class="material-icons">add</i></a>
        </div>

        <div class="card-content">
            <div class="row">
                <div class="col s6 m6 l6">${movies[i].release_date}</div>
                <div class="col s6 m6 l6">${movies[i].vote_average}</div>
            </div>
            <h2>${movies[i].title}</h2>
            <p>${movies[i].overview}</p>
        </div>
    </div>
</div>
    `
    }
    var container = document.querySelector('.card-container .row') 
    container.innerHTML = html 
}
/*
function genreSearch () {
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));



}
*/
var searchBtn = document.getElementById("#dropdown1");
searchBtn.click(genreSearch());
