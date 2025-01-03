// JavaScript Document
var typed = new Typed('.element', {
strings: ["Web Designer.", "Photographer.","Designer."],
typeSpeed:50,
backSpeed:50,
loop:true,
});

$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});

  AOS.init();
