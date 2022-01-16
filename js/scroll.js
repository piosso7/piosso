var width = $(window).width();
$(document).ready(function () {
  if (width > 1460) {
    width = $(window).width();
    $("#logo").click(function (event) {
      $("html, body").animate({ scrollTop: "0px" }, 1000);
    });
    $("#aboutMe").click(function (event) {
      $("html, body").animate({ scrollTop: "650px" }, 1000);
    });
    $("#experience").click(function (event) {
      $("html, body").animate({ scrollTop: "1600px" }, 1000);
    });
    $("#projects").click(function (event) {
      $("html, body").animate({ scrollTop: "2530px" }, 1000);
    });
    $("#contact").click(function (event) {
      $("html, body").animate({ scrollTop: "3710px" }, 1000);
    });
    $("#contactBtn").click(function (event) {
      $("html, body").animate({ scrollTop: "3710px" }, 1000);
    });
    return;
  }
  if (width <= 1460 && width > 1366) {
    width = $(window).width();
    $("#logo").click(function (event) {
      $("html, body").animate({ scrollTop: "0px" }, 1000);
    });
    $("#aboutMe").click(function (event) {
      $("html, body").animate({ scrollTop: "600px" }, 1000);
    });
    $("#experience").click(function (event) {
      $("html, body").animate({ scrollTop: "1530px" }, 1000);
    });
    $("#projects").click(function (event) {
      $("html, body").animate({ scrollTop: "2490px" }, 1000);
    });
    $("#contact").click(function (event) {
      $("html, body").animate({ scrollTop: "3820px" }, 1000);
    });
    $("#contactBtn").click(function (event) {
      $("html, body").animate({ scrollTop: "3820px" }, 1000);
    });
    return;
  }
  if (width <= 1366 && width > 1000) {
    width = $(window).width();
    $("#logo").click(function (event) {
      $("html, body").animate({ scrollTop: "0px" }, 1000);
    });
    $("#aboutMe").click(function (event) {
      $("html, body").animate({ scrollTop: "610px" }, 1000);
    });
    $("#experience").click(function (event) {
      $("html, body").animate({ scrollTop: "1520px" }, 1000);
    });
    $("#projects").click(function (event) {
      $("html, body").animate({ scrollTop: "2490px" }, 1000);
    });
    $("#contact").click(function (event) {
      $("html, body").animate({ scrollTop: "3980px" }, 1000);
    });
    $("#contactBtn").click(function (event) {
      $("html, body").animate({ scrollTop: "3980px" }, 1000);
    });
    return;
  }
  if (width < 1000) {
    width = $(window).width();
    $("#logo").click(function (event) {
      $("html, body").animate({ scrollTop: "0px" }, 1000);
    });
    $("#aboutMe").click(function (event) {
      $("html, body").animate({ scrollTop: "310px" }, 1000);
    });
    $("#experience").click(function (event) {
      $("html, body").animate({ scrollTop: "1180px" }, 1000);
    });
    $("#projects").click(function (event) {
      $("html, body").animate({ scrollTop: "2100px" }, 1000);
    });
    $("#contact").click(function (event) {
      $("html, body").animate({ scrollTop: "2800px" }, 1000);
    });
    $("#contactBtn").click(function (event) {
      $("html, body").animate({ scrollTop: "2800px" }, 1000);
    });
    return;
  }
});
