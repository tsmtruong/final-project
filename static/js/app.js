// Load data from data.js file
function selectZip() {
    var selector = d3.select('#selZip');

    d3.json('static/js/zip_codes.json').then((data) => {
        var zipCodes = data.data;

        zipCodes.forEach((zip)=>{
            selector
                .append('option')
                .text(zip)
                .property('value', zip);
        });
    })
};

selectZip();

function zipChanged(newZip) {
    buildDemographics(tableData, newZip);
}

function buildDemographics(data, zip) {
    console.log(zip)
    console.log(data[0])
    var resultArray = data.filter(data => data.Zip_Code == zip)
    var result = resultArray[0]
    console.log(result)
    var PANEL = d3.select("#census-data");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
};

var tbody = d3.select('tbody');
var thead = d3.select('thead');

const tableData = data


// Function to select the table elements on the html file
function buildTable(data) {
    thead.html('');
    tbody.html('');

    thead.append('tr')
    for (key in data[0]) {
        thead
            .append('th')
            .text(key)
    }

    tbody.append('tr');
    for (var i = 0; i < data.length; i++) {
        tbody.append('tr');
        for (key in data[i]) {
          tbody
            .append('td')
            .text(data[i][key]);
      }
    };
};

buildTable(tableData)



