import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs';
import { Observable } from "rxjs";

import { Match } from "./match.model";
import { ErrorService } from "../../errors/error.service";

@Injectable()  // this does nothing except adds metadata so the injector can work on this class

export class MatchService {
	private matches: Match[] = [];
	matchIsEdit = new EventEmitter<Match>();

	constructor(private http: Http, private errorService: ErrorService) {}

	addMatch(match: Match) {

		const body = JSON.stringify(match);
		const headers = new Headers({'Content-Type': 'application/json'});
		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.post('/match' + token, body, {headers: headers})
			.map((response: Response) => {
				const result = response.json();
				const match = new Match(result.obj);
				this.matches.push(match);
				return match;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	getMatches() {
		return this.http.get('/match')
			.map((response: Response) => {
				const matches = response.json().obj;
				let transformedMatches: Match[] = [];
				for (let match of matches) {
					transformedMatches.push(new Match(match));
				}
				this.matches = transformedMatches;
				return transformedMatches;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	editMatch(match: Match) {
		this.matchIsEdit.emit(match);
	}

	updateMatch(match: Match) {
		const body = JSON.stringify(match);
		const headers = new Headers({'Content-Type': 'application/json'});

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.patch('/match/' + match._id + token, body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	deleteMatch(match: Match) {
		this.matches.splice(this.matches.indexOf(match), 1);

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.delete('/match/' + match._id + token)
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}
}

