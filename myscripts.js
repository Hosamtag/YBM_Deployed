function next(id1, id2){
  document.getElementById(id1).style.display = "none";
  document.getElementById(id2).style.display = "block";
}
function back(id1, id2){
document.getElementById(id1).style.display ="none";
document.getElementById(id2).style.display = "block";
}
function local(){
  document.getElementById("header").innerHTML= "Local Moving";
}

function distance(){
  document.getElementById("header").innerHTML= "Long-Distance Moving";
}
function main(){
  document.getElementById("header").innerHTML= "Get A Free Quote"
}
$(function() {
  $(window).scroll(function() {
    console.log($(window).scrollTop());
    var windowTop = $(window).scrollTop(); 
    var targetWidth = 978;
    if($(window).width() >= targetWidth){
      $('nav').toggleClass('fixed-top', windowTop > 41);
      if(document.getElementById("Logo2") != null){
        var Logo = document.getElementById("Logo2");
        $('nav').toggleClass('size', windowTop < 90);
        if(windowTop > 90){
          Logo.style.width = '106px';
          Logo.style.height = '67.5px';
        }
        else{
          Logo.style.width = '212px';
          Logo.style.height= '135px'
        }
      }
      else{
        var Logo = document.getElementById("Logo");
        $('nav').toggleClass('borderbottom', windowTop < 90);
        if(windowTop > 90){
          Logo.style.width = '106px';
          Logo.style.height = '67.5px';
        }
        else{
          Logo.style.width = '159px';
          Logo.style.height= '101.25px'
        }
      }
    }
    else{
      $('#compressedheader').toggleClass('fixed-top', windowTop >41);
      if(document.getElementById("Logocomp") != null){
        var Logo = document.getElementById("Logocomp");
        if(windowTop > 90){
          Logo.style.width = '79.5px';
          Logo.style.height = '50.625px';
        }
        else{
          Logo.style.width = '119.25px';
          Logo.style.height= '75.9375px'
        }
      } 
      else{
        var Logo = document.getElementById("Logocompmain");
        $('#toggleheader').toggleClass('opennavmain', windowTop < 41);
        $('#toggleheader').toggleClass('opennav',windowTop > 41);
        if(windowTop > 41){
          Logo.style.width = '79.5px';
          Logo.style.height = '50.625px';
        }
        else{
          Logo.style.width = '119.25px';
          Logo.style.height= '75.9375px';
        }
      }
    } 
  });
});
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.body.style.overflowY = "hidden";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.body.style.overflowY = "scroll";
}
mapboxgl.accessToken = "pk.eyJ1IjoiaG9zYW10IiwiYSI6ImNrYTV1OWM3ZjAwbmoyeW9jNG1jbWJ5a2sifQ.K5Z-0L2DgW15PoCfUl5I2g";
 
/* Map: This represents the map on the page. */
var map = new mapboxgl.Map({
container: "map",
interactive: false,
style: "mapbox://styles/mapbox/streets-v11",
zoom: 14,
center: [-78.7813,35.7671]
});
map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl(), 'top-left');
 
map.on("load", function () {
/* Image: An image is loaded and added to the map. */
map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
if (error) throw error;
map.addImage("custom-marker", image);
/* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
map.addLayer({
id: "markers",
type: "symbol",
/* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
source: {
type: "geojson",
data: {
type: 'FeatureCollection',
features: [
{
type: 'Feature',
properties: {
  'marker-color': '#FF7B00'
},
geometry: {
type: "Point",
coordinates: [-78.780427, 35.7673]
}
}
]
}
},
layout: {
"icon-image": "custom-marker",
}
});
});
});