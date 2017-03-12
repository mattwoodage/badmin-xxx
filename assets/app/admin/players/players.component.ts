import { Component } from "@angular/core";

@Component({
	selector: 'app-players',
	template: `
		<div class='row'>
			<div class='col-md-4'>
			<app-player-list></app-player-list>
			</div>
			<div class='col-md-8'>
			<app-player-input></app-player-input>
			</div>

		</div>
	`
})

export class PlayersComponent {

}