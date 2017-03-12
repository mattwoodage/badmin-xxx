import { Component, OnInit } from "@angular/core";
import { Player } from "./player.model";
import { PlayerService } from "./player.service";

@Component({
	selector: 'app-player-list',
	template: `
		<div class="">
			<app-player
			 	[player]="player"
			 	*ngFor="let player of players">
			</app-player>
		</div>
	`
})

export class PlayerListComponent implements OnInit {

	players: Player[];

    constructor(private playerService: PlayerService) {};

    ngOnInit() {
    	this.playerService.getPlayers()
    		.subscribe(
    			(players: Player[]) => {
    				this.players = players;
    			}
    		);
    }
}