import { Component } from "@angular/core";

@Component({
	selector: 'app-venues',
	template: `
		<div class='row'>
			<div class='col-md-4'>
			<app-venue-list></app-venue-list>
			</div>
			<div class='col-md-8'>
			<app-venue-input></app-venue-input>
			</div>

		</div>
	`
})

export class VenuesComponent {

}