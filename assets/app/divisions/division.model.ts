export class Division {
	name: string;
	format: string;
	season: string;
	divisionId?: string;

	constructor(name: string, format: string, season: string, divisionId?: string) {
		this.name = name;
		this.format = format;
		this.season = season;
		this.divisionId = divisionId;
	}
}