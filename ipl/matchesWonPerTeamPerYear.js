let matchesJsonFile = require('../matchesJsonFile.json');

//Second Function : 2. Number of matches won of per team per year in IPL.

function matchesWonPerTeamPerYear() {
    let matchesWon = matchesJsonFile.filter(match => match.winner).reduce((accumulator, currentValue) => {
        if(accumulator[currentValue.winner]) {
            let year = {};
            matchesJsonFile.map(match => (year[match.season] = 0));
            let countMatches = matchesJsonFile.filter(match => match.winner === currentValue.winner).reduce((accumulator, currentValue) => {
                if(accumulator[currentValue.season]) {
                    accumulator[currentValue.season]++;
                } else {
                    accumulator[currentValue.season] = 1;
                }
                return accumulator;
                 
            },{})
            accumulator[currentValue.winner] = countMatches;
        } else {
            accumulator[currentValue.winner] = {};
        }
        return accumulator;
    }, {});

    let matchesWonObj = {"teams": Object.keys(matchesWon), "years": Object.values(matchesWon)};
    return matchesWonObj;
}

module.exports = matchesWonPerTeamPerYear;


