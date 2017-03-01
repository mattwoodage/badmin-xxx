import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeamsComponent } from "./teams.component";
import { TeamComponent } from "./team.component";
import { TeamListComponent } from "./team-list.component";
import { TeamInputComponent } from "./team-input.component";

import { TeamService } from "./team.service";

@NgModule({
	declarations: [
		TeamComponent,
        TeamListComponent,
        TeamInputComponent,
        TeamsComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: [TeamService]
})

export class TeamModule {

}