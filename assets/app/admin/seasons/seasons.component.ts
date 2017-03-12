import { Component } from "@angular/core";

@Component({
	selector: 'app-seasons',
	template: `
		<div class='row'>
			<div class='col-md-4'>
			<app-season-list></app-season-list>
			</div>
			<div class='col-md-8'>
			<app-season-input></app-season-input>
			</div>

		</div>
	`
})

export class SeasonsComponent {

}