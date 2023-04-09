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
    "The Sacred Grove is one of the most famous locations of the Restoration. This is where Joseph Smith had the First Vision, ushering in the restoration of the Church of Jesus Christ of Latter-day Saints. There are four primary accounts of Joseph's vision, recorded in the years 1832, 1835, 1838, and 1842." +
      " The only account that was written by Joseph Smith himself was the 1832 account. The other accounts were written by his scribes or recorded from an orated account. Each version of the First Vision has slight differences in details, due to the fact that the audience and purpose were unique for each one." +
      " Some of the most important doctrinal messages of the First Vision are the fact that there was an apostasy of the true nature of God due to the Christian creeds, and there was an apostasy of ordinances and covenants. Through the prophet Joseph, these would all be restored to the earth. I encourage you to take a moment to think about how different your life would be if there was no restoration.",
    "Sources: https://www.josephsmithpapers.org/paper-summary/journal-1835-1836/24 | class lecture week 2",
  ],
  kirtland: [
    "Kirtland, OH",
    "In December of 1830, Joseph received revelation that the saints were to gather in Ohio, as found in D&C 37. Kirtland was one of two main centers of the church for most of the 1830s, while many other members gathered in Missouri." +
      " Prior to the saints gathering there, Oliver Cowdery, Parley P Pratt, and other missionaries baptized many people who formerly belonged to Sidney Rigdon's congregation near Kirtland." +
      " These conversions gave the church a stronger and larger member body, and many of these new members would go on to have important roles in the early church." +
      "\n\nKey events in Kirtland include:" +
      "<ul>" +
      "<li><b>Book of Abraham: </b>In the summer of 1835, a man named Michael Chandler arrived in Kirtland with several mummies and ancient scrolls from an excavation not far from Thebes. The saints purchased some of the papyri, and Joseph began translating. He discovered that ”much to [his] joy found that one of the rolls contained the writings of Abraham; another the writings of Joseph of Egypt”. These proved to be important scriptures, and the Book of Abraham was canonized in the Pearl of Great Price in 1880.</li>" +
      "<li><b>Kirtland Temple: </b>The Kirtland temple was the first temple constructed in this dispensation. Newel Knight stated in his journal that the ”lower room of the temple was dedicated to the Lord to day & the power of God, the ministering of Angels attended. Brother Frederick G Williams bore testimony to the whole Congregation that that during the first prayer made by Phs Smith an Angel came & Sat betwen him & Father Smith”. This was a truly special event. The temple took 3 years to complete, starting in 1833 and finishing with the dedication in 1836. Because of this holy building, the saints were finally able to receive the promised endowment of power.</li>" +
      "<li><b>Important Revelations: </b>Joseph received instruction regarding the organization of the church. In Kirtland, the First Presidency and Quorum of Twelve Apostles were established, along with other organizational changes to other priesthood organizations. Joseph also received an extremely important and personal revelation regarding the redemption of the dead, recorded in D&C 137. In this vision he saw his brother Alvin, who had passed away, in the Celestial kingdom. This was an introductory revelation to the doctrine of ordinance work for the dead. It was also in the Kirtland temple that Moses, Elijah, Elias appeared to the prophet to restore more important keys of the priesthood, including the keys sealings. A couple of other notable revelations received in Kirtland are found in D&C 42 and 76.</li>" +
      "</ul>",
    "Sources: " +
      "https://rsc.byu.edu/rise-latter-day-saints/kirtland-1834-36 | https://www.churchofjesuschrist.org/study/history/topics/kirtland-temple?lang=eng",
  ],
  farm_home: [
    "Johnson Farm Home - Hiram, OH",
    "This may be an unexpected location on this list, but the reason I included it is because it is the place where Joseph Smith received section 76, among other sections, of the Doctrine and Covenants. In the Johnson home, on February 16, 1832, Joseph Smith and Sidney Rigdon experienced one of the most profound visions of the restoration. This vision, comprising of D&C section 72, revealed in greater detail aspects of the pre-mortal life and life after death." +
      " Gospel scholar Monte Nyman remarks, ”While several men have seen a vision of the beginning of the world to the end thereof (for example, see 1 Nephi 14:26), Joseph Smith's vision went beyond the scope of this world and into the eternal worlds of varying degrees of glory”. The" +
      "\n\nJoseph and Sidney Rigdon also worked on the inspired translation of the Bible in this home. After pondering and asking God about a few Bible verses, Joseph was inspired to work on a new translation of the Bible. A more appropriate term for this translation may be 'prophetic interpretation', since Joseph was 'translating' from an english King James version of the Bible. He made roughly 3,400 changes. We have about 1/3 of these changes in our current edition of the Bible." +
      "\n\nBoth D&C 76 and the Joseph Smith Translations of the Bible have had an immense impact on the restored church. Without the knowledge and revelation received in the Johnson Farm House, our knowledge of the gospel and of the Plan of Salvation would be fundamentally different.",
    "Source: https://rsc.byu.edu/sperry-symposium-classics-doctrine-covenants/six-visions-eternity",
  ],
  nauvoo: [
    "Nauvoo, IL",
    "Nauvoo is a very important city in church history. The saints time in Nauvoo lasted about 7 years, " +
      "starting in 1839 and ending in 1846 when they were forced to abandon their homes." +
      "\n\nA few key events that took place in Nauvoo include the following:" +
      "<ul>" +
      "<li><b>Baptism for the dead: </b>Joseph Smith began publicly teaching the doctrine of proxy baptism for the dead in 1840 at the funeral of a church member. This was an exciting new doctrine, which many saints quickly and joyfully accepted. According to Wilford Woodruff, “Joseph Smith himself … went into the Mississippi river one Sunday night after meeting, and baptized a hundred. I baptized another hundred. The next man, a few rods from me, baptized another hundred. We were strung up and down the Mississippi, baptizing for our dead” (Wilford Woodruff, “Discourse,” Deseret Weekly, Apr. 25, 1891, 554).</li>" +
      "<li><b>The Wentworth Letter: </b>In 1842, John Wentworth, editor of the Chicago Democrat newspaper, wrote to Joseph requesting a summary of the faith and history of the Latter-day Saints. His response included what we today refer to as the Articles of Faith.</li>" +
      "<li><b>The King Follet Discourse: </b>This is one of the prophet's more popular discourses, which he delivered at a general conference in Nauvoo in 1844. In this talk, Joseph focuses on the nature of God, stating that “God Himself was once as we are now, and is an exalted man, and sits enthroned in yonder heavens! That is the great secret.”</li>" +
      "</ul>",
    "Sources: https://www.churchofjesuschrist.org/study/history/topics/nauvoo-commerce-illinois?lang=eng",
  ],
  carthage: [
    "Carthage Jail",
    "Carthage Jail is the place of the martyrdom of the prophet Joseph Smith and his brother Hyrum, who were detained there on charges of destruction of property relating to the Nauvoo Expositor. After posting bail for those charges, they were immediately charged with treason against the United States. Tensions were high between the church and the public, reaching the point of violence. On June 27, 1844, an angry mob swarmed Carthage Jail and murdered Joseph and Hyrum Smith." +
      " According to a talk by John Taylor, the some of the factors that led to the martyrdom of the prophet included the practice of plural marriage, the destruction of the Nauvoo Expositor (an anti-Joseph Smith newspaper), the political threat of Joseph and the church, and the wickedness of the men involved in the mob." +
      " Both John Taylor and Willard Richards were with Joseph and Hyrum at the time of their deaths, and provide us with great first-hand insights. Willard Richard's account is one of the best primary sources we have regarding the martyrdom. Willard says “I again reached my head out of the window and watched some seconds, to see if there were any signs of life, regardless of my own, determined to see the end of him I loved”",
    "Sources: " +
      "https://learningsuite.byu.edu/plugins/Upload/fileDownload.php?fileId=fa4ab5a8-8oUu-I8R2-zANK-WW3b2bcb1aed | http://www.mormonismi.net/artikkelit/richards_2_minutes_in_jail.shtml | https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/135?lang=eng",
  ],
  brick_store: [
    "The Red Brick Store",
    "Joseph Smith's Red Brick Store has a lot of history within it's walls. \n\nThe relief society was organized in this building on March 17, 1842, under the direction of Joseph Smith. In this organizational meeting, leaders were elected and sustained, and the name of the organization was debated and determined. John Taylor proposed the name 'Nauvoo Female Benevolent Society', but there was another organization that had the word 'benevolent' in the title that everyone thought of when they heard the word, and this organizationw as known to be corrupt. They wanted to avoid that association, so they stuck with 'Female Relief Society of Nauvoo', today known as the Relief Society. At the close of the meeting, newly elected president Emma Smith declared “we are going to do something extraordinary“." +
      "\n\nSome of the earliest endowment ceremonies in Nauvoo were held in the upper room of the Red Brick Store, as the Saints eagerly awaited the completion of the Nauvoo Temple. On May 4, 1842, Joseph Smith administered the ordinance of the endowment to a small group of saints here. He recorded: “I spent the day in the upper part of the store ... instructing them in the principles and order of the Priesthood, attending to washings, anointings, endowments and the communication of keys pertaining to the Aaronic Priesthood, and so on to the highest order of the Melchizedek Priesthood...“. Emma Smith received the endowment the following year in 1843, and was the first woman to do so.",
    "Sources: https://www.josephsmithpapers.org/paper-summary/nauvoo-relief-society-minute-book/29 |  https://www.churchofjesuschrist.org/study/manual/latter-day-saint-history-1815-1846-teacher-material/lesson-22?lang=eng | https://www.churchofjesuschrist.org/study/manual/teachings-joseph-smith/chapter-36?lang=eng&id=p4-p5#p4",
  ],
};

