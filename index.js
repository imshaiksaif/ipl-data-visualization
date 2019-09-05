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
// findTotalNumberOfMatchesPerYear();


// // Object of year and matches

findTotalNumberOfMatchesPerYear();

let fullObject = {totalNumOfMatches};

// ​
// ​
// // Dumping matchesPerYear in json file
(async () => {
    await writeToJSONFile('./public/data.json', fullObject);
})();