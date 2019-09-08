let matchesJsonFile = require('../matchesJsonFile.json');
let deliveriesArrObj = require('../deliveries.json');


// Fourth Function : 4. Top 10 economical bowlers in 2015

function topEconomicalBowlers() {
    let takeMatchId = matchesJsonFile.filter(match => match.season == "2015").map(match => match.id);
    let findIninings = deliveriesArrObj.filter(match => takeMatchId.includes(match.match_id))
    .map(match => ({
        name: match.bowler,
        ball: match.ball,
        byeRuns: match.bye_runs,
        leg: match.legbye_runs,
        totalRunsScored: match.total_runs
    }));

    let totalRuns = findIninings.reduce((accumulator, currentValue) => {
        accumulator[currentValue.name] = (accumulator[currentValue.name] || 0) + 
        Number(currentValue.totalRunsScored) - Number(currentValue.byeRuns) - Number(currentValue.leg);
        return accumulator;
    }, {});

    let collectionOfBalls = findIninings.reduce((accumulator, currentValue) => {
        if(currentValue.ball <= 6) {
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
        return { [collectionOfBallsKeys[idx]]: (run * 6) / collectionOfBallsValues[idx]};
    });
    
    let ecoBowlers = findEconomy.sort((a, b) => Object.values(a) - Object.values(b)).slice(0, 10)
    bowlersArr = [];
    economyArr = [];
    ecoBowlers.map(bowler => {
        bowlersArr.push(Object.keys(bowler)[0]);
        economyArr.push(Object.values(bowler)[0]);

    })
    economyBowlersObj = {"bowler": bowlersArr, "economy": economyArr};
    return economyBowlersObj;
}

module.exports = topEconomicalBowlers;