function initMap() {
  const sacred_grove = { lat: 43.04067395742267, lng: -77.24432780452317 };
  const kirtland = { lat: 41.62576706240176, lng: -81.3618099892316 };
  const farm_home = { lat: 41.29622971056441, lng: -81.16781017351133 };
  const nauvoo = { lat: 40.54657414683711, lng: -91.3784328562339 };
  const carthage = { lat: 40.41530890217622, lng: -91.13930001586613 };
  const brick_store = { lat: 40.54091546530632, lng: -91.39312634469799 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: kirtland,
  });

  // SACRED GROVE
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

  // KIRTLAND
  const kirtlandString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">' +
    content_strings.kirtland[0] +
    "</h1>" +
    '<div id="bodyContent">' +
    "<p>" +
    content_strings.kirtland[1] +
    "</p>" +
    "<p>" +
    content_strings.kirtland[2] +
    "</p>" +
    "</div>" +
    "</div>";

  const infowindow2 = new google.maps.InfoWindow({
    content: kirtlandString,
    ariaLabel: "Kirtland, OH",
  });

  const marker2 = new google.maps.Marker({
    position: kirtland,
    map,
    title: "Kirtland",
  });

  marker2.addListener("click", () => {
    infowindow2.open({
      anchor: marker2,
      map,
    });
  });

  // FARM HOUSE
  const farmHomeString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">' +
    content_strings.farm_home[0] +
    "</h1>" +
    '<div id="bodyContent">' +
    "<p>" +
    content_strings.farm_home[1] +
    "</p>" +
    "<p>" +
    content_strings.farm_home[2] +
    "</p>" +
    "</div>" +
    "</div>";

  const infowindow3 = new google.maps.InfoWindow({
    content: farmHomeString,
    ariaLabel: "Johnson Family Farm House, Hiram, IL",
  });

  const marker3 = new google.maps.Marker({
    position: farm_home,
    map,
    title: "Johnson Farm House",
  });

  marker3.addListener("click", () => {
    infowindow3.open({
      anchor: marker3,
      map,
    });
  });

  // NAUVOO
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

  const infowindow4 = new google.maps.InfoWindow({
    content: nauvooString,
    ariaLabel: "Nauvoo, IL",
  });

  const marker4 = new google.maps.Marker({
    position: nauvoo,
    map,
    title: "Nauvoo",
  });

  marker4.addListener("click", () => {
    infowindow4.open({
      anchor: marker4,
      map,
    });
  });

  //CARTHAGE
  const carthageString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">' +
    content_strings.carthage[0] +
    "</h1>" +
    '<div id="bodyContent">' +
    "<p>" +
    content_strings.carthage[1] +
    "</p>" +
    "<p>" +
    content_strings.carthage[2] +
    "</p>" +
    "</div>" +
    "</div>";

  const infowindow5 = new google.maps.InfoWindow({
    content: carthageString,
    ariaLabel: "Carthage Jail, IL",
  });

  const marker5 = new google.maps.Marker({
    position: carthage,
    map,
    title: "Carthage Jail",
  });

  marker5.addListener("click", () => {
    infowindow5.open({
      anchor: marker5,
      map,
    });
  });

  // BRICK STORE
  const brickString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">' +
    content_strings.brick_store[0] +
    "</h1>" +
    '<div id="bodyContent">' +
    "<p>" +
    content_strings.brick_store[1] +
    "</p>" +
    "<p>" +
    content_strings.brick_store[2] +
    "</p>" +
    "</div>" +
    "</div>";

  const infowindow6 = new google.maps.InfoWindow({
    content: brickString,
    ariaLabel: "Joseph Smith Brick Store",
  });

  const marker6 = new google.maps.Marker({
    position: brick_store,
    map,
    title: "Smith Brick Store",
  });

  marker6.addListener("click", () => {
    infowindow6.open({
      anchor: marker6,
      map,
    });
  });

  map.addListener("click", () => {
    infowindow.close();
    infowindow2.close();
    infowindow3.close();
    infowindow4.close();
    infowindow5.close();
    infowindow6.close();
  });
}

window.initMap = initMap;
