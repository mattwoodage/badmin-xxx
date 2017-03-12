import { Component, OnInit } from "@angular/core";
import { Team } from "./team.model";
import { Club } from "../clubs/club.model";
import { TeamService } from "./team.service";
import { ClubService } from "../clubs/club.service";

@Component({
	selector: 'app-team-list',
	template: `
		<div class="">
			<app-team
			 	[team]="team"
			 	*ngFor="let team of teams">
			</app-team>
		</div>
	`
})

export class TeamListComponent implements OnInit {

	teams: Team[];
	clubs: Club[];

    constructor(private teamService: TeamService, private clubService: ClubService) {};

    ngOnInit() {
    	this.teamService.getTeams()
    		.subscribe(
    			(teams: Team[]) => {
    				this.teams = teams;
    			}
    		);

    	this.clubService.getClubs()
    		.subscribe(
    			(clubs: Club[]) => {
    				this.clubs = clubs;
    			}
    		);
    }

}