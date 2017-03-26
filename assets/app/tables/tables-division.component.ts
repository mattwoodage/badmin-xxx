import { Component, Input, OnInit } from "@angular/core";
import { Team } from "../admin/teams/team.model";
import { TeamService } from "../admin/teams/team.service";


@Component({
	selector: 'app-tables-division',
	templateUrl: './tables-division.component.html',
	styles: [`
    `]
})

export class TablesDivisionComponent implements OnInit {

    @Input() division: any;

    teams: Team[];

    constructor(private teamService: TeamService) {};

    ngOnInit() {
        this.getTeams();
    }

    getTeams() {
        this.teamService.getTeams(this.division)
            .subscribe(
                (teams: Team[]) => {
                    this.teams = teams;
                    console.log(this.teams)
                }
            );
    }

}