function fetchAndVisualizeData() {
	fetch('./data.json').then((r) => r.json()).then((data) => {
		visualizeData(data);
	});
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

		series: [
			{
				type: 'column',
				colorByPoint: true,
				data: data.findTotalMatchesFunction.matches,
				showInLegend: false
			}
		]
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
			pointFormat:
				'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
			shared: true
		},
		plotOptions: {
			column: {
				stacking: 'percent'
			}
		},
		series: data.matchesWonPerTeamFunction.teamdata
	});

	Highcharts.chart('totalRunsFunction', {
		chart: {
			inverted: false,
			polar: false
		},
		title: {
			text: 'Extra runs conceded per team in 2016'
		},
		subtitle: {
			text: 'Extra Runs'
		},
		xAxis: {
			categories: data.totalRunsFunction.teams
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Runs Conceded'
			}
		},
		series: [
			{
				type: 'column',
				colorByPoint: true,
				data: data.totalRunsFunction.runs,
				showInLegend: false
			}
		]
	});

	Highcharts.chart('topEconomicalBowlersFunction', {
		chart: {
			inverted: false,
			polar: false
		},
		title: {
			text: 'Top 10 economical bowlers in 2015'
		},
		subtitle: {
			text: 'Top 10 bowlers'
		},
		xAxis: {
			categories: data.topEconomicalBowlersFunction.bowler
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Economy of bowlers'
			}
		},
		series: [
			{
				type: 'column',
				colorByPoint: true,
				data: data.topEconomicalBowlersFunction.economy,
				showInLegend: false
			}
		]
	});
}

fetchAndVisualizeData();
