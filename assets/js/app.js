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









initButtons(movArr);