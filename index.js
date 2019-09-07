//adding csvtojson module
const csvtoJSON = require("csvtojson");

//adding write-json-file module to write to json file
const writeToJSONFile = require("write-json-file");

csvtoJSON().fromFile("matches.csv").then((jsonArrayObj)=>
{
    (async () => {
        await writeToJSONFile('matchesJsonFile.json', jsonArrayObj);
    })();
});
const matchesJsonFile = require('./matchesJsonFile.json');

// console.log(matchesJsonFile);



csvtoJSON().fromFile("deliveries.csv").then((jsonArrayObj)=>
{
    (async () => {
        await writeToJSONFile("deliveries.json", jsonArrayObj);
    })();
    // console.log(jsonArrayObj);
});
const deliveriesArrObj = require("./deliveries.json");

// console.log(deliveriesArrObj);


// // first function : 1. Number of matches played per year for all the years in IPL.
function findTotalNumberOfMatchesPerYear() {
    let totalNumOfMatch = matchesJsonFile.reduce((accumulator, currentValue) => {
        accumulator[currentValue.season] = (accumulator[currentValue.season] || 0) +1;
        return accumulator;
        
    },{});
    totalNumOfMatches = {'year': Object.keys(totalNumOfMatch), 'matches': Object.values(totalNumOfMatch)}; 
    return totalNumOfMatches;
}



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
            accumulator[currentValue.season][currentValue.winner] = 1;
        }

        return accumulator;
    }, {});

    // console.log(matchesWon);

}

matchesWonPerTeamPerYear();


// // third function : 3. Extra runs conceded per team in 2016

function totalRunsConcededPerTeam() {
    let collectionOfIds2016 = matchesJsonFile.filter(match => {
        return match.season == '2016';
    }).map(match => match.id);
    // console.log(collectionOfIds2016);


    let collectionOfMatchDelivery = deliveriesArrObj.filter(match => {
        if(collectionOfIds2016.includes(match.match_id)){
            return match;
        }
    });

    // console.log(collectionOfMatchDelivery);

    let extraRunsScoredPerTeam = collectionOfMatchDelivery.reduce((accumulator, currentValue) => {
        accumulator[currentValue.bowling_team] = (accumulator[currentValue.bowling_team] || 0) + Number(currentValue.extra_runs);
        return accumulator;
    }, {})

    let extraRunsFinalObj = {"teams": Object.keys(extraRunsScoredPerTeam), "runs": Object.values(extraRunsScoredPerTeam)};
    // console.log(extraRunsFinalObj);
    return extraRunsFinalObj; 
}






// console.log(findTotalNumberOfMatchesPerYear());
let findTotalMatchesFunction = findTotalNumberOfMatchesPerYear();
let totalRunsFunction = totalRunsConcededPerTeam();

// // Object of year and matches
let fullObject = {findTotalMatchesFunction, totalRunsFunction};

// writing output to json file in public folder
(async () => {
    await writeToJSONFile("./public/data.json", fullObject);
})();
