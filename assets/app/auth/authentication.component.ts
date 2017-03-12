import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service"
import { Router } from "@angular/router";

@Component({
	selector: 'app-authentication',
	template: `
		<div class="auth row">
			<ul class="nav nav-pills justify-content-end">
				<li class="nav-item"><B>{{ getUserName() }}</B></li>
				<li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['signup']">Signup</a></li>
				<li class="nav-item" routerLinkActive="active" *ngIf="!isLoggedIn()"><a class="nav-link"  [routerLink]="['signin']">Signin</a></li>
				<li class="nav-item" routerLinkActive="active" *ngIf="isLoggedIn()"><a class="nav-link" (click)="onLogout()">Logout</a></li>
			</ul>
		</div>
		<div class="row spacing">AUTH ROUTER.why doesnt the auth stuff appear here?....[[[
			<router-outlet></router-outlet>]]]
		</div>
	`
})

export class AuthenticationComponent implements OnInit {
	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit() {
		this.authService.init()
	}

	isLoggedIn() {
		return this.authService.isLoggedIn()
	}

	getUserName() {
		return this.authService.getUserName()
	}

	onLogout() {
		this.authService.logout();
		this.router.navigate(['season-goes-here/home']);
	}
}