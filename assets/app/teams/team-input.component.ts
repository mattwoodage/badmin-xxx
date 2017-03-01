import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TeamService } from "./team.service";
import { Team } from "./team.model";
import { ClubService } from "../clubs/club.service";
import { Club } from "../clubs/club.model";
import { DivisionService } from "../divisions/division.service";
import { Division } from "../divisions/division.model";


@Component({
	selector: 'app-team-input',
	templateUrl: './team-input.component.html'
})

export class TeamInputComponent implements OnInit {

	team: Team;
	divisions: Division[];
	clubs: Club[];

	constructor(private teamService: TeamService, private clubService: ClubService, private divisionService: DivisionService) {}
	onSubmit(form: NgForm) {
		if (this.team) {
			// Edit
			this.team.suffix = form.value.suffix;
			this.team.club = form.value.club;
			this.team.division = form.value.division;

			this.teamService.updateTeam(this.team)
				.subscribe(
					result => console.log(result)
				)
			this.team = null;
		} else {
			// Create
			const team = new Team(form.value.suffix, form.value.division, form.value.club);
			this.teamService.addTeam(team)
				.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
		}
		form.resetForm();
	}

	onClear(form: NgForm) {
		this.team = null;
		form.resetForm();
	}

	ngOnInit() {
		this.teamService.teamIsEdit.subscribe(
			(team: Team) => this.team = team
		);

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
}