


$(document).ready(function(){

  //add background images for each section dynamically
  //retrieve div id and image url from array in js/background_images.js
  for(var i = 0; i < background_images.length; ++i ) {
    var image_id = background_images[i].image_id;
    var image = background_images[i].image;
    console.log(image_id)
    console.log(image)
    $('#'+image_id).css('background-image', 'url(' + image + ')');

  };

  // function to resize div height based on greater of content height or window height
  function resize_div() {
    //retrieve window height
    var win = $(window).height();
    //cycle through each section of page
    for(var i = 0; i < background_images.length; ++i ) {
      //retrieve height of current section
      var div = $('#'+background_images[i].section).height();
      // if div height less than window height then set to window height, otherwise set to auto
      if (div < win ) {
        $('#'+background_images[i].section).css('height', '100vh');
      } else { $('#'+background_images[i].section).css('height', 'auto'); }
      // need to repeat the above because window and content height will be equal on subsequent window resizing
      // which defaults to a div height of auto, even if div height less than window height
      // to offset this, set div height to 100vh if div height less than window height
      var div = $('#'+background_images[i].section).height();
      if (div < win ) {
        $('#'+background_images[i].section).css('height', '100vh');
      }
    }; //for(var i = 0; i < background_images.length; ++i )
  }; //function resize_div()

  // call resize_div() on refresh and on window resize
  resize_div()

  // call resize_div() on window resize and on refresh
  $(window).on('resize', function(){
    resize_div()
  });


});//$(document).ready(function(){
