import { Component } from "@angular/core";

@Component({
	selector: 'app-leagues',
	template: `
		<div class='row'>
			<div class='col-md-4'>
			<app-league-list></app-league-list>
			</div>
			<div class='col-md-8'>
			<app-league-input></app-league-input>
			</div>

		</div>
	`
})

export class LeaguesComponent {

}