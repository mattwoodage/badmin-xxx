import { Component, OnInit } from "@angular/core";
import { Team } from "./team.model";
import { TeamService } from "./team.service";

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

    constructor(private teamService: TeamService) {};

    ngOnInit() {
    	this.teamService.getTeams()
    		.subscribe(
    			(teams: Team[]) => {
    				this.teams = teams;
    			}
    		);


    }

}