/**
 * jQuery Line Progressbar
 * Author: KingRayhan<rayhan095@gmail.com>
 * Author URL: https://electronthemes.com
 * Version: 1.1.2
 */

(function ($) {
  "use strict";

  $.fn.LineProgressbar = function (options) {
    options = $.extend(
      {
        percentage: 100,
        ShowProgressCount: false,
        duration: 1000,
        unit: "%",
        animation: true,

        // Styling Options
        fillBackgroundColor: "#3498db",
        backgroundColor: "#EEEEEE",
        radius: "0px",
        height: "10px",
      },
      options
    );

    $.options = options;
    return this.each(function (index, el) {
      // Markup
      $(el).html(
        '<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>'
      );

      var progressFill = $(el).find(".proggress");
      var progressBar = $(el).find(".progressbar");

      progressFill.css({
        backgroundColor: options.fillBackgroundColor,
        height: options.height,
        borderRadius: options.radius,
      });
      progressBar.css({
        width: options.width,
        backgroundColor: options.backgroundColor,
        borderRadius: options.radius,
      });

      /**
       * Progress with animation
       */
      if (options.animation) {
        // Progressing
        progressFill.animate(
          {
            width: options.percentage + "%",
          },
          {
            step: function (x) {
              if (options.ShowProgressCount) {
                $(el)
                  .find(".percentCount")
                  .text(Math.round(x) + options.unit);
              }
            },
            duration: options.duration,
          }
        );
      } else {
        // Without animation
        progressFill.css("width", options.percentage + "%");
        $(el)
          .find(".percentCount")
          .text(Math.round(options.percentage) + "%");
      }
    });
  };
})(jQuery);

$("[line-progressbar]").each(function () {
  var $this = $(this);
  function LineProgressing() {
    $this.LineProgressbar({
      percentage: $this.data("percentage"),
      unit: $this.data("unit"),
      animation: $this.data("animation"),
      ShowProgressCount: $this.data("showcount"),
      duration: $this.data("duration"),
      fillBackgroundColor: $this.data("progress-color"),
      backgroundColor: $this.data("bg-color"),
      radius: $this.data("radius"),
      height: $this.data("height"),
      width: $this.data("width"),
    });
  }
  var loadOnce = 0;
  $this.waypoint(
    function () {
      loadOnce += 1;
      if (loadOnce < 2) {
        LineProgressing();
      }
    },
    { offset: "100%", triggerOnce: true }
  );
});
var flag = true;
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var width = $(window).width();
  // console.log("scrollTop>>>" + scrollTop);
  if (flag && width < 1000 && scrollTop > 450) {
    flag = false;
    // $("#exp").css("height", "500px");
    $("#exp").css("opacity", "1");
    $("#exHtml").LineProgressbar({
      percentage: 75,
      fillBackgroundColor: "#0BD28D",
      backgroundColor: "#EEEEEE",
      radius: "100px",
      height: "18px",
    });

    $("#exCss").LineProgressbar({
      percentage: 75,
      fillBackgroundColor: "#0BD28D",
      backgroundColor: "#EEEEEE",
      radius: "100px",
      height: "18px",
    });

    $("#exJS").LineProgressbar({
      percentage: 50,
      fillBackgroundColor: "#0BD28D",
      backgroundColor: "#EEEEEE",
      radius: "100px",
      height: "18px",
    });

    $("#exJQ").LineProgressbar({
      percentage: 25,
      fillBackgroundColor: "#0BD28D",
      backgroundColor: "#EEEEEE",
      radius: "100px",
      height: "18px",
    });

    $("#exReact").LineProgressbar({
      percentage: 50,
      fillBackgroundColor: "#0BD28D",
      backgroundColor: "#EEEEEE",
      radius: "100px",
      height: "18px",
    });
    $("#exGIT").LineProgressbar({
      percentage: 50,
      fillBackgroundColor: "#0BD28D",
      backgroundColor: "#EEEEEE",
      radius: "100px",
      height: "18px",
    });
  } else if (flag && scrollTop > 1400) {
    flag = false;
    // $("#exp").css("height", "500px");
    $("#exp").css("opacity", "1");
    $("#exHtml").LineProgressbar({
      percentage: 75,
      fillBackgroundColor: "#0BD28D",
      backgroundColor: "#EEEEEE",
      radius: "100px",
      height: "18px",
    });

    $("#exCss").LineProgressbar({
      percentage: 75,
      fillBackgroundColor: "#0BD28D",
      backgroundColor: "#EEEEEE",
      radius: "100px",
      height: "18px",
    });

    $("#exJS").LineProgressbar({
      percentage: 50,
      fillBackgroundColor: "#0BD28D",
      backgroundColor: "#EEEEEE",
      radius: "100px",
      height: "18px",
    });
    $("#exJQ").LineProgressbar({
      percentage: 25,
      fillBackgroundColor: "#0BD28D",
      backgroundColor: "#EEEEEE",
      radius: "100px",
      height: "18px",
    });
    $("#exReact").LineProgressbar({
      percentage: 50,
      fillBackgroundColor: "#0BD28D",
      backgroundColor: "#EEEEEE",
      radius: "100px",
      height: "18px",
    });
    $("#exGIT").LineProgressbar({
      percentage: 50,
      fillBackgroundColor: "#0BD28D",
      backgroundColor: "#EEEEEE",
      radius: "100px",
      height: "18px",
    });
  }
});
