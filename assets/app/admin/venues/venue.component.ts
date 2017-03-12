import { Component, Input } from "@angular/core";
import { Venue } from "./venue.model";
import { VenueService } from "./venue.service";

@Component({
	selector: 'app-venue',
	templateUrl: './venue.component.html',
	styles: [`
    	.author {
    		display: inline-block;
    		font-style: italic;
    		font-size: 12px;
    		width: 80%;
    	}
    	.config {
    		display: inline-block;
    		text-align:right;
    		font-size:12px;
    		width:19%;
    	}
    `]
})

export class VenueComponent {
    @Input() venue: Venue;


    constructor(private venueService: VenueService) {};

    onEdit() {
       this.venueService.editVenue(this.venue);
    }

    onDelete() {
        this.venueService.deleteVenue(this.venue)
        	.subscribe(
        		result => console.log(result)
        	);
    }

}