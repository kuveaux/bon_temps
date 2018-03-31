// chart to see if database connection works
var bon_link = "/api/leaflet_data"

function dataTest(test) {
    console.log(test[0].address);
}
d3.json(bon_link, dataTest);

// leaflet javascript -
// 
// create map object
var myMap = L.map("map", {
    center: [30.26, -97.74],
    zoom: 13
});

// add tile layer
var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
}).addTo(myMap);

// add markers
var venueMarkers = L.marker([30.26, -97.74]).addTo(myMap);








