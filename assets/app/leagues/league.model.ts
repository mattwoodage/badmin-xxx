export class League {
	name: string;
	url: string;
	status: string;
	leagueId?: string;

	constructor(name: string, url: string, status: string, leagueId?: string) {
		this.name = name;
		this.url = url;
		this.status = status;
		this.leagueId = leagueId;
	}

}