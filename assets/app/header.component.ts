import { Component } from "@angular/core";

@Component({
	selector: 'app-header',
	template: `
		<header class="row">
			<nav class="col-md-8 col-md-offset-2">
				<ul class="nav nav-pills">
					<li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
					<li routerLinkActive="active"><a [routerLink]="['/leagues']">Leagues</a></li>
					<li routerLinkActive="active"><a [routerLink]="['/seasons']">Seasons</a></li>
					<li routerLinkActive="active"><a [routerLink]="['/divisions']">Divisions</a></li>
					<li routerLinkActive="active"><a [routerLink]="['/formats']">Formats</a></li>

					<li routerLinkActive="active"><a [routerLink]="['/matches']">Matches</a></li>

					<li routerLinkActive="active"><a [routerLink]="['/venues']">Venues</a></li>
					<li routerLinkActive="active"><a [routerLink]="['/clubs']">Clubs</a></li>
					<li routerLinkActive="active"><a [routerLink]="['/teams']">Teams</a></li>
					<li routerLinkActive="active"><a [routerLink]="['/players']">Players</a></li>
					<li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
				</ul>
			</nav>
		</header>
	`
})

export class HeaderComponent {

}
