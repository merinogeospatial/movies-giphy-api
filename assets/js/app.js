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

// Prevent enter from refreshing page
$('form').keypress(function(event) { 
    return event.keyCode != 13;
}); 

$('#button-container').on('click','button',function() {
    // $(document).ajaxStart(function() {
    //     $("#loading").show();
    //   }).ajaxStop(function() {
    //     $("#loading").hide();
    //   });

    $('#movie-overview').empty();

    // OMDB API Request + Response Handling Here
    movie = $(this).attr('data').trim();
    baseURL = 'http://www.omdbapi.com/?apikey=';
    apiKey = 'trilogy';
    queryURL = baseURL + apiKey + '&t=' + movie;

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
    
        h1 = $('<h1>');
        img = $('<img>');
        p = $('<p>');
        h3 = $('<h3>');
        div =$('<div>');

        h1.text(JSON.stringify(response.Title));
        img.attr('src',response.Poster)
           .attr('height', '300px');
        p.text(response.Plot);
        h3.text('Rating: ' + 'Metascore = '+ response.Metascore + ' | ' + 'IMDb = ' + response.imdbRating);

        $('#movie-overview').append(h1)
                            .append(img)
                            .append(p)
                            .append(h3);
    });

    // Giphy API Request + Response Handling Here
    GIFbaseURL = 'http://api.giphy.com/v1/gifs/search?q=';
    GIFapiKey = '&limit=10&api_key=l7BH2odGrHlcmcFxkXssYzBU6RXc94UM';
    GIFqueryURL = GIFbaseURL + movie + GIFapiKey;

    $.ajax({
        url: GIFqueryURL,
        method: 'GET'
    }).then(function(data) {

        console.log(data);

    });
})

// Get giphy api
    // append to 10 gifs to div
    // we need an image node with attributes holding still image, animated gif, and state
    // still image will look like : data.data[i].images.fixed_height_still.url
    // still image will look like : data.data[i].images.fixed_height.url

// Loading code - add to start of button click listener? Need to add loading gif
//     $(document).ajaxStart(function() {
  //   $("#loading").show();
//     }).ajaxStop(function() {
  //   $("#loading").hide();
//     });

    





