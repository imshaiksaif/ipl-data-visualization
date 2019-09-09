let matchesJsonFile = require('../matchesJsonFile.json');
// // first function : 1. Number of matches played per year for all the years in IPL.
function findTotalNumberOfMatchesPerYear() {
	let totalNumOfMatch = matchesJsonFile.reduce((accumulator, currentValue) => {
		accumulator[currentValue.season] = (accumulator[currentValue.season] || 0) + 1;
		return accumulator;
	}, {});
	totalNumOfMatches = { year: Object.keys(totalNumOfMatch), matches: Object.values(totalNumOfMatch) };
	return totalNumOfMatches;
}

module.exports = findTotalNumberOfMatchesPerYear;
