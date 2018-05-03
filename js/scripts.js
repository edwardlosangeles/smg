// function to resize div height based on greater of content height or window height
function resize_section() {

  //retrieve window height
  var win = $(window).height();

  // cycle through each section of page twice
  // 1st time resets
  // 2nd time will expand to vh if less than window height
  for(var i = 0; i < sections.length; ++i ) {
    $('#'+sections[i].section).css('height', 'auto');
  };

  for(var i = 0; i < sections.length; ++i ) {
    //retrieve height of current section
    var div = $('#'+sections[i].section).height();
    // if div height less than window height then set to window height, otherwise set to auto
    if (div < win ) {
      $('#'+sections[i].section).css('height', '100vh');
    }

  }; //for(var i = 0; i < sections.length; ++i )
}; //function resize_section()



// google maps
function initMap() {
  var myLatLng = {lat: 34.0836111, lng: -118.1227121};
  var map = new google.maps.Map(document.getElementById('contactAddressMap'), {
    center: myLatLng,
    zoom: 18
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: '1024 South Garfield Avenue, Alhambra, California 91801'
  });

  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  marker.addListener('click', function() {
    map.setCenter(marker.getPosition());
    window.open("https://goo.gl/maps/9vyEjK6Fgm72");
  });

};



// $(document).ready(function(){
$(window).on("load", function() {

  // call resize_section() on window resize and on refresh
  $(window).on('resize', function(){
    resize_section()
  });

  // enable smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a, #index_section a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

  // submenu link on navbar
  $('.dropdown-toggle').dropdown();

  //reveal text in about section
  $(".reveal-text .button").click(function() {
    // fade out read-more
    $('.read-more').hide();
    $('.reveal-text').css('max-height', '9999px')
    $('.reveal-text').css('height', 'auto')
    // prevent jump-down
    resize_section()
    return false;
  });

  // call resize_section() on refresh and on window resize
  resize_section();


});//$(document).ready(function(){
