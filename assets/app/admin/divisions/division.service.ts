import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs';
import { Observable } from "rxjs";

import { Division } from "./division.model";
import { Season } from "../seasons/season.model";

import { ErrorService } from "../../errors/error.service";

@Injectable()  // this does nothing except adds metadata so the injector can work on this class

export class DivisionService {
	private divisions: Division[] = [];
	divisionIsEdit = new EventEmitter<Division>();

	constructor(private http: Http, private errorService: ErrorService) {}

	addDivision(division: Division) {

		const body = JSON.stringify(division);
		const headers = new Headers({'Content-Type': 'application/json'});
		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.post('/division' + token, body, {headers: headers})
			.map((response: Response) => {
				const result = response.json();
				const division = new Division(
					result.obj.name,
					result.obj.format,
					result.obj.season,
					result.obj.order,
					result.obj._id
					);
				this.divisions.push(division);
				return division;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	getDivisions(season?: Season) {
		let path = '/division'
		if (season) {
			path += '/' + season.seasonId
		}
		return this.http.get(path)
			.map((response: Response) => {
				const divisions = response.json().obj;
				let transformedDivisions: Division[] = [];
				for (let division of divisions) {
					transformedDivisions.push(new Division(
						division.name,
						division.format,
						division.season,
						division.order,
						division._id)
					);
				}
				this.divisions = transformedDivisions;
				return transformedDivisions;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	editDivision(division: Division) {
		this.divisionIsEdit.emit(division);
	}

	updateDivision(division: Division) {
		const body = JSON.stringify(division);
		const headers = new Headers({'Content-Type': 'application/json'});

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.patch('/division/' + division.divisionId + token, body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	deleteDivision(division: Division) {
		this.divisions.splice(this.divisions.indexOf(division), 1);

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.delete('/division/' + division.divisionId + token)
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}
}

