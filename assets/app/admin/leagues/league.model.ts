export class League {
	name: string;
	domain: string;
	url: string;
	status: string;
	leagueId?: string;

	constructor(name: string, domain: string, url: string, status: string, leagueId?: string) {
		this.name = name;
		this.domain = domain;
		this.url = url;
		this.status = status;
		this.leagueId = leagueId;
	}

}