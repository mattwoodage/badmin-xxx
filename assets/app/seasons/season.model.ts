export class Season {
	name: string;
	status: string;
	league: string;
	seasonId?: string;

	constructor(name: string, status: string, league: string, seasonId?: string) {
		this.name = name;
		this.status = status;
		this.league = league;
		this.seasonId = seasonId;
	}


	desc() {
		return this.name + " " + this.status
	}

	leagueName() {
		return this.league
	}


}