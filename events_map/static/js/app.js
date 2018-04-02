// chart to see if database connection works
var bon_link = "/api/leaflet_data";

d3.json(bon_link).then(function(data){
    for (i=0;i<data["results"].length;i++) {
        result = data["results"][i]
        var customPopup = `<strong>${result.venue}</strong><br>${result.address}`
        var customOptions = {
            
        }
        var newMarker = new L.marker([result.lat, result.lon])
        newMarker.bindPopup(customPopup, customOptions)                        
        newMarker.addTo(myMap)
    }
});


// leaflet javascript -
// 
// create map object
var myMap = L.map("map", {
    center: [30.28, -97.735],
    zoom: 13
});

// add tile layer
var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
}).addTo(myMap);








