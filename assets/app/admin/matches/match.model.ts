import * as moment from 'moment'

export class Match {
	division: any;
	venue: any;
	homeTeam: any;
	awayTeam: any;
	numCourts: number;
	dateTime: Date;
	status: number;
	_id?: string;

	// constructor(division: any, venue: any, homeTeam: any, awayTeam: any, numCourts: number, dateTime: Date, status: number, matchId?: string) {
	// 	this.division = division;
	// 	this.venue = venue;
	// 	this.homeTeam = homeTeam;
	// 	this.awayTeam = awayTeam;
	// 	this.numCourts = numCourts;
	// 	this.dateTime = dateTime;
	// 	this.status = status;
	// 	this.matchId = matchId;
	// }

	constructor(obj: any) {
		for (let prop in obj) {
            this[prop] = obj[prop];
        }
	}

	date() {
		return moment(new Date(this.dateTime)).format("dd Do MMM HH:mm")
	}

	desc() {
		return 'match'
	}

}