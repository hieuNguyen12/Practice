// Animate Smooth Scroll

$('#view-work').on('click', function () {
   const images = $('#images').position().top;

   $('html, body').animate({
      scrollTop: images
   }, 900);
});

window.onbeforeunload = function () {
   window.scrollTo(0, 0);
}