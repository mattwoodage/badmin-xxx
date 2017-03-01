import { Component, OnInit } from "@angular/core";
import { Venue } from "./venue.model";
import { VenueService } from "./venue.service";

@Component({
	selector: 'app-venue-list',
	template: `
		<div class="">
			<app-venue
			 	[venue]="venue"
			 	*ngFor="let venue of venues">
			</app-venue>
		</div>
	`
})

export class VenueListComponent implements OnInit {

	venues: Venue[];

    constructor(private venueService: VenueService) {};

    ngOnInit() {
    	this.venueService.getVenues()
    		.subscribe(
    			(venues: Venue[]) => {
    				this.venues = venues;
    			}
    		);
    }
}