import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { LeaguesComponent } from "./leagues/leagues.component";
import { SeasonsComponent } from "./seasons/seasons.component";
import { DivisionsComponent } from "./divisions/divisions.component";
import { FormatsComponent } from "./formats/formats.component";
import { ClubsComponent } from "./clubs/clubs.component";
import { TeamsComponent } from "./teams/teams.component";
import { VenuesComponent } from "./venues/venues.component";

import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
	{ path: 'messages', component: MessagesComponent },
	{ path: 'leagues', component: LeaguesComponent },
	{ path: 'seasons', component: SeasonsComponent },
	{ path: 'divisions', component: DivisionsComponent },
	{ path: 'formats', component: FormatsComponent },
	{ path: 'clubs', component: ClubsComponent },
	{ path: 'teams', component: TeamsComponent },
	{ path: 'venues', component: VenuesComponent },

	{ path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
	{ path: '', redirectTo: '/messages', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);


