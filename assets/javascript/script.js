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
    <div class="col s12 m6 l3">
    <div class="card">
        <div class="card-image">
            <div>
                <img src="">
            </div>
            
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i
                    class="material-icons">add</i></a>
        </div>

        <div class="card-content">
            <div class="row">
                <div class="col">year</div>
                <div class="col">rating</div>
                <div class="col">watch options</div>
            </div>
            <h2>${movies[i].title}</h2>
            <p>I am a very simple card. I am good at containing small bits of information. I am
                convenient
                because I require little markup to use effectively.</p>
        </div>
    </div>
</div>
    `
    }
    var container = document.querySelector('.card-container .row') 
    container.innerHTML = html 
}