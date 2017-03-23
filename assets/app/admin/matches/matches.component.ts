import { Component } from "@angular/core";

@Component({
	selector: 'app-matches',
	template: `
		<div class='row'>
			<div class='col-md-4'>
			<app-match-list></app-match-list>
			</div>
			<div class='col-md-8'>
			<app-match-input></app-match-input>
			</div>

		</div>
	`
})

export class MatchesComponent {

}