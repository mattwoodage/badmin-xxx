import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AuthService } from "./auth/auth.service"

import { NgForm } from "@angular/forms";

import { AppComponent } from "./app.component";

import { GlobalService } from "./global.service"

import { Season } from "./admin/seasons/season.model";
import { League } from "./admin/leagues/league.model";

@Component({
	selector: 'app-header',
	template: `
	        <div class="header row" *ngIf="currentLeague">
	        	<img class="logo" src="/images/{{ currentLeague.domain }}_logo.png" />
	            <h1 class="hide">{{ currentLeague.name }}</h1>
	            <p>{{ currentSeason.name }}</p>
	            	<select>
						<option *ngFor="let season of seasons" >{{season.name}}</option>
					</select>

	        </div>
			<div class="header row">
				<nav class="col-md-10 col-md-offset-1">
					<ul class="nav nav-pills">
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['2016-17','home']">Home</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['2016-17','calendar']">Calendar</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['2016-17','fixtures']">Fixtures</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['2016-17','results']">Results</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['2016-17','tables']">Tables</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['2016-17','players']">Players</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['2016-17','clubs']">Clubs</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['2016-17','venues']">Venues</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['2016-17','cup']">Cup</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['2016-17','juniors']">Juniors</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['2016-17','history']">History</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['2016-17','rules']">Rules</a></li>
					</ul>
				</nav>
			</div>
			<div class="header row" *ngIf="isLoggedIn()">
				<nav class="col-md-10 col-md-offset-1">
					<ul class="nav nav-pills">
						<li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
						<li routerLinkActive="active"><a [routerLink]="['/admin/leagues']">Leagues</a></li>
						<li routerLinkActive="active"><a [routerLink]="['/admin/seasons']">Seasons</a></li>
						<li routerLinkActive="active"><a [routerLink]="['/admin/divisions']">Divisions</a></li>
						<li routerLinkActive="active"><a [routerLink]="['/admin/formats']">Formats</a></li>

						<li routerLinkActive="active"><a [routerLink]="['/admin/matches']">Matches</a></li>

						<li routerLinkActive="active"><a [routerLink]="['/admin/venues']">Venues</a></li>
						<li routerLinkActive="active"><a [routerLink]="['/admin/clubs']">Clubs</a></li>
						<li routerLinkActive="active"><a [routerLink]="['/admin/teams']">Teams</a></li>
						<li routerLinkActive="active"><a [routerLink]="['/admin/players']">Players</a></li>

					</ul>
				</nav>
			</div>

	`
})

export class HeaderComponent implements OnInit {
	constructor(
		private authService: AuthService,
		private appComponent: AppComponent,
		private globalService: GlobalService,
		private route: ActivatedRoute
	) {}

	currentLeague: League;
	currentSeason: Season;
	seasons: Season[];
	vvv: Season;

	ngOnInit() {
		this.currentLeague = this.globalService.currentLeague;
		this.currentSeason = this.globalService.currentSeason;
		this.seasons = this.globalService.seasons;
    }

    isLoggedIn() {
		return this.authService.isLoggedIn()
	}

    onSubmit(form: NgForm) {
		// if (this.team) {
		// 	// Edit
		// 	this.team.suffix = form.value.suffix;
		// 	this.team.club = form.value.club;
		// 	this.team.division = form.value.division;

		// 	this.teamService.updateTeam(this.team)
		// 		.subscribe(
		// 			result => console.log(result)
		// 		)
		// 	this.team = null;
		// } else {
		// 	// Create
		// 	const team = new Team(form.value.suffix, form.value.division, form.value.club);
		// 	this.teamService.addTeam(team)
		// 		.subscribe(
		// 			data => console.log(data),
		// 			error => console.error(error)
		// 		);
		// }
		form.resetForm();
	}

	onClear(form: NgForm) {
		//this.team = null;
		form.resetForm();
	}


}
