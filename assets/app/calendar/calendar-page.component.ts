import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../global.service"
import { Match } from "../admin/matches/match.model";
import { MatchService } from "../admin/matches/match.service";

@Component({
	selector: 'app-calendar-page',
	template: `
		<app-calendar-date
			[date]="date"
		   	*ngFor="let date of dates">
		</app-calendar-date>
	`
})

export class CalendarPageComponent implements OnInit {

	startDate: Date;
	dates: any[] = [];
	matches: Match[] = [];

	constructor(private globalService: GlobalService) {}

	ngOnInit() {
		this.initMatches()
		this.initGrid()
	}

	initMatches() {

	}

	initGrid() {
		let count = 0
		let dt = this.globalService.startDate;
		while (count < 30) {
			this.dates.push(dt.clone());
			dt.add(1,'day')
			count += 1;
		}
		console.log(this.dates)

	}

}