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
}

selectZip();

function buildCensus(zip){
    d3.json('static/js/data.json').then((data) => {
    var zipCode = data.Zip_Code;

    var resultArray = zipCode.filter(sampleObj => sampleObj.id == zip)
    var result = resultArray[0];

    var PANEL = d3.select('census-data');

    PANEL.html('');

    Object.entries(result).forEach(([key, value]) => {
        PANEL.append('h6').text(`${key.toUpperCase()}: ${value}`);
    })

    })
}
