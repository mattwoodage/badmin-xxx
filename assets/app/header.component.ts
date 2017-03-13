import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AuthService } from "./auth/auth.service"

import { Season } from "./admin/seasons/season.model";
import { SeasonService } from "./admin/seasons/season.service";

import { League } from "./admin/leagues/league.model";
import { LeagueService } from "./admin/leagues/league.service";

@Component({
	selector: 'app-header',
	template: `
	        <div class="header row" *ngIf="currentLeague">
	        	<img class="logo" src="/images/{{ currentLeague.domain }}_logo.png" />
	            <h1 class="hide">{{ currentLeague.name }}</h1>
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
			<div class="header row">
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
		private route: ActivatedRoute,
		private seasonService: SeasonService,
		private leagueService: LeagueService
	) {}

	currentLeague: League;
	currentSeason: Season;

	ngOnInit() {
	  this.initPath(document.location.href.toString());
    }


    initPath(path: String) {
    	console.log('init : ' + path)
    	let leagueDomain: String = '';
    	let season: String = '';
    	let pathArr = path.split('/')
    	if (pathArr[2].indexOf('localhost')!=-1) {
    		leagueDomain = pathArr[2].split('.')[0]
		}
		else {
			leagueDomain = pathArr[2].split('.')[1]  //check this
		}
		season = pathArr[3]

		this.leagueService.getLeagueByDomain(leagueDomain)
			.subscribe(
    			(league: League) => {
    				console.log(league)
    				this.currentLeague = league;
    				console.log('currentLeague=', this.currentLeague)
    			}
    		);
    	return ''
    }

	isLoggedIn() {
		return this.authService.isLoggedIn()
	}

	getUserName() {
		return this.authService.getUserName()
	}
}
