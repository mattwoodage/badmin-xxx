import { Component, OnInit } from "@angular/core";
import { Season } from "./season.model";
import { SeasonService } from "./season.service";

@Component({
	selector: 'app-season-list',
	template: `
		<div class="">
			<app-season
			 	[season]="season"
			 	*ngFor="let season of seasons">
			</app-season>
		</div>
	`
})

export class SeasonListComponent implements OnInit {

	seasons: Season[];

    constructor(private seasonService: SeasonService) {};

    ngOnInit() {
    	this.seasonService.getSeasons()
    		.subscribe(
    			(seasons: Season[]) => {
    				this.seasons = seasons;
    			}
    		);
    }
}