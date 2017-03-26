export class Team {
	suffix: string;
	division: any;
	club: any;
	_id?: string;

	constructor(suffix: string, division: any, club: any, _id?: string) {
		this.suffix = suffix;
		this.division = division;
		this.club = club;
		this._id = _id;
	}

	name() {
		return this.club.name + ' ' + this.suffix;
	}

}