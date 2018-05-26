$(document).ready(function(){

    // Loading gif bind
    $('.loading-1').bind('ajaxStart', function(){
        $(this).show();
    }).bind('ajaxStop', function(){
        $(this).hide();
    });


// Declare global variables
let movArr = ["The Avengers","Home Alone", "Deadpool","Star Wars","Titanic","The Hunger Games","Finding Nemo",];
let movie;

// Create buttons from movie array
function initButtons(arr) {

    for (let i = 0; i < arr.length; i++) {

        newButton = $('<button>');
        newButton.text(arr[i])
            .attr('data', arr[i])
            .attr('class', 'btn btn-secondary m-1 movie-button');
        $('#button-container').append(newButton);

    }
}

// On submit, push user input to movie array and reinit buttons
$('#add-movie').on('click', function(){

    $('#button-container').empty();
    newMovie = $('#inlineFormInput').val().trim();
    movArr.push(newMovie);
    initButtons(movArr);

})

// Prevent enter key event from refreshing page
$('form').keypress(function(event) { 

    return event.keyCode != 13;

}); 

// Click listener on movie buttons, requests from giphy and omdb
$('#button-container').on('click','button',function() {

    // $('#loading-1').show();
    // $('#loading-2').show();

    $('#movie-overview').empty();
    $('#gif-container').empty();

    // OMDB API Request + Response Handling Here
    movie = $(this).attr('data').trim();
    baseURL = 'http://www.omdbapi.com/?apikey=';
    apiKey = 'trilogy';
    queryURL = baseURL + apiKey + '&t=' + movie;
    
// OMDb API
    $.ajax({

        url: queryURL,
        method: 'GET',
        // success:function(response){

        //     $('#loading-1').hide();

        // } 
    }).then(function(response) {

        console.log(response);

        if (response.Title) {
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
                        }

        else { $('#movie-overview').html(`<h1>Movie/show not found!</h1>
                                            <br><h3>Please check your spelling and try again.</h3>`)};
    });

    // Giphy API Request + Response Handling Here
    GIFbaseURL = 'http://api.giphy.com/v1/gifs/search?q=';
    GIFapiKey = '&limit=10&api_key=l7BH2odGrHlcmcFxkXssYzBU6RXc94UM';
    GIFqueryURL = GIFbaseURL + movie + GIFapiKey;

    // Giphy API
    $.ajax({

        url: GIFqueryURL,
        method: 'GET',
        // success:function(response){

        //     $('#loading-2').hide();

        // }
    }).then(function(data) {

        console.log(data);

        for (let i = 0; i < data.data.length; i++) {
            img = $('<img>');
            img.attr('src', data.data[i].images.fixed_width_still.url)
               .attr('state','still')
               .attr('still', data.data[i].images.fixed_width_still.url)
               .attr('animate', data.data[i].images.fixed_height.url)
               .addClass('m-1');
            console.log(img);
            $('#gif-container').append(img);

        }
    });
})

// Click listener to toggle between animated gif and still image
$('#gif-container').on('click', 'img', function() {
    

})






initButtons(movArr);

// Get giphy api
    // append to 10 gifs to div
    // we need an image node with attributes holding still image, animated gif, and state
    // still image will look like : data.data[i].images.fixed_height_still.url
    // still image will look like : data.data[i].images.fixed_height.url
    // start with <img src="..." state="still" still="...jpg" animate="...gif"
    // create on click for the dynamic images
        // you will have to use the on click to pass binding from parent to child

// Error handling if movie is not found
// Failed to load http://www.omdbapi.com/?apikey=trilogy&t=Frozen: No 'Access-Control-Allow-Origin' 
// header is present on the requested resource. Origin 'null' is therefore not allowed access. The response had HTTP status code 524.


});




