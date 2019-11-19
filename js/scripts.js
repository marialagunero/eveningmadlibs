$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstnameInput = $("input#firstname").val();
    var addressInput = $("input#address").val();
    var favoritefoodInputood = $("input#favoritefood").val();

    $(".firstname").text(firstnameInput);
    $(".address").text(addressInput);
    $(".favoritefood").text(favoritefoodInput);


    $("#story").show();

    event.preventDefault();
  });
});
