// from data.js
// YOUR CODE HERE!

var sightingData = data;
var button = d3.select("#search-btn");


function deleteRows(){
// Clear table results
    var sightingTable = document.getElementById("sightings-search-table");
    var sightingCount = sightingTable.rows.length;
    for(var i=sightingCount-1;i>0;i--){
        sightingTable.deleteRow(i);
    }
}

function handleClick(){
    var tbody = d3.select("#search-results-by-datetime");
    var inputField = d3.select("#sighting-datetime");
    var sightingField = d3.select("#sighting-datetime");
    var sightingDate = sightingField.property("value");

//     Clear previous search results
    deleteRows();

//     Debugging:
//     console.log("A button was clicked!");
//     console.log(d3.event.target);
//     console.log(sightingDate);
//     console.log(sightingData);

//     Perform filter based on sighting date
    var filteredSighting = sightingData.filter(sight => sight.datetime === sightingDate);

//    Debugging:
//    console.log(filteredSighting)

//     Populate rows with filtered sighting data
    filteredSighting.forEach(sightingReport => {
        console.log(sightingReport);
        var row = tbody.append("tr");
        Object.entries(sightingReport).forEach(([key,value]) => {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
        })
    })

}

button.on("click", handleClick);