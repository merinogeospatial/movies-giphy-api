let movArr = ["The Avengers","Home Alone", "Deadpool","Star Wars","Titanic","The Hunger Games","Finding Nemo",];


function initButtons(arr) {

    for (let i = 0; i < arr.length; i++) {

        newButton = $('<button>');
        newButton.text(arr[i])
            .attr('data', arr[i])
            .attr('class', 'btn btn-secondary m-1');
        $('#button-container').append(newButton);
    }
}

$('#add-movie').on('click', function(){

    $('#button-container').empty();
    newMovie = $('#inlineFormInput').val();
    movArr.push(newMovie);
    initButtons(movArr);
})

// Get giphy api
    // append to 10 gifs to div
// Get imdb api
    // append movie title, image, and plot

    






initButtons(movArr);