$(".about-button").click(function(){
  $('html, body').animate({
    scrollTop: $("#about").offset().top
  }, 750);
});

$(".projects-button").click(function(){
  $('html, body').animate({
    scrollTop: $("#projects").offset().top
  }, 750);
});

$(".resume-button").click(function(){
  window.location.href = "assets/resume.pdf";
});
