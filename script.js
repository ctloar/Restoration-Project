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
    'Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      "https://en.wikipedia.org/w/index.php?title=Uluru</a>" +
      "(last visited June 22, 2009).",
  ],
  nauvoo: [
    "Nauvoo, IL",
    " is a very important city in church history. The saints time in Nauvoo lasted about 7 years," +
      "starting in 1839 and ending in 1846 when they were forced to abandon their homes." +
      "\n\nA few key events that took place in Nauvoo include the following:" +
      "<ul>" +
      "<li><b>Baptism for the dead: </b>Joseph Smith began publicly teaching the doctrine of proxy baptism for those who had passed away in 1840 at the funeral of a church member. This was an exciting new doctrine, which many saints quickly and joyfully accepted. According to Wilford Woodruff, “Joseph Smith himself … went into the Mississippi river one Sunday night after meeting, and baptized a hundred. I baptized another hundred. The next man, a few rods from me, baptized another hundred. We were strung up and down the Mississippi, baptizing for our dead” (Wilford Woodruff, “Discourse,” Deseret Weekly, Apr. 25, 1891, 554).</li>" +
      "<li><b>The Wentworth Letter: </b>In 1842, John Wentworth, editor of the Chicago Democrat newspaper, wrote to Joseph requesting a summary of the faith and history of the Latter-day Saints. His response included what we today refer to as the Articles of Faith.</li>" +
      "<li><b>The King Follet Discourse: </b>This is one of the prophet's more popular discourses, which he delivered at a general conference in Nauvoo in 1844. In this talk, Joseph focuses on the nature of God, stating that “God Himself was once as we are now, and is an exalted man, and sits enthroned in yonder heavens! That is the great secret.”</li>",
    "Sources:",
  ],
  carthage: [
    "Carthage Jail",
    " is the place of the martyrdom of the prophet Joseph Smith and his brother Hyrum, who were detained there on charges of destruction of property relating to the Nauvoo Expositor. After posting bail for those charges, they were immediately charged with treason against the United States. Tensions were high between the church and the public, reaching the point of violence. On June 27, 1844, an angry mob swarmed Carthage Jail and murdered Joseph and Hyrum Smith." +
      " According to a talk by John Taylor, the some of the factors that led to the martyrdom of the prophet included the practice of plural marriage, the destruction of the Nauvoo Expositor (an anti-Joseph Smith newspaper), the political threat of Joseph and the church, and the wickedness of the men involved in the mob." +
      " Both John Taylor and Willard Richards were with Joseph and Hyrum at the time of their deaths, and provide us with great first-hand insights. Willard Richard's account is one of the best primary sources we have regarding the martyrdom. Willard says “I again reached my head out of the window and watched some seconds, to see if there were any signs of life, regardless of my own, determined to see the end of him I loved”",
    "Sources: ",
  ],
  brick_store: [
    "The Red Brick Store",
    " has a lot of history within it's walls. \nThe relief society was organized in this building on March 17, 1842, under the direction of Joseph Smith. In this organizational meeting, leaders were elected and sustained, and the name of the organization was debated and determined. John Taylor proposed the name 'Nauvoo Female Benevolent Society', but there was another organization that had the word 'benevolent' in the title that everyone thought of when they heard the word, and this organizationw as known to be corrupt. They wanted to avoid that association, so they stuck with 'Female Relief Society of Nauvoo', today known as the Relief Society. At the close of the meeting, newly elected president Emma Smith declared “we are going to do something extraordinary“." +
      "\n\nSome of the earliest endowment ceremonies in Nauvoo were held in the upper room of the Red Brick Store, as the Saints eagerly awaited the completion of the Nauvoo Temple. On May 4, 1842, Joseph Smith administered the ordinance of the endowment to a small group of saints here. He recorded: “I spent the day in the upper part of the store ... instructing them in the principles and order of the Priesthood, attending to washings, anointings, endowments and the communication of keys pertaining to the Aaronic Priesthood, and so on to the highest order of the Melchizedek Priesthood...“. Emma Smith received the endowment the following year in 1843, and was the first woman to do so.",
    "Sources: ",
  ],
};

function initMap() {
  const sacred_grove = { lat: 43.04067395742267, lng: -77.24432780452317 };
  const nauvoo = { lat: 40.54657414683711, lng: -91.3784328562339 };

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
    "<p>" +
    content_strings.sacred_grove[2] +
    "</p>" +
    "</div>" +
    "</div>";

  const nauvooString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">' +
    content_strings.nauvoo[0] +
    "</h1>" +
    '<div id="bodyContent">' +
    "<p>" +
    content_strings.nauvoo[1] +
    "</p>" +
    "<p>" +
    content_strings.nauvoo[2] +
    "</p>" +
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
    content: nauvooString,
    ariaLabel: "Nauvoo, IL",
  });

  const marker2 = new google.maps.Marker({
    position: nauvoo,
    map,
    title: "Nauvoo",
  });

  marker2.addListener("click", () => {
    infowindow2.open({
      anchor: marker2,
      map,
    });
  });

  map.addListener("click", () => {
    infowindow.close();
  });
}

window.initMap = initMap;
