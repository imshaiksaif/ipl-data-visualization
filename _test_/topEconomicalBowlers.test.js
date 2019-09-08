const topEconomicalBowlers = require('../ipl/topEconomicalBowlers');

describe("Top 10 economical bowlers in 2015", () => {
    it("Economical bowler result should give output", () => {
        let topEconomicalBowlersFunction = {
            "bowler": [
                "RN ten Doeschate",
                "J Yadav",
                "V Kohli",
                "R Ashwin",
                "S Nadeem",
                "Parvez Rasool",
                "MC Henriques",
                "Z Khan",
                "MA Starc",
                "GB Hogg"
            ],
            "economy": [
                4,
                4.142857142857143,
                5.454545454545454,
                5.846153846153846,
                6.142857142857143,
                6.2,
                6.32,
                6.455172413793103,
                6.767441860465116,
                6.857142857142857
            ]
        }
        expect(topEconomicalBowlers()).toEqual(topEconomicalBowlersFunction);
    });

    it("Economical bowler result should not give output", () => {
        let topEconomicalBowlersFunction = {
            "bowler": [
                "RN ten Doeschate",
                "J Yadav",
                "V Kohli",
                "R Ashwin",
                "S Nadeem",
                "Parvez Rasool",
                "MC Henriques",
                "Z Khan",
                "MA Starc",
                "GB Hogg"
            ],
            "economy": [
                1,
                5.142857142857143,
                0,
                0,
                5.142857142857143,
                -1.2,
                2,
                5,
                5.767441860465116,
                1
            ]
        }
        expect(topEconomicalBowlers()).not.toEqual(topEconomicalBowlersFunction);

    });
});
   