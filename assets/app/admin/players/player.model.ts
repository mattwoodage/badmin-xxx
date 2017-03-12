export class Player {
	firstName: string;
	lastName: string;
	swap: boolean;
	gender: string;
	playerId?: string;

	constructor(firstName: string, lastName: string, swap: boolean, gender: string, playerId?: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.swap = swap;
		this.gender = gender;
		this.playerId = playerId;
	}

	fullName() {
		if (this.swap) return this.lastName.toUpperCase() + ' ' + this.firstName;
		return this.firstName + ' ' + this.lastName.toUpperCase();
	}
}