jQuery(function () {
  $("h1").hide();
  $("#btn").click(function () {
    const nums = [];

    const numA = parseInt($("#numA").val());
    const numB = parseInt($("#numB").val());
    const numC = parseInt($("#numC").val());
    const numD = parseInt($("#numD").val());
    const numE = parseInt($("#numE").val());

    nums.push(numA, numB, numC, numD, numE);

    let largest = nums[0];

    for (var index in nums) {
      if (nums[index] > largest) {
        largest = nums[index];
      }
    }

    $("h1").fadeIn();
    $("#result").text(`${largest}`);
  });
});
