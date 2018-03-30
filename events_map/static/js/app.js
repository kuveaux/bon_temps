var container =  document.getElementById("map_area")

// leaflet javascript -

var queryEvents = "/api/leaflet_data"
console.log(queryEvents)

// // create markers
// d3.json(queryEvents, createMarkers);

// function createMarkers(response) {
    
//     var markers = []
//     // loop thru endpoint data to create markers

//     // create layer on map
//     createMap(L.layergroup(markers))
// }


// function createMap(markers) {
//     // tile layer for background
//     var maplayer = L.tileLayer("?");

//     // create baseMaps object to hold tile layer
//     var baseMaps = {

//     };
//     // create overlayMaps object for events layer
//     var overlayMaps ={
        
//     };

//     // create map
//     var geoMap = L.map("map_area", {
//         center:
//         zoom:
//         preferCanvas:
//         layers: 
//     });

//     L.control.layer(baseMaps, overlayMaps, {
//         collapsed: false
//     }).addTo(geoMap)
    

// }