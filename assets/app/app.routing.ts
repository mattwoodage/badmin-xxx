import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { LeaguesComponent } from "./leagues/leagues.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
	{ path: 'messages', component: MessagesComponent },
	{ path: 'leagues', component: LeaguesComponent },

	{ path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
	{ path: '', redirectTo: '/messages', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);


