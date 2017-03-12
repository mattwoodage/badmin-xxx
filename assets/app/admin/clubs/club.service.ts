import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs';
import { Observable } from "rxjs";

import { Club } from "./club.model";
import { ErrorService } from "../../errors/error.service";

@Injectable()  // this does nothing except adds metadata so the injector can work on this class

export class ClubService {
	private clubs: Club[] = [];
	clubIsEdit = new EventEmitter<Club>();

	constructor(private http: Http, private errorService: ErrorService) {}

	addClub(club: Club) {

		const body = JSON.stringify(club);
		const headers = new Headers({'Content-Type': 'application/json'});
		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.post('/club' + token, body, {headers: headers})
			.map((response: Response) => {
				const result = response.json();
				const club = new Club(
					result.obj.name,
					result.obj.description,
					result.obj.adults,
					result.obj.juniors,
					result.obj.members,
					result.obj.website,
					result.obj._id
					);
				this.clubs.push(club);
				return club;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	getClubs() {
		return this.http.get('/club')
			.map((response: Response) => {
				const clubs = response.json().obj;
				let transformedClubs: Club[] = [];
				for (let club of clubs) {
					transformedClubs.push(new Club(
						club.name,
						club.description,
						club.adults,
						club.juniors,
						club.members,
						club.website,
						club._id)
					);
				}
				this.clubs = transformedClubs;
				return transformedClubs;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	editClub(club: Club) {
		this.clubIsEdit.emit(club);
	}

	updateClub(club: Club) {
		const body = JSON.stringify(club);
		const headers = new Headers({'Content-Type': 'application/json'});

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.patch('/club/' + club.clubId + token, body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	deleteClub(club: Club) {
		this.clubs.splice(this.clubs.indexOf(club), 1);

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.delete('/club/' + club.clubId + token)
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}
}

