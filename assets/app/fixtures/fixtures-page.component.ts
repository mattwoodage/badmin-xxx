import { Component, OnInit } from "@angular/core";
import { MatchService } from "../admin/matches/match.service";
import { Match } from "../admin/matches/match.model";

@Component({
	selector: 'app-fixtures-page',
	template: `
		<app-fixtures-match
            [match]="match"
               *ngFor="let match of matches">
        </app-fixtures-match>
	`
})

export class FixturesPageComponent implements OnInit {


    matches: Match[];

	constructor(private matchService: MatchService) {};

    ngOnInit() {
    	this.matchService.getMatches()
    		.subscribe(
    			(matches: Match[]) => {
    				this.matches = matches;
    			}
    		);
    }

}