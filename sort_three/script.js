jQuery(function () {
  $("#btn").click(function () {
    let nums = [];

    const numA = parseInt($("#numA").val());
    const numB = parseInt($("#numB").val());
    const numC = parseInt($("#numC").val());

    nums.push(numA, numB, numC);

    nums.sort(function (a, b) {
      return a - b;
    });

    console.log(nums);

    $("#result").text(nums);
  });
});
