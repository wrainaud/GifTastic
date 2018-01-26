$(document).ready(function(){

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

$('body').on("click", ".button-panel", function(){

  var buttonClicked = this.id;
  giphyGet(buttonClicked);

});


$("#rapper-form").on("submit", function(event) {
      event.preventDefault();
      var artist = $("#rapper-input").val().trim();
      rapperArray.push(artist);
    showButtons();
});

$('body').on("click",".gif", function(){

    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } 

    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});



function giphyGet(buttonClicked){

  var rapper = buttonClicked;
  var offset = Math.floor(Math.random() * 5);
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=2eab242fa3254211aabafc419aa08207&q=" + rapper + "&limit=9&offset=" + offset + "&rating=R&lang=en";
  var rating;
  var alt;

$.ajax({
    url: queryURL,
    method: "GET"
      })

.done(function(response) {

    $("#gifs-appear-here").empty();
     
    var giphyItem = response.data;
          
    var newRow = $("<div class='row'>");

        for (var i = 0; i < giphyItem.length; i++){

            var stillImage = giphyItem[i].images.fixed_height_still.url;
            var animateImage = giphyItem[i].images.fixed_height.url;
            var rating = giphyItem[i].rating;
            var alt = giphyItem[i].slug;

            var newImage = $("<img class='gif img-responsive'>");
              newImage.attr("src", stillImage);
              newImage.attr("alt",alt);
              newImage.attr("data-state", "still");
              newImage.attr("data-still", stillImage);
              newImage.attr("data-animate",animateImage);

            var newColumn = $("<div class='col-xs-4'>");
            var newTag = $("<p>");
              newTag.text("Rating: " + rating);
              newColumn.prepend(newTag);
              newColumn.prepend(newImage);
              newRow.append(newColumn);
              }

          $("#gifs-appear-here").prepend(newRow);

        });

};

function showButtons(){

  $("#rapperButtons").empty();

    for (var i = 0; i < rapperArray.length; i++) {

      var newButton = $("<button type='button' class='btn btn-warning btn-lg button-panel rapperBtn'>");

      newButton.attr("data-rapper",rapperArray[i]);
      newButton.attr("id",rapperArray[i]);
      newButton.text(rapperArray[i]);

      $("#rapperButtons").append(newButton);

    }
}

showButtons();

});


