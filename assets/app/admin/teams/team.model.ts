import { ClubService } from "../clubs/club.service";

export class Team {
	suffix: string;
	division: string;
	club: string;
	teamId?: string;

	constructor(suffix: string, division: string, club: string, teamId?: string) {
		this.suffix = suffix;
		this.division = division;
		this.club = club;
		this.teamId = teamId;
	}

	name() {
		return '[CLUB NAME] ' + this.suffix;
	}

}