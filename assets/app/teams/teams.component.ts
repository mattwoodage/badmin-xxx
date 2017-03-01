import { Component } from "@angular/core";

@Component({
	selector: 'app-teams',
	template: `
		<div class='row'>
			<div class='col-md-4'>
			<app-team-list></app-team-list>
			</div>
			<div class='col-md-8'>
			<app-team-input></app-team-input>
			</div>

		</div>
	`
})

export class TeamsComponent {

}