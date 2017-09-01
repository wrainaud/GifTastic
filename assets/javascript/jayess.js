// William Rainaud
// Rutgers Coding Bootcamp 
// Homework Assignment 6 - GifTastic

// Document Ready
$(document).ready(function(){


// declare initial Rapper Array
var rapperArray = [ "A Boogie Wit Da Hoodie", 
                    "Action Bronson", 
                    "Big Boi", 
                    "Bun B", 
                    "Chance The Rapper",
                    "Kendrick Lamar", 
                    "Kodak Black", 
                    "Lil Uzi Vert", 
                    "Post Malone", 
                    "Young Jeezy",
                  ];

// Click handler function for buttons
$('body').on("click", ".button-panel", function(){

  var buttonClicked = this.id;

  giphyGet(buttonClicked);

});

// Click handler for the Rapper Form element
$("#rapper-form").on("submit", function(event) {

      // Prevents Page Reload
      event.preventDefault();

      // This line grabs the input from the textbox
      var artist = $("#rapper-input").val().trim();

      // create a new button from the field into the array
      rapperArray.push(artist);

    // Call the 
    showButtons();
});

//Click handler to animate the Giphy Imagess
$('body').on("click",".gif", function(){

    var state = $(this).attr("data-state");

    // If statement to check if the Gifs state is still
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } 

    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});


// Function to get data using from GiphyAPI
function giphyGet(buttonClicked){

  // declare variables 
  var rapper = buttonClicked;
  var offset = Math.floor(Math.random() * 5);
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=2eab242fa3254211aabafc419aa08207&q=" + rapper + "&limit=9&offset=" + offset + "&rating=R&lang=en";
  var rating;
  var alt;

// AJAX Call using GiphyAPI

$.ajax({
    url: queryURL,
    method: "GET"
      })

.done(function(response) {
     
    var giphyItem = response.data;
          
    var newRow = $("<div class='row'>");

        for (var i = 0; i < giphyItem.length; i++){

             // declare variables 
            var stillImage = giphyItem[i].images.fixed_height_still.url;
            var animateImage = giphyItem[i].images.fixed_height.url;
            var rating = giphyItem[i].rating;
            var alt = giphyItem[i].slug;

             // declare variable for New Image and set attributes
            var newImage = $("<img class='gif img-responsive'>");
              newImage.attr("src", stillImage);
              newImage.attr("alt",alt);
              newImage.attr("data-state", "still");
              newImage.attr("data-still", stillImage);
              newImage.attr("data-animate",animateImage);

            // declare variable for New Column and Row and set attributes
            var newColumn = $("<div class='col-xs-6'>");
            var newTag = $("<p>");
              newTag.text("Rating: " + rating);
              newColumn.prepend(newTag);
              newColumn.prepend(newImage);
              newRow.append(newColumn);
              }

          // Prepend where the Gifs appear with the new Images
          $("#gifs-appear-here").prepend(newRow);

        });

};


// Create and Show Button Function
function showButtons(){

  // Empties the Buttons Space
  $("#rapperButtons").empty();

    // For Loop to go through the buttonArray
    for (var i = 0; i < rapperArray.length; i++) {

      // Variable for New Button
      var newButton = $("<button type='button' class='btn btn-warning btn-lg button-panel rapperBtn'>");

      // Add New Button Attributes and Text from buttonArray
      newButton.attr("data-rapper",rapperArray[i]);
      newButton.attr("id",rapperArray[i]);
      newButton.text(rapperArray[i]);

      // add New Button to Button Section
      $("#rapperButtons").append(newButton);

    }
}

//Call the Show Buttons Function
showButtons();

});


