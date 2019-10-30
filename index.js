//adding csvtojson module
const csvtoJSON = require('csvtojson');
//adding write-json-file module to write to json file
const writeToJSONFile = require('write-json-file');
//adding functions file
let functions = require('./ipl/functions.js');

csvtoJSON().fromFile('./csvFiles/matches.csv').then((matchesOut) => {
	csvtoJSON().fromFile('./csvFiles/deliveries.csv').then((deliveryOut) => {
		//function callings
		let findTotalMatchesFunction = functions.findTotalNumberOfMatchesPerYear(matchesOut);
		let matchesWonPerTeamFunction = functions.matchesWonPerTeamPerYear(matchesOut);
		let totalRunsFunction = functions.totalRunsConcededPerTeam(matchesOut, deliveryOut);
		let topEconomicalBowlersFunction = functions.topEconomicalBowlers(matchesOut, deliveryOut);

		// // Object of year and matches
		let fullObject = {
			findTotalMatchesFunction,
			matchesWonPerTeamFunction,
			totalRunsFunction,
			topEconomicalBowlersFunction
		};

		// writing output to json file in public folder
		(async () => {
			await writeToJSONFile('./public/data.json', fullObject);
		})();
	});
});
