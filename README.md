itsatrap.js
============================================================

#####Develop content intensive websites 
#####without getting trapped in google map scroll hell

![alt text](http://s11.postimg.org/iyw9bsqcz/Screen_Shot_2016_03_17_at_12_23_10_AM.png)

##SET UP

- ok add the itsatrap.js file or copy and paste it from the example below or toss it in a script tag idc you're an adult i can't tell you how to live your life

````javascript
$(document).ready(function () {
 
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
````

- then call it with this html markup (assuming you styled the section with a custom class called .map)

 ````html
 <section id="map" class="map">
   <iframe id="iframeMap" src="https://www.google.com/maps/embed/code/goes/here/duh" width="1200" height="420" frameborder="0" style="border: 0"></iframe>
 </section>
 ````

- dont forget to add the css in your custom stylesheet: 

````css
.scroll-off { pointer-events: none; }
````

##TO DO:

###### 1. get better at writing documentation

![alt text](https://ten8fitness.files.wordpress.com/2015/06/itsatrap.jpg "itsatrap.js")
