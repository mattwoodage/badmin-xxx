import { Component, OnInit } from "@angular/core";
import { Division } from "./division.model";
import { DivisionService } from "./division.service";
import { LeagueService } from "../leagues/league.service";
import { SeasonService } from "../seasons/season.service";
import { FormatService } from "../formats/format.service";
import { Season } from "../seasons/season.model";
import { Format } from "../formats/format.model";
import { League } from "../leagues/league.model";

@Component({
	selector: 'app-division-list',
	template: `
		<div class="">
			<div *ngFor="let league of leagues">
				<h3>{{ league.name }}</h3>
				<div *ngFor="let season of getSeasonsForLeague(league)">
					<h4>{{ season.name }}</h4>
                    <h5>{{ season.status }}</h5>
					<app-division
					 	[division]="division"
					 	*ngFor="let division of getDivisionsForSeason(season)">
					</app-division>
				</div>
			</div>
		</div>
	`
})

export class DivisionListComponent implements OnInit {

	divisions: Division[];
	leagues: League[];
	seasons: Season[];
	formats: Format[];

    constructor(private divisionService: DivisionService, private seasonService: SeasonService, private leagueService: LeagueService, private formatService: FormatService) {};

    ngOnInit() {
    	this.divisionService.getDivisions()
    		.subscribe(
    			(divisions: Division[]) => {
    				this.divisions = divisions;
    			}
    		);

    	this.leagueService.getLeagues()
    		.subscribe(
    			(leagues: League[]) => {
    				this.leagues = leagues;
    			}
    		);

		this.seasonService.getSeasons()
    		.subscribe(
    			(seasons: Season[]) => {
    				this.seasons = seasons;
    			}
    		);

    	this.formatService.getFormats()
    		.subscribe(
    			(formats: Format[]) => {
    				this.formats = formats;
    			}
    		);
    }

    getSeasonsForLeague(league: League) {
    	if (this.seasons) return this.seasons.filter(season => season.league.valueOf() === league.leagueId);
    	return null
    }

    getDivisionsForSeason(season: Season) {
        if (this.divisions) return this.divisions.filter(division => division.season.valueOf() === season.seasonId);
        return null
    }

}