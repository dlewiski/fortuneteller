var luckyIndex = 0;
var unluckyIndex = 0;


$(document).ready(function() {
  $(".fortune1, .fortune2, .fortune3").hide();

  $("#survey").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=lucky]:checked").each(function(){
      var incident = $(this).val();
      $(".fortune1").append(incident + "<br>");
      luckyIndex++;
    });
    $("input:checkbox[name=unlucky]:checked").each(function(){
      var incident = $(this).val();
      $(".fortune2").append(incident + "<br>");
      unluckyIndex++;
    });
    // $(".fortune1").show();
    // $(".fortune2").show();
    $("#survey").hide();
    // alert(luckyIndex);
    // alert(unluckyIndex);

    if (luckyIndex < 2) {
      $(".fortune2").show();
    } else if (unluckyIndex < luckyIndex) {
      $(".fortune3").show();
    } else {
      $(".fortune1").show();
    }
  });
});
