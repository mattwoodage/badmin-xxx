export class Match {
	division: string;
	venue: string;
	homeTeam: string;
	awayTeam: string;
	numCourts: number;
	dateTime: Date;
	status: number;
	matchId?: string;

	constructor(division: string, venue: string, homeTeam: string, awayTeam: string, numCourts: number, dateTime: Date, status: number, matchId?: string) {
		this.division = division;
		this.venue = venue;
		this.homeTeam = homeTeam;
		this.awayTeam = awayTeam;
		this.numCourts = numCourts;
		this.dateTime = dateTime;
		this.status = status;
		this.matchId = matchId;
	}

}