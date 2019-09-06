//adding csvtojson module
const csvtoJSON = require("csvtojson");

//adding write-json-file module to write to json file
const writeToJSONFile = require('write-json-file');

csvtoJSON().fromFile("matches.csv").then((jsonArrayObj)=>
{
    (async () => {
        await writeToJSONFile('matchesJsonFile.json', jsonArrayObj);
    })();
});
const matchesJsonFile = require('./matchesJsonFile.json');
// console.log(matchesJsonFile);

// first function : 1. Number of matches played per year for all the years in IPL.
function findTotalNumberOfMatchesPerYear() {
    let totalNumOfMatch = matchesJsonFile.reduce((accumulator, currentValue) => {
        accumulator[currentValue.season] = (accumulator[currentValue.season] || 0) +1;
        return accumulator;
        
    },{});
    totalNumOfMatches = {'year': Object.keys(totalNumOfMatch), 'matches': Object.values(totalNumOfMatch)}; 
    return totalNumOfMatches;
}

// console.log(findTotalNumberOfMatchesPerYear());
findTotalNumberOfMatchesPerYear();

// // Object of year and matches
let fullObject = {totalNumOfMatches};

// writing output to json file in public folder
(async () => {
    await writeToJSONFile('./public/data.json', fullObject);
})();



//Second Function : 2. Number of matches won of per team per year in IPL.

function matchesWonPerTeamPerYear() {
    let matchesWon = matchesJsonFile.reduce((accumulator, currentValue) => {
        if(accumulator[currentValue.season]){
            if(currentValue.winner in accumulator[currentValue.season]) {
                accumulator[currentValue.season][currentValue.winner] += 1;
            } else {
                accumulator[currentValue.season][currentValue.winner] = 1;
            } 

        } else {
            accumulator[currentValue.season] = {};

            console.log(accumulator[currentValue.season][currentValue.winner] = 1);

        }

        return accumulator;
    }, {});

    console.log(matchesWon);

}

matchesWonPerTeamPerYear();