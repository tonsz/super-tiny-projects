$("#btn").click(function () {
  $.get(
    "http://www.boredapi.com/api/activity?participants=1",
    function (response) {
      console.log(response);
      document.getElementById("foo").innerHTML = response.activity;
    }
  );
});
