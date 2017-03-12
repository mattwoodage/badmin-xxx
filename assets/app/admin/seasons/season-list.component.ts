import { Component, OnInit } from "@angular/core";
import { Season } from "./season.model";
import { SeasonService } from "./season.service";
import { League } from "../leagues/league.model";
import { LeagueService } from "../leagues/league.service";

@Component({
	selector: 'app-season-list',
	template: `
		<div class="">
			<div *ngFor="let league of leagues">
				<h1>{{ league.name }}</h1>
				<app-season
			 		[season]="season"
			 		[hidden]="league.leagueId != season.league"
			 		*ngFor="let season of seasons">
				</app-season>
			</div>
		</div>
	`
})

export class SeasonListComponent implements OnInit {

	seasons: Season[];
	leagues: League[];

    constructor(private seasonService: SeasonService,  private leagueService: LeagueService) {};

    ngOnInit() {
    	this.seasonService.getSeasons()
    		.subscribe(
    			(seasons: Season[]) => {
    				this.seasons = seasons;
    			}
    		);

    	this.leagueService.getLeagues()
    		.subscribe(
    			(leagues: League[]) => {
    				this.leagues = leagues;
    			}
    		);
    }

}