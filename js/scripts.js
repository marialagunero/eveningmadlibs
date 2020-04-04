/*$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstnameInput = $("input#firstname").val();
    var addressInput = $("input#address").val();
    var favoritefoodInput = $("input#favoritefood").val();
    var favoritedrinkInput = $("input#favoritedrink").val();

    $(".firstname").text(firstnameInput);
    $(".address").text(addressInput);
    $(".favoritefood").text(favoritefoodInput);
    $(".favoritedrink").text(favoritedrinkInput);


    $("#story").show();

    event.preventDefault();
  });
});*/

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["firstname", "address", "favoritefood", "favoritedrink"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $(story).show();

    event.preventDefault();

  });

});
