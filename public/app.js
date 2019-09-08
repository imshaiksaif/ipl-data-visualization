function fetchAndVisualizeData() {
    fetch('./data.json')
    .then(r => r.json())
    .then(data => {
        visualizeData(data);
    })
}

function visualizeData(data) {
   Highcharts.chart('container', {

    title: {
        text: 'Number of matches played per year for all the years in IPL.'
    },

    subtitle: {
        text: 'Number of Matches Per Year'
    },

    xAxis: {
        categories: data.findTotalMatchesFunction.year
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        data: data.findTotalMatchesFunction.matches,
        showInLegend: false
    }]

});


Highcharts.chart('no-of-matches', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of matches won of per team per year in IPL'
    },
    subtitle: {
        text: 'Number of matches won'
    },
    xAxis: {
        categories: data.matchesWonPerTeamFunction.years,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches Won Per Year'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [
        {
            name: data.matchesWonPerTeamFunction.teams[0],
            data: Object.values(data.matchesWonPerTeamFunction.years[0])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[1],
            data: Object.values(data.matchesWonPerTeamFunction.years[1])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[2],
            data: Object.values(data.matchesWonPerTeamFunction.years[2])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[3],
            data: Object.values(data.matchesWonPerTeamFunction.years[3])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[4],
            data: Object.values(data.matchesWonPerTeamFunction.years[4])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[5],
            data: Object.values(data.matchesWonPerTeamFunction.years[5])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[6],
            data: Object.values(data.matchesWonPerTeamFunction.years[6])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[7],
            data: Object.values(data.matchesWonPerTeamFunction.years[7])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[8],
            data: Object.values(data.matchesWonPerTeamFunction.years[8])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[9],
            data: Object.values(data.matchesWonPerTeamFunction.years[9])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[10],
            data: Object.values(data.matchesWonPerTeamFunction.years[10])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[11],
            data: Object.values(data.matchesWonPerTeamFunction.years[11])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[12],
            data: Object.values(data.matchesWonPerTeamFunction.years[12])
        },
        {
            name: data.matchesWonPerTeamFunction.teams[13],
            data: Object.values(data.matchesWonPerTeamFunction.years[13])
        }
    ]
});

}

fetchAndVisualizeData();