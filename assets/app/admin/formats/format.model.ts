export class Format {
	name: string;
	type: string;
	orderOfPlay: string;
	numRubbers: string;
	numGames: string;
	formatId?: string;

	constructor(name: string, type: string, orderOfPlay: string, numRubbers: string, numGames: string, formatId?: string) {
		this.name = name;
		this.type = type;
		this.orderOfPlay = orderOfPlay;
		this.numRubbers = numRubbers;
		this.numGames = numGames;
		this.formatId = formatId;
	}
}