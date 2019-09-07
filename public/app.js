function fetchAndVisualizeData() {
    fetch('./data.json')
    .then(r => r.json())
    .then(data => {
        visualizeData(data);
    })
}

function visualizeData(data) {
  var chart = Highcharts.chart('container', {

    title: {
        text: 'Chart.update'
    },

    subtitle: {
        text: 'Plain'
    },

    xAxis: {
        categories: data.totalNumOfMatches.year
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        data: data.totalNumOfMatches.matches,
        showInLegend: false
    }]

});

}

fetchAndVisualizeData();