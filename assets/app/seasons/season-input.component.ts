import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { SeasonService } from "./season.service";
import { Season } from "./season.model";
import { League } from "../leagues/league.model";
import { LeagueService } from "../leagues/league.service";

@Component({
	selector: 'app-season-input',
	templateUrl: './season-input.component.html'
})

export class SeasonInputComponent implements OnInit {

	season: Season;

	leagues: League[];

	constructor(private seasonService: SeasonService, private leagueService: LeagueService) {}
	onSubmit(form: NgForm) {
		if (this.season) {
			// Edit
			this.season.name = form.value.name;
			this.season.status = form.value.status;
			this.season.league = form.value.league;

			this.seasonService.updateSeason(this.season)
				.subscribe(
					result => console.log(result)
				)
			this.season = null;
		} else {
			// Create
			const season = new Season(form.value.name, form.value.status, form.value.league);
			this.seasonService.addSeason(season)
				.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
		}
		form.resetForm();
	}


	onClear(form: NgForm) {
		this.season = null;
		form.resetForm();
	}

	ngOnInit() {
		this.seasonService.seasonIsEdit.subscribe(
			(season: Season) => this.season = season
		);

		this.leagueService.getLeagues()
    		.subscribe(
    			(leagues: League[]) => {
    				this.leagues = leagues;
    			}
    		);
	}
}