import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatchesComponent } from "./matches.component";
import { MatchComponent } from "./match.component";
import { MatchListComponent } from "./match-list.component";

import { MatchService } from "./match.service";

@NgModule({
	declarations: [
		MatchComponent,
        MatchListComponent,
        MatchesComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: [MatchService]
})

export class MatchModule {

}