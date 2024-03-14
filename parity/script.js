jQuery(function () {
  $("#btn").click(function () {
    for (var i = 1; i < 16; i++) {
      let parity;
      i % 2 == 0 ? (parity = "Even") : (parity = "Odd");

      let dig = `
    
      <div class="digit">
        <h2 id="num-${i}">${i}</h2>
        <p>${parity}</p>
      </div>
      
      `;

      setTimeout(() => {
        $(".numrousell").append(dig);
      }, 1000 + i * 1000);
    }
  });

  $("#restart").click(function () {
    location.reload();
  });
});
