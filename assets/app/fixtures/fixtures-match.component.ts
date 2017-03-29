import { Component, Input, OnInit } from "@angular/core";
import { Match } from "../admin/matches/match.model";
import { Venue } from "../admin/venues/venue.model";

import { GlobalService } from "../global.service";

@Component({
	selector: '[app-fixtures-match]',
	templateUrl: './fixtures-match.component.html',
	styles: [`
    `]
})

export class FixturesMatchComponent implements OnInit {

    @Input() match: Match;

    constructor(private globalService: GlobalService) {};

    ngOnInit() {
        console.log("match: ", this.match)

        this.match.homeTeam = this.globalService.getTeam(this.match.homeTeam)
        this.match.awayTeam = this.globalService.getTeam(this.match.awayTeam)
        this.match.division = this.globalService.getDivision(this.match.division)
        console.log("home team: ", this.match.homeTeam)
         console.log("away team: ", this.match.awayTeam)

    }

    fmt() {
        return this.match.division.format.type;
    }

    desc() {
         return this.match.homeTeam.name() + " vs " + this.match.awayTeam.name()
    }

}