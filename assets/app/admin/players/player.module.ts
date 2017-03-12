import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlayersComponent } from "./players.component";
import { PlayerComponent } from "./player.component";
import { PlayerListComponent } from "./player-list.component";
import { PlayerInputComponent } from "./player-input.component";

import { PlayerService } from "./player.service";

@NgModule({
	declarations: [
		PlayerComponent,
        PlayerListComponent,
        PlayerInputComponent,
        PlayersComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: [PlayerService]
})

export class PlayerModule {

}