const findTotalNumberOfMatchesPerYear = require('../ipl/findTotalNumberOfMatchesPerYear');

describe("Number of matches played per year for all the years in IPL", () => {
    it("Number of matches played per year", () => {
        let year = [
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017"];

        let matches = [
            58,
			57,
			60,
			73,
			74,
			76,
			60,
			59,
			60,
			59
        ];

        let expectedOutput =  {
            "year": [
			"2008",
			"2009",
			"2010",
			"2011",
			"2012",
			"2013",
			"2014",
			"2015",
			"2016",
			"2017"
		],
		"matches": [
			58,
			57,
			60,
			73,
			74,
			76,
			60,
			59,
			60,
			59
        ]
    };

    expect(findTotalNumberOfMatchesPerYear(year, matches)).toEqual(expectedOutput);
    });

    it("Number of matches played per year not to be below output", () => {
        let year = [
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017"];

        let matches = [
            20,
			54,
			0,
			3,
			4,
			56,
			70,
			69,
			20,
			89
        ];

        let expectedOutput =  {
            "year": [
			"2008",
			"2009",
			"2010",
			"2011",
			"2012",
			"2013",
			"2014",
			"2015",
			"2016",
			"2017"
		],
		"matches": [
			58,
			57,
			60,
			73,
			74,
			76,
			60,
			59,
			60,
			59
        ]
    };

    expect(findTotalNumberOfMatchesPerYear(year, matches)).not.toBe(expectedOutput);
    });

});