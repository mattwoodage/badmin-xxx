import { Component, OnInit } from "@angular/core";
import { League } from "./league.model";
import { LeagueService } from "./league.service";

@Component({
	selector: 'app-league-list',
	template: `
		<div class="">
			<app-league
			 	[league]="league"
			 	*ngFor="let league of leagues">
			</app-league>
		</div>
	`
})

export class LeagueListComponent implements OnInit {

	leagues: League[];

    constructor(private leagueService: LeagueService) {};

    ngOnInit() {
    	this.leagueService.getLeagues()
    		.subscribe(
    			(leagues: League[]) => {
    				this.leagues = leagues;
    			}
    		);
    }
}