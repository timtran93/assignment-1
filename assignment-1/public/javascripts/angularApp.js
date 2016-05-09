var app = angular.module('app', []);

app.controller('dataController', function($scope, $http){
  $http.get("/data").then(function(response){
    
    google.charts.load('current', {'packages': ['corechart', 'bar']});
    google.charts.setOnLoadCallback(function(){
      drawBasic(response.data);
    });
  });
});

function drawBasic(chartdata) {

      var data = [];
      var header = ['Year', 'Homeless Estimate'];
      
      data.push(header);
      
      for (var i = 0; i < chartdata.length; i++){
        var temp = [];
        temp.push(chartdata[i].Year);
        temp.push(chartdata[i].Homeless_Estimate);
        data.push(temp);
      }
      
      console.log(data);
      var g_data = google.visualization.arrayToDataTable(data);
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(g_data, getOptions());
}

function getOptions(){

      var options = {
        title: 'Homeless Estimate in New York',
        chartArea: {width: '60%'},
        hAxis: {
          title: 'Homeless Estimate',
        },
        vAxis: {
          title: 'Year',
          minValue: 2008,
          maxValue: 2014
          
        }
      };

     return options;
}