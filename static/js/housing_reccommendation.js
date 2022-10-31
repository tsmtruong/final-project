// We create the dark view tile layer that will be an option for our map.
let satelliteStreet = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Satellite: satelliteStreet
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [32.98, -116.77],
    zoom: 10,
    layers: [satelliteStreet]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Add GeoJSON data.
let sandiegoData = "https://raw.githubusercontent.com/tsmtruong/final-project/ATaylor/Resources/RAW/San_Diego_Zip_Codes.geojson"
let sandiegoAmenities = "https://raw.githubusercontent.com/tsmtruong/final-project/ATaylor/San_Diego_Amenities.geojson"

// Function that will determine the color of a neighborhood based on the class it belongs to
function chooseColor(houseclass) {
    switch (houseclass) {
    case "0":
      return "#DDE5B6";
    case "1":
      return "#6C584C";
    case "2":
      return "#A98467";
    case "3":
      return "#f5d49f";
    case "4":
      return "#ADC178";
    default:
      return "black";
    }
}

function chooseOpacity(houseclass) {
    switch (houseclass) {
    case "0":
      return 0.7;
    case "1":
      return 0.7;
    case "2":
      return 0.7;
    case "3":
      return 0.7;
    case "4":
      return 0.7;
    default:
      return 0;
    }
}

// Read JSON Data
d3.json(sandiegoData).then(function(data) {
    console.log(data);
    //Create GeoJSON layer with retrieved data
    L.geoJSON(data, {
        style: function(feature) {
            return {
              color: "black",
              // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
              fillColor: chooseColor(feature.properties.class),
              fillOpacity: chooseOpacity(feature.properties.class),
              weight: 1.5
            };
          },
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h3>Neighborhood: " + feature.properties.community + "<h4>Zip Code: " + feature.properties.zip + "<h4>Housing Class: " + feature.properties.class)}
    }).addTo(map)
});

// Read Amenities layer
d3.json(sandiegoAmenities).then(function(data2) {
  console.log(data2);
  //Create GeoJSON layer with retrieved data
  L.geoJSON(data2)
  // .bindPopup("<h2>Airport Code: " + data.properties.name + "</h2><hr><h3>Airport Name: " + data.properties.name + "</h3>")
  .addTo(map)
});