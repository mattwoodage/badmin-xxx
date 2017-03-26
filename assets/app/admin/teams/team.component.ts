import { Component, Input, OnInit } from "@angular/core";
import { Team } from "./team.model";
import { TeamService } from "./team.service";

import { ClubService } from "../clubs/club.service";
import { Club } from "../clubs/club.model";

import { DivisionService } from "../divisions/division.service";
import { Division } from "../divisions/division.model";


@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styles: [`
    	.author {
    		display: inline-block;
    		font-style: italic;
    		font-size: 12px;
    		width: 80%;
    	}
    	.config {
    		display: inline-block;
    		text-align:right;
    		font-size:12px;
    		width:19%;
    	}
    `]
})

export class TeamComponent implements OnInit {
    @Input() team: Team;

    clubs: Club[];
    divisions: Division[];

    constructor(private teamService: TeamService, private clubService: ClubService, private divisionService: DivisionService) {};


    ngOnInit() {
        this.clubService.getClubs()
            .subscribe(
                (clubs: Club[]) => {
                    this.clubs = clubs;
                }
            );

        this.divisionService.getDivisions()
            .subscribe(
                (divisions: Division[]) => {
                    this.divisions = divisions;
                }
            );
    }


    onEdit() {
       this.teamService.editTeam(this.team);
    }

    onDelete() {
        this.teamService.deleteTeam(this.team)
        	.subscribe(
        		result => console.log(result)
        	);
    }



}