const totalRunsConcededPerTeam = require('../ipl/totalRunsConcededPerTeam');

describe("Extra runs conceded per team in 2016", () => {
    it("extra runs scored in 2016 to be", () => {
        let totalRunsFunction = {
            "teams": [
                "Rising Pune Supergiants",
                "Mumbai Indians",
                "Kolkata Knight Riders",
                "Delhi Daredevils",
                "Gujarat Lions",
                "Kings XI Punjab",
                "Sunrisers Hyderabad",
                "Royal Challengers Bangalore"
            ],
            "runs": [
                108,
                102,
                122,
                106,
                98,
                100,
                107,
                156
            ]
        };

    expect(totalRunsConcededPerTeam()).toEqual(totalRunsFunction);
});

    it("extra runs scored in 2016 should not be", () => {
         let totalRunsFunction = {
            "teams": [
                "Mumbai Indians",
                "Kolkata Knight Riders",
                "Gujarat Lions",
                "Delhi Daredevils",
                "Kings XI Punjab",
                "Rising Pune Supergiants",
                "Royal Challengers Bangalore",
                "Sunrisers Hyderabad"
            ],
            "runs": [
                108,
                102,
                122,
                106,
                98,
                100,
                107,
                156
            ]
        };

        expect(totalRunsConcededPerTeam()).not.toEqual(totalRunsFunction);
    });
    


});

   