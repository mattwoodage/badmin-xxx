import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LeagueService } from "./league.service";
import { Season } from "./season.model";

@Component({
	selector: 'app-season-input',
	templateUrl: './season-input.component.html'
})

export class SeasonInputComponent implements OnInit {

	season: Season;

	constructor(private seasonService: SeasonService) {}
	onSubmit(form: NgForm) {
		if (this.season) {
			// Edit
			this.league.name = form.value.name;
			this.league.status = form.value.status;
			this.league.url = form.value.url;
			this.leagueService.updateLeague(this.league)
				.subscribe(
					result => console.log(result)
				)
			this.league = null;
		} else {
			// Create
			const league = new League(form.value.name, form.value.url, form.value.status);
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