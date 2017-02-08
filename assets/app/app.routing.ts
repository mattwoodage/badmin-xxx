import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";

import { AUTH_ROUTES } from "./auth/auth.routes"

const APP_ROUTES: Routes = [
	{ path: 'messages', component: MessagesComponent },
	{ path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
	{ path: '', redirectTo: '/messages', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);


