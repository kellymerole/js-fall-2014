
//jQuery
var lastScroll = 0;
var zoomLevel = 1;
var newZoomLevel = 1;

$('.container').on('scroll', function(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log(zoomLevel);

  if($(this).scrollTop() > lastScroll) {
    //down

    // console.log(zoomLevel);
    zoomLevel += Math.abs($(this).scrollTop() - lastScroll)/30;
    //$('img').css('property', 'value')

   //when zoomed past 3
   //show image at zoom 1
   //show text at zoomLevel
   //increase image zoom starting from 1 again


    if(zoomLevel <= 2){
        $('img').attr('src', 'power-stations.jpg');
        $('img').css('transform', 'scale(' + zoomLevel + ')');
    }else if(zoomLevel > 2 && zoomLevel <= 10) {

        newZoomLevel += Math.abs($(this).scrollTop() - lastScroll)/30;
        console.log("newZoomLevel: "+newZoomLevel);

        $('img').attr('src', 'macbook.png');
        $('img').css('transform', 'scale(' + zoomLevel + ')');

    }else if(zoomLevel > 10){
        $('img').attr('src', 'motherboard.jpg');
        $('img').css('transform', 'scale(' + zoomLevel + ')');
    }

    // $('img').css('transform', 'scale(' + zoomLevel + ')');
    $('.zoomLevel').text(zoomLevel);

  } else if($(this).scrollTop() < lastScroll) {
    //up

    // console.log(zoomLevel);
    zoomLevel -= Math.abs($(this).scrollTop() - lastScroll)/30;
    $('img').css('transform', 'scale(' + zoomLevel + ')');
    $('.zoomLevel').text(zoomLevel);

    if(zoomLevel <= 2){
        // newZoomLevel += Math.abs($(this).scrollTop() - lastScroll)/10;
        $('img').attr('src', 'power-stations.jpg');
        // $('img').css('transform', 'scale(' + newZoomLevel + ')');

    }else if(zoomLevel > 2 && zoomLevel <= 10) {
        // newZoomLevel += Math.abs($(this).scrollTop() - lastScroll)/10;
        $('img').attr('src', 'macbook.png');
        // $('img').css('zoom', '10%');

    }else if(zoomLevel > 10){
        $('img').attr('src', 'motherboard.jpg');

    }
  }

  lastScroll = $(this).scrollTop();



var numbers = console.log(zoomLevel);

// $('<span>numbers</span>').appendTo('div.output');
//class
// put in container
});