let offsetSection = $("#about").offset().top;
let navbarHeight = $(".navbar").outerHeight();
let backToTop = $(".backToTop");

$(window).scroll(function () {
  if ($(window).scrollTop() > offsetSection - navbarHeight) {
    $(".navbar").css("backgroundColor", "white");
    $(".navbar").css("boxShadow", "0px 0px 10px 0px black");
    $(".navbar .navbar-nav a").css("color", "black");
    $("h1").css("color", "black");
    backToTop.fadeIn().css("display", "flex");
  } else {
    if (window.innerWidth > 992) {
      $(".navbar .navbar-nav a").css("color", "white");
    } else {
      $(".navbar .navbar-nav a").css("color", "black");
    }
    $(".navbar").css("backgroundColor", "transparent");
    $(".navbar").css("boxShadow", "0px 0px 0px 0px");
    $("h1").css("color", "white");
    backToTop.fadeOut();  
  }
});

backToTop.on("click", function () {
  // $(window).scrollTop(0);
  $("html, body").animate({ scrollTop: 0 }, 1200);
});

$(".navbar-collapse a").on("click", function (e) {
  let sectionSelector = $(e.target).attr("href");
  let sectionOffsetTop = $(sectionSelector).offset().top;
  $("html, body").animate(
    { scrollTop: sectionOffsetTop - navbarHeight / 2.5 },
    1200
  );
});

$(document).ready(function () {
  $(".loadingScreen").fadeOut(500, function () {
    $(".loadingScreen").removeClass("d-flex");
  });
});

