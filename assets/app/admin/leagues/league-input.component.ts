import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LeagueService } from "./league.service";
import { League } from "./league.model";

@Component({
	selector: 'app-league-input',
	templateUrl: './league-input.component.html'
})

export class LeagueInputComponent implements OnInit {

	league: League;

	constructor(private leagueService: LeagueService) {}
	onSubmit(form: NgForm) {
		if (this.league) {
			// Edit
			this.league.name = form.value.name;
			this.league.domain = form.value.domain;
			this.league.status = form.value.status;
			this.league.url = form.value.url;
			this.leagueService.updateLeague(this.league)
				.subscribe(
					result => console.log(result)
				)
			this.league = null;
		} else {
			// Create
			const league = new League(form.value.name, form.value.domain, form.value.url, form.value.status);
			this.leagueService.addLeague(league)
				.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
		}
		form.resetForm();
	}

	onClear(form: NgForm) {
		this.league = null;
		form.resetForm();
	}

	ngOnInit() {
		this.leagueService.leagueIsEdit.subscribe(
			(league: League) => this.league = league
		);
	}
}