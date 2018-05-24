let movArr = ["The Avengers","Home Alone", "Deadpool","Star Wars","Titanic","The Hunger Games","Finding Nemo",];
let movie;

function initButtons(arr) {

    for (let i = 0; i < arr.length; i++) {

        newButton = $('<button>');
        newButton.text(arr[i])
            .attr('data', arr[i])
            .attr('class', 'btn btn-secondary m-1 movie-button');
        $('#button-container').append(newButton);
    }
}

$('#add-movie').on('click', function(){
    $('#button-container').empty();
    newMovie = $('#inlineFormInput').val();
    movArr.push(newMovie);
    initButtons(movArr);

})

initButtons(movArr);

$('#button-container').on('click','button',function() {

    movie = $(this).attr('data');

    baseURL = 'http://www.omdbapi.com/?apikey=';
    apiKey = 'trilogy';
    queryURL = baseURL + apiKey + '&t=' + movie;

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
    });
})

// Get giphy api
    // append to 10 gifs to div
// Get imdb api
    // append movie title, image, and plot


    





