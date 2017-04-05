import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Routes, RouterModule, Router } from "@angular/router";
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
						<option *ngFor="let season of seasons" [attr.selected]="currentSeason._id == season._id ? true : null" >{{season.name}} season</option>
					</select>

	        </div>
	        <div class="header row" *ngIf="!currentLeague">
	        	<h1>Cannot recognise league or season</h1>
	        </div>
			<div class="header row">
				<nav class="col-md-10 col-md-offset-1">
					<ul id="topnav" class="nav">
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'home']">Home</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'calendar']">Calendar</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'fixtures']">Fixtures</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'results']">Results</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'tables']">Tables</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'players']">Players</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'clubs']">Clubs</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'venues']">Venues</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'cup']">Cup</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'juniors']">Juniors</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'history']">History</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'rules']">Rules</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="[currentSeason.name,'admin']">Admin</a></li>

					</ul>
				</nav>
			</div>
			<div class="admin-header row" *ngIf="showAdmin()">
				<nav class="col-md-10 col-md-offset-1">
					<ul class="nav">
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['/messages']">Messenger</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['/admin/leagues']">Leagues</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['/admin/seasons']">Seasons</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['/admin/divisions']">Divisions</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['/admin/formats']">Formats</a></li>

						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['/admin/matches']">Matches</a></li>

						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['/admin/venues']">Venues</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['/admin/clubs']">Clubs</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['/admin/teams']">Teams</a></li>
						<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['/admin/players']">Players</a></li>

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
		private route: ActivatedRoute,
		private router: Router
	) {}

	currentLeague: League;
	currentSeason: Season;
	seasons: Season[];

	ngOnInit() {
		this.currentLeague = this.globalService.currentLeague;
		this.currentSeason = this.globalService.currentSeason;
		this.seasons = this.globalService.seasons;

		console.log(this.currentLeague)
		console.log(this.currentSeason)

    }

    isLoggedIn() {
		return this.authService.isLoggedIn()
	}

	withinAdmin() {
		return this.router.url.indexOf('/admin') != -1
	}

	showAdmin() {
		return this.withinAdmin() && this.isLoggedIn()
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
