var shoppingList = [];
$(document).ready(function(){

  // On form submit add item to list
  $("form").submit(function(event) {

    // get item from form
    var item = $("#item").val();

    // add item to shoppingList
    shoppingList.push(item);

    // clear input for next item
    $("#item").val("");

    event.preventDefault();
  });

  // on button click display list
  $("#displayList").click(function() {

    // clear list
    $("#list").empty();

    // map new array with li tags
    var listToDisplay = shoppingList.map(function(item) {
      return "<li>" + item + "</li>";
    });

    // display displayList
    listToDisplay.forEach(function(item) {

      // use jquery to append to ul
      $("#list").append(item);

    });

  });

});
