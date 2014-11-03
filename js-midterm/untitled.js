
//jQuery
var lastScroll = 0;
var zoomLevel = 1;

$('.container').on('scroll', function(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log(zoomLevel);

  if($(this).scrollTop() > lastScroll) {
    console.log(zoomLevel);
    //down
    zoomLevel += Math.abs($(this).scrollTop() - lastScroll)/10;
    //$('img').css('property', 'value')
    $('img').css('transform', 'scale(' + zoomLevel + ')');
    //if(zoomLevel > x) {
$('.zoomLevel').text(zoomLevel);
    //}
  } else if($(this).scrollTop() < lastScroll) {
    console.log(zoomLevel);
    //up
    zoomLevel -= Math.abs($(this).scrollTop() - lastScroll)/10;
    $('img').css('transform', 'scale(' + zoomLevel + ')');
    //if(zoomLevel < x)
    $('.zoomLevel').text(zoomLevel);
  }

  lastScroll = $(this).scrollTop();



var numbers = console.log(zoomLevel);

$('<span>numbers</span>').appendTo('div.output');
//class
// put in container
});