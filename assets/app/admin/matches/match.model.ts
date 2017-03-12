export class Match {
	division: string;
	venue: string;
	homeTeam: string;
	awayTeam: string;
	matchId?: string;

	constructor(division: string, venue: string, homeTeam: string, awayTeam: string, matchId?: string) {
		this.division = division;
		this.venue = venue;
		this.homeTeam = homeTeam;
		this.awayTeam = awayTeam;
		this.matchId = matchId;
	}

}