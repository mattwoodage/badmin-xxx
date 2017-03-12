import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PlayerService } from "./player.service";
import { Player } from "./player.model";

@Component({
	selector: 'app-player-input',
	templateUrl: './player-input.component.html'
})

export class PlayerInputComponent implements OnInit {

	player: Player;

	fullNameString: String;

	constructor(private playerService: PlayerService) {}
	onSubmit(form: NgForm) {
		if (this.player) {
			// Edit
			this.player.firstName = form.value.firstName;
			this.player.lastName = form.value.lastName;
			this.player.swap = form.value.swap;
			this.player.gender = form.value.gender;

			this.playerService.updatePlayer(this.player)
				.subscribe(
					result => console.log(result)
				)
			this.player = null;
		} else {
			// Create
			const player = new Player(form.value.firstName, form.value.lastName, form.value.swap, form.value.gender);
			this.playerService.addPlayer(player)
				.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
		}
		form.resetForm();
	}

	onClear(form: NgForm) {
		this.player = null;
		form.resetForm();
	}

	ngOnInit() {
		this.playerService.playerIsEdit.subscribe(
			(player: Player) => this.player = player
		);
	}

	changeName(f) {
		if (f.value.swap) this.fullNameString = (f.value.lastName || '').toUpperCase() + ' ' + (f.value.firstName || '')
		else this.fullNameString = (f.value.firstName || '') + ' ' + (f.value.lastName || '').toUpperCase()
	}

	changeNameAfterDelay(f) {
		let interval = setInterval(() => {
			this.changeName(f)
		}, 50);
	}


}