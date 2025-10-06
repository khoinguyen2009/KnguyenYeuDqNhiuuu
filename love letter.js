$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });

  // Make the heart inside .card clickable and redirect to index.html
  $(".card .text")
    .css("cursor", "pointer")
    .on("click", function () {
      window.location.href = "index.html";
    });
});
