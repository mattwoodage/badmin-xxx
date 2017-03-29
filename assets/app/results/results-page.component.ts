import { Component, OnInit } from "@angular/core";
import { Division } from "../admin/divisions/division.model";
import { DivisionService } from "../admin/divisions/division.service";
import { GlobalService } from "../global.service"


@Component({
	selector: 'app-results-page',
	template: `
		<h1>Results</h1>
        <app-results-division
			[division]="division"
		   	*ngFor="let division of divisions">
		</app-results-division>
	`
})

export class ResultsPageComponent implements OnInit {

	constructor(private globalService: GlobalService, private divisionService: DivisionService) {};

	divisions: Division[];


    ngOnInit() {
    	this.getDivisions();
    }

    getDivisions() {
    	this.divisionService.getDivisions(this.globalService.currentSeason)
    		.subscribe(
    			(divisions: Division[]) => {
    				this.divisions = divisions;
    			}
    		);
    }

}