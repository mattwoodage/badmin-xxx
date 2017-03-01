import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs';
import { Observable } from "rxjs";

import { Format } from "./format.model";
import { ErrorService } from "../errors/error.service";

@Injectable()  // this does nothing except adds metadata so the injector can work on this class

export class FormatService {
	private formats: Format[] = [];
	formatIsEdit = new EventEmitter<Format>();

	constructor(private http: Http, private errorService: ErrorService) {}

	addFormat(format: Format) {

		const body = JSON.stringify(format);
		const headers = new Headers({'Content-Type': 'application/json'});
		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.post('/format' + token, body, {headers: headers})
			.map((response: Response) => {
				const result = response.json();
				const format = new Format(
					result.obj.name,
					result.obj.type,
					result.obj.orderOfPlay,
					result.obj.numRubbers,
					result.obj.numGames,
					result.obj._id
					);
				this.formats.push(format);
				return format;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	getFormats() {
		return this.http.get('/format')
			.map((response: Response) => {
				const formats = response.json().obj;
				let transformedFormats: Format[] = [];
				for (let format of formats) {
					transformedFormats.push(new Format(
						format.name,
						format.type,
						format.orderOfPlay,
						format.numRubbers,
						format.numGames,
						format._id)
					);
				}
				this.formats = transformedFormats;
				return transformedFormats;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	editFormat(format: Format) {
		this.formatIsEdit.emit(format);
	}

	updateFormat(format: Format) {
		const body = JSON.stringify(format);
		const headers = new Headers({'Content-Type': 'application/json'});

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.patch('/format/' + format.formatId + token, body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	deleteFormat(format: Format) {
		this.formats.splice(this.formats.indexOf(format), 1);

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.delete('/format/' + format.formatId + token)
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}
}

