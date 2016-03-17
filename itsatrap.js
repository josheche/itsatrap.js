$(document).ready(function () {

  // ok add this to your custom.js file or toss this baby in a script tag
  // pointer only allowed on.click and pointer is none on document.ready
  // and then set the pointer events true on click
  $('#iframeMap').addClass('scroll-off');
  $('#map').on('click', function () {
    $('#iframeMap').removeClass('scroll-off');
  });

  // disable pointer when the mouse leaves the map with unique id #iframeMap
  // and then set the pointer to none when mouse leaves the map area
  $("#iframeMap").mouseleave(function () {
    $('#iframeMap').addClass('scroll-off');
  });
});

// then call it with this html markup assuming you styled the section with a custom class called .map
//
// <section id="map" class="map">
//  <iframe id="iframeMap" src="https://www.google.com/maps/embe...." width="1170" height="400" frameborder="0" style="border: 0"></iframe>
// </section>

// dont forget to add the css on your custom stylesheet: `.scroll-off { pointer-events: none; }
