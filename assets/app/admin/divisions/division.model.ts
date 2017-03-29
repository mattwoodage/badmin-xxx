export class Division {
	name: string;
	format: string;
	season: string;
	order: number;
	divisionId?: string;

	constructor(name: string, format: string, season: string, order: number, divisionId?: string) {
		this.name = name;
		this.format = format;
		this.season = season;
		this.order = order;
		this.divisionId = divisionId;
	}
}