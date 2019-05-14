// from data.js
var tableData = data;

// Use d3 to select our body elements and button ID and store them in variables.
var tbody = d3.select("tbody");
var filterBtn = d3.select("#filter-btn");


// Use d3 and forEach loops to pull data from the .js file and load it into our HTML dynamically
tableData.forEach(function(buildData) {
    var row = tbody.append("tr");
    Object.entries(buildData).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Create an event handler for the filter button click that generates a new list of entries and loads them based on the date input
filterBtn.on("click", function() {
  d3.event.preventDefault();
  var inputField = d3.select("#datetime");
  var queryDate = inputField.property('value');
  var filteredData = tableData.filter(function (newTable) {
      	return newTable.datetime === queryDate;
      });
  tbody.text('');
  filteredData.forEach(record => { 
          	var row = tbody.append('tr');
            Object.entries(record).forEach( ([key, value]) => {
            row.append('td').text(value);
        });
    });
});




