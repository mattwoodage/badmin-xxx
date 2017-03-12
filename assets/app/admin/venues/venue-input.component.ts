import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { VenueService } from "./venue.service";
import { Venue } from "./venue.model";

@Component({
	selector: 'app-venue-input',
	templateUrl: './venue-input.component.html'
})

export class VenueInputComponent implements OnInit {

	venue: Venue;

	constructor(private venueService: VenueService) {}
	onSubmit(form: NgForm) {
		if (this.venue) {
			// Edit
			this.venue.name = form.value.name;
			this.venue.type = form.value.type;
			this.venue.address_1 = form.value.address_1;
			this.venue.address_2 = form.value.address_2;
			this.venue.address_3 = form.value.address_3;
			this.venue.town = form.value.town;
			this.venue.county = form.value.county;
			this.venue.postcode = form.value.postcode;
			this.venue.coordinates = form.value.coordinates;

			this.venueService.updateVenue(this.venue)
				.subscribe(
					result => console.log(result)
				)
			this.venue = null;
		} else {
			// Create
			const venue = new Venue(form.value.name,
									form.value.type,
									form.value.address_1,
									form.value.address_2,
									form.value.address_3,
									form.value.town,
									form.value.county,
									form.value.postcode,
									form.value.coordinates);
			this.venueService.addVenue(venue)
				.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
		}
		form.resetForm();
	}

	onClear(form: NgForm) {
		this.venue = null;
		form.resetForm();
	}

	ngOnInit() {
		this.venueService.venueIsEdit.subscribe(
			(venue: Venue) => this.venue = venue
		);
	}
}