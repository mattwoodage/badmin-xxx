import { Component, OnInit } from "@angular/core";
import { Routes, Router, RouterModule } from "@angular/router";

@Component({
	selector: 'app-admin-page',
	template: `
		<div class="admin-page">
			<div class="row">
				ADMIN FRONT PAGE
			</div>
			<div class="row">
				<router-outlet></router-outlet>
			</div>
		</div>
	`
})

export class AdminPageComponent {


	constructor() {}



}