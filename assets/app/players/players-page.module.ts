import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlayersPageComponent } from "./players-page.component";

@NgModule({
	declarations: [
		PlayersPageComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: []
})

export class PlayersPageModule {

}