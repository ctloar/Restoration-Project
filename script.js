// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

// LOCATIONS:
// Kirtland
// Nauvoo
// Jackson County
// Palmyra
// Harmony
// Salt Lake City

const content_strings = {
  sacred_grove: [
    "The Sacred Grove",
    " is one of the most famous locations of the Restoration. This is where Joseph Smith had the First Vision",
  ],
};

function initMap() {
  const sacred_grove = { lat: 43.04067395742267, lng: -77.24432780452317 };
  const harmony = { lat: 40.80150756080722, lng: -80.1273290390376 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: sacred_grove,
  });

  const sacredGroveString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">' +
    content_strings.sacred_grove[0] +
    "</h1>" +
    '<div id="bodyContent">' +
    "<p>" +
    content_strings.sacred_grove[1] +
    "</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: sacredGroveString,
    ariaLabel: "The Sacred Grove",
  });

  const marker = new google.maps.Marker({
    position: sacred_grove,
    map,
    title: "The Sacred Grove",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

  const infowindow2 = new google.maps.InfoWindow({
    content: sacredGroveString,
    ariaLabel: "Harmony",
  });

  const marker2 = new google.maps.Marker({
    position: harmony,
    map,
    title: "Harmony",
  });

  marker2.addListener("click", () => {
    infowindow2.open({
      anchor: marker2,
      map,
    });
  });
}

window.initMap = initMap;
