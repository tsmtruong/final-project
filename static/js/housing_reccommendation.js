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

// Add layer grousp for the map.
let allSD = new L.LayerGroup();
let clusters = new L.LayerGroup();


// Add a reference to the layer groups to the overlays object.
let overlays = {
  "San Deigo County": allSD,
  "Recommended Build Areas": clusters,
};

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps, overlays).addTo(map);

// Add GeoJSON data.
let sandiegoData = "https://raw.githubusercontent.com/tsmtruong/final-project/ATaylor/Resources/RAW/San_Diego_Zip_Codes.geojson"
let cluster = "https://raw.githubusercontent.com/tsmtruong/final-project/CalebmKelly/clusters.geojson"
let point = "https://raw.githubusercontent.com/tsmtruong/final-project/CalebmKelly/points.geojson"

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

// Read San Diego Map
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
    }).addTo(allSD);
    allSD.addTo(map);
});

/// Retrieve the earthquake GeoJSON data.
d3.json(cluster).then(function(data2) {
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: "#00CAB1",
      color: "#000000",
      radius: 15,
      stroke: true,
      weight: 0.5
    };
  }

L.geoJson(data2, {
  pointToLayer: function(feature, latlng) {
    console.log(data2);
    return L.circleMarker(latlng);
  },
  // We set the style for each circleMarker using our styleInfo function.
  style: styleInfo,
}).addTo(clusters);
// Add the major earthquakes layer to the map.
clusters.addTo(map);
// Close the braces and parentheses for the major earthquake data.
});

// Read Amenities layer
d3.json(point).then(function(data3) {
  console.log(data3);
  //Create GeoJSON layer with retrieved data
  L.geoJSON(data3, {
    // onEachFeature: function(feature, layer3) {
    //   layer3.bindPopup("<h2>Amenity Type: " + data.properties.resource + "</h2><hr><h3>Amenity Name: " + data.properties.name + "</h3>")}
    }).addTo(clusters);
    clusters.addTo(map);
});