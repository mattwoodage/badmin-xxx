import { Component } from "@angular/core";

@Component({
	selector: 'app-divisions',
	template: `
		<div class='row'>
			<div class='col-md-4'>
			<app-division-list></app-division-list>
			</div>
			<div class='col-md-8'>
			<app-division-input></app-division-input>
			</div>

		</div>
	`
})

export class DivisionsComponent {

}