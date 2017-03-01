export class Club {
	name: string;
	description: string;
	adults: boolean;
	juniors: boolean;
	members: number;
	website: string;
	clubId?: string;

	constructor(name: string, description: string, adults: boolean, juniors: boolean, members: number, website: string, clubId?: string) {
		this.name = name;
		this.description = description;
		this.adults = adults;
		this.juniors = juniors;
		this.members = members;
		this.clubId = clubId;
	}
}