jQuery(function () {
  $("#btn").click(function () {
    const numA = parseInt($("#numA").val());
    const numB = parseInt($("#numB").val());
    const numC = parseInt($("#numC").val());

    $("#result").text(
      numA * numB * numC == 0
        ? `0 (neither + or -)`
        : numA * numB * numC > 0
        ? `+`
        : `-`
    );
  });
});
