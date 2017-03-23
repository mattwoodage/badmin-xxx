import { Component, OnInit } from "@angular/core";
import { Routes, Router, RouterModule } from "@angular/router";
import { AuthService } from "../auth/auth.service"


@Component({
	selector: 'app-admin-page',
	template: `
		<div class="admin-menu">
			<div class="row" *ngIf="isLoggedIn()">
				<nav class="col-md-10 col-md-offset-1">
					<ul class="nav">
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
		</div>
		<router-outlet></router-outlet>
	`
})

export class AdminPageComponent {


	constructor(private authService: AuthService) {}

	isLoggedIn() {
		return this.authService.isLoggedIn()
	}

}