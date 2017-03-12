import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SeasonsComponent } from "./seasons.component";
import { SeasonComponent } from "./season.component";
import { SeasonListComponent } from "./season-list.component";
import { SeasonInputComponent } from "./season-input.component";

import { SeasonService } from "./season.service";

@NgModule({
	declarations: [
		SeasonComponent,
        SeasonListComponent,
        SeasonInputComponent,
        SeasonsComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: [SeasonService]
})

export class SeasonModule {

}