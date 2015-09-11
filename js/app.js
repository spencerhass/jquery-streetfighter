$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    alert('mouse entered .ryu div');
  });
});

$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
   $('.ryu-ready').hide();
$('.ryu-still').show();}