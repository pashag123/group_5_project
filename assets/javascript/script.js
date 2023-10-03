// fetch('www.thecocktaildb.com/api/json/v1/1/random.php')
// .then(function(response) {
//     return response.json()
// })
// .then(function(data) {
// console.log(data)
// })


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWI2MjE0NTkyMzU0NDY1NDI1M2NiZDJiNjcyMzJkMSIsInN1YiI6IjY1MTYzMzQ2MDQ5OWYyMDBlMWM2YzI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VutccpyWV3ymu8yUveQ_zwGPo6wRaYhYWtdU-qG35YU'
    }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
    var instance = M.Dropdown.getInstance(elem);
    instance.open();
    instance.close();
    instance.destroy();
});

