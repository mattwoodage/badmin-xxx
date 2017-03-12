import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";


import { HomePageComponent } from "./home/home-page.component";
import { CalendarPageComponent } from "./calendar/calendar-page.component";
import { FixturesPageComponent } from "./fixtures/fixtures-page.component";
import { ResultsPageComponent } from "./results/results-page.component";
import { TablesPageComponent } from "./tables/tables-page.component";
import { PlayersPageComponent } from "./players/players-page.component";
import { ClubsPageComponent } from "./clubs/clubs-page.component";
import { VenuesPageComponent } from "./venues/venues-page.component";
import { CupPageComponent } from "./cup/cup-page.component";

import { DivisionsComponent } from "./admin/divisions/divisions.component";
import { FormatsComponent } from "./admin/formats/formats.component";
import { ClubsComponent } from "./admin/clubs/clubs.component";
import { TeamsComponent } from "./admin/teams/teams.component";
import { VenuesComponent } from "./admin/venues/venues.component";
import { MatchesComponent } from "./admin/matches/matches.component";
import { PlayersComponent } from "./admin/players/players.component";
import { LeaguesComponent } from "./admin/leagues/leagues.component";
import { SeasonsComponent } from "./admin/seasons/seasons.component";

import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
	{ path: 'messages', component: MessagesComponent },

	{ path: ':season/home', component: HomePageComponent },
	{ path: ':season/calendar', component: CalendarPageComponent },
	{ path: ':season/fixtures', component: FixturesPageComponent },
	{ path: ':season/results', component: ResultsPageComponent },
	{ path: ':season/tables', component: TablesPageComponent },
	{ path: ':season/players', component: PlayersPageComponent },
	{ path: ':season/clubs', component: ClubsPageComponent },
	{ path: ':season/venues', component: VenuesPageComponent },
	{ path: ':season/cup', component: CupPageComponent },

	{ path: 'admin/divisions', component: DivisionsComponent },
	{ path: 'admin/formats', component: FormatsComponent },
	{ path: 'admin/clubs', component: ClubsComponent },
	{ path: 'admin/teams', component: TeamsComponent },
	{ path: 'admin/venues', component: VenuesComponent },
	{ path: 'admin/matches', component: MatchesComponent },
	{ path: 'admin/players', component: PlayersComponent },
	{ path: 'admin/leagues', component: LeaguesComponent },
	{ path: 'admin/seasons', component: SeasonsComponent },


	{ path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
	{ path: '', redirectTo: '/messages', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);


