import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClubsComponent } from "./clubs.component";
import { ClubComponent } from "./club.component";
import { ClubListComponent } from "./club-list.component";
import { ClubInputComponent } from "./club-input.component";

import { ClubService } from "./club.service";

@NgModule({
	declarations: [
		ClubComponent,
        ClubListComponent,
        ClubInputComponent,
        ClubsComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: [ClubService]
})

export class ClubModule {

}