

let selectEl = document.querySelector('#genre-dropdown');


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

        // let selectEl = document.querySelector('#genre-dropdown');
        // let dropdown = document.querySelector('.dropdown-content');

        for (let i = 0; i < response.genres.length; i++) {
            var a = document.createElement("option");
            a.textContent = response.genres[i].name;
            a.value = response.genres[i].id;
            console.log('OPTION EL', a)
            selectEl.append(a);
            console.log('TARGET EL', selectEl);
        }
        initializeElems();
    })
    .catch(err => console.error(err));

const initializeElems = function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
}

function handleOptionChange(e) {
    console.log(e.target.value)
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&with_genres=${e.target.value}&language=en-US&page=1`, options)

        .then(response => response.json())
        .then(data => {
            console.log(data)
            renderCards(data.results)
        })
}


document.addEventListener('DOMContentLoaded', initializeElems);

selectEl.addEventListener('change', handleOptionChange)




// fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
// .then(response => response.json())
// .then(response => {
//     console.log(response)


//     for (let i = 0; i < response.genres.length; i++) {
//         console.log(response.genres[i]);
//         var a = document.createElement("option");
//         a.textContent = response.genres[i].name;
//         a.value = response.genres[i].id;
//         console.log(a)

//         document.querySelector('#genre-dropdown').append(a)
//     }
// })
// .catch(err => console.error(err));



// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
//   });


function renderCards(movies) {
    var html = ""
    for (var i = 0; i < movies.length; i++) {
        html = html + `
        <div id="full-card" class="col s12 m6 l3">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="https://image.tmdb.org/t/p/original/${movies[i].poster_path}"></img>
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${movies[i].title}
                <p><a class= "btn modal-trigger halfway-fab waves-effect waves-light black"><i
                            class="material-icons">local_bar</i></a></p>
                <div id="modal1" class="modal">
                    <div class="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${movies[i].title}<i
                        class="material-icons right">close</i></span>
                <p>${movies[i].overview}</p>
                <div class="col s6 m6 l6">Rating: ${movies[i].vote_average}</div>
                <div class="col s6 m6 l6">${movies[i].release_date}</div>
            </div>
        </div>
    </div>
    `
    }
    var container = document.querySelector('.card-container .row')
    container.innerHTML = html

}




async function fetchDrinks() {
    const url = 'https://the-cocktail-db.p.rapidapi.com/random.php';
    const optionDrinks = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '03e6675150mshb55d6627ac47647p1e052cjsn54e5025a4931',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, optionDrinks);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}

fetchDrinks();
