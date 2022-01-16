$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var width = $(window).width();
  // console.log("scrollTop>>>" + scrollTop);
  if (scrollTop < 3400 && width > 1000) {
    $(".ball21").css({ top: "-70px" });
    $(".ball22").css({ top: "250px" });
    $(".ball23").css({ top: "150px" });
    $(".ball24").css({ top: "350px" });
  }
  if (scrollTop > 2900 && width > 1000) {
    $(".ball21").css({ top: "161px" });
    $(".ball22").css({ top: "100px" });
    $(".ball23").css({ top: "200px" });
    $(".ball24").css({ top: "150px" });
  }
});
