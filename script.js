if (top.location.pathname === "/Quarantini/drink.html") {
    $(document).ready(function() {
        
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
            method: "GET"
        }).then(function(response){

            var drinkIng = '';

            if (response.drinks[0].strIngredient1 != null) {
                drinkIng = drinkIng + response.drinks[0].strIngredient1 + "<br>";
            }

            if (response.drinks[0].strIngredient2 != null) {
                drinkIng = drinkIng + response.drinks[0].strIngredient2 + "<br>";
            }

            if (response.drinks[0].strIngredient3 != null) {
                drinkIng = drinkIng + response.drinks[0].strIngredient3 + "<br>";
            }

            if (response.drinks[0].strIngredient4 != null) {
                drinkIng = drinkIng + response.drinks[0].strIngredient4 + "<br>";
            }

            if (response.drinks[0].strIngredient5 != null) {
                drinkIng = drinkIng + response.drinks[0].strIngredient5 + "<br>";
            }

            if (response.drinks[0].strIngredient6 != null) {
                drinkIng = drinkIng + response.drinks[0].strIngredient6 + "<br>";
            }

            if (response.drinks[0].strIngredient7 != null) {
                drinkIng = drinkIng + response.drinks[0].strIngredient7 + "<br>";
            }

            if (response.drinks[0].strIngredient8 != null) {
                drinkIng = drinkIng + response.drinks[0].strIngredient8 + "<br>";
            }

            var drink = `<a href="https://www.google.com/search?q=how+to+make+a+${response.drinks[0].strDrink}+drink" target="_blank"><h2>${response.drinks[0].strDrink}</h2>
                         <h3 id="alcoholic">${response.drinks[0].strAlcoholic}</h3>
                         <span class="recipe"><p>${drinkIng}</p></span></a>
                        `
            $(".centered").empty();
            $(".centered").append(drink);
        });
    })
} else if (top.location.pathname === "/Quarantini/joke.html") {
    $(document).ready(function() {

        $.ajax({
            url: "https://official-joke-api.appspot.com/random_joke",
            method: "GET"
        }).then(function(response) {

            var joke = `<p class="joke">${response.setup}<br>
                        ${response.punchline}</p>
                        `

            $(".centered").empty();
            $(".centered").append(joke);

        })

    })
} else if (top.location.pathname === "/Quarantini/bored.html") {
    $(document).ready(function() {

        $.ajax({
            url: "https://www.boredapi.com/api/activity?type=relaxation&type=education&type=recreational&type=cooking&type=busywork&price=0.0",
            method: "GET"
        }).then(function(response) {

            var activity = `<h2>${response.activity}</h2>
                            `

            $(".centered").empty();
            $(".centered").append(activity);

        })
    })
} else if (top.location.pathname === "/Quarantini/quote.html") {
    $(document).ready(function() {

        $.ajax({
            url: "https://type.fit/api/quotes",
            method: "GET"
        }).then(function(response) {

            var quotes = JSON.parse(response);
            console.log(quotes[0].text)
        
            var num = Math.floor(Math.random() * 1600) + 1;

            var quoteOnScreen = `<h3>${quotes[num].text}</h3>
                                `

            $(".centered").empty();
            $(".centered").append(quoteOnScreen);
        })
    })
} else if (top.location.pathname === "/Quarantini/movie.html") {
    $(document).ready(function() {

        var genres = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 1042, 9648, 10749, 878, 10770, 53, 10752, 37];
        var page = Math.floor(Math.random() * 500) + 1;

        var randomGenre = genres[Math.floor(Math.random() * genres.length)];
        console.log(randomGenre);

        $.ajax({
            url: "https://api.themoviedb.org/3/discover/movie?with_genres=" + randomGenre + "&api_key=e8f1cf6169288a814923ee8e5fe9e6f9&sort_by=primary_release_date.desc=2020-03-31&page=" + page,
            method: "GET"
        }).then(function(response) {

            var movieArray = response.results;

            var randomMovie = Math.floor(Math.random() * movieArray.length) + 1;

            var movie = `<h3>${movieArray[randomMovie].title}</h3>
                                <p>${movieArray[randomMovie].vote_average}/10</p>
                                `
            $(".centered").empty();
            $(".centered").append(movie);
        })
    })
} else if (top.location.pathname === "/Quarantini/predict.html") {
    $(document).ready(function() {

        var randomAmt = Math.floor(Math.random() * 2000) + 90;

        var days = `<h2>${randomAmt} days</h2>
                    `
            $(".centered").empty();
            $(".centered").append(days);
    })
}