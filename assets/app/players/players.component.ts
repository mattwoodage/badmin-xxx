import { Component } from "@angular/core";

@Component({
	selector: 'app-formats',
	template: `
		<div class='row'>
			<div class='col-md-4'>
			<app-format-list></app-format-list>
			</div>
			<div class='col-md-8'>
			<app-format-input></app-format-input>
			</div>

		</div>
	`
})

export class FormatsComponent {

}