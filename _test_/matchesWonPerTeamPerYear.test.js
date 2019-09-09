const matchesWonPerTeamPerYear = require('../ipl/matchesWonPerTeamPerYear');

describe('Number of matches won of per team per year in IPL', () => {
	it('Number of matches won per team per year to be', () => {
		let expectedOutput = {
			teams: [
				'Sunrisers Hyderabad',
				'Rising Pune Supergiant',
				'Kolkata Knight Riders',
				'Kings XI Punjab',
				'Royal Challengers Bangalore',
				'Mumbai Indians',
				'Delhi Daredevils',
				'Gujarat Lions',
				'Chennai Super Kings',
				'Rajasthan Royals',
				'Deccan Chargers',
				'Pune Warriors',
				'Kochi Tuskers Kerala',
				'Rising Pune Supergiants'
			],
			years: [
				{
					'2013': 10,
					'2014': 6,
					'2015': 7,
					'2016': 11,
					'2017': 8
				},
				{
					'2017': 10
				},
				{
					'2008': 6,
					'2009': 3,
					'2010': 7,
					'2011': 8,
					'2012': 12,
					'2013': 6,
					'2014': 11,
					'2015': 7,
					'2016': 8,
					'2017': 9
				},
				{
					'2008': 10,
					'2009': 7,
					'2010': 4,
					'2011': 7,
					'2012': 8,
					'2013': 8,
					'2014': 12,
					'2015': 3,
					'2016': 4,
					'2017': 7
				},
				{
					'2008': 4,
					'2009': 9,
					'2010': 8,
					'2011': 10,
					'2012': 8,
					'2013': 9,
					'2014': 5,
					'2015': 8,
					'2016': 9,
					'2017': 3
				},
				{
					'2008': 7,
					'2009': 5,
					'2010': 11,
					'2011': 10,
					'2012': 10,
					'2013': 13,
					'2014': 7,
					'2015': 10,
					'2016': 7,
					'2017': 12
				},
				{
					'2008': 7,
					'2009': 10,
					'2010': 7,
					'2011': 4,
					'2012': 11,
					'2013': 3,
					'2014': 2,
					'2015': 5,
					'2016': 7,
					'2017': 6
				},
				{
					'2016': 9,
					'2017': 4
				},
				{
					'2008': 9,
					'2009': 8,
					'2010': 9,
					'2011': 11,
					'2012': 10,
					'2013': 12,
					'2014': 10,
					'2015': 10
				},
				{
					'2008': 13,
					'2009': 6,
					'2010': 6,
					'2011': 6,
					'2012': 7,
					'2013': 11,
					'2014': 7,
					'2015': 7
				},
				{
					'2008': 2,
					'2009': 9,
					'2010': 8,
					'2011': 6,
					'2012': 4
				},
				{
					'2011': 4,
					'2012': 4,
					'2013': 4
				},
				{
					'2011': 6
				},
				{
					'2016': 5
				}
			]
		};

		expect(matchesWonPerTeamPerYear()).toEqual(expectedOutput);
	});

	it('Number of matches won per team per year not to be', () => {
		let expectedOutput = {
			teams: [
				'Sunrisers Hyderabad',
				'Rising Pune Supergiant',
				'Kolkata Knight Riders',
				'Kings XI Punjab',
				'Royal Challengers Bangalore',
				'Mumbai Indians',
				'Delhi Daredevils',
				'Gujarat Lions',
				'Chennai Super Kings',
				'Rajasthan Royals',
				'Deccan Chargers',
				'Pune Warriors',
				'Kochi Tuskers Kerala',
				'Rising Pune Supergiants'
			],
			years: [
				{
					'2013': 0,
					'2014': 2,
					'2015': 5,
					'2016': 1,
					'2017': 28
				},
				{
					'2017': 10
				},
				{
					'2008': 6,
					'2009': 3,
					'2010': 7,
					'2011': 8,
					'2012': 12,
					'2013': 6,
					'2014': 11,
					'2015': 7,
					'2016': 8,
					'2017': 9
				}
			]
		};

		expect(matchesWonPerTeamPerYear()).not.toEqual(expectedOutput);
	});
});
