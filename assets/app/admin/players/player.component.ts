import { Component, Input } from "@angular/core";
import { Player } from "./player.model";
import { PlayerService } from "./player.service";

@Component({
	selector: 'app-player',
	templateUrl: './player.component.html',
	styles: [`
    	.author {
    		display: inline-block;
    		font-style: italic;
    		font-size: 12px;
    		width: 80%;
    	}
    	.config {
    		display: inline-block;
    		text-align:right;
    		font-size:12px;
    		width:19%;
    	}
    `]
})

export class PlayerComponent {
    @Input() player: Player;


    constructor(private playerService: PlayerService) {};

    onEdit() {
       this.playerService.editPlayer(this.player);
    }

    onDelete() {
        this.playerService.deletePlayer(this.player)
        	.subscribe(
        		result => console.log(result)
        	);
    }

}