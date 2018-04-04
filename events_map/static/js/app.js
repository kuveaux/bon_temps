// chart to see if database connection works
var bon_link = "/api/daily_events";

// generate events list info
// d3.json(bon_link).then(function (data) {
//     for (i = 0; i < data["results"].length; i++) {
//         result = data["results"][i]
//         d3.select(".events-list").append("li")
//             .attr("class", "list-group-item justify-content-between")
//             .text(result.event)
//     }
// });

// generate markers in leaflet 
d3.json(bon_link).then(function (data) {
    for (i = 0; i < data["results"].length; i++) {
        result = data["results"][i]
        var eventLink = d3.select(".events-list").append("div")
        .attr("class", "list-group-item justify-content-between")
        .text(result.event)
        var customPopup = `<strong>${result.venue}</strong><br>${result.address}`
        // <li class="list-group-item justify-content-between">${result.event}<br><span class="badge badge-default badge-pill">8:00 PM</span></li>
        var customOptions = {

        }
        var newMarker = new L.marker([result.lat, result.lon])
        newMarker.bindPopup(customPopup, customOptions)
        newMarker.venueName = `${result.venue}`
        newMarker.venueAddress = `${result.address}`
        newMarker.event = `${result.event}`
        newMarker.addTo(myMap).on('click', onClick)

        
        // add onClick function to update venue window with clicked venues information
        function onClick(e) {
            // delete old entry
            d3.selectAll(".auto-generate").remove()
            // use d3. to populate venue-area with marker info on click
            var venueList = d3.select(".venue-list")
                .append("li")
                .attr("class", "auto-generate list-group-item justify-content-between")
                .text(e.target.event)
                .append("span")
                .attr("class", "badge badge-default badge-pill")
                .text("8:00 PM")

            console.log(e.target.venueName)
            // alert(this.getLatLng());
        }
    }
});

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
