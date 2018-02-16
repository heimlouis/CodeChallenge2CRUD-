console.log('client.js sourced');

//start onReady
$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addJokeButtonClick);
    getJokes();
}//end onReady

//start addJokeButtonClick
function addJokeButtonClick() {
    console.log('joke button clicked!')
    var objectToSend = {
        whose_joke: $('#whoseJoke').val(),
        question: $('#question').val(),
        punch_line: $('#punchLine').val(),
        funniness_rating: $('#funninessRating').val(),
        date_added: $('#dateAdded').val()
    };
    saveJoke(objectToSend);
}//end addJokeButtonClick

//start saveJoke
function saveJoke(newJoke){
    console.log('in save new joke', newJoke);
    $.ajax({
        type: 'POST',
        url: '/joke',
        data: newJoke,
        success: function(data){
            console.log('got some jokes in save:', data);
            getJokes();
        },
        error: function(error){
            console.log('failuer on saveJoke POST');
        }
    });
}//end saveJoke
    
//start getJokes
function getJokes(){
    console.log('in getJokes');
    $.ajax({
        type: 'GET',
        url: '/joke',
        success: function(result){
            console.log('success on getJokes GET', result);
            displayResults(result); 
        },
        error: function(){
            console.error('failure on the getJokes GET');
        },
    })
}//end getJokes

//start displayResults
function displayResults(array){
    console.log('in displayResults ', array);
        $('#whoseJoke').val('');
        $('#question').val('');
        $('#punchLine').val('');
        $('#funninessRating').val('');
        $('#dateAdded').val('');
        $('#outputDiv').empty();
    for(i=0; i<array.length; i++){
        let id = array[i].id;
        let stringToAppend = `<tr class='individualJoke'><td>`;
        stringToAppend += array[i].whose_joke+'</td><td>'+array[i].question+'</td><td>'+array[i].punch_line;
        stringToAppend += '</td><td>'+array[i].funniness_rating+'</td><td>'+array[i].date_added;
        stringToAppend += '</td><td>'+`<button class="deleteButton" id=${id}>Delete Joke</button>`;
        stringToAppend += '</td>';
    $('#individualJoke').append(stringToAppend);
    }
}//end displayResults