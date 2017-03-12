import { Component } from "@angular/core";

@Component({
	selector: 'app-clubs',
	template: `
		<div class='row'>
			<div class='col-md-4'>
			<app-club-list></app-club-list>
			</div>
			<div class='col-md-8'>
			<app-club-input></app-club-input>
			</div>

		</div>
	`
})

export class ClubsComponent {

}