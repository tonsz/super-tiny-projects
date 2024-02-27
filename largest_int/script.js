jQuery(function () {
  $("h1").hide();
  $("#btn").click(function () {
    const numA = parseInt($("#numA").val());
    const numB = parseInt($("#numB").val());

    $("h1").fadeIn();
    $("#result").text(numA > numB ? `${numA}` : `${numB}`);
  });
});
