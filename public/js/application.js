$(document).ready(function () {

   $("#roll").submit(function(e){
      e.preventDefault();
      var number = Math.floor(Math.random()*6)+1;
        $.post("/rolls", {value: number}, function(data){
          $("#die").html("<img src=\'" + data + ".png\' \\>");
        });
   });
  // PSEUDO-CODE:
  //x1- intercept the form submission event using jQuery
  //x   2- prevent the default action for that event from happening
  // x  3- generate a random number between 1 and 6 using JavaScript
  // x  4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
});
