# Movies Under the Influence (Movie and Drink Finder App Project)

## Description
On occasion, one may find themselves interested in enjoying a movie paired with an adult beverage.  At this time, our “Movies Under the Influence” web app will be a way to search and find a popular movie, along with a cocktail beverage.  Using this app, one is presented with a listing of movies in order of popularity, or one may request a listing of movies by genre.  What sets this app apart is its simplicity: the movies present their promo image, a brief synopsis, release date, and rating.  The brevity of information here allows viewers to merely choose what is immediately interesting, rather than wade through endless images and previews.  You may then pair your movie with a beverage—just click and a drink recipe will be presented, from an array of well-known cocktails.  Enjoy our app responsibly!

## Technologies
This app project was a culmination of the coding technologies we learned in the first part of this bootcamp.  Of course, the background was HTML, CSS, and JavaScript, but added to this foundation we used Materialize, a CSS framework library.  This gave the visual structure to our movie card presentation and input buttons, as well as the recipe modal.  With some tweaking we obtained a uniform card structure and a minimalist data presentation—fitting for relaxed browsing of new movies.

The engine behind this app is of course the two APIs.  First there is the movie database api, which is active when the page is first loaded.  This default api call will return the latest movie releases in order of popularity. At the same time, an api call returns a data set of movie genres, which populates the selection menu, at the left-side button.  The genres are also coded by id, which is fed into the next api call.  The following api call is genre specific.  It returns movie listings by genre.  The api call features the code snippet “&with_genres=${e.target.value}”.  “${e.target.value}”is the code containing the genre id information necessary for a genre endpoint api call.  When activated by clicking on a genre option, this api will retrieve and display movies by genre.

Yet these three calls use the same api, referred to as The Movie Database API, for these results.  What about the drink?  This is handled using The Cocktail DB API, which is hosted on an api hub called Rapid API.  The endpoint used in our app is the one which looks up a random drink.  We then format and display the relevant data returned: name, image, ingredients and recipe.  This is all displayed with a modal.  

## Screenshot
<img src="./assets/images/Screenshot 2023-10-09 222855.png">




## Acknowledgement
Special thanks to Diarmuid Murphy and Meg Meyers for aiding in the creation of this app.


## Links
Github Link
https://github.com/pashag123/group_5_project

Deployed Link
https://pashag123.github.io/group_5_project/



