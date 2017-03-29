import { Component, OnInit } from "@angular/core";
import { Division } from "../admin/divisions/division.model";
import { DivisionService } from "../admin/divisions/division.service";
import { GlobalService } from "../global.service"


@Component({
	selector: 'app-tables-page',
	template: `
		<h1>Tables</h1>
        <app-tables-division
			[division]="division"
		   	*ngFor="let division of divisions">
		</app-tables-division>
	`
})

export class TablesPageComponent implements OnInit {

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