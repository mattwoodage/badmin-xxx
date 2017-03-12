import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs';
import { Observable } from "rxjs";

import { Venue } from "./venue.model";
import { ErrorService } from "../../errors/error.service";

@Injectable()  // this does nothing except adds metadata so the injector can work on this class

export class VenueService {
	private venues: Venue[] = [];
	venueIsEdit = new EventEmitter<Venue>();

	constructor(private http: Http, private errorService: ErrorService) {}

	addVenue(venue: Venue) {

		const body = JSON.stringify(venue);
		const headers = new Headers({'Content-Type': 'application/json'});
		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.post('/venue' + token, body, {headers: headers})
			.map((response: Response) => {
				const result = response.json();
				const venue = new Venue(
					result.obj.name,
					result.obj.type,
					result.obj.address_1,
					result.obj.address_2,
					result.obj.address_3,
					result.obj.town,
					result.obj.county,
					result.obj.postcode,
					result.obj.coordinates,
					result.obj._id
					);
				this.venues.push(venue);
				return venue;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	getVenues() {
		return this.http.get('/venue')
			.map((response: Response) => {
				const venues = response.json().obj;
				let transformedVenues: Venue[] = [];
				for (let venue of venues) {
					transformedVenues.push(new Venue(
						venue.name,
						venue.type,
						venue.address_1,
						venue.address_2,
						venue.address_3,
						venue.town,
						venue.county,
						venue.postcode,
						venue.coordinates,
						venue._id)
					);
				}
				this.venues = transformedVenues;
				return transformedVenues;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	editVenue(venue: Venue) {
		this.venueIsEdit.emit(venue);
	}

	updateVenue(venue: Venue) {
		const body = JSON.stringify(venue);
		const headers = new Headers({'Content-Type': 'application/json'});

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.patch('/venue/' + venue.venueId + token, body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	deleteVenue(venue: Venue) {
		this.venues.splice(this.venues.indexOf(venue), 1);

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.delete('/venue/' + venue.venueId + token)
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}
}

