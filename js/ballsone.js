$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var width = $(window).width();
  // console.log("scrollTop>>>" + scrollTop);
  if (scrollTop < 2000 && width > 1000) {
    $(".ball11").css({ top: "-70px" });
    $(".ball12").css({ top: "250px" });
    $(".ball13").css({ top: "150px" });
    $(".ball14").css({ top: "350px" });
  }
  if (scrollTop > 1100 && width > 1000) {
    $(".ball11").css({ top: "161px" });
    $(".ball12").css({ top: "100px" });
    $(".ball13").css({ top: "200px" });
    $(".ball14").css({ top: "150px" });
  }
});
