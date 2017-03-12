import { Component, OnInit } from "@angular/core";
import { Club } from "./club.model";
import { ClubService } from "./club.service";

@Component({
	selector: 'app-club-list',
	template: `
		<div class="">
			<app-club
			 	[club]="club"
			 	*ngFor="let club of clubs">
			</app-club>
		</div>
	`
})

export class ClubListComponent implements OnInit {

	clubs: Club[];

    constructor(private clubService: ClubService) {};

    ngOnInit() {
    	this.clubService.getClubs()
    		.subscribe(
    			(clubs: Club[]) => {
    				this.clubs = clubs;
    			}
    		);
    }
}