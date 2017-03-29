import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatchService } from "./match.service";
import { Match } from "./match.model";

import { TeamService } from "../teams/team.service";
import { Team } from "../teams/team.model";
import { ClubService } from "../clubs/club.service";
import { Club } from "../clubs/club.model";
import { DivisionService } from "../divisions/division.service";
import { Division } from "../divisions/division.model";
import { VenueService } from "../venues/venue.service";
import { Venue } from "../venues/venue.model";


@Component({
	selector: 'app-match-input',
	templateUrl: './match-input.component.html'
})

export class MatchInputComponent implements OnInit {

	match: Match;

	teams: Team[];
	divisions: Division[];
	clubs: Club[];
	venues: Venue[];

	constructor(private matchService: MatchService, private teamService: TeamService, private venueService: VenueService, private clubService: ClubService, private divisionService: DivisionService) {}
	onSubmit(form: NgForm) {
		if (this.match) {
			// Edit
			this.match.division = form.value.division;
			this.match.venue = form.value.venue;
			this.match.homeTeam = form.value.homeTeam;
			this.match.awayTeam = form.value.awayTeam;
			this.match.numCourts = form.value.numCourts;
			this.match.dateTime = form.value.dateTime;
			this.match.status = form.value.status;

			this.matchService.updateMatch(this.match)
				.subscribe(
					result => console.log(result)
				)
			this.match = null;
		} else {
			// Create
			const match = new Match({
				division: form.value.division,
				venue:    form.value.venue,
				homeTeam: form.value.homeTeam,
				awayTeam: form.value.awayTeam,
				numCourts: form.value.numCourts,
				dateTime: form.value.dateTime,
				status: form.value.status
			});
			this.matchService.addMatch(match)
				.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
		}
		form.resetForm();
	}

	onClear(form: NgForm) {
		this.match = null;
		form.resetForm();
	}

	ngOnInit() {
		this.matchService.matchIsEdit.subscribe(
			(match: Match) => this.match = match
		);

		console.log("MATCH ----" , this.match)

		this.clubService.getClubs()
    		.subscribe(
    			(clubs: Club[]) => {
    				this.clubs = clubs;
    			}
    		);

    	this.teamService.getTeams()
    		.subscribe(
    			(teams: Team[]) => {
    				this.teams = teams;
    			}
    		);

    	this.venueService.getVenues()
    		.subscribe(
    			(venues: Venue[]) => {
    				this.venues = venues;
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