import { Component, OnInit } from "@angular/core";
import { Match } from "./match.model";
import { MatchService } from "./match.service";

@Component({
	selector: 'app-match-list',
	template: `
		<div class="">
			<app-match
			 	[match]="match"
			 	*ngFor="let match of matches">
			</app-match>
		</div>
	`
})

export class MatchListComponent implements OnInit {

	matches: Match[];

    constructor(private matchService: MatchService) {};

    ngOnInit() {
    	this.matchService.getMatches()
    		.subscribe(
    			(matches: Match[]) => {
    				this.matches = matches;
    				console.log(this.matches)
    			}
    		);
    }
}