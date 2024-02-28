jQuery(function () {
  $("#btn").click(function () {
    $.get("https://www.boredapi.com/api/activity", function (response) {
      console.log(response);
      document.getElementById("activity").innerHTML = response.activity;
    });
    $(".fade").fadeOut();
  });
});
