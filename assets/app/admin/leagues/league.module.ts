import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LeaguesComponent } from "./leagues.component";
import { LeagueComponent } from "./league.component";
import { LeagueListComponent } from "./league-list.component";
import { LeagueInputComponent } from "./league-input.component";

import { LeagueService } from "./league.service";

@NgModule({
	declarations: [
		LeagueComponent,
        LeagueListComponent,
        LeagueInputComponent,
        LeaguesComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: [LeagueService]
})

export class LeagueModule {

}