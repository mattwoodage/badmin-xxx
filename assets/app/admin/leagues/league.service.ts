import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs';
import { Observable } from "rxjs";

import { League } from "./league.model";
import { ErrorService } from "../../errors/error.service";

@Injectable()  // this does nothing except adds metadata so the injector can work on this class

export class LeagueService {
	private leagues: League[] = [];
	leagueIsEdit = new EventEmitter<League>();

	constructor(private http: Http, private errorService: ErrorService) {}

	addLeague(league: League) {

		const body = JSON.stringify(league);
		const headers = new Headers({'Content-Type': 'application/json'});

		return this.http.post('/league' + this.tokenParam(), body, {headers: headers})
			.map((response: Response) => {
				const result = response.json();
				const league = new League(
					result.obj.name,
					result.obj.domain,
					result.obj.url,
					result.obj.status,
					result.obj._id
					);
				this.leagues.push(league);
				return league;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	getLeagues() {
		return this.http.get('/league')
			.map((response: Response) => {
				const leagues = response.json().obj;
				let transformedLeagues: League[] = [];
				for (let league of leagues) {
					transformedLeagues.push(new League(
						league.name,
						league.domain,
						league.url,
						league.status,
						league._id)
					);
				}
				this.leagues = transformedLeagues;
				return transformedLeagues;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	editLeague(league: League) {
		this.leagueIsEdit.emit(league);
	}

	updateLeague(league: League) {
		const body = JSON.stringify(league);
		const headers = new Headers({'Content-Type': 'application/json'});

		return this.http.patch('/league/' + league.leagueId + this.tokenParam(), body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	deleteLeague(league: League) {
		this.leagues.splice(this.leagues.indexOf(league), 1);

		return this.http.delete('/league/' + league.leagueId + this.tokenParam())
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	getLeagueByDomain(domain: String) {
		return this.http.get('/league/' + domain)
			.map((response: Response) => {
				const result = response.json();
				const league = new League(
					result.obj.name,
					result.obj.domain,
					result.obj.url,
					result.obj.status,
					result.obj._id
					);
				return league;
			})
			// .catch((error: Response) => {
			// 	this.errorService.handleError(error.json())
			// 	return Observable.throw(error.json())
			// });
	}

	tokenParam() {
		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';
		return token;
	}
}

