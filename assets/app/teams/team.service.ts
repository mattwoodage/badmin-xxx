import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs';
import { Observable } from "rxjs";

import { Team } from "./team.model";
import { ErrorService } from "../errors/error.service";

@Injectable()  // this does nothing except adds metadata so the injector can work on this class

export class TeamService {
	private teams: Team[] = [];
	teamIsEdit = new EventEmitter<Team>();

	constructor(private http: Http, private errorService: ErrorService) {}

	addTeam(team: Team) {

		const body = JSON.stringify(team);
		const headers = new Headers({'Content-Type': 'application/json'});
		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.post('/team' + token, body, {headers: headers})
			.map((response: Response) => {
				const result = response.json();
				const team = new Team(
					result.obj.suffix,
					result.obj.division,
					result.obj.club,
					result.obj._id
					);
				this.teams.push(team);
				return team;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	getTeams() {
		return this.http.get('/team')
			.map((response: Response) => {
				const teams = response.json().obj;
				let transformedTeams: Team[] = [];
				for (let team of teams) {
					transformedTeams.push(new Team(
						team.suffix,
						team.division,
						team.club,
						team._id)
					);
				}
				this.teams = transformedTeams;
				return transformedTeams;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	editTeam(team: Team) {
		this.teamIsEdit.emit(team);
	}

	updateTeam(team: Team) {
		const body = JSON.stringify(team);
		const headers = new Headers({'Content-Type': 'application/json'});

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.patch('/team/' + team.teamId + token, body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	deleteTeam(team: Team) {
		this.teams.splice(this.teams.indexOf(team), 1);

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.delete('/team/' + team.teamId + token)
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}
}

