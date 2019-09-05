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

hellomddfmfkdlf