import { Component, OnInit } from "@angular/core";
import { MatchService } from "../admin/matches/match.service";
import { Match } from "../admin/matches/match.model";

@Component({
	selector: 'app-fixtures-page',
	template: `
    <h1>Fixtures</h1>
    <table class='table table-bordered'>
        <thead>
            <tr>
                <th>Date</th>
                <th>Home Team</th>
                <th></th>
                <th>Away Team</th>
                <th>Venue</th>
                <td>Courts</td>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr [match]="match" app-fixtures-match *ngFor="let match of matches">
            </tr>
        </tbody>
    </table>
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