$(document).ready(function(){

  var shoppingList = [];

  // On form submit add item to list
  $("form").submit(function(event) {

  // get item from form
  var item = $("#item").val();

  // add item to shoppingList
  shoppingList.push(item);

  // clear input for next item
  $("#item").clear();


    event.preventDefault;
  });
});
