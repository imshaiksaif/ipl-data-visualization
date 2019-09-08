let matchesJsonFile = require('../matchesJsonFile.json');
let deliveriesArrObj = require('../deliveries.json');


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

module.exports = totalRunsConcededPerTeam;
