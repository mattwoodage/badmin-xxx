import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DivisionService } from "./division.service";
import { Division } from "./division.model";
import { LeagueService } from "../leagues/league.service";
import { SeasonService } from "../seasons/season.service";
import { FormatService } from "../formats/format.service";
import { Season } from "../seasons/season.model";
import { Format } from "../formats/format.model";
import { League } from "../leagues/league.model";

@Component({
	selector: 'app-division-input',
	templateUrl: './division-input.component.html'
})

export class DivisionInputComponent implements OnInit {

	division: Division;

	seasons: Season[];
	formats: Format[];
	leagues: League[];

	constructor(private divisionService: DivisionService, private seasonService: SeasonService, private leagueService: LeagueService, private formatService: FormatService) {}
	onSubmit(form: NgForm) {
		if (this.division) {
			// Edit
			this.division.name = form.value.name;
			this.division.format = form.value.format;
			this.division.season = form.value.season;
			this.division.order = form.value.order;
			this.divisionService.updateDivision(this.division)
				.subscribe(
					result => console.log(result)
				)
			this.division = null;
		} else {
			// Create
			const division = new Division(form.value.name, form.value.format, form.value.season, form.value.order);
			this.divisionService.addDivision(division)
				.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
		}
		form.resetForm();
	}

	onClear(form: NgForm) {
		this.division = null;
		form.resetForm();
	}

	ngOnInit() {
		this.divisionService.divisionIsEdit.subscribe(
			(division: Division) => this.division = division
		);

		this.leagueService.getLeagues()
    		.subscribe(
    			(leagues: League[]) => {
    				this.leagues = leagues;
    			}
    		);

		this.seasonService.getSeasons()
    		.subscribe(
    			(seasons: Season[]) => {
    				this.seasons = seasons;
    			}
    		);

    	this.formatService.getFormats()
    		.subscribe(
    			(formats: Format[]) => {
    				this.formats = formats;
    			}
    		);
	}
}