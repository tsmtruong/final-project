// We create the tile layer that will be the background of our map.
let street = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreet = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: street,
    Satellite: satelliteStreet
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [32.98, -116.77],
    zoom: 10,
    layers: [street]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Add GeoJSON data.
let sandiegoData = "https://raw.githubusercontent.com/tsmtruong/final-project/main/Resources/RAW/San_Diego_Zip_Codes.geojson"
let classdata = "https://raw.githubusercontent.com/tsmtruong/final-project/ATaylor/Resources/Clean/San_Diego_Housing_Classes.json"

// Read JSON Data
d3.json(sandiegoData).then(function(data) {
    console.log(data);
    //Create GeoJSON layer with retrieved data
    L.geoJSON(data, {
        color: "black",
        weight: 1,
        fillColor: "Yellow",
        fillOpacity: 0.2,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h3>Neighborhood: " + feature.properties.community + "<h4> Zip Code: " + feature.properties.zip)}
    }).addTo(map)
});

d3.json(classdata).then(function(data2) {
    console.log(data2)
})