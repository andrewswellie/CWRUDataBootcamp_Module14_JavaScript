// from data.js
var tableData = data;

// Use d3 and forEach loops to pull data from the .js file and load it into our HTML dynamically
var tbody = d3.select("tbody");

tableData.forEach(function(buildData) {
    var row = tbody.append("tr");
  
    Object.entries(buildData).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  

