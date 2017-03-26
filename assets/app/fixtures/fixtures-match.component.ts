import { Component, Input, OnInit } from "@angular/core";
import { Match } from "../admin/matches/match.model";
import { Venue } from "../admin/venues/venue.model";


@Component({
	selector: 'app-fixtures-match',
	templateUrl: './fixtures-match.component.html',
	styles: [`
    `]
})

export class FixturesMatchComponent implements OnInit {

    @Input() match: Match;

    constructor() {};

    ngOnInit() {

        this.match = <Match>this.match;
        this.match.venue = <Venue>this.match.venue;

        console.log("MATCH:", this.match)
        console.log(typeof this.match)
        console.log(typeof this.match.venue)
    }

    // getTeams() {
    //     this.teamService.getTeams(this.division)
    //         .subscribe(
    //             (teams: Team[]) => {
    //                 this.teams = teams;
    //             }
    //         );
    // }

}