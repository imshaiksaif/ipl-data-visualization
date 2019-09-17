// // first function : 1. Number of matches played per year for all the years in IPL.
function findTotalNumberOfMatchesPerYear(matchesJsonFile) {
	let totalNumOfMatch = matchesJsonFile.reduce((accumulator, currentValue) => {
		accumulator[currentValue.season] = (accumulator[currentValue.season] || 0) + 1;
		return accumulator;
	}, {});
	totalNumOfMatches = { year: Object.keys(totalNumOfMatch), matches: Object.values(totalNumOfMatch) };
	return totalNumOfMatches;
}

//Second Function : 2. Number of matches won of per team per year in IPL.

function matchesWonPerTeamPerYear(matchesJsonFile) {
	var seriesdata = {};
	let matchesWon = matchesJsonFile.filter((match) => match.winner).reduce((accumulator, currentValue) => {
		if (accumulator[currentValue.winner]) {
			let year = {};
			matchesJsonFile.map((match) => (year[match.season] = 0));
			let countMatches = matchesJsonFile
				.filter((match) => match.winner === currentValue.winner)
				.reduce((accumulator, currentValue) => {
					if (accumulator[currentValue.season]) {
						accumulator[currentValue.season]++;
					} else {
						accumulator[currentValue.season] = 1;
					}
					return accumulator;
				}, year);
			accumulator[currentValue.winner] = countMatches;
			seriesdata[currentValue.winner] = { name: currentValue.winner, data: Object.values(countMatches) };
		} else {
			accumulator[currentValue.winner] = {};
		}
		return accumulator;
	}, {});

	let matchesWonObj = { years: Object.keys(Object.values(matchesWon)[0]), teamdata: Object.values(seriesdata) };
	return matchesWonObj;
}

// // third function : 3. Extra runs conceded per team in 2016

function totalRunsConcededPerTeam(matchesJsonFile, deliveriesArrObj) {
	let collectionOfIds2016 = matchesJsonFile
		.filter((match) => {
			return match.season == '2016';
		})
		.map((match) => match.id);
	// console.log(collectionOfIds2016);

	let collectionOfMatchDelivery = deliveriesArrObj.filter((match) => {
		if (collectionOfIds2016.includes(match.match_id)) {
			return match;
		}
	});

	// console.log(collectionOfMatchDelivery);

	let extraRunsScoredPerTeam = collectionOfMatchDelivery.reduce((accumulator, currentValue) => {
		accumulator[currentValue.bowling_team] =
			(accumulator[currentValue.bowling_team] || 0) + Number(currentValue.extra_runs);
		return accumulator;
	}, {});

	let extraRunsFinalObj = { teams: Object.keys(extraRunsScoredPerTeam), runs: Object.values(extraRunsScoredPerTeam) };
	// console.log(extraRunsFinalObj);
	return extraRunsFinalObj;
}

// Fourth Function : 4. Top 10 economical bowlers in 2015

function topEconomicalBowlers(matchesJsonFile, deliveriesArrObj) {
	let takeMatchId = matchesJsonFile.filter((match) => match.season == '2015').map((match) => match.id);
	let findIninings = deliveriesArrObj.filter((match) => takeMatchId.includes(match.match_id)).map((match) => ({
		name: match.bowler,
		ball: match.ball,
		byeRuns: match.bye_runs,
		leg: match.legbye_runs,
		totalRunsScored: match.total_runs
	}));

	let totalRuns = findIninings.reduce((accumulator, currentValue) => {
		accumulator[currentValue.name] =
			(accumulator[currentValue.name] || 0) +
			Number(currentValue.totalRunsScored) -
			Number(currentValue.byeRuns) -
			Number(currentValue.leg);
		return accumulator;
	}, {});

	let collectionOfBalls = findIninings.reduce((accumulator, currentValue) => {
		if (currentValue.ball <= 6) {
			accumulator[currentValue.name] = (accumulator[currentValue.name] || 0) + 1;
		}
		return accumulator;
	}, {});

	//saving data output from above variable
	let totalRunsValues = Object.values(totalRuns);
	let collectionOfBallsKeys = Object.keys(collectionOfBalls);
	let collectionOfBallsValues = Object.values(collectionOfBalls);

	//finding economy
	let findEconomy = totalRunsValues.map((run, idx) => {
		return { [collectionOfBallsKeys[idx]]: run * 6 / collectionOfBallsValues[idx] };
	});

	let ecoBowlers = findEconomy.sort((a, b) => Object.values(a) - Object.values(b)).slice(0, 10);
	bowlersArr = [];
	economyArr = [];
	ecoBowlers.map((bowler) => {
		bowlersArr.push(Object.keys(bowler)[0]);
		economyArr.push(Object.values(bowler)[0]);
	});
	economyBowlersObj = { bowler: bowlersArr, economy: economyArr };
	return economyBowlersObj;
}

module.exports = {
	findTotalNumberOfMatchesPerYear,
	matchesWonPerTeamPerYear,
	topEconomicalBowlers,
	totalRunsConcededPerTeam
};
