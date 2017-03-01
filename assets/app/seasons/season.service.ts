import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs';
import { Observable } from "rxjs";

import { Season } from "./season.model";
import { ErrorService } from "../errors/error.service";

@Injectable()  // this does nothing except adds metadata so the injector can work on this class

export class SeasonService {
	private seasons: Season[] = [];
	seasonIsEdit = new EventEmitter<Season>();

	constructor(private http: Http, private errorService: ErrorService) {}

	addSeason(season: Season) {

		const body = JSON.stringify(season);
		const headers = new Headers({'Content-Type': 'application/json'});
		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.post('/season' + token, body, {headers: headers})
			.map((response: Response) => {
				const result = response.json();
				const season = new Season(
					result.obj.name,
					result.obj.status,
					result.obj.league,
					result.obj._id
					);
				this.seasons.push(season);
				return season;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	getSeasons() {
		return this.http.get('/season')
			.map((response: Response) => {
				const seasons = response.json().obj;
				let transformedSeasons: Season[] = [];
				for (let season of seasons) {
					transformedSeasons.push(new Season(
						season.name,
						season.status,
						season.league,
						season._id)
					);
				}
				this.seasons = transformedSeasons;
				return transformedSeasons;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	editSeason(season: Season) {
		this.seasonIsEdit.emit(season);
	}

	updateSeason(season: Season) {
		const body = JSON.stringify(season);
		const headers = new Headers({'Content-Type': 'application/json'});

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.patch('/season/' + season.seasonId + token, body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	deleteSeason(season: Season) {
		this.seasons.splice(this.seasons.indexOf(season), 1);

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.delete('/season/' + season.seasonId + token)
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}
}

