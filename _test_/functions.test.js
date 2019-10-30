const functions = require('../ipl/functions.js');
const matchesOut = require('../jsObject/matchesOut.json');
const deliveryOut = require('../jsObject/deliveryOut.json');
const findTotalNumberOfMatchesPerYear = functions.findTotalNumberOfMatchesPerYear;
const matchesWonPerTeamPerYear = functions.matchesWonPerTeamPerYear;
const totalRunsConcededPerTeam = functions.totalRunsConcededPerTeam;
const topEconomicalBowlers = functions.topEconomicalBowlers;

//function 1 testing
describe('Number of matches played per year for all the years in IPL', () => {
	it('Number of matches played per year', () => {
		let expectedOutput = {
			year: [ '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017' ],
			matches: [ 58, 57, 60, 73, 74, 76, 60, 59, 60, 59 ]
		};

		expect(findTotalNumberOfMatchesPerYear(matchesOut)).toEqual(expectedOutput);
	});

	it('Number of matches played per year not to be below output', () => {
		let expectedOutput = {
			year: [ '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017' ],
			matches: [ 58, 57, 60, 73, 74, 76, 60, 59, 60, 59 ]
		};

		expect(findTotalNumberOfMatchesPerYear(matchesOut)).not.toBe(expectedOutput);
	});
});

//function 2 testing

describe('Number of matches won of per team per year in IPL', () => {
	it('Number of matches won per team per year to be', () => {
		let expectedOutput = {
			years: [ '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017' ],
			teamdata: [
				{
					name: 'Sunrisers Hyderabad',
					data: [ 0, 0, 0, 0, 0, 10, 6, 7, 11, 8 ]
				},
				{
					name: 'Kings XI Punjab',
					data: [ 10, 7, 4, 7, 8, 8, 12, 3, 4, 7 ]
				},
				{
					name: 'Mumbai Indians',
					data: [ 7, 5, 11, 10, 10, 13, 7, 10, 7, 12 ]
				},
				{
					name: 'Kolkata Knight Riders',
					data: [ 6, 3, 7, 8, 12, 6, 11, 7, 8, 9 ]
				},
				{
					name: 'Delhi Daredevils',
					data: [ 7, 10, 7, 4, 11, 3, 2, 5, 7, 6 ]
				},
				{
					name: 'Rising Pune Supergiant',
					data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 10 ]
				},
				{
					name: 'Royal Challengers Bangalore',
					data: [ 4, 9, 8, 10, 8, 9, 5, 8, 9, 3 ]
				},
				{
					name: 'Gujarat Lions',
					data: [ 0, 0, 0, 0, 0, 0, 0, 0, 9, 4 ]
				},
				{
					name: 'Chennai Super Kings',
					data: [ 9, 8, 9, 11, 10, 12, 10, 10, 0, 0 ]
				},
				{
					name: 'Rajasthan Royals',
					data: [ 13, 6, 6, 6, 7, 11, 7, 7, 0, 0 ]
				},
				{
					name: 'Deccan Chargers',
					data: [ 2, 9, 8, 6, 4, 0, 0, 0, 0, 0 ]
				},
				{
					name: 'Pune Warriors',
					data: [ 0, 0, 0, 4, 4, 4, 0, 0, 0, 0 ]
				},
				{
					name: 'Kochi Tuskers Kerala',
					data: [ 0, 0, 0, 6, 0, 0, 0, 0, 0, 0 ]
				},
				{
					name: 'Rising Pune Supergiants',
					data: [ 0, 0, 0, 0, 0, 0, 0, 0, 5, 0 ]
				}
			]
		};

		expect(matchesWonPerTeamPerYear(matchesOut)).toEqual(expectedOutput);
	});

	it('Number of matches won per team per year not to be', () => {
		let expectedOutput = {
			years: [ '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017' ]
		};

		expect(matchesWonPerTeamPerYear(matchesOut)).not.toEqual(expectedOutput);
	});
});

//function 3 testing

describe('Extra runs conceded per team in 2016', () => {
	it('extra runs scored in 2016 to be', () => {
		let totalRunsFunction = {
			teams: [
				'Rising Pune Supergiants',
				'Mumbai Indians',
				'Kolkata Knight Riders',
				'Delhi Daredevils',
				'Gujarat Lions',
				'Kings XI Punjab',
				'Sunrisers Hyderabad',
				'Royal Challengers Bangalore'
			],
			runs: [ 108, 102, 122, 106, 98, 100, 107, 156 ]
		};

		expect(totalRunsConcededPerTeam(matchesOut, deliveryOut)).toEqual(totalRunsFunction);
	});

	it('extra runs scored in 2016 should not be', () => {
		let totalRunsFunction = {
			teams: [
				'Mumbai Indians',
				'Kolkata Knight Riders',
				'Gujarat Lions',
				'Delhi Daredevils',
				'Kings XI Punjab',
				'Rising Pune Supergiants',
				'Royal Challengers Bangalore',
				'Sunrisers Hyderabad'
			],
			runs: [ 108, 102, 122, 106, 98, 100, 107, 156 ]
		};

		expect(totalRunsConcededPerTeam(matchesOut, deliveryOut)).not.toEqual(totalRunsFunction);
	});
});

//function 4 testing

describe('Top 10 economical bowlers in 2015', () => {
	it('Economical bowler result should give output', () => {
		let topEconomicalBowlersFunction = {
			bowler: [
				'RN ten Doeschate',
				'J Yadav',
				'V Kohli',
				'R Ashwin',
				'S Nadeem',
				'Parvez Rasool',
				'MC Henriques',
				'Z Khan',
				'MA Starc',
				'GB Hogg'
			],
			economy: [
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
		};
		expect(topEconomicalBowlers(matchesOut, deliveryOut)).toEqual(topEconomicalBowlersFunction);
	});

	it('Economical bowler result should not give output', () => {
		let topEconomicalBowlersFunction = {
			bowler: [
				'RN ten Doeschate',
				'J Yadav',
				'V Kohli',
				'R Ashwin',
				'S Nadeem',
				'Parvez Rasool',
				'MC Henriques',
				'Z Khan',
				'MA Starc',
				'GB Hogg'
			],
			economy: [ 1, 5.142857142857143, 0, 0, 5.142857142857143, -1.2, 2, 5, 5.767441860465116, 1 ]
		};
		expect(topEconomicalBowlers(matchesOut, deliveryOut)).not.toEqual(topEconomicalBowlersFunction);
	});
});
